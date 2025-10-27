/**
 * Shared configuration values across all language versions
 * These don't need to be duplicated in en.ts and de.ts
 */

export const sharedConfig = {
  name: "Ivan Kozlov / @frushanto",
  social: {
    email: "frushanto@gmail.com",
    linkedin: "https://linkedin.com/in/i-kozlov",
    github: "https://github.com/frushanto",
  },
  accentColor: "#1d4ed8",
  baseUrl: "https://frushanto.com",
};

type SupportedLanguage = "en" | "de";

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

export const buildLocalizedPath = (lang: SupportedLanguage, path = "/") => {
  const normalizedPath = ensureLeadingSlash(path);
  const localePrefix = lang === "en" ? "" : `/${lang}`;

  if (normalizedPath === "/") {
    return localePrefix ? `${localePrefix}/` : "/";
  }

  return `${localePrefix}${normalizedPath}`;
};

export const buildLocalizedUrl = (lang: SupportedLanguage, path = "/") => {
  const localizedPath = buildLocalizedPath(lang, path);
  return buildAbsoluteUrl(localizedPath);
};
