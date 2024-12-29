import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json'; // Traduções em inglês
import pt from './locales/pt.json'; // Traduções em português

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Integra com o React
  .init({
    resources: {
      en: {
        translation: en
      },
      pt: {
        translation: pt
      }
    },
    fallbackLng: 'en', // Idioma padrão
    interpolation: {
      escapeValue: false // React já faz o escaping
    }
  });

export default i18n;
