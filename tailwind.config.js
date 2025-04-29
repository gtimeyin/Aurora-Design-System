const { primitiveTokens } = require('./src/design-system/tokens/primitive');
const { semanticTokens } = require('./src/design-system/tokens/semantic');
const { componentTokens } = require('./src/design-system/tokens/component');
const { getColorValue } = require('./src/design-system/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...primitiveTokens.colors,
        // Light mode colors
        ...Object.fromEntries(
          Object.entries(semanticTokens.colors).map(([key, value]) => [
            key,
            typeof value === 'string' ? value : value.light
          ])
        ),
        border: 'hsl(var(--border))',
      },
      spacing: {
        ...primitiveTokens.spacing,
        ...semanticTokens.spacing,
      },
      fontSize: {
        ...primitiveTokens.typography.fontSize,
      },
      fontWeight: primitiveTokens.typography.fontWeight,
      fontFamily: primitiveTokens.typography.fontFamily,
      borderRadius: {
        ...primitiveTokens.borderRadius,
        ...semanticTokens.borderRadius,
      },
      boxShadow: {
        ...primitiveTokens.shadows,
        ...semanticTokens.shadows,
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        // Default text colors
        'body': {
          color: getColorValue(semanticTokens.colors['text-primary'], 'light'),
          backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'light'),
        },
        // Button styles
        '.btn': {
          ...componentTokens.light.button.base,
          '&.btn-primary': componentTokens.light.button.variants.primary,
          '&.btn-primary-destructive': componentTokens.light.button.variants['primary-destructive'],
          '&.btn-secondary': componentTokens.light.button.variants.secondary,
          '&.btn-secondary-destructive': componentTokens.light.button.variants['secondary-destructive'],
          '&.btn-white': componentTokens.light.button.variants.white,
          '&.btn-white-destructive': componentTokens.light.button.variants['white-destructive'],
          '&.btn-text': componentTokens.light.button.variants.text,
          '&.btn-text-destructive': componentTokens.light.button.variants['text-destructive'],
          '&.btn-xs': componentTokens.light.button.sizes.xs,
          '&.btn-sm': componentTokens.light.button.sizes.sm,
          '&.btn-base': componentTokens.light.button.sizes.base,
          '&.btn-lg': componentTokens.light.button.sizes.lg,
          '&.btn-xl': componentTokens.light.button.sizes.xl,
          '&.disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
          },
          '&.loading': {
            cursor: 'wait',
            position: 'relative',
            '& > *': {
              opacity: 0,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '1rem',
              height: '1rem',
              border: `2px solid ${getColorValue(semanticTokens.colors['text-inverse-primary'], 'light')}`,
              borderTopColor: 'transparent',
              borderRadius: semanticTokens.borderRadius['radius-full'],
              animation: 'spin 1s linear infinite',
              display: 'block',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },
          '&.active': {
            transform: 'scale(0.95)',
          },
        },
        // Input styles
        '.input': {
          ...componentTokens.light.input.base,
          '&.input-error': componentTokens.light.input.variants.error,
          '&.input-sm': componentTokens.light.input.sizes.sm,
          '&.input-md': componentTokens.light.input.sizes.md,
          '&.input-lg': componentTokens.light.input.sizes.lg,
        },
        // Card styles
        '.card': {
          ...componentTokens.light.card.base,
          '&.card-elevated': componentTokens.light.card.variants.elevated,
          '&.card-interactive': componentTokens.light.card.variants.interactive,
        },
        // Typography styles
        // Paragraph styles
        '.text-paragraph-xs': semanticTokens.typography['paragraph-xs'],
        '.text-paragraph-xs-medium': semanticTokens.typography['paragraph-xs-medium'],
        '.text-paragraph-xs-semibold': semanticTokens.typography['paragraph-xs-semibold'],
        '.text-paragraph-xs-bold': semanticTokens.typography['paragraph-xs-bold'],
        '.text-paragraph-sm': semanticTokens.typography['paragraph-sm'],
        '.text-paragraph-sm-medium': semanticTokens.typography['paragraph-sm-medium'],
        '.text-paragraph-sm-semibold': semanticTokens.typography['paragraph-sm-semibold'],
        '.text-paragraph-sm-bold': semanticTokens.typography['paragraph-sm-bold'],
        '.text-paragraph-base': semanticTokens.typography['paragraph-base'],
        '.text-paragraph-base-medium': semanticTokens.typography['paragraph-base-medium'],
        '.text-paragraph-base-semibold': semanticTokens.typography['paragraph-base-semibold'],
        '.text-paragraph-base-bold': semanticTokens.typography['paragraph-base-bold'],
        '.text-paragraph-lg': semanticTokens.typography['paragraph-lg'],
        '.text-paragraph-lg-medium': semanticTokens.typography['paragraph-lg-medium'],
        '.text-paragraph-lg-semibold': semanticTokens.typography['paragraph-lg-semibold'],
        '.text-paragraph-lg-bold': semanticTokens.typography['paragraph-lg-bold'],
        // Heading styles
        '.text-heading-sm': semanticTokens.typography['heading-sm'],
        '.text-heading-sm-medium': semanticTokens.typography['heading-sm-medium'],
        '.text-heading-sm-semibold': semanticTokens.typography['heading-sm-semibold'],
        '.text-heading-md': semanticTokens.typography['heading-md'],
        '.text-heading-md-medium': semanticTokens.typography['heading-md-medium'],
        '.text-heading-md-semibold': semanticTokens.typography['heading-md-semibold'],
        '.text-heading-lg': semanticTokens.typography['heading-lg'],
        '.text-heading-lg-medium': semanticTokens.typography['heading-lg-medium'],
        '.text-heading-lg-semibold': semanticTokens.typography['heading-lg-semibold'],
        '.text-heading-xl': semanticTokens.typography['heading-xl'],
        '.text-heading-xl-medium': semanticTokens.typography['heading-xl-medium'],
        '.text-heading-xl-semibold': semanticTokens.typography['heading-xl-semibold'],
        // Display styles
        '.text-display-xs': semanticTokens.typography['display-xs'],
        '.text-display-sm': semanticTokens.typography['display-sm'],
        '.text-display-md': semanticTokens.typography['display-md'],
        '.text-display-lg': semanticTokens.typography['display-lg'],
        // Label styles
        '.text-label-xs': semanticTokens.typography['label-xs'],
        '.text-label-sm': semanticTokens.typography['label-sm'],
        '.text-label-base': semanticTokens.typography['label-base'],
        '.text-label-lg': semanticTokens.typography['label-lg'],
        // Caption styles
        '.text-caption': semanticTokens.typography['caption'],
        '.text-caption-bold': semanticTokens.typography['caption-bold'],
        // Badge styles
        '.badge': {
          ...componentTokens.light.badge.base,
          '&.badge-primary': componentTokens.light.badge.variants.primary,
          '&.badge-secondary': componentTokens.light.badge.variants.secondary,
          '&.badge-success': componentTokens.light.badge.variants.success,
          '&.badge-warning': componentTokens.light.badge.variants.warning,
          '&.badge-error': componentTokens.light.badge.variants.error,
          '&.badge-info': componentTokens.light.badge.variants.info,
          '&.badge-sm': componentTokens.light.badge.sizes.sm,
          '&.badge-md': componentTokens.light.badge.sizes.md,
          '&.badge-lg': componentTokens.light.badge.sizes.lg,
        },
        // Checkbox styles
        '.checkbox': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
          },
          '.checkbox-input-wrapper': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.checkbox-input': {
            appearance: 'none',
            border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], 'light')}`,
            borderRadius: semanticTokens.borderRadius['radius-xxs'],
            backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'light'),
            transition: 'all 0.2s ease-in-out',
            '&:checked': {
              backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
            },
          },
        },
      });

      // Add dark mode variants
      addComponents({
        '.dark': {
          // Default text colors for dark mode
          'body': {
            color: getColorValue(semanticTokens.colors['text-primary'], 'dark'),
            backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'dark'),
          },
          // Button styles for dark mode
          '.btn': {
            ...componentTokens.dark.button.base,
            '&.btn-primary': componentTokens.dark.button.variants.primary,
            '&.btn-primary-destructive': componentTokens.dark.button.variants['primary-destructive'],
            '&.btn-secondary': componentTokens.dark.button.variants.secondary,
            '&.btn-secondary-destructive': componentTokens.dark.button.variants['secondary-destructive'],
            '&.btn-white': componentTokens.dark.button.variants.white,
            '&.btn-white-destructive': componentTokens.dark.button.variants['white-destructive'],
            '&.btn-text': componentTokens.dark.button.variants.text,
            '&.btn-text-destructive': componentTokens.dark.button.variants['text-destructive'],
            '&.btn-xs': componentTokens.dark.button.sizes.xs,
            '&.btn-sm': componentTokens.dark.button.sizes.sm,
            '&.btn-base': componentTokens.dark.button.sizes.base,
            '&.btn-lg': componentTokens.dark.button.sizes.lg,
            '&.btn-xl': componentTokens.dark.button.sizes.xl,
            '&.disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
            '&.loading': {
              cursor: 'wait',
              position: 'relative',
              '& > *': {
                opacity: 0,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '1rem',
                height: '1rem',
                border: `2px solid ${getColorValue(semanticTokens.colors['text-inverse-primary'], 'dark')}`,
                borderTopColor: 'transparent',
                borderRadius: semanticTokens.borderRadius['radius-full'],
                animation: 'spin 1s linear infinite',
                display: 'block',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              },
            },
            '&.active': {
              transform: 'scale(0.95)',
            },
          },
          // Background colors
          '.bg-background-primary': { backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'dark') },
          '.bg-background-secondary': { backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], 'dark') },
          '.bg-background-tertiary': { backgroundColor: getColorValue(semanticTokens.colors['background-tertiary'], 'dark') },
          '.bg-background-inverse': { backgroundColor: getColorValue(semanticTokens.colors['background-inverse'], 'dark') },
          
          // Text colors
          '.text-text-primary': { color: getColorValue(semanticTokens.colors['text-primary'], 'dark') },
          '.text-text-secondary': { color: getColorValue(semanticTokens.colors['text-secondary'], 'dark') },
          '.text-text-tertiary': { color: getColorValue(semanticTokens.colors['text-tertiary'], 'dark') },
          '.text-text-inverse': { color: getColorValue(semanticTokens.colors['text-inverse'], 'dark') },
          
          // Border colors
          '.border-border-primary': { borderColor: getColorValue(semanticTokens.colors['border-primary'], 'dark') },
          '.border-border-secondary': { borderColor: getColorValue(semanticTokens.colors['border-secondary'], 'dark') },
          '.border-border-focus': { borderColor: getColorValue(semanticTokens.colors['border-focus'], 'dark') },
          
          // Interactive colors
          '.bg-interactive-primary': { backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark') },
          '.bg-interactive-secondary': { backgroundColor: getColorValue(semanticTokens.colors['interactive-secondary'], 'dark') },
          '.bg-interactive-tertiary': { backgroundColor: getColorValue(semanticTokens.colors['interactive-tertiary'], 'dark') },
          '.bg-interactive-hover': { backgroundColor: getColorValue(semanticTokens.colors['interactive-hover'], 'dark') },
          '.bg-interactive-active': { backgroundColor: getColorValue(semanticTokens.colors['interactive-active'], 'dark') },
          '.bg-interactive-disabled': { backgroundColor: getColorValue(semanticTokens.colors['interactive-disabled'], 'dark') },
          
          // Status colors
          '.text-status-error': { color: getColorValue(semanticTokens.colors['status-error'], 'dark') },
          '.text-status-success': { color: getColorValue(semanticTokens.colors['status-success'], 'dark') },
          '.text-status-warning': { color: getColorValue(semanticTokens.colors['status-warning'], 'dark') },
          '.text-status-info': { color: getColorValue(semanticTokens.colors['status-info'], 'dark') },
          
          // Accent colors
          '.text-accent-aqua': { color: getColorValue(semanticTokens.colors['accent-aqua'], 'dark') },
          '.text-accent-bumblebee': { color: getColorValue(semanticTokens.colors['accent-bumblebee'], 'dark') },
          '.text-accent-fuchsia': { color: getColorValue(semanticTokens.colors['accent-fuchsia'], 'dark') },
          '.text-accent-pink': { color: getColorValue(semanticTokens.colors['accent-pink'], 'dark') },
          '.text-accent-lemon': { color: getColorValue(semanticTokens.colors['accent-lemon'], 'dark') },
          '.text-accent-violet': { color: getColorValue(semanticTokens.colors['accent-violet'], 'dark') },
          '.text-accent-blue': { color: getColorValue(semanticTokens.colors['accent-blue'], 'dark') },
          '.text-accent-sky': { color: getColorValue(semanticTokens.colors['accent-sky'], 'dark') },
          // Badge styles for dark mode
          '.badge': {
            ...componentTokens.dark.badge.base,
            '&.badge-primary': componentTokens.dark.badge.variants.primary,
            '&.badge-secondary': componentTokens.dark.badge.variants.secondary,
            '&.badge-success': componentTokens.dark.badge.variants.success,
            '&.badge-warning': componentTokens.dark.badge.variants.warning,
            '&.badge-error': componentTokens.dark.badge.variants.error,
            '&.badge-info': componentTokens.dark.badge.variants.info,
            '&.badge-sm': componentTokens.dark.badge.sizes.sm,
            '&.badge-md': componentTokens.dark.badge.sizes.md,
            '&.badge-lg': componentTokens.dark.badge.sizes.lg,
          },
          // Checkbox styles for dark mode
          '.checkbox': {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            '&:disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
            '.checkbox-input-wrapper': {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '.checkbox-input': {
              appearance: 'none',
              border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], 'dark')}`,
              borderRadius: semanticTokens.borderRadius['radius-xxs'],
              backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'dark'),
              transition: 'all 0.2s ease-in-out',
              '&:checked': {
                backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
              },
            },
          },
        }
      });
    },
  ],
}; 