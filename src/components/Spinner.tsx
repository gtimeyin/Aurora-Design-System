import React from 'react';
import { getColorValue } from '../design-system/utils/colors';
import { semanticTokens } from '../design-system/tokens/semantic';
import { useTheme } from '../design-system/ThemeContext';

export interface SpinnerProps {
  /** Size of the spinner in rem units. Default is 1rem */
  size?: string;
  /** Border width of the spinner in pixels. Default is 2px */
  borderWidth?: number;
  /** Primary color of the spinner. Uses semantic token if not provided */
  color?: string;
  /** Optional className for additional styling */
  className?: string;
  /** Override the current theme mode */
  themeMode?: 'light' | 'dark';
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = '1rem',
  borderWidth = 2,
  color,
  className = '',
  themeMode,
}) => {
  const { mode: contextMode } = useTheme();
  const mode = themeMode || contextMode;

  // Use provided color or get from semantic tokens
  const spinnerColor = color || getColorValue(semanticTokens.colors['interactive-primary'], mode);
  const spinnerTrackColor = getColorValue(semanticTokens.colors['background-tertiary'], mode);

  return (
    <div
      className={`inline-block animate-spin ${className}`}
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid ${spinnerTrackColor}`,
        borderTopColor: spinnerColor,
        borderRadius: '50%',
      }}
      role="status"
      aria-label="Loading"
    />
  );
}; 