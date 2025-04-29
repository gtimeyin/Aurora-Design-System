import { semanticTokens } from './tokens/semantic';
import { primitiveTokens } from './tokens/primitive';

export type ButtonVariant = 
  | 'primary'
  | 'primary-destructive'
  | 'secondary'
  | 'secondary-destructive'
  | 'white'
  | 'white-destructive'
  | 'text'
  | 'text-destructive';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export type ThemeMode = 'light' | 'dark';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export type CheckboxVariant = 'default' | 'error';
export type CheckboxSize = 'sm' | 'md' | 'lg';

type ColorValue = string;

type SemanticColors = typeof semanticTokens.colors;
type ColorKeys = keyof SemanticColors;

export interface Theme {
  mode: ThemeMode;
  button: {
    base: Record<string, unknown>;
    variants: Record<ButtonVariant, Record<string, unknown>>;
    sizes: Record<ButtonSize, Record<string, unknown>>;
  };
  badge: {
    base: Record<string, unknown>;
    variants: Record<BadgeVariant, Record<string, unknown>>;
    sizes: Record<BadgeSize, Record<string, unknown>>;
  };
  checkbox: {
    base: Record<string, unknown>;
    input: Record<string, unknown>;
    label: Record<string, unknown>;
    variants: Record<CheckboxVariant, Record<string, unknown>>;
    sizes: Record<CheckboxSize, Record<string, unknown>>;
  };
  colors: {
    [K in ColorKeys]: ColorValue;
  };
  spacing: typeof semanticTokens.spacing;
  typography: typeof semanticTokens.typography;
  shadows: typeof semanticTokens.shadows;
  borderRadius: typeof semanticTokens.borderRadius;
}

const lightTheme: Theme = {
  mode: 'light',
  button: {
    base: {},
    variants: {
      primary: {},
      'primary-destructive': {},
      secondary: {},
      'secondary-destructive': {},
      white: {},
      'white-destructive': {},
      text: {},
      'text-destructive': {},
    },
    sizes: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
  },
  badge: {
    base: {},
    variants: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    sizes: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  checkbox: {
    base: {},
    input: {},
    label: {},
    variants: {
      default: {},
      error: {},
    },
    sizes: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  colors: Object.fromEntries(
    Object.entries(semanticTokens.colors).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : value.light
    ])
  ) as { [K in ColorKeys]: ColorValue },
  spacing: semanticTokens.spacing,
  typography: semanticTokens.typography,
  shadows: semanticTokens.shadows,
  borderRadius: semanticTokens.borderRadius,
};

const darkTheme: Theme = {
  mode: 'dark',
  button: {
    base: {},
    variants: {
      primary: {},
      'primary-destructive': {},
      secondary: {},
      'secondary-destructive': {},
      white: {},
      'white-destructive': {},
      text: {},
      'text-destructive': {},
    },
    sizes: {
      xs: {},
      sm: {},
      base: {},
      lg: {},
      xl: {},
    },
  },
  badge: {
    base: {},
    variants: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      error: {},
      info: {},
    },
    sizes: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  checkbox: {
    base: {},
    input: {},
    label: {},
    variants: {
      default: {},
      error: {},
    },
    sizes: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  colors: Object.fromEntries(
    Object.entries(semanticTokens.colors).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : value.dark
    ])
  ) as { [K in ColorKeys]: ColorValue },
  spacing: semanticTokens.spacing,
  typography: semanticTokens.typography,
  shadows: semanticTokens.shadows,
  borderRadius: semanticTokens.borderRadius,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export const getTheme = (mode: ThemeMode): Theme => themes[mode];

export const getColorValue = (color: string | { light: string; dark: string; default: string }, mode: ThemeMode) => {
  if (typeof color === 'string') return color;
  return color[mode];
}; 