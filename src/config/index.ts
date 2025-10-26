import { siteConfigEN } from './en';
import { siteConfigDE } from './de';

export type Language = 'en' | 'de';

export const getSiteConfig = (lang: Language = 'en') => {
  return lang === 'de' ? siteConfigDE : siteConfigEN;
};

// Default export for backward compatibility
export const siteConfig = siteConfigEN;
