import { render, screen } from '@testing-library/react';
import Projetos from '../Pages/Projetos';
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
        <Projetos />
      </I18nextProvider>
    );
  });

  it('exibe informações em português', () => {
    i18n.changeLanguage('pt')
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    )

    const { projects } = pt

    expect(screen.getByText(projects.title)).toBeInTheDocument();
    expect(screen.getByText(projects.barbabrutal.title)).toBeInTheDocument();
    expect(screen.getByText(projects.barbabrutal.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.gamerstore.title)).toBeInTheDocument();
    expect(screen.getByText(projects.gamerstore.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.weather.title)).toBeInTheDocument();
    expect(screen.getByText(projects.weather.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.movies.title)).toBeInTheDocument();
    expect(screen.getByText(projects.movies.subtitle)).toBeInTheDocument();

  })

  it('exibe informações em inglês', () => {
    i18n.changeLanguage('en')
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    )

    const { projects } = en

    expect(screen.getByText(projects.title)).toBeInTheDocument();
    expect(screen.getByText(projects.barbabrutal.title)).toBeInTheDocument();
    expect(screen.getByText(projects.barbabrutal.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.gamerstore.title)).toBeInTheDocument();
    expect(screen.getByText(projects.gamerstore.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.weather.title)).toBeInTheDocument();
    expect(screen.getByText(projects.weather.subtitle)).toBeInTheDocument();
    expect(screen.getByText(projects.movies.title)).toBeInTheDocument();
    expect(screen.getByText(projects.movies.subtitle)).toBeInTheDocument();


  })
});



