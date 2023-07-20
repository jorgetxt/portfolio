import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en/en";
import esTranslation from "./es/es";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },

    es: {
      translation: esTranslation,
    },
  },
});
