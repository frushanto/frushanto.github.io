import { lightTheme } from './colors';
import { sectionPadding, spacing } from './spacing';
import { typography } from './typography';

type CustomProperties = Record<string, string>;

const colors = lightTheme.colors;

export const designTokens = {
  colors,
  spacing,
  sectionPadding,
  typography,
};

const createCustomProperties = (): CustomProperties => {
  const colorVariables: CustomProperties = {
    '--color-bg-primary': colors.bg.primary,
    '--color-bg-secondary': colors.bg.secondary,
    '--color-bg-tertiary': colors.bg.tertiary,
    '--color-text-primary': colors.text.primary,
    '--color-text-secondary': colors.text.secondary,
    '--color-text-tertiary': colors.text.tertiary,
    '--color-accent': colors.accent,
    '--color-accent-hover': colors.accentHover,
    '--color-accent-light': colors.accentLight,
    '--color-border': colors.border,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
  };

  const spacingVariables = Object.entries(spacing).reduce<CustomProperties>((acc, [key, value]) => {
    acc[`--space-${key}`] = value;
    return acc;
  }, {});

  const sectionPaddingVariables: CustomProperties = Object.entries(sectionPadding).reduce<CustomProperties>((acc, [key, value]) => {
    acc[`--section-padding-${key}`] = value;
    return acc;
  }, {});

  const typographyVariables: CustomProperties = {
    '--font-family-mono': typography.fontFamily.mono,
    '--font-size-xs': typography.fontSize.xs,
    '--font-size-sm': typography.fontSize.sm,
    '--font-size-base': typography.fontSize.base,
    '--font-size-lg': typography.fontSize.lg,
    '--font-size-xl': typography.fontSize.xl,
    '--font-size-2xl': typography.fontSize['2xl'],
    '--font-size-3xl': typography.fontSize['3xl'],
    '--font-size-4xl': typography.fontSize['4xl'],
    '--font-size-5xl': typography.fontSize['5xl'],
    '--font-size-6xl': typography.fontSize['6xl'],
    '--font-size-7xl': typography.fontSize['7xl'],
    '--font-weight-light': typography.fontWeight.light.toString(),
    '--font-weight-normal': typography.fontWeight.normal.toString(),
    '--font-weight-medium': typography.fontWeight.medium.toString(),
    '--font-weight-semibold': typography.fontWeight.semibold.toString(),
    '--font-weight-bold': typography.fontWeight.bold.toString(),
    '--line-height-tight': typography.lineHeight.tight.toString(),
    '--line-height-snug': typography.lineHeight.snug.toString(),
    '--line-height-normal': typography.lineHeight.normal.toString(),
    '--line-height-relaxed': typography.lineHeight.relaxed.toString(),
    '--line-height-loose': typography.lineHeight.loose.toString(),
  };

  return {
    ...colorVariables,
    ...spacingVariables,
    ...sectionPaddingVariables,
    ...typographyVariables,
  };
};

export const customProperties = createCustomProperties();

export const tokenVars = {
  colors: {
    bg: {
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
      base: 'var(--color-accent)',
      hover: 'var(--color-accent-hover)',
      light: 'var(--color-accent-light)',
    },
    border: 'var(--color-border)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
  },
  spacing: Object.keys(spacing).reduce<Record<string, string>>((acc, key) => {
    acc[key] = `var(--space-${key})`;
    return acc;
  }, {}),
  sectionPadding: Object.keys(sectionPadding).reduce<Record<string, string>>((acc, key) => {
    acc[key] = `var(--section-padding-${key})`;
    return acc;
  }, {}),
  typography: {
    fontFamily: {
      mono: 'var(--font-family-mono)',
    },
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
      '6xl': 'var(--font-size-6xl)',
      '7xl': 'var(--font-size-7xl)',
    },
    fontWeight: {
      light: 'var(--font-weight-light)',
      normal: 'var(--font-weight-normal)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)',
      bold: 'var(--font-weight-bold)',
    },
    lineHeight: {
      tight: 'var(--line-height-tight)',
      snug: 'var(--line-height-snug)',
      normal: 'var(--line-height-normal)',
      relaxed: 'var(--line-height-relaxed)',
      loose: 'var(--line-height-loose)',
    },
  },
};

export const tokensToCss = (selector = ':root') => {
  const declarations = Object.entries(customProperties)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');

  return `${selector} {\n${declarations}\n}`;
};

export type DesignTokens = typeof designTokens;
