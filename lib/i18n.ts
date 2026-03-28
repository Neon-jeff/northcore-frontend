"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
import es from "../locales/es.json";
import de from "../locales/de.json";
import ja from "../locales/ja.json";
import zh from "../locales/zh.json";
import fr from "../locales/fr.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  de: { translation: de },
  ja: { translation: ja },
  zh: { translation: zh },
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
