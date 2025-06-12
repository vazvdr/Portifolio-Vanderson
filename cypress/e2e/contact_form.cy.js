describe('Formulário de Contato - Integração com Backend', () => {
    it('deve enviar o formulário corretamente e exibir a mensagem de sucesso', () => {
      // 1. Acessando o site
      cy.visit('https://www.vandersonazevedo.com.br');
  
      // 2. Descendo até o form de contato
      cy.get('#contato').scrollIntoView();
  
      // 3. Preenche o form
      cy.get('input[name="name"]').type('Teste Cypress');
      cy.get('input[name="email"]').type('teste@cypress.com');
      cy.get('textarea[name="message"]').type('Essa é uma mensagem de teste para verificar integração.');
  
      // 4. Intercepta a requisição POST ao backend
      cy.intercept('POST', 'https://nodemailer-backend-vanderson.vercel.app/api/send-email').as('emailRequest');
  
      // 5. Submete o formulário
      cy.get('button[type="submit"]').click();
  
      // 6. Aguarda a requisição e verifica o status
      cy.wait('@emailRequest').its('response.statusCode').should('eq', 200);
  
      // 7. Verifica se a mensagem de sucesso aparece
      cy.contains('Email enviado com sucesso!').should('be.visible');
    });
  });
  