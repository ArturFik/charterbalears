import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

const DEFAULT_LANGUAGE = "en";
const STORAGE_KEY = "app_language";

const I18nContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: (key) => key,
  languages: [],
});

const getNestedTranslation = (lang, key) => {
  const segments = key.split(".");
  let current = translations[lang];

  for (const segment of segments) {
    if (current == null) {
      return null;
    }
    current = current[segment];
  }

  return current ?? null;
};

const resolveLanguage = (lang) => {
  if (lang && translations[lang]) {
    return lang;
  }
  return DEFAULT_LANGUAGE;
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return resolveLanguage(stored);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language]);

  const setLanguage = (nextLanguage) => {
    setLanguageState(resolveLanguage(nextLanguage));
  };

  const value = useMemo(() => {
    const t = (key, fallback) => {
      const translated = getNestedTranslation(language, key);
      if (translated !== null && translated !== undefined) {
        return translated;
      }
      const defaultTranslation = getNestedTranslation(DEFAULT_LANGUAGE, key);
      if (defaultTranslation !== null && defaultTranslation !== undefined) {
        return defaultTranslation;
      }
      return fallback ?? key;
    };

    const languages = Object.entries(translations).map(([code, data]) => ({
      code,
      label: data.meta?.label ?? code.toUpperCase(),
      shortLabel: data.meta?.shortLabel ?? code.toUpperCase(),
    }));

    return {
      language,
      setLanguage,
      t,
      languages,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
