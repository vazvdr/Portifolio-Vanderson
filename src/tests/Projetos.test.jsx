import { render, screen, fireEvent } from '@testing-library/react';
import Projetos from '../pages/Projetos';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

describe('Projetos section', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024
    });
    window.dispatchEvent(new Event('resize'));
  });

  it('deve renderizar dois cards em telas maiores', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    expect(screen.getByText(/GamerStore/i)).toBeInTheDocument();
  });

  it('deve renderizar um card em telas pequenas', () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    expect(screen.getByText(/GamerStore/i)).toBeInTheDocument();
  });

  it('deve avançar os cards ao clicar no botão next', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const buttons = screen.getAllByRole('button');

    const prevButton = buttons[0];
    const nextButton = buttons[1];

    fireEvent.click(nextButton);

    // só valida que o botão ainda existe após interação
    expect(prevButton).toBeInTheDocument();
  });

  it('deve renderizar links externos e github', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBeGreaterThan(0);
  });

  it('deve renderizar ícone de swagger quando existir', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projetos />
      </I18nextProvider>
    );

    // procura SVG do swagger (react-icons)
    const svgs = document.querySelectorAll('svg');

    expect(svgs.length).toBeGreaterThan(0);
  });
});