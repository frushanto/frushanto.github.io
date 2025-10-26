// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const normalizeBaseUrl = (value = "") => value.trim().replace(/\/+$/, "");
const hasEnvBaseUrl = Object.prototype.hasOwnProperty.call(process.env, "PUBLIC_BASE_URL");
const envBaseUrl = hasEnvBaseUrl ? normalizeBaseUrl(process.env.PUBLIC_BASE_URL) : "";
const defaultBaseUrl = normalizeBaseUrl("https://frushanto.com");
const baseUrl = hasEnvBaseUrl ? envBaseUrl : defaultBaseUrl;

// https://astro.build/config
export default defineConfig({
  site: baseUrl || undefined,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_BASE_URL": JSON.stringify(baseUrl),
    },
  },
});
