const { primitiveTokens } = require('./src/design-system/tokens/primitive');
const { semanticTokens } = require('./src/design-system/tokens/semantic');
const { componentTokens } = require('./src/design-system/tokens/component');
const { getColorValue } = require('./src/design-system/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'grid-cols-12',
    'col-span-4',
    'col-span-8',
    'col-span-12',
    'md:col-span-4',
    'md:col-span-8',
    'md:col-span-12',
    'lg:col-span-4',
    'lg:col-span-8',
    'lg:col-span-12',
    'xl:col-span-4',
    'xl:col-span-8',
    'xl:col-span-12',
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
        // Accordion styles
        '.accordion': {
          ...componentTokens.light.accordion.base,
          '&.accordion-default': componentTokens.light.accordion.variants.default,
          '&.accordion-bordered': componentTokens.light.accordion.variants.bordered,
          '&.accordion-elevated': componentTokens.light.accordion.variants.elevated,
        },
        '.accordion-item': {
          ...componentTokens.light.accordion.item,
        },
        '.accordion-button': {
          ...componentTokens.light.accordion.button,
          '&.accordion-button-sm': componentTokens.light.accordion.sizes.sm.button,
          '&.accordion-button-md': componentTokens.light.accordion.sizes.md.button,
          '&.accordion-button-lg': componentTokens.light.accordion.sizes.lg.button,
          '&.accordion-button-expanded': componentTokens.light.accordion.button['&.accordion-button-expanded'],
        },
        '.accordion-panel': {
          ...componentTokens.light.accordion.panel,
          '&.accordion-panel-sm': componentTokens.light.accordion.sizes.sm.panel,
          '&.accordion-panel-md': componentTokens.light.accordion.sizes.md.panel,
          '&.accordion-panel-lg': componentTokens.light.accordion.sizes.lg.panel,
        },
        '.accordion-icon': componentTokens.light.accordion.icon,
        '.accordion-title': componentTokens.light.accordion.title,
        '.accordion-caret': componentTokens.light.accordion.caret,
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
          '&.badge-modern': componentTokens.light.badge.styles.modern,
          '&.badge-modern-no-outline': componentTokens.light.badge.styles['modern-no-outline'],
          '&.badge-solid': componentTokens.light.badge.styles.solid,
          '&.badge-outline': componentTokens.light.badge.styles.outline,
          '&.badge-primary': componentTokens.light.badge.variants.primary,
          '&.badge-secondary': componentTokens.light.badge.variants.secondary,
          '&.badge-success': componentTokens.light.badge.variants.success,
          '&.badge-warning': componentTokens.light.badge.variants.warning,
          '&.badge-error': componentTokens.light.badge.variants.error,
          '&.badge-info': componentTokens.light.badge.variants.info,
          '&.badge-fuchsia': componentTokens.light.badge.variants.fuchsia,
          '&.badge-bumblebee': componentTokens.light.badge.variants.bumblebee,
          '&.badge-pink': componentTokens.light.badge.variants.pink,
          '&.badge-violet': componentTokens.light.badge.variants.violet,
          '&.badge-aqua': componentTokens.light.badge.variants.aqua,
          '&.badge-lemon': componentTokens.light.badge.variants.lemon,
          '&.badge-blue': componentTokens.light.badge.variants.blue,
          '&.badge-sky': componentTokens.light.badge.variants.sky,
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
          '.checkbox-input-wrapper': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.checkbox-input': {
            appearance: 'none',
            border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], 'light')}`,
            backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'light'),
            transition: 'all 0.2s ease-in-out',
            
            // Default checkbox styles
            '&:not(.checkbox-radio)': {
              borderRadius: semanticTokens.borderRadius['radius-xxs'],
            },
            
            // Radio specific styles
            '&.checkbox-radio': {
              borderRadius: '50%',
            },
            
            // Sizes for both checkbox and radio
            '&.checkbox-sm': {
              width: '16px',
              height: '16px',
            },
            '&.checkbox-md': {
              width: '20px',
              height: '20px',
            },
            
            // Checked state for both
            '&:checked': {
              backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
              borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
            },
            
            // Indeterminate state (checkbox only)
            '&:not(.checkbox-radio):indeterminate': {
              backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
              borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
            },
            
            '&:focus': {
              outline: 'none',
              boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], 'light')}40`,
            },
            '&:hover:not(:disabled)': {
              borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
            },
          },
          
          // Icon styles for checkbox
          '.checkbox-icon': {
            position: 'absolute',
            pointerEvents: 'none',
            color: getColorValue(semanticTokens.colors['text-inverse-primary'], 'light'),
            opacity: '0',
            transition: 'opacity 0.15s ease-in-out',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          },
          
          // Icon styles for radio
          '.radio-icon': {
            position: 'absolute',
            pointerEvents: 'none',
            color: getColorValue(semanticTokens.colors['text-inverse-primary'], 'light'),
            opacity: '0',
            transition: 'opacity 0.15s ease-in-out',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
          },
          
          // Show checkbox icon when checked or indeterminate
          'input:checked ~ .checkbox-icon, input:indeterminate ~ .checkbox-icon.indeterminate': {
            opacity: '1',
          },
          
          // Show radio icon when checked
          'input:checked ~ .radio-icon': {
            opacity: '1',
          },
          
          // Hide check icon when showing indeterminate icon
          'input:indeterminate ~ .checkbox-icon:not(.indeterminate)': {
            opacity: '0',
          },
          
          '.checkbox-label': {
            color: getColorValue(semanticTokens.colors['text-primary'], 'light'),
            fontSize: semanticTokens.typography['label-sm'].fontSize,
            lineHeight: semanticTokens.typography['label-sm'].lineHeight,
            '&.checkbox-sm': {
              fontSize: semanticTokens.typography['label-xs'].fontSize,
              lineHeight: semanticTokens.typography['label-xs'].lineHeight,
            },
          },
          
          // Disabled states
          '&:disabled, &[disabled], &:has(input:disabled)': {
            cursor: 'not-allowed',
            opacity: 0.5,
            '.checkbox-label': {
              color: getColorValue(semanticTokens.colors['text-disabled'], 'light'),
            },
          },
        },
        // Toggle styles
        '.toggle': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          userSelect: 'none',

          '.toggle-input-wrapper': {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
          },

          '.toggle-input': {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: '0',
          },

          '.toggle-track': {
            position: 'relative',
            backgroundColor: getColorValue(semanticTokens.colors['background-tertiary'], 'light'),
            transition: 'all 0.2s ease-in-out',

            '&.toggle-sm': {
              width: '32px',
              height: '16px',
              borderRadius: '8px',
            },
            '&.toggle-md': {
              width: '40px',
              height: '20px',
              borderRadius: '10px',
            },
            '&.toggle-lg': {
              width: '48px',
              height: '24px',
              borderRadius: '12px',
            },
          },

          '.toggle-thumb': {
            position: 'absolute',
            backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'light'),
            boxShadow: semanticTokens.shadows['shadow-sm'],
            transition: 'transform 0.2s ease-in-out',

            '&.toggle-sm': {
              width: '12px',
              height: '12px',
              borderRadius: '6px',
              top: '2px',
              left: '2px',
            },
            '&.toggle-md': {
              width: '16px',
              height: '16px',
              borderRadius: '8px',
              top: '2px',
              left: '2px',
            },
            '&.toggle-lg': {
              width: '20px',
              height: '20px',
              borderRadius: '10px',
              top: '2px',
              left: '2px',
            },
          },

          // Checked state
          'input:checked ~ .toggle-track': {
            backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
          },

          'input:checked ~ .toggle-track .toggle-thumb': {
            '&.toggle-sm': {
              transform: 'translateX(16px)',
            },
            '&.toggle-md': {
              transform: 'translateX(20px)',
            },
            '&.toggle-lg': {
              transform: 'translateX(24px)',
            },
          },

          // Focus state
          'input:focus ~ .toggle-track': {
            boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], 'light')}40`,
          },

          // Hover state
          '&:hover:not(.disabled) .toggle-track': {
            backgroundColor: getColorValue(semanticTokens.colors['background-hover'], 'light'),
          },

          '&:hover:not(.disabled) input:checked ~ .toggle-track': {
            backgroundColor: getColorValue(semanticTokens.colors['interactive-hover'], 'light'),
          },

          // Disabled state
          '&.disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
          },

          // Label styles
          '.toggle-label': {
            color: getColorValue(semanticTokens.colors['text-primary'], 'light'),
            '&.toggle-sm': {
              fontSize: semanticTokens.typography['label-xs'].fontSize,
              lineHeight: semanticTokens.typography['label-xs'].lineHeight,
            },
            '&.toggle-md': {
              fontSize: semanticTokens.typography['label-sm'].fontSize,
              lineHeight: semanticTokens.typography['label-sm'].lineHeight,
            },
            '&.toggle-lg': {
              fontSize: semanticTokens.typography['label-base'].fontSize,
              lineHeight: semanticTokens.typography['label-base'].lineHeight,
            },
          },
        },
        // Add tag styles
        '.tag': {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          borderRadius: semanticTokens.borderRadius['radius-sm'],
          fontWeight: semanticTokens.typography['label-sm'].fontWeight,
          transition: 'all 0.2s ease-in-out',
          whiteSpace: 'nowrap',

          // Size variants
          '&.tag-sm': {
            padding: '2px 6px',
            fontSize: semanticTokens.typography['label-xs'].fontSize,
            lineHeight: semanticTokens.typography['label-xs'].lineHeight,
          },
          '&.tag-md': {
            padding: '2px 8px',
            fontSize: semanticTokens.typography['label-sm'].fontSize,
            lineHeight: semanticTokens.typography['label-sm'].lineHeight,
          },
          '&.tag-lg': {
            padding: '4px 12px',
            fontSize: semanticTokens.typography['label-base'].fontSize,
            lineHeight: semanticTokens.typography['label-base'].lineHeight,
          },

          // Remove button
          '.tag-remove-button': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px',
            marginLeft: '2px',
            borderRadius: semanticTokens.borderRadius['radius-sm'],
            color: 'inherit',
            opacity: 0.7,
            cursor: 'pointer',
            transition: 'opacity 0.2s ease-in-out',

            '&:hover': {
              opacity: 1,
            },
          },

          // Color variants - Light mode
          '&.tag-primary': {
            backgroundColor: `${getColorValue(semanticTokens.colors['interactive-primary'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['interactive-primary'], 'light'),
          },
          '&.tag-secondary': {
            backgroundColor: `${getColorValue(semanticTokens.colors['interactive-secondary'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['interactive-secondary'], 'light'),
          },
          '&.tag-success': {
            backgroundColor: `${getColorValue(semanticTokens.colors['status-success'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['status-success'], 'light'),
          },
          '&.tag-warning': {
            backgroundColor: `${getColorValue(semanticTokens.colors['status-warning'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['status-warning'], 'light'),
          },
          '&.tag-error': {
            backgroundColor: `${getColorValue(semanticTokens.colors['status-error'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['status-error'], 'light'),
          },
          '&.tag-info': {
            backgroundColor: `${getColorValue(semanticTokens.colors['status-info'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['status-info'], 'light'),
          },
          '&.tag-fuchsia': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-fuchsia'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-fuchsia'], 'light'),
          },
          '&.tag-bumblebee': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-bumblebee'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-bumblebee'], 'light'),
          },
          '&.tag-pink': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-pink'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-pink'], 'light'),
          },
          '&.tag-violet': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-violet'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-violet'], 'light'),
          },
          '&.tag-aqua': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-aqua'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-aqua'], 'light'),
          },
          '&.tag-lemon': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-lemon'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-lemon'], 'light'),
          },
          '&.tag-blue': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-blue'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-blue'], 'light'),
          },
          '&.tag-sky': {
            backgroundColor: `${getColorValue(semanticTokens.colors['accent-sky'], 'light')}15`,
            color: getColorValue(semanticTokens.colors['accent-sky'], 'light'),
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
          '.bg-background-hover': { backgroundColor: getColorValue(semanticTokens.colors['background-hover'], 'dark') },
          '.bg-background-active': { backgroundColor: getColorValue(semanticTokens.colors['background-active'], 'dark') },
          // Text colors
          '.text-text-primary': { color: getColorValue(semanticTokens.colors['text-primary'], 'dark') },
          '.text-text-secondary': { color: getColorValue(semanticTokens.colors['text-secondary'], 'dark') },
          '.text-text-tertiary': { color: getColorValue(semanticTokens.colors['text-tertiary'], 'dark') },
          '.text-text-inverse': { color: getColorValue(semanticTokens.colors['text-inverse'], 'dark') },
          
          // Border colors
          '.border-border-primary': { borderColor: getColorValue(semanticTokens.colors['border-primary'], 'dark') },
          '.border-border-secondary': { borderColor: getColorValue(semanticTokens.colors['border-secondary'], 'dark') },
          '.border-border-tertiary': { borderColor: getColorValue(semanticTokens.colors['border-tertiary'], 'dark') },
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
            '&.badge-modern': componentTokens.dark.badge.styles.modern,
            '&.badge-modern-no-outline': componentTokens.dark.badge.styles['modern-no-outline'],
            '&.badge-solid': componentTokens.dark.badge.styles.solid,
            '&.badge-outline': componentTokens.dark.badge.styles.outline,
            '&.badge-primary': componentTokens.dark.badge.variants.primary,
            '&.badge-secondary': componentTokens.dark.badge.variants.secondary,
            '&.badge-success': componentTokens.dark.badge.variants.success,
            '&.badge-warning': componentTokens.dark.badge.variants.warning,
            '&.badge-error': componentTokens.dark.badge.variants.error,
            '&.badge-info': componentTokens.dark.badge.variants.info,
            '&.badge-fuchsia': componentTokens.dark.badge.variants.fuchsia,
            '&.badge-bumblebee': componentTokens.dark.badge.variants.bumblebee,
            '&.badge-pink': componentTokens.dark.badge.variants.pink,
            '&.badge-violet': componentTokens.dark.badge.variants.violet,
            '&.badge-aqua': componentTokens.dark.badge.variants.aqua,
            '&.badge-lemon': componentTokens.dark.badge.variants.lemon,
            '&.badge-blue': componentTokens.dark.badge.variants.blue,
            '&.badge-sky': componentTokens.dark.badge.variants.sky,
            '&.badge-sm': componentTokens.dark.badge.sizes.sm,
            '&.badge-md': componentTokens.dark.badge.sizes.md,
            '&.badge-lg': componentTokens.dark.badge.sizes.lg,
          },
          // Accordion styles for dark mode
          '.accordion': {
            ...componentTokens.dark.accordion.base,
            '&.accordion-default': componentTokens.dark.accordion.variants.default,
            '&.accordion-bordered': componentTokens.dark.accordion.variants.bordered,
            '&.accordion-elevated': componentTokens.dark.accordion.variants.elevated,
          },
          '.accordion-item': {
            ...componentTokens.dark.accordion.item,
          },
          '.accordion-button': {
            ...componentTokens.dark.accordion.button,
            '&.accordion-button-sm': componentTokens.dark.accordion.sizes.sm.button,
            '&.accordion-button-md': componentTokens.dark.accordion.sizes.md.button,
            '&.accordion-button-lg': componentTokens.dark.accordion.sizes.lg.button,
            '&.accordion-button-expanded': componentTokens.dark.accordion.button['&.accordion-button-expanded'],
          },
          '.accordion-panel': {
            ...componentTokens.dark.accordion.panel,
            '&.accordion-panel-sm': componentTokens.dark.accordion.sizes.sm.panel,
            '&.accordion-panel-md': componentTokens.dark.accordion.sizes.md.panel,
            '&.accordion-panel-lg': componentTokens.dark.accordion.sizes.lg.panel,
          },
          '.accordion-icon': componentTokens.dark.accordion.icon,
          '.accordion-title': componentTokens.dark.accordion.title,
          '.accordion-caret': componentTokens.dark.accordion.caret,
          // Checkbox styles for dark mode
          '.checkbox': {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            '.checkbox-input-wrapper': {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '.checkbox-input': {
              appearance: 'none',
              border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], 'dark')}`,
              backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'dark'),
              transition: 'all 0.2s ease-in-out',
              
              // Default checkbox styles
              '&:not(.checkbox-radio)': {
                borderRadius: semanticTokens.borderRadius['radius-xxs'],
              },
              
              // Radio specific styles
              '&.checkbox-radio': {
                borderRadius: '50%',
              },
              
              // Sizes for both checkbox and radio
              '&.checkbox-sm': {
                width: '16px',
                height: '16px',
              },
              '&.checkbox-md': {
                width: '20px',
                height: '20px',
              },
              
              // Checked state for both
              '&:checked': {
                backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
                borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
              },
              
              // Indeterminate state (checkbox only)
              '&:not(.checkbox-radio):indeterminate': {
                backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
                borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
              },
              
              '&:focus': {
                outline: 'none',
                boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], 'dark')}40`,
              },
              '&:hover:not(:disabled)': {
                borderColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
              },
            },
            
            // Icon styles for checkbox
            '.checkbox-icon': {
              position: 'absolute',
              pointerEvents: 'none',
              color: getColorValue(semanticTokens.colors['text-inverse-primary'], 'dark'),
              opacity: '0',
              transition: 'opacity 0.15s ease-in-out',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
            },
            
            // Icon styles for radio
            '.radio-icon': {
              position: 'absolute',
              pointerEvents: 'none',
              color: getColorValue(semanticTokens.colors['text-inverse-primary'], 'dark'),
              opacity: '0',
              transition: 'opacity 0.15s ease-in-out',
              transform: 'translate(-50%, -50%)',
              top: '50%',
              left: '50%',
            },
            
            // Show checkbox icon when checked or indeterminate
            'input:checked ~ .checkbox-icon, input:indeterminate ~ .checkbox-icon.indeterminate': {
              opacity: '1',
            },
            
            // Show radio icon when checked
            'input:checked ~ .radio-icon': {
              opacity: '1',
            },
            
            // Hide check icon when showing indeterminate icon
            'input:indeterminate ~ .checkbox-icon:not(.indeterminate)': {
              opacity: '0',
            },
            
            '.checkbox-label': {
              color: getColorValue(semanticTokens.colors['text-primary'], 'dark'),
              fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
              lineHeight: semanticTokens.typography['paragraph-sm'].lineHeight,
              '&.checkbox-sm': {
                fontSize: semanticTokens.typography['paragraph-xs'].fontSize,
                lineHeight: semanticTokens.typography['paragraph-xs'].lineHeight,
              },
            },
            
            // Disabled states
            '&:disabled, &[disabled], &:has(input:disabled)': {
              cursor: 'not-allowed',
              opacity: 0.5,
              '.checkbox-label': {
                color: getColorValue(semanticTokens.colors['text-disabled'], 'dark'),
              },
            },
          },
          // Toggle styles for dark mode
          '.toggle': {
            '.toggle-track': {
              backgroundColor: getColorValue(semanticTokens.colors['background-tertiary'], 'dark'),
            },

            '.toggle-thumb': {
              backgroundColor: getColorValue(semanticTokens.colors['background-primary'], 'dark'),
            },

            // Checked state
            'input:checked ~ .toggle-track': {
              backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
            },

            // Focus state
            'input:focus ~ .toggle-track': {
              boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], 'dark')}40`,
            },

            // Hover state
            '&:hover:not(.disabled) .toggle-track': {
              backgroundColor: getColorValue(semanticTokens.colors['background-hover'], 'dark'),
            },

            '&:hover:not(.disabled) input:checked ~ .toggle-track': {
              backgroundColor: getColorValue(semanticTokens.colors['interactive-hover'], 'dark'),
            },

            // Label styles
            '.toggle-label': {
              color: getColorValue(semanticTokens.colors['text-primary'], 'dark'),
            },
          },
          // Add striped row styling for dark mode
          '.table-striped .table-row:nth-child(even)': {
            backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], 'dark'),
          },
          // Add hoverable row styling for dark mode
          '.table-hoverable .table-row:hover': {
            backgroundColor: getColorValue(semanticTokens.colors['background-hover'], 'dark'),
            cursor: 'pointer',
          },
          // Add loading overlay styling for dark mode
          '.table-loading-overlay': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for dark mode
          },
          // Add loading spinner styling for dark mode
          '.table-loading-spinner': {
            border: `3px solid ${getColorValue(semanticTokens.colors['interactive-primary'], 'dark')}`,
            borderTopColor: 'transparent',
          },
          '.table-loading-spinner-sm': {
            border: `2px solid ${getColorValue(semanticTokens.colors['interactive-primary'], 'dark')}`,
            borderTopColor: 'transparent',
          },
          '.table': {
            '.table-cell, .table-selection-cell': {
              color: getColorValue(semanticTokens.colors['text-primary'], 'dark'),
              borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], 'dark')}`,
              
              '&.table-selection-cell': {
                borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], 'dark')}`,
                textAlign: 'center',
              },
            },
          },
          // Add tag styles
          '.tag': {
            // Color variants - Dark mode
            '&.tag-primary': {
              backgroundColor: `${getColorValue(semanticTokens.colors['interactive-primary'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['interactive-primary'], 'dark'),
            },
            '&.tag-secondary': {
              backgroundColor: `${getColorValue(semanticTokens.colors['interactive-secondary'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['interactive-secondary'], 'dark'),
            },
            '&.tag-success': {
              backgroundColor: `${getColorValue(semanticTokens.colors['status-success'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['status-success'], 'dark'),
            },
            '&.tag-warning': {
              backgroundColor: `${getColorValue(semanticTokens.colors['status-warning'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['status-warning'], 'dark'),
            },
            '&.tag-error': {
              backgroundColor: `${getColorValue(semanticTokens.colors['status-error'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['status-error'], 'dark'),
            },
            '&.tag-info': {
              backgroundColor: `${getColorValue(semanticTokens.colors['status-info'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['status-info'], 'dark'),
            },
            '&.tag-fuchsia': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-fuchsia'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-fuchsia'], 'dark'),
            },
            '&.tag-bumblebee': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-bumblebee'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-bumblebee'], 'dark'),
            },
            '&.tag-pink': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-pink'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-pink'], 'dark'),
            },
            '&.tag-violet': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-violet'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-violet'], 'dark'),
            },
            '&.tag-aqua': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-aqua'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-aqua'], 'dark'),
            },
            '&.tag-lemon': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-lemon'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-lemon'], 'dark'),
            },
            '&.tag-blue': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-blue'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-blue'], 'dark'),
            },
            '&.tag-sky': {
              backgroundColor: `${getColorValue(semanticTokens.colors['accent-sky'], 'dark')}15`,
              color: getColorValue(semanticTokens.colors['accent-sky'], 'dark'),
            },
          },
        }
      });

      // Add table styles
      addComponents({
        // Light mode styles
        '.table-container': {
          ...componentTokens.light.table.container,
        },
        '.table': {
          ...componentTokens.light.table.base,
          
          'thead': {
            ...componentTokens.light.table.header,
          },
          
          '.table-header-cell': {
            ...componentTokens.light.table.headerCell,
            
            '&.table-selection-cell': {
              ...componentTokens.light.table.headerCell['&.table-selection-cell'],
            },
          },
          
          '.table-cell, .table-selection-cell': {
            ...componentTokens.light.table.cell,
            
            '&.table-selection-cell': {
              ...componentTokens.light.table.cell['&.table-selection-cell'],
            },
          },
          
          '.table-row': {
            ...componentTokens.light.table.row,
            
            '&.selected': {
              ...componentTokens.light.table.row['&.selected'],
            },
            
            '&:hover': {
              ...componentTokens.light.table.row['&:hover'],
            },
          },
        },

        '.table-empty': {
          ...componentTokens.light.table.empty,
        },

        '.table-loading-overlay': {
          ...componentTokens.light.table.loadingOverlay,
        },

        '.table-loading-spinner': {
          ...componentTokens.light.table.loadingSpinner,
        },

        '.table-header-content': {
          ...componentTokens.light.table.headerContent,
        },

        '.sort-icon': {
          ...componentTokens.light.table.sortIcon,
          
          '&.active': {
            ...componentTokens.light.table.sortIcon['&.active'],
          },
        },

        '.sort-icon-default': {
          ...componentTokens.light.table.sortIconDefault,
        },

        '.table-load-more': {
          ...componentTokens.light.table.loadMore,
        },

        '.table-loading-spinner-sm': {
          ...componentTokens.light.table.loadingSpinnerSm,
        },

        '.filter-button': {
          ...componentTokens.light.table.filterButton,
          '&:hover': {
            ...componentTokens.light.table.filterButton['&:hover'],
          },
          '&.active': {
            ...componentTokens.light.table.filterButton['&.active'],
          },
        },

        '.filter-dropdown': {
          ...componentTokens.light.table.filterDropdown,
        },

        '.filter-dropdown-header': {
          ...componentTokens.light.table.filterDropdownHeader,
        },

        '.filter-dropdown-title': {
          ...componentTokens.light.table.filterDropdownTitle,
        },

        '.filter-clear-button': {
          ...componentTokens.light.table.filterClearButton,
          '&:hover': {
            ...componentTokens.light.table.filterClearButton['&:hover'],
          },
        },

        '.filter-dropdown-content': {
          ...componentTokens.light.table.filterDropdownContent,
        },

        '.filter-option': {
          ...componentTokens.light.table.filterOption,
          '&:hover': {
            ...componentTokens.light.table.filterOption['&:hover'],
          },
        },

        '.table-header-actions': {
          ...componentTokens.light.table.headerActions,
        },
        
        // Table variants
        '.table-bordered': {
          ...componentTokens.light.table.variants.bordered,
        },
        
        '.table-striped .table-row:nth-child(even)': {
          ...componentTokens.light.table.variants.striped['.table-row:nth-child(even)'],
        },
        
        '.table-hoverable .table-row:hover': {
          ...componentTokens.light.table.variants.hoverable['.table-row:hover'],
        },
        
        // Table sizes
        '.table-compact .table-header-cell, .table-compact .table-cell': {
          ...componentTokens.light.table.sizes.compact.headerCell,
        },
        
        // Cell alignment classes
        '.text-center': {
          textAlign: 'center',
        },
        '.text-right': {
          textAlign: 'right',
        },
      });

      // Dark mode styles
      addComponents({
        '.dark': {
          '.table': {
            'thead': {
              ...componentTokens.dark.table.header,
            },
            '.table-header-cell': {
              ...componentTokens.dark.table.headerCell,
              
              '&.table-selection-cell': {
                ...componentTokens.dark.table.headerCell['&.table-selection-cell'],
              },
            },
            '.table-cell, .table-selection-cell': {
              ...componentTokens.dark.table.cell,
              
              '&.table-selection-cell': {
                ...componentTokens.dark.table.cell['&.table-selection-cell'],
              },
            },
            '.table-row': {
              ...componentTokens.dark.table.row,
              
              '&.selected': {
                ...componentTokens.dark.table.row['&.selected'],
              },
              
              '&:hover': {
                ...componentTokens.dark.table.row['&:hover'],
              },
            },
          },
          '.table-empty': {
            ...componentTokens.dark.table.empty,
          },
          '.table-loading-overlay': {
            ...componentTokens.dark.table.loadingOverlay,
          },
          '.table-loading-spinner': {
            ...componentTokens.dark.table.loadingSpinner,
          },
          '.table-loading-spinner-sm': {
            ...componentTokens.dark.table.loadingSpinnerSm,
          },
          '.sort-icon': {
            ...componentTokens.dark.table.sortIcon,
            
            '&.active': {
              ...componentTokens.dark.table.sortIcon['&.active'],
            },
          },
          '.filter-button': {
            ...componentTokens.dark.table.filterButton,
            '&:hover': {
              ...componentTokens.dark.table.filterButton['&:hover'],
            },
            '&.active': {
              ...componentTokens.dark.table.filterButton['&.active'],
            },
          },
          '.filter-dropdown': {
            ...componentTokens.dark.table.filterDropdown,
          },
          '.filter-dropdown-title': {
            ...componentTokens.dark.table.filterDropdownTitle,
          },
          '.filter-clear-button': {
            ...componentTokens.dark.table.filterClearButton,
            '&:hover': {
              ...componentTokens.dark.table.filterClearButton['&:hover'],
            },
          },
          '.table-bordered': {
            ...componentTokens.dark.table.variants.bordered,
          },
          '.table-striped .table-row:nth-child(even)': {
            ...componentTokens.dark.table.variants.striped['.table-row:nth-child(even)'],
          },
          '.table-hoverable .table-row:hover': {
            ...componentTokens.dark.table.variants.hoverable['.table-row:hover'],
          },
        },
      });
    },
  ],
}; 