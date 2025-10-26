/**
 * Shared configuration values across all language versions
 * These don't need to be duplicated in en.ts and de.ts
 */

import type { Language } from '../i18n/utils';
import { getLocaleConfig, getLocalePathPrefix } from './locales';

export const sharedConfig = {
  baseUrl: "https://frushanto.com",
};

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");
const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);
const isAbsoluteUrl = (value: string) => /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(value);

const readEnvValue = (key: string) => {
  const env = import.meta.env as Record<string, string | undefined>;
  return env?.[key];
};

const resolveBaseUrlInternal = () => {
  const configuredBaseUrl = typeof sharedConfig.baseUrl === "string" ? sharedConfig.baseUrl.trim() : "";
  if (configuredBaseUrl) {
    return trimTrailingSlash(configuredBaseUrl);
  }

  const publicBaseUrl = (readEnvValue("PUBLIC_BASE_URL") || "").trim();
  if (publicBaseUrl) {
    return trimTrailingSlash(publicBaseUrl);
  }

  const siteBaseUrl = (readEnvValue("SITE") || "").trim();
  if (siteBaseUrl) {
    return trimTrailingSlash(siteBaseUrl);
  }

  return "";
};

export const getBaseUrl = () => resolveBaseUrlInternal();

export const buildAbsoluteUrl = (path: string) => {
  if (isAbsoluteUrl(path)) {
    return path;
  }

  const normalizedPath = ensureLeadingSlash(path);
  const baseUrl = getBaseUrl();
  return baseUrl ? `${baseUrl}${normalizedPath}` : normalizedPath;
};

export const buildLocalizedPath = (lang: Language, path = "/") => {
  const normalizedPath = ensureLeadingSlash(path);
  const locale = getLocaleConfig(lang);
  const localePrefix = getLocalePathPrefix(locale.code);

  if (normalizedPath === "/") {
    return locale.canonicalPath;
  }

  return `${localePrefix}${normalizedPath}`;
};

export const buildLocalizedUrl = (lang: Language, path = "/") => {
  const localizedPath = buildLocalizedPath(lang, path);
  return buildAbsoluteUrl(localizedPath);
};
