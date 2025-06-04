import { render, screen } from '@testing-library/react';
import Experiencias from '../Pages/Experiencias';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import React from 'react';

describe('Experiencias component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Experiencias />
      </I18nextProvider>
    );
  });
});
