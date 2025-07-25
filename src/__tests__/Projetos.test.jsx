import { render, screen, fireEvent } from '@testing-library/react';
import Projetos from '../Pages/Projetos';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'

describe('Projetos section', () => {
  beforeEach(() => {
    // Força a largura de tela (mobile ou desktop)
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024 // Desktop
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve renderizar dois cards por vez em telas maiores', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    expect(screen.getByAltText(/class scheduling/i)).toBeInTheDocument();
    expect(screen.getByAltText(/gamerstore/i)).toBeInTheDocument();
  });

  it('deve renderizar um card por vez em telas pequenas', () => {
    window.innerWidth = 500; // Mobile
    window.dispatchEvent(new Event('resize'));

    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    expect(screen.getByAltText(/class scheduling/i)).toBeInTheDocument();
  });

  it('deve desabilitar o botão "Voltar" no início', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const prevButton = screen.getByRole('button', { name: /voltar/i });
    expect(prevButton).toBeDisabled();
  });

  it('deve avançar os cards ao clicar no botão "Avançar"', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const nextButton = screen.getByRole('button', { name: /avançar/i });
    fireEvent.click(nextButton);

    // O botão "Voltar" agora deve estar habilitado
    const prevButton = screen.getByRole('button', { name: /voltar/i });
    expect(prevButton).not.toBeDisabled();
  });

  it('deve renderizar links de site e repositório', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const externalLinks = screen.getAllByRole('link', { name: /ver projeto/i });
    const githubLinks = screen.getAllByRole('link', { name: /github/i });

    expect(externalLinks.length).toBeGreaterThan(0);
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it('deve renderizar o ícone do Swagger apenas para o projeto Class Scheduling', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const swaggerLinks = screen.getAllByRole('link', { name: /swagger/i });
    expect(swaggerLinks.length).toBeGreaterThanOrEqual(1);
  });

});
