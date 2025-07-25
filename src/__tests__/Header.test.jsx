import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Pages/Header'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ThemeProvider } from '../ThemeProvider'
import pt from '../locales/pt.json'
import en from '../locales/en.json'

// Mock scrollTo para não causar erro
beforeEach(() => {
  window.scrollTo = vi.fn()

  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(), // legacy
    removeListener: vi.fn(), // legacy
    dispatchEvent: vi.fn(),
  }))
})

//Mock do icone do alien
vi.mock("react-icons/si", () => ({
  SiAlienware: () => <div data-testid="alien-icon" />,
}));

// Mock do useTheme
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    toggleTheme: vi.fn(),
  }),
}));

describe('Header component', () => {
  it('deve renderizar o componente', () => {
    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </ThemeProvider>
    );
  });

  it("deve renderizar o icone do alien", () => {
    render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
    );
    expect(screen.getByTestId("alien-icon")).toBeInTheDocument();
  });

  it("deve renderizar os botões que alternam o tema", () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const wrapper = screen.getByTestId("theme-wrapper");
    expect(wrapper).toBeInTheDocument();
  });

  it('deve renderizar os links em português', () => {
    i18n.changeLanguage('pt')
    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </ThemeProvider>
    )

    const { header } = pt;

    const elementos = screen.getAllByText(
      header.menu.about,
      header.menu.education,
      header.menu.experiences,
      header.menu.projects,
      header.menu.technologies,
      header.menu.contact
    );
    elementos.forEach(el => {
      expect(el).toBeInTheDocument();
    });

  });

  it('deve renderizar os links do menu em inglês', () => {
    i18n.changeLanguage('en')
    render(
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </ThemeProvider>
    )

    const { header } = en;

    const elementos = screen.getAllByText(
      header.menu.about,
      header.menu.education,
      header.menu.experiences,
      header.menu.projects,
      header.menu.technologies,
      header.menu.contact
    );
    elementos.forEach(el => {
      expect(el).toBeInTheDocument();
    });

  });
})
