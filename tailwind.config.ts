import type { Config } from 'tailwindcss';
import { designTokens } from './src/design';

const { spacing, sectionPadding, typography } = designTokens;

const spacingScale = Object.entries(spacing).reduce<Record<string, string>>((acc, [key]) => {
  acc[key] = `var(--space-${key})`;
  return acc;
}, {});

const sectionSpacingScale = Object.entries(sectionPadding).reduce<Record<string, string>>((acc, [key]) => {
  acc[`section-${key}`] = `var(--section-padding-${key})`;
  return acc;
}, {});

const fontSizeScale = Object.entries(typography.fontSize).reduce<Record<string, string>>((acc, [key]) => {
  acc[key] = `var(--font-size-${key})`;
  return acc;
}, {});

const fontWeightScale = Object.entries(typography.fontWeight).reduce<Record<string, string>>((acc, [key]) => {
  acc[key] = `var(--font-weight-${key})`;
  return acc;
}, {});

const lineHeightScale = Object.entries(typography.lineHeight).reduce<Record<string, string>>((acc, [key]) => {
  acc[key] = `var(--line-height-${key})`;
  return acc;
}, {});

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          light: 'var(--color-accent-light)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        mono: ['var(--font-family-mono)'],
      },
      spacing: {
        ...spacingScale,
        ...sectionSpacingScale,
      },
      fontSize: fontSizeScale,
      fontWeight: fontWeightScale,
      lineHeight: lineHeightScale,
    },
  },
  plugins: [],
};

export default config;
