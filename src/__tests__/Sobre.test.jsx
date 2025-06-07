import { render,screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import Sobre from '../Pages/Sobre';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'
import React from 'react';

import pt from '../locales/pt.json'
import en from '../locales/en.json'

describe('Sobre component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Sobre />
      </I18nextProvider>
    );
  });

  it('exibe o texto e a descrição a esquerda em inglês', () => {
    i18n.changeLanguage('en')
    render(
      <I18nextProvider i18n={i18n}>
        <Sobre />
      </I18nextProvider>
    )

    const { sobre } = en;

    expect(screen.getAllByText(sobre.heading.greeting)).toHaveLength(2);
    expect(screen.getAllByText(sobre.heading.name)).toHaveLength(2);
  })

  it('exibe o texto e a descrição a esquerda em português', () => {
    i18n.changeLanguage('pt')
    render(
      <I18nextProvider i18n={i18n}>
        <Sobre />
      </I18nextProvider>
    )

    const { sobre } = pt;

    expect(screen.getAllByText(sobre.heading.greeting)).toHaveLength(2);
    expect(screen.getAllByText(sobre.heading.name)).toHaveLength(2);
  })
});
