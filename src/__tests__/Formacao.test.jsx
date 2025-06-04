import { render } from '@testing-library/react';

import Formacao from '../Pages/Formacao';
import { I18nextProvider } from 'react-i18next';
import  i18n  from 'i18next';
import React from 'react';

describe('Projetos component', () => {
  it('deve renderizar o componente', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Formacao />
      </I18nextProvider>
    );
  });
});
