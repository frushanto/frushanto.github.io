import en from './en.json';
import de from './de.json';

const translations = {
  en,
  de,
} as const;

export type Language = keyof typeof translations;
export const DEFAULT_LANGUAGE: Language = 'en';

const isLanguage = (value: string | undefined): value is Language => {
  return value !== undefined && value in translations;
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

export const getLanguage = (lang: string | undefined): Language => {
  return isLanguage(lang) ? lang : DEFAULT_LANGUAGE;
};

export const t = (lang: Language, key: string): string => {
  return getTranslation(lang, key);
};
