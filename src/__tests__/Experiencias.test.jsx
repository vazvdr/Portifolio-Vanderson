import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import Experiencias from '../Pages/Experiencias'
import { describe, it, expect } from 'vitest'

import pt from '../locales/pt.json'
import en from '../locales/en.json'

describe('Experiencias component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Experiencias />
      </I18nextProvider>
    );
  });

  it('exibe informações em português', () => {
    i18n.changeLanguage('pt')
    render(
      <I18nextProvider i18n={i18n}>
        <Experiencias />
      </I18nextProvider>
    )

    const { experiencias } = pt;

    expect(screen.getByText(experiencias.card1.titulo)).toBeInTheDocument();
    expect(screen.getByText(experiencias.card2.titulo)).toBeInTheDocument();
  })

  it('exibe informações em inglês', () => {
    i18n.changeLanguage('eng')
    render(
      <I18nextProvider i18n={i18n}>
        <Experiencias />
      </I18nextProvider>
    )

    const { experiencias } = en;

    expect(screen.getByText(experiencias.card1.titulo)).toBeInTheDocument();
    expect(screen.getByText(experiencias.card2.titulo)).toBeInTheDocument();
  })
});
