import { semanticTokens } from '../tokens/semantic';
import { ThemeMode } from '../theme';

export const getColorValue = (color: string | { light: string; dark: string; default: string }, mode: ThemeMode) => {
  if (typeof color === 'string') return color;
  if (!color || typeof color !== 'object') return color;
  return color[mode] || color.default || color.light;
};

export const getSemanticColor = (key: keyof typeof semanticTokens.colors, mode: ThemeMode) => {
  return getColorValue(semanticTokens.colors[key], mode);
};

export const getSemanticColorWithOpacity = (key: keyof typeof semanticTokens.colors, mode: ThemeMode, opacity: number) => {
  const color = getSemanticColor(key, mode);
  // Convert hex to rgba
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getThemeColors = (mode: ThemeMode) => {
  return Object.fromEntries(
    Object.entries(semanticTokens.colors).map(([key, value]) => [
      key,
      getColorValue(value, mode)
    ])
  );
}; 