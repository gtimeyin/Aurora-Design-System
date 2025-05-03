import { primitiveTokens } from './primitive';

export const semanticTokens = {
  colors: {
    // Background colors
    'background-primary': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-950'],
      default: primitiveTokens.colors['white'], // default to light mode
    },
    'background-primary-alt': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-900'],
      default: primitiveTokens.colors['white'], // default to light mode
    },
    'background-secondary': {
      light: primitiveTokens.colors['slate-25'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-25'],
    },
    'background-tertiary': {
      light: primitiveTokens.colors['slate-50'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-50'],
    },
    'background-quaternary': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-100'],
    },
    'background-quinary': {
      light: primitiveTokens.colors['slate-200'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-200'],
    },
    'background-active': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-100'],
    },
    'background-hover': {
      light: primitiveTokens.colors['slate-50'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-50'],
    },
    'background-inverse': primitiveTokens.colors['slate-900'],
    'background-disabled': primitiveTokens.colors['slate-200'],
    

    //foreground colors
    'foreground-primary': {
      light: primitiveTokens.colors['slate-900'],
      dark: primitiveTokens.colors['gray-50'],
      default: primitiveTokens.colors['slate-900'],
    },
    'foreground-secondary': {
      light: primitiveTokens.colors['slate-700'],
      dark: primitiveTokens.colors['gray-200'],
      default: primitiveTokens.colors['slate-700'],
    },
    'foreground-tertiary': {
      light: primitiveTokens.colors['slate-500'],
      dark: primitiveTokens.colors['gray-300'],
      default: primitiveTokens.colors['slate-500'],
    },
    'foreground-quaternary': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-400'],
      default: primitiveTokens.colors['slate-300'],
    },
    'foreground-quinary': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-100'],
    },
    'foreground-disabled': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-400'],
      default: primitiveTokens.colors['slate-300'],
    },
    'foreground-inverse-primary': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-900'],
      default: primitiveTokens.colors['white'],
    },
    'foreground-inverse-secondary': { 
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-100'],
    },
    'foreground-inverse-tertiary': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-400'],
      default: primitiveTokens.colors['slate-300'],
    },
    'foreground-inverse-quaternary': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-100'],
    },
    'foreground-inverse-quinary': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-900'],
      default: primitiveTokens.colors['white'],
    },
    'foreground-inverse-disabled': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-400'],
      default: primitiveTokens.colors['slate-300'],
    },
    
    // Text colors
    'text-primary': {
      light: primitiveTokens.colors['slate-900'],
      dark: primitiveTokens.colors['gray-50'],
      default: primitiveTokens.colors['slate-900'],
    },
    'text-secondary': {
      light: primitiveTokens.colors['slate-700'],
      dark: primitiveTokens.colors['gray-200'],
      default: primitiveTokens.colors['slate-700'],
    },
    'text-tertiary': {
      light: primitiveTokens.colors['slate-500'],
      dark: primitiveTokens.colors['gray-300'],
      default: primitiveTokens.colors['slate-500'],
    },
    'text-link': {
      light: primitiveTokens.colors['indigo-500'],
      dark: primitiveTokens.colors['bumblebee-400'],
      default: primitiveTokens.colors['indigo-500'],
    },
    'text-link-hover': {
      light: primitiveTokens.colors['indigo-400'],
      dark: primitiveTokens.colors['bumblebee-300'],
      default: primitiveTokens.colors['indigo-400'],
    },
    'text-link-active': {
      light: primitiveTokens.colors['indigo-600'],
      dark: primitiveTokens.colors['bumblebee-200'],
      default: primitiveTokens.colors['indigo-600'],
    },
    'text-disabled': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-400'],
      default: primitiveTokens.colors['slate-300'],
    },
    'text-inverse-primary': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-900'],
      default: primitiveTokens.colors['white'],
    },
    'text-inverse-secondary': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-100'],
    },

    // Border colors
    'border-primary': {
      light: primitiveTokens.colors['slate-300'],
      dark: primitiveTokens.colors['gray-600'],
      default: primitiveTokens.colors['slate-300'],
    },
    'border-secondary': {
      light: primitiveTokens.colors['slate-200'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-200'],
    },
    'border-tertiary': {
      light: primitiveTokens.colors['slate-100'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['slate-100'],
    },
    'border-success': {
      light: primitiveTokens.colors['green-500'],
      dark: primitiveTokens.colors['green-300'],
      default: primitiveTokens.colors['green-500'],
    },
    'border-success-subtle': {
      light: primitiveTokens.colors['green-300'],
      dark: primitiveTokens.colors['green-700'],
      default: primitiveTokens.colors['green-300'],
    },
    'border-error': primitiveTokens.colors['red-500'],
    'border-error-subtle': primitiveTokens.colors['red-100'],
    'border-info': primitiveTokens.colors['sky-500'],
    'border-active': primitiveTokens.colors['indigo-500'],
    'border-focus': primitiveTokens.colors['indigo-500'],

    // Interactive colors
    'interactive-primary': {
      light: primitiveTokens.colors['indigo-600'],
      dark: primitiveTokens.colors['bumblebee-400'],
      default: primitiveTokens.colors['indigo-600'],
    },
    'interactive-secondary': primitiveTokens.colors['indigo-500'],
    'interactive-tertiary': primitiveTokens.colors['indigo-400'],
    'interactive-hover': {
      light: primitiveTokens.colors['indigo-700'],
      dark: primitiveTokens.colors['bumblebee-300'],
      default: primitiveTokens.colors['indigo-700'],
    },
    'interactive-active': {
      light: primitiveTokens.colors['indigo-800'],
      dark: primitiveTokens.colors['bumblebee-200'],
      default: primitiveTokens.colors['indigo-800'],
    },
    'interactive-disabled': primitiveTokens.colors['slate-300'],

    // button colors
    'button-primary': {
      light: primitiveTokens.colors['indigo-500'],
      dark: primitiveTokens.colors['bumblebee-500'],
      default: primitiveTokens.colors['indigo-500'],
    },
    'button-primary-hover': {
      light: primitiveTokens.colors['indigo-600'],
      dark: primitiveTokens.colors['bumblebee-600'],
      default: primitiveTokens.colors['indigo-600'],
    },
    'button-primary-active': {
      light: primitiveTokens.colors['indigo-700'],
      dark: primitiveTokens.colors['bumblebee-300'],
      default: primitiveTokens.colors['indigo-700'],
    },
    'button-primary-disabled': {
      light: primitiveTokens.colors['indigo-100'],
      dark: primitiveTokens.colors['bumblebee-700'],
      default: primitiveTokens.colors['indigo-100'],
    },

    'button-secondary': {
      light: primitiveTokens.colors['white'],
      dark: primitiveTokens.colors['gray-950'],
      default: primitiveTokens.colors['white'],
    },
    'button-secondary-hover': {
      light: primitiveTokens.colors['indigo-50'],
      dark: primitiveTokens.colors['gray-800'],
      default: primitiveTokens.colors['indigo-50'],
    },
    'button-secondary-active': {
      light: primitiveTokens.colors['slate-200'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-200'],
    },
    'button-secondary-disabled': {
      light: primitiveTokens.colors['slate-200'],
      dark: primitiveTokens.colors['gray-700'],
      default: primitiveTokens.colors['slate-200'],
    },

    'button-white': {
      light: primitiveTokens.colors['indigo-500'],
      dark: primitiveTokens.colors['bumblebee-500'],
      default: primitiveTokens.colors['indigo-500'],
    },
    'button-white-hover': {
      light: primitiveTokens.colors['indigo-400'],
      dark: primitiveTokens.colors['bumblebee-400'],
      default: primitiveTokens.colors['indigo-400'],
    },
    'button-white-active': {
      light: primitiveTokens.colors['indigo-600'],
      dark: primitiveTokens.colors['bumblebee-600'],
      default: primitiveTokens.colors['indigo-600'],
    },
    'button-white-disabled': {
      light: primitiveTokens.colors['indigo-100'],
      dark: primitiveTokens.colors['bumblebee-700'],
      default: primitiveTokens.colors['indigo-100'],
    },

    'button-tertiary': primitiveTokens.colors['indigo-400'],
    'button-hover': {
      light: primitiveTokens.colors['indigo-700'],
      dark: primitiveTokens.colors['bumblebee-300'],
      default: primitiveTokens.colors['indigo-700'],
    },
    'button-active': {
      light: primitiveTokens.colors['indigo-800'],
      dark: primitiveTokens.colors['bumblebee-200'],
      default: primitiveTokens.colors['indigo-800'],
    },
    'button-disabled': primitiveTokens.colors['slate-300'],

    // Status colors
    'status-error': {
      light: primitiveTokens.colors['red-500'],
      dark: primitiveTokens.colors['red-500'],
      default: primitiveTokens.colors['red-500'],
    },
    'status-error-hover': {
      light: primitiveTokens.colors['red-600'],
      dark: primitiveTokens.colors['red-400'],
      default: primitiveTokens.colors['red-600'],
    },
    'status-error-active': {
      light: primitiveTokens.colors['red-800'],
      dark: primitiveTokens.colors['red-300'],
      default: primitiveTokens.colors['red-800'],
    },
    'status-error-disabled': {
      light: primitiveTokens.colors['red-200'],
      dark: primitiveTokens.colors['red-800'],
      default: primitiveTokens.colors['red-200'],
    },
    'status-error-subtle': {
      light: primitiveTokens.colors['red-50'],
      dark: primitiveTokens.colors['red-900'],
      default: primitiveTokens.colors['red-50'],
    },
    'status-error-subtle-hover': {
      light: primitiveTokens.colors['red-100'],
      dark: primitiveTokens.colors['red-800'],
      default: primitiveTokens.colors['red-100'],
    },
    
    'status-success': {
      light: primitiveTokens.colors['green-600'],
      dark: primitiveTokens.colors['green-500'],
      default: primitiveTokens.colors['green-600'],
    },
    'status-success-subtle': primitiveTokens.colors['green-100'],
    'status-success-disabled': primitiveTokens.colors['green-200'],
    'status-success-hover': primitiveTokens.colors['green-400'],
    'status-success-active': primitiveTokens.colors['green-700'],
    'status-warning': {
      light: primitiveTokens.colors['orange-600'],
      dark: primitiveTokens.colors['orange-500'],
      default: primitiveTokens.colors['orange-600'],
    },
    'status-warning-subtle': primitiveTokens.colors['orange-100'],
    'status-info': {
      light: primitiveTokens.colors['blue-600'],
      dark: primitiveTokens.colors['blue-500'],
      default: primitiveTokens.colors['blue-600'],
    },
    'status-info-subtle': primitiveTokens.colors['sky-100'],

    // Accent colors
    'accent-aqua': primitiveTokens.colors['aqua-500'],
    'accent-bumblebee': primitiveTokens.colors['bumblebee-500'],
    'accent-fuchsia': primitiveTokens.colors['fuchsia-500'],
    'accent-pink': primitiveTokens.colors['pink-500'],
    'accent-lemon': primitiveTokens.colors['lemon-500'],
    'accent-violet': primitiveTokens.colors['violet-500'],
    'accent-blue': primitiveTokens.colors['blue-500'],
    'accent-sky': primitiveTokens.colors['sky-500'],

    // Utility colors - Brand (Indigo)
    'utility-brand-25': {
      light: primitiveTokens.colors['indigo-25'],
      dark: primitiveTokens.colors['indigo-950'],
      default: primitiveTokens.colors['indigo-25'],
    },
    'utility-brand-50': {
      light: primitiveTokens.colors['indigo-50'],
      dark: primitiveTokens.colors['indigo-900'],
      default: primitiveTokens.colors['indigo-50'],
    },
    'utility-brand-100': {
      light: primitiveTokens.colors['indigo-100'],
      dark: primitiveTokens.colors['indigo-800'],
      default: primitiveTokens.colors['indigo-100'],
    },
    'utility-brand-200': {
      light: primitiveTokens.colors['indigo-200'],
      dark: primitiveTokens.colors['indigo-700'],
      default: primitiveTokens.colors['indigo-200'],
    },
    'utility-brand-300': {
      light: primitiveTokens.colors['indigo-300'],
      dark: primitiveTokens.colors['indigo-600'],
      default: primitiveTokens.colors['indigo-300'],
    },
    'utility-brand-400': {
      light: primitiveTokens.colors['indigo-400'],
      dark: primitiveTokens.colors['indigo-500'],
      default: primitiveTokens.colors['indigo-400'],
    },
    'utility-brand-500': {
      light: primitiveTokens.colors['indigo-500'],
      dark: primitiveTokens.colors['indigo-400'],
      default: primitiveTokens.colors['indigo-500'],
    },
    'utility-brand-600': {
      light: primitiveTokens.colors['indigo-600'],
      dark: primitiveTokens.colors['indigo-300'],
      default: primitiveTokens.colors['indigo-600'],
    },
    'utility-brand-700': {
      light: primitiveTokens.colors['indigo-700'],
      dark: primitiveTokens.colors['indigo-200'],
      default: primitiveTokens.colors['indigo-700'],
    },
    'utility-brand-800': {
      light: primitiveTokens.colors['indigo-800'],
      dark: primitiveTokens.colors['indigo-100'],
      default: primitiveTokens.colors['indigo-800'],
    },
    'utility-brand-900': {
      light: primitiveTokens.colors['indigo-900'],
      dark: primitiveTokens.colors['indigo-50'],
      default: primitiveTokens.colors['indigo-900'],
    },
    'utility-brand-950': {
      light: primitiveTokens.colors['indigo-950'],
      dark: primitiveTokens.colors['indigo-25'],
      default: primitiveTokens.colors['indigo-950'],
    },

    // Utility colors - Error (Red)
    'utility-error-25': {
      light: primitiveTokens.colors['red-25'],
      dark: primitiveTokens.colors['red-950'],
      default: primitiveTokens.colors['red-25'],
    },
    'utility-error-50': {
      light: primitiveTokens.colors['red-50'],
      dark: primitiveTokens.colors['red-900'],
      default: primitiveTokens.colors['red-50'],
    },
    'utility-error-100': {
      light: primitiveTokens.colors['red-100'],
      dark: primitiveTokens.colors['red-800'],
      default: primitiveTokens.colors['red-100'],
    },
    'utility-error-200': {
      light: primitiveTokens.colors['red-200'],
      dark: primitiveTokens.colors['red-700'],
      default: primitiveTokens.colors['red-200'],
    },
    'utility-error-300': {
      light: primitiveTokens.colors['red-300'],
      dark: primitiveTokens.colors['red-600'],
      default: primitiveTokens.colors['red-300'],
    },
    'utility-error-400': {
      light: primitiveTokens.colors['red-400'],
      dark: primitiveTokens.colors['red-500'],
      default: primitiveTokens.colors['red-400'],
    },
    'utility-error-500': {
      light: primitiveTokens.colors['red-500'],
      dark: primitiveTokens.colors['red-400'],
      default: primitiveTokens.colors['red-500'],
    },
    'utility-error-600': {
      light: primitiveTokens.colors['red-600'],
      dark: primitiveTokens.colors['red-300'],
      default: primitiveTokens.colors['red-600'],
    },
    'utility-error-700': {
      light: primitiveTokens.colors['red-700'],
      dark: primitiveTokens.colors['red-200'],
      default: primitiveTokens.colors['red-700'],
    },
    'utility-error-800': {
      light: primitiveTokens.colors['red-800'],
      dark: primitiveTokens.colors['red-100'],
      default: primitiveTokens.colors['red-800'],
    },
    'utility-error-900': {
      light: primitiveTokens.colors['red-900'],
      dark: primitiveTokens.colors['red-50'],
      default: primitiveTokens.colors['red-900'],
    },
    'utility-error-950': {
      light: primitiveTokens.colors['red-950'],
      dark: primitiveTokens.colors['red-25'],
      default: primitiveTokens.colors['red-950'],
    },

    // Utility colors - Fuchsia
    'utility-fuchsia-25': {
      light: primitiveTokens.colors['fuchsia-25'],
      dark: primitiveTokens.colors['fuchsia-950'],
      default: primitiveTokens.colors['fuchsia-25'],
    },
    'utility-fuchsia-50': {
      light: primitiveTokens.colors['fuchsia-50'],
      dark: primitiveTokens.colors['fuchsia-900'],
      default: primitiveTokens.colors['fuchsia-50'],
    },
    'utility-fuchsia-100': {
      light: primitiveTokens.colors['fuchsia-100'],
      dark: primitiveTokens.colors['fuchsia-800'],
      default: primitiveTokens.colors['fuchsia-100'],
    },
    'utility-fuchsia-200': {
      light: primitiveTokens.colors['fuchsia-200'],
      dark: primitiveTokens.colors['fuchsia-700'],
      default: primitiveTokens.colors['fuchsia-200'],
    },
    'utility-fuchsia-300': {
      light: primitiveTokens.colors['fuchsia-300'],
      dark: primitiveTokens.colors['fuchsia-600'],
      default: primitiveTokens.colors['fuchsia-300'],
    },
    'utility-fuchsia-400': {
      light: primitiveTokens.colors['fuchsia-400'],
      dark: primitiveTokens.colors['fuchsia-500'],
      default: primitiveTokens.colors['fuchsia-400'],
    },
    'utility-fuchsia-500': {
      light: primitiveTokens.colors['fuchsia-500'],
      dark: primitiveTokens.colors['fuchsia-400'],
      default: primitiveTokens.colors['fuchsia-500'],
    },
    'utility-fuchsia-600': {
      light: primitiveTokens.colors['fuchsia-600'],
      dark: primitiveTokens.colors['fuchsia-300'],
      default: primitiveTokens.colors['fuchsia-600'],
    },
    'utility-fuchsia-700': {
      light: primitiveTokens.colors['fuchsia-700'],
      dark: primitiveTokens.colors['fuchsia-200'],
      default: primitiveTokens.colors['fuchsia-700'],
    },
    'utility-fuchsia-800': {
      light: primitiveTokens.colors['fuchsia-800'],
      dark: primitiveTokens.colors['fuchsia-100'],
      default: primitiveTokens.colors['fuchsia-800'],
    },
    'utility-fuchsia-900': {
      light: primitiveTokens.colors['fuchsia-900'],
      dark: primitiveTokens.colors['fuchsia-50'],
      default: primitiveTokens.colors['fuchsia-900'],
    },
    'utility-fuchsia-950': {
      light: primitiveTokens.colors['fuchsia-950'],
      dark: primitiveTokens.colors['fuchsia-25'],
      default: primitiveTokens.colors['fuchsia-950'],
    },

    // Utility colors - Pink
    'utility-pink-25': {
      light: primitiveTokens.colors['pink-25'],
      dark: primitiveTokens.colors['pink-950'],
      default: primitiveTokens.colors['pink-25'],
    },
    'utility-pink-50': {
      light: primitiveTokens.colors['pink-50'],
      dark: primitiveTokens.colors['pink-900'],
      default: primitiveTokens.colors['pink-50'],
    },
    'utility-pink-100': {
      light: primitiveTokens.colors['pink-100'],
      dark: primitiveTokens.colors['pink-800'],
      default: primitiveTokens.colors['pink-100'],
    },
    'utility-pink-200': {
      light: primitiveTokens.colors['pink-200'],
      dark: primitiveTokens.colors['pink-700'],
      default: primitiveTokens.colors['pink-200'],
    },
    'utility-pink-300': {
      light: primitiveTokens.colors['pink-300'],
      dark: primitiveTokens.colors['pink-600'],
      default: primitiveTokens.colors['pink-300'],
    },
    'utility-pink-400': {
      light: primitiveTokens.colors['pink-400'],
      dark: primitiveTokens.colors['pink-500'],
      default: primitiveTokens.colors['pink-400'],
    },
    'utility-pink-500': {
      light: primitiveTokens.colors['pink-500'],
      dark: primitiveTokens.colors['pink-400'],
      default: primitiveTokens.colors['pink-500'],
    },
    'utility-pink-600': {
      light: primitiveTokens.colors['pink-600'],
      dark: primitiveTokens.colors['pink-300'],
      default: primitiveTokens.colors['pink-600'],
    },
    'utility-pink-700': {
      light: primitiveTokens.colors['pink-700'],
      dark: primitiveTokens.colors['pink-200'],
      default: primitiveTokens.colors['pink-700'],
    },
    'utility-pink-800': {
      light: primitiveTokens.colors['pink-800'],
      dark: primitiveTokens.colors['pink-100'],
      default: primitiveTokens.colors['pink-800'],
    },
    'utility-pink-900': {
      light: primitiveTokens.colors['pink-900'],
      dark: primitiveTokens.colors['pink-50'],
      default: primitiveTokens.colors['pink-900'],
    },
    'utility-pink-950': {
      light: primitiveTokens.colors['pink-950'],
      dark: primitiveTokens.colors['pink-25'],
      default: primitiveTokens.colors['pink-950'],
    },
    
    // Utility colors - Aqua
    'utility-aqua-25': {
      light: primitiveTokens.colors['aqua-25'],
      dark: primitiveTokens.colors['aqua-950'],
      default: primitiveTokens.colors['aqua-25'],
    },
    'utility-aqua-50': {
      light: primitiveTokens.colors['aqua-50'],
      dark: primitiveTokens.colors['aqua-900'],
      default: primitiveTokens.colors['aqua-50'],
    },
    'utility-aqua-100': {
      light: primitiveTokens.colors['aqua-100'],
      dark: primitiveTokens.colors['aqua-800'],
      default: primitiveTokens.colors['aqua-100'],
    },
    'utility-aqua-200': {
      light: primitiveTokens.colors['aqua-200'],
      dark: primitiveTokens.colors['aqua-700'], 
      default: primitiveTokens.colors['aqua-200'],
    },
    'utility-aqua-300': {
      light: primitiveTokens.colors['aqua-300'],
      dark: primitiveTokens.colors['aqua-600'],
      default: primitiveTokens.colors['aqua-300'],
    },
    'utility-aqua-400': {
      light: primitiveTokens.colors['aqua-400'],
      dark: primitiveTokens.colors['aqua-500'],
      default: primitiveTokens.colors['aqua-400'],
    },
    'utility-aqua-500': {
      light: primitiveTokens.colors['aqua-500'],
      dark: primitiveTokens.colors['aqua-400'], 
      default: primitiveTokens.colors['aqua-500'],
    },
    'utility-aqua-600': {
      light: primitiveTokens.colors['aqua-600'],
      dark: primitiveTokens.colors['aqua-300'],
      default: primitiveTokens.colors['aqua-600'],  
    },
    'utility-aqua-700': {
      light: primitiveTokens.colors['aqua-700'],
      dark: primitiveTokens.colors['aqua-200'],
      default: primitiveTokens.colors['aqua-700'],
    },  
    'utility-aqua-800': {
      light: primitiveTokens.colors['aqua-800'],
      dark: primitiveTokens.colors['aqua-100'],
      default: primitiveTokens.colors['aqua-800'],
    },
    'utility-aqua-900': {
      light: primitiveTokens.colors['aqua-900'],
      dark: primitiveTokens.colors['aqua-50'],
      default: primitiveTokens.colors['aqua-900'],
    },
    'utility-aqua-950': {
      light: primitiveTokens.colors['aqua-950'], 
      dark: primitiveTokens.colors['aqua-25'],
      default: primitiveTokens.colors['aqua-950'],
    },
    
    // Utility colors - Bumblebee
    'utility-bumblebee-25': {
      light: primitiveTokens.colors['bumblebee-25'],
      dark: primitiveTokens.colors['bumblebee-950'],
      default: primitiveTokens.colors['bumblebee-25'],
    },
    'utility-bumblebee-50': {
      light: primitiveTokens.colors['bumblebee-50'],
      dark: primitiveTokens.colors['bumblebee-900'],
      default: primitiveTokens.colors['bumblebee-50'],
    },
    'utility-bumblebee-100': {
      light: primitiveTokens.colors['bumblebee-100'],
      dark: primitiveTokens.colors['bumblebee-800'],
      default: primitiveTokens.colors['bumblebee-100'],
    },
    'utility-bumblebee-200': {
      light: primitiveTokens.colors['bumblebee-200'],
      dark: primitiveTokens.colors['bumblebee-700'],
      default: primitiveTokens.colors['bumblebee-200'],
    },
    'utility-bumblebee-300': {
      light: primitiveTokens.colors['bumblebee-300'],
      dark: primitiveTokens.colors['bumblebee-600'],
      default: primitiveTokens.colors['bumblebee-300'],
    },
    'utility-bumblebee-400': {
      light: primitiveTokens.colors['bumblebee-400'],
      dark: primitiveTokens.colors['bumblebee-500'],
      default: primitiveTokens.colors['bumblebee-400'],
    },
    'utility-bumblebee-500': {
      light: primitiveTokens.colors['bumblebee-500'],
      dark: primitiveTokens.colors['bumblebee-400'],
      default: primitiveTokens.colors['bumblebee-500'],
    },
    'utility-bumblebee-600': {
      light: primitiveTokens.colors['bumblebee-600'],
      dark: primitiveTokens.colors['bumblebee-300'],
      default: primitiveTokens.colors['bumblebee-600'],
    },
    'utility-bumblebee-700': {
      light: primitiveTokens.colors['bumblebee-700'],
      dark: primitiveTokens.colors['bumblebee-200'],
      default: primitiveTokens.colors['bumblebee-700'],
    },
    'utility-bumblebee-800': {
      light: primitiveTokens.colors['bumblebee-800'],
      dark: primitiveTokens.colors['bumblebee-100'],
      default: primitiveTokens.colors['bumblebee-800'],
    },
    'utility-bumblebee-900': {
      light: primitiveTokens.colors['bumblebee-900'],
      dark: primitiveTokens.colors['bumblebee-50'],
      default: primitiveTokens.colors['bumblebee-900'],
    },
    'utility-bumblebee-950': {
      light: primitiveTokens.colors['bumblebee-950'],
      dark: primitiveTokens.colors['bumblebee-25'],
      default: primitiveTokens.colors['bumblebee-950'],
    },
    
    // Utility colors - Lemon
    'utility-lemon-25': {
      light: primitiveTokens.colors['lemon-25'],
      dark: primitiveTokens.colors['lemon-950'],
      default: primitiveTokens.colors['lemon-25'],
    },
    'utility-lemon-50': {
      light: primitiveTokens.colors['lemon-50'],
      dark: primitiveTokens.colors['lemon-900'],
      default: primitiveTokens.colors['lemon-50'],
    },
    'utility-lemon-100': {
      light: primitiveTokens.colors['lemon-100'],
      dark: primitiveTokens.colors['lemon-800'],
      default: primitiveTokens.colors['lemon-100'],
    },
    'utility-lemon-200': {
      light: primitiveTokens.colors['lemon-200'],
      dark: primitiveTokens.colors['lemon-700'],
      default: primitiveTokens.colors['lemon-200'],
    }, 
    'utility-lemon-300': {
      light: primitiveTokens.colors['lemon-300'],
      dark: primitiveTokens.colors['lemon-600'],
      default: primitiveTokens.colors['lemon-300'],
    },
    'utility-lemon-400': {
      light: primitiveTokens.colors['lemon-400'],
      dark: primitiveTokens.colors['lemon-500'],
      default: primitiveTokens.colors['lemon-400'],
    },
    'utility-lemon-500': {
      light: primitiveTokens.colors['lemon-500'],
      dark: primitiveTokens.colors['lemon-400'],
      default: primitiveTokens.colors['lemon-500'],
    },
    'utility-lemon-600': {
      light: primitiveTokens.colors['lemon-600'], 
      dark: primitiveTokens.colors['lemon-300'],
      default: primitiveTokens.colors['lemon-600'],
    },
    'utility-lemon-700': {
      light: primitiveTokens.colors['lemon-700'],
      dark: primitiveTokens.colors['lemon-200'],
      default: primitiveTokens.colors['lemon-700'],
    },
    'utility-lemon-800': {
      light: primitiveTokens.colors['lemon-800'],
      dark: primitiveTokens.colors['lemon-100'],
      default: primitiveTokens.colors['lemon-800'],
    },
    'utility-lemon-900': {
      light: primitiveTokens.colors['lemon-900'],
      dark: primitiveTokens.colors['lemon-50'],
      default: primitiveTokens.colors['lemon-900'],
    },
    'utility-lemon-950': {
      light: primitiveTokens.colors['lemon-950'],
      dark: primitiveTokens.colors['lemon-25'],
      default: primitiveTokens.colors['lemon-950'],
    },
    
    // ... (similar pattern for lemon-50 through lemon-950)

    // Utility colors - Violet
    'utility-violet-25': {
      light: primitiveTokens.colors['violet-25'],
      dark: primitiveTokens.colors['violet-950'],
      default: primitiveTokens.colors['violet-25'],
    },
    'utility-violet-50': {
      light: primitiveTokens.colors['violet-50'],
      dark: primitiveTokens.colors['violet-900'],
      default: primitiveTokens.colors['violet-50'],
    },
    'utility-violet-100': {
      light: primitiveTokens.colors['violet-100'],
      dark: primitiveTokens.colors['violet-800'],
      default: primitiveTokens.colors['violet-100'],
    },
    'utility-violet-200': {
      light: primitiveTokens.colors['violet-200'],
      dark: primitiveTokens.colors['violet-700'],
      default: primitiveTokens.colors['violet-200'],
    },
    'utility-violet-300': {
      light: primitiveTokens.colors['violet-300'],
      dark: primitiveTokens.colors['violet-600'],
      default: primitiveTokens.colors['violet-300'],
    },
    'utility-violet-400': {
      light: primitiveTokens.colors['violet-400'],
      dark: primitiveTokens.colors['violet-500'],
      default: primitiveTokens.colors['violet-400'],
    },
    'utility-violet-500': {
      light: primitiveTokens.colors['violet-500'],
      dark: primitiveTokens.colors['violet-400'],
      default: primitiveTokens.colors['violet-500'],
    },
    'utility-violet-600': {
      light: primitiveTokens.colors['violet-600'],
      dark: primitiveTokens.colors['violet-300'],
      default: primitiveTokens.colors['violet-600'],
    },
    'utility-violet-700': {
      light: primitiveTokens.colors['violet-700'],
      dark: primitiveTokens.colors['violet-200'],
      default: primitiveTokens.colors['violet-700'],
    },
    'utility-violet-800': {
      light: primitiveTokens.colors['violet-800'],
      dark: primitiveTokens.colors['violet-100'],
      default: primitiveTokens.colors['violet-800'],
    },
    'utility-violet-900': {
      light: primitiveTokens.colors['violet-900'],
      dark: primitiveTokens.colors['violet-50'],
      default: primitiveTokens.colors['violet-900'],
    },
    'utility-violet-950': {
      light: primitiveTokens.colors['violet-950'],
      dark: primitiveTokens.colors['violet-25'],
      default: primitiveTokens.colors['violet-950'],
    },

    // Utility colors - Blue
    'utility-blue-25': {
      light: primitiveTokens.colors['blue-25'],
      dark: primitiveTokens.colors['blue-950'],
      default: primitiveTokens.colors['blue-25'],
    },
    'utility-blue-50': {
      light: primitiveTokens.colors['blue-50'],
      dark: primitiveTokens.colors['blue-900'],
      default: primitiveTokens.colors['blue-50'],
    },
    'utility-blue-100': {
      light: primitiveTokens.colors['blue-100'],
      dark: primitiveTokens.colors['blue-800'],
      default: primitiveTokens.colors['blue-100'],
    },
    'utility-blue-200': {
      light: primitiveTokens.colors['blue-200'],
      dark: primitiveTokens.colors['blue-700'],
      default: primitiveTokens.colors['blue-200'],
    },
    'utility-blue-300': {
      light: primitiveTokens.colors['blue-300'],
      dark: primitiveTokens.colors['blue-600'],
      default: primitiveTokens.colors['blue-300'],
    },
    'utility-blue-400': {
      light: primitiveTokens.colors['blue-400'],
      dark: primitiveTokens.colors['blue-500'],
      default: primitiveTokens.colors['blue-400'],
    },
    'utility-blue-500': {
      light: primitiveTokens.colors['blue-500'],
      dark: primitiveTokens.colors['blue-400'],
      default: primitiveTokens.colors['blue-500'],
    },
    'utility-blue-600': {
      light: primitiveTokens.colors['blue-600'],
      dark: primitiveTokens.colors['blue-300'],
      default: primitiveTokens.colors['blue-600'],
    },
    'utility-blue-700': {
      light: primitiveTokens.colors['blue-700'],
      dark: primitiveTokens.colors['blue-200'],
      default: primitiveTokens.colors['blue-700'],
    },
    'utility-blue-800': {
      light: primitiveTokens.colors['blue-800'],
      dark: primitiveTokens.colors['blue-100'],
      default: primitiveTokens.colors['blue-800'],
    },
    'utility-blue-900': {
      light: primitiveTokens.colors['blue-900'],
      dark: primitiveTokens.colors['blue-50'],
      default: primitiveTokens.colors['blue-900'],
    },
    'utility-blue-950': {
      light: primitiveTokens.colors['blue-950'],
      dark: primitiveTokens.colors['blue-25'],
      default: primitiveTokens.colors['blue-950'],
    },
    
    // ... (similar pattern for blue-50 through blue-950)

    // Utility colors - Sky
    'utility-sky-25': {
      light: primitiveTokens.colors['sky-25'],
      dark: primitiveTokens.colors['sky-950'],
      default: primitiveTokens.colors['sky-25'],
    },
    'utility-sky-50': {
      light: primitiveTokens.colors['sky-50'],
      dark: primitiveTokens.colors['sky-900'],
      default: primitiveTokens.colors['sky-50'],
    },
    'utility-sky-100': {
      light: primitiveTokens.colors['sky-100'],
      dark: primitiveTokens.colors['sky-800'],
      default: primitiveTokens.colors['sky-100'],
    },
    'utility-sky-200': {
      light: primitiveTokens.colors['sky-200'],
      dark: primitiveTokens.colors['sky-700'],
      default: primitiveTokens.colors['sky-200'],
    },
    'utility-sky-300': {
      light: primitiveTokens.colors['sky-300'],
      dark: primitiveTokens.colors['sky-600'],  
      default: primitiveTokens.colors['sky-300'],
    },
    'utility-sky-400': {
      light: primitiveTokens.colors['sky-400'],
      dark: primitiveTokens.colors['sky-500'],
      default: primitiveTokens.colors['sky-400'],
    },
    'utility-sky-500': {
      light: primitiveTokens.colors['sky-500'],
      dark: primitiveTokens.colors['sky-400'],
      default: primitiveTokens.colors['sky-500'],
    },
    'utility-sky-600': {
      light: primitiveTokens.colors['sky-600'],
      dark: primitiveTokens.colors['sky-300'],
      default: primitiveTokens.colors['sky-600'],
    },
    'utility-sky-700': {
      light: primitiveTokens.colors['sky-700'],
      dark: primitiveTokens.colors['sky-200'],
      default: primitiveTokens.colors['sky-700'],
    },
    'utility-sky-800': {
      light: primitiveTokens.colors['sky-800'],
      dark: primitiveTokens.colors['sky-100'],
      default: primitiveTokens.colors['sky-800'],
    },
    'utility-sky-900': {
      light: primitiveTokens.colors['sky-900'],
      dark: primitiveTokens.colors['sky-50'],
      default: primitiveTokens.colors['sky-900'],
    },
    'utility-sky-950': {
      light: primitiveTokens.colors['sky-950'],
      dark: primitiveTokens.colors['sky-25'],
      default: primitiveTokens.colors['sky-950'],
    },
    
      
    // ... (similar pattern for sky-50 through sky-950)

    // Utility colors - Green
    'utility-green-25': {
      light: primitiveTokens.colors['green-25'],
      dark: primitiveTokens.colors['green-950'],
      default: primitiveTokens.colors['green-25'],
    },
    'utility-green-50': {
      light: primitiveTokens.colors['green-50'],
      dark: primitiveTokens.colors['green-900'],
      default: primitiveTokens.colors['green-50'],
    },
    'utility-green-100': {
      light: primitiveTokens.colors['green-100'],
      dark: primitiveTokens.colors['green-800'],
      default: primitiveTokens.colors['green-100'],
    },
    'utility-green-200': {
      light: primitiveTokens.colors['green-200'],
      dark: primitiveTokens.colors['green-700'],
      default: primitiveTokens.colors['green-200'],
    },
    'utility-green-300': {
      light: primitiveTokens.colors['green-300'],
      dark: primitiveTokens.colors['green-600'],
      default: primitiveTokens.colors['green-300'],
    },
    'utility-green-400': {
      light: primitiveTokens.colors['green-400'],
      dark: primitiveTokens.colors['green-500'],
      default: primitiveTokens.colors['green-400'],
    },
    'utility-green-500': {
      light: primitiveTokens.colors['green-500'],
      dark: primitiveTokens.colors['green-400'],
      default: primitiveTokens.colors['green-500'],
    },
    'utility-green-600': {
      light: primitiveTokens.colors['green-600'],
      dark: primitiveTokens.colors['green-300'],
      default: primitiveTokens.colors['green-600'],
    },
    'utility-green-700': {
      light: primitiveTokens.colors['green-700'],
      dark: primitiveTokens.colors['green-200'],
      default: primitiveTokens.colors['green-700'],
    },
    'utility-green-800': {
      light: primitiveTokens.colors['green-800'],
      dark: primitiveTokens.colors['green-100'],
      default: primitiveTokens.colors['green-800'],
    },
    'utility-green-900': {
      light: primitiveTokens.colors['green-900'],
      dark: primitiveTokens.colors['green-50'],
      default: primitiveTokens.colors['green-900'],
    },
    'utility-green-950': {
      light: primitiveTokens.colors['green-950'],
      dark: primitiveTokens.colors['green-25'],
      default: primitiveTokens.colors['green-950'], 
    },
    'utility-orange-25': {
      light: primitiveTokens.colors['orange-25'],
      dark: primitiveTokens.colors['orange-950'],
      default: primitiveTokens.colors['orange-25'],
    },
    'utility-orange-50': {
      light: primitiveTokens.colors['orange-50'],
      dark: primitiveTokens.colors['orange-900'],
      default: primitiveTokens.colors['orange-50'],
    },
    'utility-orange-100': {
      light: primitiveTokens.colors['orange-100'],
      dark: primitiveTokens.colors['orange-800'],
      default: primitiveTokens.colors['orange-100'],
    },
    'utility-orange-200': {
      light: primitiveTokens.colors['orange-200'],
      dark: primitiveTokens.colors['orange-700'],
      default: primitiveTokens.colors['orange-200'],
    },
    'utility-orange-300': {
      light: primitiveTokens.colors['orange-300'],
      dark: primitiveTokens.colors['orange-600'],
      default: primitiveTokens.colors['orange-300'],
    },
    'utility-orange-400': {
      light: primitiveTokens.colors['orange-400'],
      dark: primitiveTokens.colors['orange-500'],
      default: primitiveTokens.colors['orange-400'],
    },
    'utility-orange-500': {
      light: primitiveTokens.colors['orange-500'],
      dark: primitiveTokens.colors['orange-400'],
      default: primitiveTokens.colors['orange-500'],
    },
    'utility-orange-600': {
      light: primitiveTokens.colors['orange-600'],
      dark: primitiveTokens.colors['orange-300'],
      default: primitiveTokens.colors['orange-600'],
    },
    'utility-orange-700': {
      light: primitiveTokens.colors['orange-700'],
      dark: primitiveTokens.colors['orange-200'],
      default: primitiveTokens.colors['orange-700'],
    },
    'utility-orange-800': {
      light: primitiveTokens.colors['orange-800'],
      dark: primitiveTokens.colors['orange-100'],
      default: primitiveTokens.colors['orange-800'],
    },
    'utility-orange-900': {
      light: primitiveTokens.colors['orange-900'],
      dark: primitiveTokens.colors['orange-50'],
      default: primitiveTokens.colors['orange-900'],
    },
    'utility-orange-950': {
      light: primitiveTokens.colors['orange-950'],
      dark: primitiveTokens.colors['orange-25'],
      default: primitiveTokens.colors['orange-950'],
    },
    


    
      
  },

  spacing: {
    // Layout spacing
    'layout-xs': primitiveTokens.spacing['2'],
    'layout-sm': primitiveTokens.spacing['4'],
    'layout-md': primitiveTokens.spacing['6'],
    'layout-lg': primitiveTokens.spacing['8'],
    'layout-xl': primitiveTokens.spacing['12'],

    // Component spacing
    'component-xs': primitiveTokens.spacing['1'],
    'component-sm': primitiveTokens.spacing['2'],
    'component-md': primitiveTokens.spacing['4'],
    'component-lg': primitiveTokens.spacing['6'],
    'component-xl': primitiveTokens.spacing['8'],

    // Content spacing
    'content-xs': primitiveTokens.spacing['2'],
    'content-sm': primitiveTokens.spacing['4'],
    'content-md': primitiveTokens.spacing['6'],
    'content-lg': primitiveTokens.spacing['8'],
    'content-xl': primitiveTokens.spacing['12'],
  },

  typography: {
    // Paragraph styles
    'paragraph-xs': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-xs'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-xs-medium': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-xs'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-xs-semibold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-xs'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-xs-bold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.bold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-xs'][1].lineHeight,
      letterSpacing: '0%',
    },

    'paragraph-sm': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-sm'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-sm-medium': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-sm'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-sm-semibold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-sm'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-sm-bold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.bold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-sm'][1].lineHeight,
      letterSpacing: '0%',
    },

    'paragraph-base': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-base'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-base'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-base-medium': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-base'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-base'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-base-semibold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-base'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-base'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-base-bold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-base'][0],
      fontWeight: primitiveTokens.typography.fontWeight.bold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-base'][1].lineHeight,
      letterSpacing: '0%',
    },

    'paragraph-lg': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-lg'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-lg-medium': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-lg'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-lg-semibold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-lg'][1].lineHeight,
      letterSpacing: '0%',
    },
    'paragraph-lg-bold': {
      fontSize: primitiveTokens.typography.fontSize['paragraph-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.bold,
      lineHeight: primitiveTokens.typography.fontSize['paragraph-lg'][1].lineHeight,
      letterSpacing: '0%',
    },

    // Heading styles
    'heading-sm': {
      fontSize: primitiveTokens.typography.fontSize['heading-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['heading-sm'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-sm-medium': {
      fontSize: primitiveTokens.typography.fontSize['heading-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['heading-sm'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-sm-semibold': {
      fontSize: primitiveTokens.typography.fontSize['heading-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['heading-sm'][1].lineHeight,
      letterSpacing: '-2%',
    },

    'heading-md': {
      fontSize: primitiveTokens.typography.fontSize['heading-md'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['heading-md'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-md-medium': {
      fontSize: primitiveTokens.typography.fontSize['heading-md'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['heading-md'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-md-semibold': {
      fontSize: primitiveTokens.typography.fontSize['heading-md'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['heading-md'][1].lineHeight,
      letterSpacing: '-2%',
    },

    'heading-lg': {
      fontSize: primitiveTokens.typography.fontSize['heading-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['heading-lg'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-lg-medium': {
      fontSize: primitiveTokens.typography.fontSize['heading-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['heading-lg'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-lg-semibold': {
      fontSize: primitiveTokens.typography.fontSize['heading-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['heading-lg'][1].lineHeight,
      letterSpacing: '-2%',
    },

    'heading-xl': {
      fontSize: primitiveTokens.typography.fontSize['heading-xl'][0],
      fontWeight: primitiveTokens.typography.fontWeight.normal,
      lineHeight: primitiveTokens.typography.fontSize['heading-xl'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-xl-medium': {
      fontSize: primitiveTokens.typography.fontSize['heading-xl'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['heading-xl'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'heading-xl-semibold': {
      fontSize: primitiveTokens.typography.fontSize['heading-xl'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['heading-xl'][1].lineHeight,
      letterSpacing: '-2%',
    },

    // Display styles
    'display-xs': {
      fontSize: primitiveTokens.typography.fontSize['display-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['display-xs'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'display-sm': {
      fontSize: primitiveTokens.typography.fontSize['display-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['display-sm'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'display-md': {
      fontSize: primitiveTokens.typography.fontSize['display-md'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['display-md'][1].lineHeight,
      letterSpacing: '-2%',
    },
    'display-lg': {
      fontSize: primitiveTokens.typography.fontSize['display-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.semibold,
      lineHeight: primitiveTokens.typography.fontSize['display-lg'][1].lineHeight,
      letterSpacing: '-2%',
    },

    // Label styles
    'label-xs': {
      fontSize: primitiveTokens.typography.fontSize['label-xs'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['label-xs'][1].lineHeight,
      letterSpacing: '-1%',
    },
    'label-sm': {
      fontSize: primitiveTokens.typography.fontSize['label-sm'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['label-sm'][1].lineHeight,
      letterSpacing: '-1%',
    },
    'label-base': {
      fontSize: primitiveTokens.typography.fontSize['label-base'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['label-base'][1].lineHeight,
      letterSpacing: '-1%',
    },
    'label-lg': {
      fontSize: primitiveTokens.typography.fontSize['label-lg'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['label-lg'][1].lineHeight,
      letterSpacing: '-1%',
    },

    // Caption style
    'caption': {
      fontSize: primitiveTokens.typography.fontSize['caption'][0],
      fontWeight: primitiveTokens.typography.fontWeight.medium,
      lineHeight: primitiveTokens.typography.fontSize['caption'][1].lineHeight,
      letterSpacing: '0%',
    },
    'caption-bold': {
      fontSize: primitiveTokens.typography.fontSize['caption'][0],
      fontWeight: primitiveTokens.typography.fontWeight.bold,
      lineHeight: primitiveTokens.typography.fontSize['caption'][1].lineHeight,
      letterSpacing: '0%',
    },
  },

  shadows: {
    'elevation-1': primitiveTokens.shadows.sm,
    'elevation-2': primitiveTokens.shadows.DEFAULT,
    'elevation-3': primitiveTokens.shadows.md,
    'elevation-4': primitiveTokens.shadows.lg,
    'elevation-5': primitiveTokens.shadows.xl,
  },

  borderRadius: {
    'radius-none': primitiveTokens.borderRadius.none,
    'radius-xxs': primitiveTokens.borderRadius.xxs,
    'radius-xs': primitiveTokens.borderRadius.xs,
    'radius-sm': primitiveTokens.borderRadius.sm,
    'radius-md': primitiveTokens.borderRadius.md,
    'radius-lg': primitiveTokens.borderRadius.lg,
    'radius-xl': primitiveTokens.borderRadius.xl,
    'radius-2xl': primitiveTokens.borderRadius['2xl'],
    'radius-4xl': primitiveTokens.borderRadius['4xl'],
    'radius-full': primitiveTokens.borderRadius.full,
  },

  keyframes: {
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    }
  },
} as const; 