import { designTokens } from './src/design/tokens.js';

const { light } = designTokens.colors;
const { spacing } = designTokens;
const { typography } = designTokens;

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: light.bg.primary,
        secondary: light.bg.secondary,
        accent: light.accent,
        'text-primary': light.text.primary,
        'text-secondary': light.text.secondary,
      },
      fontFamily: {
        mono: typography.fontFamily.mono,
      },
      spacing,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
    },
  },
  plugins: [],
};
