import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LANGUAGE, type Language } from '../i18n/utils';

const siteContentCache = new Map<Language, CollectionEntry<'site'>['data']>();

export type SiteContent = CollectionEntry<'site'>['data'];

export const getSiteContent = async (lang: Language): Promise<SiteContent> => {
  const cached = siteContentCache.get(lang);
  if (cached) {
    return cached;
  }

  const [entry] = await getCollection('site', ({ id }) => id === lang);

  if (entry) {
    siteContentCache.set(lang, entry.data);
    return entry.data;
  }

  if (lang !== DEFAULT_LANGUAGE) {
    return getSiteContent(DEFAULT_LANGUAGE);
  }

  throw new Error(`Site content for language "${lang}" is not available.`);
};
