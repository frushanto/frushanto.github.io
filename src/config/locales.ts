import { DEFAULT_LANGUAGE, type Language } from '../i18n/utils';

export interface LocaleConfig {
  code: Language;
  name: string;
  slug: string;
  hrefLang: string;
  ogLocale: string;
  canonicalPath: string;
  isDefault: boolean;
}

type LocaleDefinition = {
  code: Language;
  name: string;
  slug?: string;
  hrefLang?: string;
  ogLocale?: string;
  canonicalPath?: string;
  isDefault?: boolean;
};

const trimSlashes = (value: string) => value.trim().replace(/^\/+|\/+$/g, '');

const toCanonicalPath = (value: string) => {
  const trimmed = trimSlashes(value);
  return trimmed ? `/${trimmed}/` : '/';
};

const normalizeSlug = (definition: LocaleDefinition) => {
  if (typeof definition.slug === 'string') {
    return trimSlashes(definition.slug);
  }

  if (definition.isDefault || definition.code === DEFAULT_LANGUAGE) {
    return '';
  }

  return trimSlashes(definition.code);
};

const localeDefinitions: LocaleDefinition[] = [
  {
    code: 'en',
    name: 'English',
    slug: '',
    hrefLang: 'en',
    ogLocale: 'en_US',
    isDefault: true,
  },
  {
    code: 'de',
    name: 'Deutsch',
    slug: 'de',
    hrefLang: 'de',
    ogLocale: 'de_DE',
  },
];

const resolvedLocales: LocaleConfig[] = localeDefinitions.map((definition) => {
  const slug = normalizeSlug(definition);
  const canonicalPathSource = definition.canonicalPath ?? slug;

  return {
    code: definition.code,
    name: definition.name,
    slug,
    hrefLang: definition.hrefLang ?? definition.code,
    ogLocale: definition.ogLocale ?? definition.code,
    canonicalPath: toCanonicalPath(canonicalPathSource),
    isDefault: definition.isDefault ?? definition.code === DEFAULT_LANGUAGE,
  } satisfies LocaleConfig;
});

if (resolvedLocales.length === 0) {
  throw new Error('At least one locale must be configured.');
}

const localeMap = new Map(resolvedLocales.map((locale) => [locale.code, locale]));

const defaultLocale =
  resolvedLocales.find((locale) => locale.isDefault) ?? resolvedLocales[0];

export const locales = resolvedLocales as readonly LocaleConfig[];

export const localeCodes = locales.map((locale) => locale.code) as readonly Language[];

export const getDefaultLocale = () => defaultLocale;

export const getLocaleConfig = (code: Language): LocaleConfig => {
  return localeMap.get(code) ?? defaultLocale;
};

const ensureLeadingSlash = (value: string) =>
  value.startsWith('/') ? value : `/${value}`;

const normalizePathname = (pathname: string) => {
  const withLeadingSlash = ensureLeadingSlash(pathname);
  return withLeadingSlash.replace(/\/+$/g, (match) => (match.length > 1 ? '/' : match));
};

export const getLocaleFromPathname = (pathname: string): LocaleConfig => {
  const normalized = normalizePathname(pathname);

  for (const locale of locales) {
    if (!locale.slug) {
      continue;
    }

    const localeRoot = locale.canonicalPath.replace(/\/$/, '');
    if (normalized === localeRoot || normalized === locale.canonicalPath) {
      return locale;
    }

    if (normalized.startsWith(`${localeRoot}/`)) {
      return locale;
    }
  }

  return defaultLocale;
};

export const getLocalePathPrefix = (code: Language) => {
  const locale = getLocaleConfig(code);
  return locale.canonicalPath === '/'
    ? ''
    : locale.canonicalPath.replace(/\/$/, '');
};
