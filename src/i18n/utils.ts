import en from './en.json';
import de from './de.json';

const translations = {
  en,
  de,
};

export type Language = 'en' | 'de';

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

export const getLanguage = (lang: string | undefined): Language => {
  return lang === 'de' ? 'de' : 'en';
};

export const t = (lang: Language, key: string): string => {
  return getTranslation(lang, key);
};
