import { render, screen } from '@testing-library/react';
import Projetos from '../components/Projetos';
import { I18nextProvider } from 'react-i18next';
import  i18n  from 'i18next';
import React from 'react';

describe('Projetos component', () => {
  it('deve renderizar o título da seção', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );
  });

  it('deve renderizar os projetos com imagem e título', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

  });
});
