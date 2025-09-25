import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import React from 'react';
import { describe, it, expect } from 'vitest'
import pt from '../locales/pt.json'
import en from '../locales/en.json'

describe('Projetos component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    );
  });

  it('exibe informações em português', () => {
    i18n.changeLanguage('pt')
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    )

    const { contato } = pt

    expect(screen.getByText(contato.title)).toBeInTheDocument();
  })

  it('exibe informações em inglês', () => {
    i18n.changeLanguage('en')
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    )

    const { contato } = en

    expect(screen.getByText(contato.title)).toBeInTheDocument();
  })
});
