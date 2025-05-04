import { semanticTokens } from './semantic';
import { primitiveTokens } from './primitive';
import { ThemeMode } from '../theme';
import { getColorValue } from '../utils/colors';

const getComponentTokens = (mode: ThemeMode) => ({
  button: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      borderRadius: semanticTokens.borderRadius['radius-md'],
      fontWeight: semanticTokens.typography['label-base'].fontWeight,
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], mode)}40`,
      },
      '&:disabled': {
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
          border: `2px solid ${getColorValue(semanticTokens.colors['text-inverse-primary'], mode)}`,
          borderTopColor: 'transparent',
          borderRadius: semanticTokens.borderRadius['radius-full'],
          animation: 'spin 1s linear infinite',
        },
      },
    },
    variants: {
      primary: {
        backgroundColor: getColorValue(semanticTokens.colors['button-primary'], mode),
        color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['button-primary-hover'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['button-primary-active'], mode),
        },
        '&:disabled': {
          backgroundColor: getColorValue(semanticTokens.colors['button-primary-disabled'], mode),
        },
      },
      'primary-destructive': {
        backgroundColor: getColorValue(semanticTokens.colors['status-error'], mode),
        color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error-hover'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error-active'], mode),
        },
        '&:disabled': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
        },
        '&.loading': {
          '&::after': {
            border: `2px solid ${getColorValue(semanticTokens.colors['text-inverse-primary'], mode)}`,
            borderTopColor: 'transparent',
          },
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: getColorValue(semanticTokens.colors['text-link'], mode),
        border: `1px solid ${getColorValue(semanticTokens.colors['interactive-primary'], mode)}`,
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['button-secondary-hover'], mode),
          color: getColorValue(semanticTokens.colors['text-link'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['interactive-active'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&:disabled': {
          borderColor: getColorValue(semanticTokens.colors['interactive-disabled'], mode),
          color: getColorValue(semanticTokens.colors['interactive-disabled'], mode),
        },
      },
      'secondary-destructive': {
        backgroundColor: getColorValue(semanticTokens.colors['status-error-subtle'], mode),
        color: getColorValue(semanticTokens.colors['status-error'], mode),
        border: `1px solid ${getColorValue(semanticTokens.colors['status-error'], mode)}`,
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error-subtle-hover'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
          borderColor: 'transparent',
        },
        '&:disabled': {
          borderColor: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
          color: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
        },
        '&.loading': {
          '&::after': {
            border: `2px solid ${getColorValue(semanticTokens.colors['status-error'], mode)}`,
            borderTopColor: 'transparent',
          },
        },
      },
      white: {
        backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
        color: getColorValue(semanticTokens.colors['text-primary'], mode),
        border: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['background-quinary'], mode),
        },
        '&:disabled': {
          backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
          color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
        },
      },
      'white-destructive': {
        backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
        color: getColorValue(semanticTokens.colors['status-error'], mode),
        border: `1px solid ${getColorValue(semanticTokens.colors['status-error'], mode)}`,
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error-subtle'], mode),
        },
        '&:active': {
          backgroundColor: getColorValue(semanticTokens.colors['status-error'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
          borderColor: 'transparent',
        },
        '&:disabled': {
          backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
          color: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
          borderColor: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
        },
        '&.loading': {
          '&::after': {
            border: `2px solid ${getColorValue(semanticTokens.colors['status-error'], mode)}`,
            borderTopColor: 'transparent',
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: getColorValue(semanticTokens.colors['text-link'], mode),
        padding: 0,
        '&:hover': {
          color: getColorValue(semanticTokens.colors['text-link-hover'], mode),
          textDecoration: 'underline',
        },
        '&:active': {
          color: getColorValue(semanticTokens.colors['text-link-active'], mode),
        },
        '&:disabled': {
          color: getColorValue(semanticTokens.colors['text-disabled'], mode),
          textDecoration: 'none',
        },
        '&.loading': {
          '&::after': {
            border: `2px solid ${getColorValue(semanticTokens.colors['interactive-primary'], mode)}`,
            borderTopColor: 'transparent',
          },
        },
      },
      'text-destructive': {
        backgroundColor: 'transparent',
        color: getColorValue(semanticTokens.colors['status-error'], mode),
        padding: 0,
        '&:hover': {
          color: getColorValue(semanticTokens.colors['status-error-hover'], mode),
          textDecoration: 'underline',
        },
        '&:active': {
          color: getColorValue(semanticTokens.colors['status-error-active'], mode),
        },
        '&:disabled': {
          color: getColorValue(semanticTokens.colors['status-error-disabled'], mode),
          textDecoration: 'none',
        },
        '&.loading': {
          '&::after': {
            border: `2px solid ${getColorValue(semanticTokens.colors['status-error'], mode)}`,
            borderTopColor: 'transparent',
          },
        },
      },
    },
    sizes: {
      xs: {
        padding: '8px 12px',
        fontSize: semanticTokens.typography['label-xs'].fontSize,
        '&.icon-only': {
          padding: '8px',
        },
      },
      sm: {
        padding: '10px 14px',
        fontSize: semanticTokens.typography['label-sm'].fontSize,
        '&.icon-only': {
          padding: '10px',
        },
      },
      base: {
        padding: '12px 16px',
        fontSize: semanticTokens.typography['label-base'].fontSize,
        '&.icon-only': {
          padding: '12px',
        },
      },
      lg: {
        padding: '16px 20px',
        fontSize: semanticTokens.typography['label-lg'].fontSize,
        '&.icon-only': {
          padding: '16px',
        },
      },
      xl: {
        padding: '16px 24px',
        fontSize: semanticTokens.typography['label-lg'].fontSize,
        '&.icon-only': {
          padding: '16px',
        },
      },
    },
  },

  input: {
    base: {
      padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-md']}`,
      borderRadius: semanticTokens.borderRadius['radius-md'],
      border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      fontSize: semanticTokens.typography['paragraph-base'].fontSize,
      lineHeight: semanticTokens.typography['paragraph-base'].lineHeight,
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: getColorValue(semanticTokens.colors['border-focus'], mode),
        boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], mode)}40`,
      },
      '&:disabled': {
        backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
        color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
        cursor: 'not-allowed',
      },
    },
    variants: {
      error: {
        borderColor: getColorValue(semanticTokens.colors['interactive-active'], mode),
        '&:focus': {
          borderColor: getColorValue(semanticTokens.colors['interactive-active'], mode),
          boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-active'], mode)}40`,
        },
      },
    },
    sizes: {
      sm: {
        padding: `${semanticTokens.spacing['component-xs']} ${semanticTokens.spacing['component-sm']}`,
        fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
      },
      md: {
        padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-md']}`,
        fontSize: semanticTokens.typography['paragraph-base'].fontSize,
      },
      lg: {
        padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-lg']}`,
        fontSize: semanticTokens.typography['paragraph-lg'].fontSize,
      },
    },
  },

  card: {
    base: {
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      borderRadius: semanticTokens.borderRadius['radius-lg'],
      padding: semanticTokens.spacing['component-lg'],
      boxShadow: semanticTokens.shadows['elevation-1'],
    },
    variants: {
      elevated: {
        boxShadow: semanticTokens.shadows['elevation-2'],
      },
      interactive: {
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: semanticTokens.shadows['elevation-3'],
          transform: 'translateY(-2px)',
        },
      },
    },
  },

  badge: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: semanticTokens.borderRadius['radius-full'],
      fontWeight: semanticTokens.typography['label-sm'].fontWeight,
      fontSize: semanticTokens.typography['label-sm'].fontSize,
      lineHeight: semanticTokens.typography['label-sm'].lineHeight,
      padding: `${semanticTokens.spacing['component-xs']} ${semanticTokens.spacing['component-sm']}`,
    },
    styles: {
      modern: {
        backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
        border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
      },
      'modern-no-outline': {
        backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
      },
      solid: {
        backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], mode),
        color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
      },
      outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
        color: getColorValue(semanticTokens.colors['text-primary'], mode),
      },
    },
    variants: {
      primary: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-brand-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-brand-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-brand-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-brand-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-brand-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-brand-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-brand-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-brand-200'], mode),
        },
      },
      secondary: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['text-secondary'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
          borderColor: getColorValue(semanticTokens.colors['border-secondary'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['text-secondary'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['background-tertiary'], mode),
          color: getColorValue(semanticTokens.colors['text-secondary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['text-secondary'], mode),
          borderColor: getColorValue(semanticTokens.colors['border-secondary'], mode),
        },
      },
      success: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-green-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-green-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-green-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-green-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-green-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-green-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-green-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-green-200'], mode),
        },
      },
      warning: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-orange-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-orange-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-orange-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-orange-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-orange-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-orange-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-orange-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-orange-200'], mode),
        },
      },
      error: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-error-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-error-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-error-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-error-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-error-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-error-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-error-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-error-200'], mode),
        },
      },
      info: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-blue-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-blue-200'], mode),
        },
      },
      fuchsia: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-fuchsia-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-fuchsia-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-fuchsia-400'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-fuchsia-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-fuchsia-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-fuchsia-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-fuchsia-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-fuchsia-400'], mode),
        },
      },
      bumblebee: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-bumblebee-800'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-bumblebee-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-bumblebee-500'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-bumblebee-800'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-bumblebee-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-bumblebee-500'], mode),
          color: getColorValue(primitiveTokens.colors['bumblebee-800'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-bumblebee-800'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-bumblebee-500'], mode),
        },
      },
      pink: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-pink-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-pink-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-pink-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-pink-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-pink-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-pink-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-pink-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-pink-200'], mode),
        },
      },
      violet: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-violet-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-violet-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-violet-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-violet-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-violet-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-violet-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-violet-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-violet-200'], mode),
        },
      },
      aqua: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-aqua-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-aqua-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-aqua-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-aqua-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-aqua-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-aqua-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-aqua-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-aqua-200'], mode),
        },
      },
      lemon: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-lemon-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-lemon-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-lemon-300'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-lemon-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-lemon-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-lemon-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-lemon-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-lemon-300'], mode),
        },
      },
      blue: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-blue-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-blue-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-blue-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-blue-200'], mode),
        },
      },
      sky: {
        '&.badge-modern': {
          color: getColorValue(semanticTokens.colors['utility-sky-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-sky-50'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-sky-200'], mode),
        },
        '&.badge-modern-no-outline': {
          color: getColorValue(semanticTokens.colors['utility-sky-700'], mode),
          backgroundColor: getColorValue(semanticTokens.colors['utility-sky-50'], mode),
        },
        '&.badge-solid': {
          backgroundColor: getColorValue(semanticTokens.colors['utility-sky-500'], mode),
          color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
        },
        '&.badge-outline': {
          color: getColorValue(semanticTokens.colors['utility-sky-700'], mode),
          borderColor: getColorValue(semanticTokens.colors['utility-sky-200'], mode),
        },
      },
    },
    sizes: {
      sm: {
        padding: `${semanticTokens.spacing['component-xs']} ${semanticTokens.spacing['component-sm']}`,
        fontSize: semanticTokens.typography['label-xs'].fontSize,
        '&.badge-indicator': {
          width: '8px',
          height: '8px',
          padding: 0,
        },
      },
      md: {
        padding: `${semanticTokens.spacing['component-xs']} ${semanticTokens.spacing['component-md']}`,
        fontSize: semanticTokens.typography['label-sm'].fontSize,
        '&.badge-indicator': {
          width: '10px',
          height: '10px',
          padding: 0,
        },
      },
      lg: {
        padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-lg']}`,
        fontSize: semanticTokens.typography['label-base'].fontSize,
        '&.badge-indicator': {
          width: '12px',
          height: '12px',
          padding: 0,
        },
      },
    },
  },

  checkbox: {
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: semanticTokens.spacing['component-sm'],
      cursor: 'pointer',
      userSelect: 'none',
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
    input: {
      appearance: 'none',
      width: '16px',
      height: '16px',
      border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
      borderRadius: semanticTokens.borderRadius['radius-sm'],
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      transition: 'all 0.2s ease-in-out',
      '&:checked': {
        backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], mode),
        borderColor: getColorValue(semanticTokens.colors['interactive-primary'], mode),
        '&::after': {
          content: '""',
          display: 'block',
          width: '8px',
          height: '8px',
          margin: '3px',
          backgroundColor: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
          borderRadius: semanticTokens.borderRadius['radius-xs'],
        },
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${getColorValue(semanticTokens.colors['interactive-tertiary'], mode)}40`,
      },
      '&:hover:not(:disabled)': {
        borderColor: getColorValue(semanticTokens.colors['interactive-primary'], mode),
      },
    },
    label: {
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      fontSize: semanticTokens.typography['label-sm'].fontSize,
      lineHeight: semanticTokens.typography['label-sm'].lineHeight,
    },
    variants: {
      error: {
        input: {
          borderColor: getColorValue(semanticTokens.colors['status-error'], mode),
          '&:checked': {
            backgroundColor: getColorValue(semanticTokens.colors['status-error'], mode),
            borderColor: getColorValue(semanticTokens.colors['status-error'], mode),
          },
          '&:hover:not(:disabled)': {
            borderColor: getColorValue(semanticTokens.colors['status-error'], mode),
          },
        },
        label: {
          color: getColorValue(semanticTokens.colors['status-error'], mode),
        },
      },
    },
    sizes: {
      sm: {
        input: {
          width: '14px',
          height: '14px',
          '&:checked::after': {
            width: '6px',
            height: '6px',
            margin: '3px',
          },
        },
        label: {
          fontSize: semanticTokens.typography['label-xs'].fontSize,
          lineHeight: semanticTokens.typography['label-xs'].lineHeight,
        },
      },
      md: {
        input: {
          width: '16px',
          height: '16px',
          '&:checked::after': {
            width: '8px',
            height: '8px',
            margin: '3px',
          },
        },
        label: {
          fontSize: semanticTokens.typography['label-sm'].fontSize,
          lineHeight: semanticTokens.typography['label-sm'].lineHeight,
        },
      },
      lg: {
        input: {
          width: '18px',
          height: '18px',
          '&:checked::after': {
            width: '10px',
            height: '10px',
            margin: '3px',
          },
        },
        label: {
          fontSize: semanticTokens.typography['label-base'].fontSize,
          lineHeight: semanticTokens.typography['label-base'].lineHeight,
        },
      },
    },
  },

  accordion: {
    base: {
      width: '100%',
      borderRadius: semanticTokens.borderRadius['radius-md'],
      overflow: 'hidden',
    },
    item: {
      borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      '&:last-child': {
        borderBottom: 'none',
      },
      '&.accordion-item-disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      fontWeight: semanticTokens.typography['label-base'].fontWeight,
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
      },
      '&:hover:not(:disabled)': {
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
      },
      '&.accordion-button-expanded': {
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
        fontWeight: semanticTokens.typography['label-base'].fontWeight,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
    panel: {
      padding: semanticTokens.spacing['component-lg'],
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      fontSize: semanticTokens.typography['paragraph-base'].fontSize,
      lineHeight: semanticTokens.typography['paragraph-base'].lineHeight,
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
    },
    icon: {
      marginRight: semanticTokens.spacing['component-sm'],
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      flexShrink: 0,
    },
    title: {
      flex: 1,
    },
    caret: {
      marginLeft: semanticTokens.spacing['component-sm'],
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      flexShrink: 0,
      transition: 'transform 0.2s ease-in-out',
    },
    variants: {
      default: {
        backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      },
      bordered: {
        border: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      },
      elevated: {
        boxShadow: semanticTokens.shadows['elevation-1'],
        backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      },
    },
    sizes: {
      sm: {
        button: {
          padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-md']}`,
          fontSize: semanticTokens.typography['label-sm'].fontSize,
        },
        panel: {
          padding: semanticTokens.spacing['component-md'],
          fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
        },
      },
      md: {
        button: {
          padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-lg']}`,
          fontSize: semanticTokens.typography['label-base'].fontSize,
        },
        panel: {
          padding: semanticTokens.spacing['component-lg'],
          fontSize: semanticTokens.typography['paragraph-base'].fontSize,
        },
      },
      lg: {
        button: {
          padding: `${semanticTokens.spacing['component-lg']} ${semanticTokens.spacing['component-xl']}`,
          fontSize: semanticTokens.typography['label-lg'].fontSize,
        },
        panel: {
          padding: `${semanticTokens.spacing['component-lg']} ${semanticTokens.spacing['component-xl']}`,
          fontSize: semanticTokens.typography['paragraph-lg'].fontSize,
        },
      },
    },
  },

  table: {
    base: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    container: {
      position: 'relative',
      width: '100%',
      overflow: 'auto',
    },
    header: {
      backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
    },
    headerCell: {
      padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-md']}`,
      fontWeight: semanticTokens.typography['label-sm'].fontWeight,
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      textAlign: 'left',
      borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      whiteSpace: 'nowrap',
      '&.sortable': {
        cursor: 'pointer',
        userSelect: 'none',
        '&:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
        },
      },
      '&.table-selection-cell': {
        width: '48px',
        padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-sm']}`,
        backgroundColor: 'inherit',
        borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      },
    },
    cell: {
      padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-md']}`,
      borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      '&.table-selection-cell': {
        width: '48px',
        padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-sm']}`,
        backgroundColor: 'inherit',
        borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
        textAlign: 'center',
      },
    },
    row: {
      transition: 'background-color 0.2s ease-in-out',
      '&.selected': {
        backgroundColor: `${getColorValue(semanticTokens.colors['interactive-tertiary'], mode)}15`,
        '.table-selection-cell': {
          backgroundColor: 'inherit',
          borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
        },
      },
      '&:hover': {
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
        '.table-selection-cell': {
          backgroundColor: 'inherit',
        },
      },
    },
    empty: {
      padding: `${semanticTokens.spacing['component-lg']}`,
      textAlign: 'center',
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
    },
    loadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loadingSpinner: {
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      border: `3px solid ${getColorValue(semanticTokens.colors['interactive-primary'], mode)}`,
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite',
    },
    loadingSpinnerSm: {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
      border: `2px solid ${getColorValue(semanticTokens.colors['interactive-primary'], mode)}`,
      borderTopColor: 'transparent',
      animation: 'spin 1s linear infinite',
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    sortIcon: {
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      transition: 'color 0.2s ease-in-out',
      '&.active': {
        color: getColorValue(semanticTokens.colors['interactive-primary'], mode),
      },
    },
    sortIconDefault: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '14px',
    },
    loadMore: {
      display: 'flex',
      justifyContent: 'center',
      padding: semanticTokens.spacing['component-md'],
      borderTop: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
    },
    filterButton: {
      padding: semanticTokens.spacing['component-xs'],
      borderRadius: semanticTokens.borderRadius['radius-sm'],
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      '&:hover': {
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
      },
      '&.active': {
        color: getColorValue(semanticTokens.colors['interactive-primary'], mode),
      },
    },
    filterDropdown: {
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: semanticTokens.spacing['component-xs'],
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      border: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
      borderRadius: semanticTokens.borderRadius['radius-sm'],
      boxShadow: semanticTokens.shadows['elevation-4'],
      minWidth: '200px',
      zIndex: 50,
    },
    filterDropdownHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: semanticTokens.spacing['component-sm'],
      borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-primary'], mode)}`,
    },
    filterDropdownTitle: {
      fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
      fontWeight: semanticTokens.typography['paragraph-sm-medium'].fontWeight,
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
    },
    filterClearButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: semanticTokens.spacing['component-xs'],
      fontSize: semanticTokens.typography['paragraph-sm'].fontSize,
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      '&:hover': {
        color: getColorValue(semanticTokens.colors['text-primary'], mode),
      },
    },
    filterDropdownContent: {
      maxHeight: '200px',
      overflowY: 'auto',
      padding: semanticTokens.spacing['component-xs'],
      position: 'relative',
      zIndex: 51,
    },
    filterOption: {
      padding: semanticTokens.spacing['component-xs'],
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
      },
      width: '100%',
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: semanticTokens.spacing['component-xs'],
    },
    variants: {
      bordered: {
        border: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
        borderRadius: semanticTokens.borderRadius['radius-md'],
        overflow: 'hidden',
      },
      striped: {
        '.table-row:nth-child(even)': {
          backgroundColor: getColorValue(semanticTokens.colors['background-secondary'], mode),
        },
      },
      hoverable: {
        '.table-row:hover': {
          backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
          cursor: 'pointer',
        },
      },
    },
    sizes: {
      compact: {
        headerCell: {
          padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-sm']}`,
        },
        cell: {
          padding: `${semanticTokens.spacing['component-sm']} ${semanticTokens.spacing['component-sm']}`,
        },
      },
      default: {
        headerCell: {
          padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-md']}`,
        },
        cell: {
          padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-md']}`,
        },
      },
    },
  },

  drawer: {
    base: {
      position: 'fixed',
      zIndex: 50,
      backgroundColor: getColorValue(semanticTokens.colors['background-primary'], mode),
      boxShadow: semanticTokens.shadows['elevation-4'],
      transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 40,
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
      '&.drawer-overlay-open': {
        opacity: 1,
        visibility: 'visible',
      },
    },
    header: {
      padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-lg']}`,
      borderBottom: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: getColorValue(semanticTokens.colors['text-primary'], mode),
      fontWeight: semanticTokens.typography['heading-sm'].fontWeight,
      fontSize: semanticTokens.typography['heading-sm'].fontSize,
      lineHeight: semanticTokens.typography['heading-sm'].lineHeight,
    },
    closeButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: getColorValue(semanticTokens.colors['text-tertiary'], mode),
      padding: semanticTokens.spacing['component-xs'],
      borderRadius: semanticTokens.borderRadius['radius-sm'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        color: getColorValue(semanticTokens.colors['text-primary'], mode),
        backgroundColor: getColorValue(semanticTokens.colors['background-hover'], mode),
      },
    },
    body: {
      padding: semanticTokens.spacing['component-lg'],
      flex: '1 1 auto',
      overflowY: 'auto',
    },
    footer: {
      padding: `${semanticTokens.spacing['component-md']} ${semanticTokens.spacing['component-lg']}`,
      borderTop: `1px solid ${getColorValue(semanticTokens.colors['border-secondary'], mode)}`,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: semanticTokens.spacing['component-md'],
    },
    variants: {
      right: {
        top: 0,
        right: 0,
        bottom: 0,
        transform: 'translateX(100%)',
        '&.drawer-open': {
          transform: 'translateX(0)',
        },
      },
      left: {
        top: 0,
        left: 0,
        bottom: 0,
        transform: 'translateX(-100%)',
        '&.drawer-open': {
          transform: 'translateX(0)',
        },
      },
      top: {
        top: 0,
        left: 0,
        right: 0,
        transform: 'translateY(-100%)',
        '&.drawer-open': {
          transform: 'translateY(0)',
        },
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        transform: 'translateY(100%)',
        '&.drawer-open': {
          transform: 'translateY(0)',
        },
      },
    },
    sizes: {
      sm: {
        '&.drawer-right, &.drawer-left': {
          width: '300px',
        },
        '&.drawer-top, &.drawer-bottom': {
          height: '250px',
        },
      },
      md: {
        '&.drawer-right, &.drawer-left': {
          width: '400px',
        },
        '&.drawer-top, &.drawer-bottom': {
          height: '350px',
        },
      },
      lg: {
        '&.drawer-right, &.drawer-left': {
          width: '550px',
        },
        '&.drawer-top, &.drawer-bottom': {
          height: '450px',
        },
      },
      full: {
        '&.drawer-right, &.drawer-left': {
          width: '100%',
          maxWidth: '650px',
        },
        '&.drawer-top, &.drawer-bottom': {
          height: '100%',
          maxHeight: '90vh',
        },
      },
    },
  },
});

export const componentTokens = {
  light: getComponentTokens('light'),
  dark: getComponentTokens('dark'),
} as const;