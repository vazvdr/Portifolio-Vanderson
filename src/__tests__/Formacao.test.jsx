import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import Formacao from '../Pages/Formacao'
import { describe, it, expect } from 'vitest'

import pt from '../locales/pt.json'
import en from '../locales/en.json'

describe('Formacao component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Formacao />
      </I18nextProvider>
    );
  });

  it('exibe informações em português', () => {
    i18n.changeLanguage('pt')
    render(
      <I18nextProvider i18n={i18n}>
        <Formacao />
      </I18nextProvider>
    )

    const { formacao } = pt

    expect(screen.getByText(formacao.titulo)).toBeInTheDocument()
    expect(screen.getByText(formacao.verMais)).toBeInTheDocument()
  })

  it('exibe informações em inglês', () => {
    i18n.changeLanguage('en')
    render(
      <I18nextProvider i18n={i18n}>
        <Formacao />
      </I18nextProvider>
    )

    const { formacao } = en

    expect(screen.getByText(formacao.titulo)).toBeInTheDocument()
    expect(screen.getByText(formacao.verMais)).toBeInTheDocument()
  })
})
