import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json"; // Traduções em inglês
import pt from "./locales/pt.json"; // Traduções em português

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    // Se existir linguagem no localStorage, usa ela, senão inicia em "pt"
    lng: localStorage.getItem("lang") || "pt",
    fallbackLng: "pt", // Se não encontrar nada, força português
    interpolation: {
      escapeValue: false, // React já faz o escaping
    },
  });

export default i18n;
