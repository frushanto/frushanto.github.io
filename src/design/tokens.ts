import { lightTheme } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

export const designTokens = {
  light: lightTheme,
  typography,
  spacing,
};

export const useTokens = () => {
  return designTokens.light;
};
