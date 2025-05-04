# Aurora Design System - Styling Guide

## Architecture Overview

Aurora Design System follows a token-based approach to styling, with a clear separation of concerns across multiple layers:

1. **Primitive Tokens**: Low-level design values that serve as the foundation
2. **Semantic Tokens**: Map primitive tokens to semantic meanings
3. **Component Tokens**: Component-specific styling built on semantic tokens
4. **Tailwind Integration**: Utility classes for rapid development

## Token Hierarchy

### 1. Primitive Tokens (`/src/design-system/tokens/primitive.ts`)

Basic design values without applied meaning:

```typescript
// Example primitive tokens
colors: {
  'black': '#000000',
  'white': '#FFFFFF',
  'indigo-500': '#4a00f8',
  'slate-200': '#d7dcdf',
  // ...
},
spacing: {
  '1': '4px',
  '2': '8px',
  // ...
},
```

### 2. Semantic Tokens (`/src/design-system/tokens/semantic.ts`)

Assigns meaning to primitive tokens and handles light/dark mode variations:

```typescript
// Example semantic tokens
colors: {
  'text-primary': {
    light: primitiveTokens.colors['slate-900'],
    dark: primitiveTokens.colors['gray-50'],
    default: primitiveTokens.colors['slate-900'],
  },
  'background-primary': {
    light: primitiveTokens.colors['white'],
    dark: primitiveTokens.colors['gray-900'],
    default: primitiveTokens.colors['white'],
  },
  // ...
},
```

### 3. Component Tokens (`/src/design-system/tokens/component.ts`)

Component-specific styling built on semantic tokens:

```typescript
// Example component tokens
button: {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    // ...
  },
  variants: {
    primary: {
      backgroundColor: getColorValue(semanticTokens.colors['interactive-primary'], mode),
      color: getColorValue(semanticTokens.colors['text-inverse-primary'], mode),
      // ...
    },
    // ...
  },
},
```

## Styling Best Practices

### Do's:

1. **Use Component Tokens for Component Styling**
   - All component styling should live in `component.ts`, not in CSS files
   - Component styling should use semantic tokens, not primitive tokens
   - Each component should include base styles, variants, and sizes

2. **Use Semantic Meaning**
   - Use semantic token names (`text-primary`, not `black`)
   - Create proper hierarchies (base, variants, sizes)

3. **Think About Theming**
   - Always consider light and dark mode
   - Use the `getColorValue` helper

### Don'ts:

1. **Don't Add Direct CSS Classes**
   - Avoid defining component-specific styles in CSS files
   - Don't reference primitive tokens directly in components

2. **Don't Duplicate Styles**
   - Follow the DRY principle (Don't Repeat Yourself)
   - Reuse patterns across similar components

## Component Structure Example

```typescript
// In component.ts
accordion: {
  base: {
    // Base styles for all accordions
  },
  item: {
    // Styles for accordion items
  },
  button: {
    // Styles for accordion buttons
  },
  variants: {
    default: { /* Default variant styles */ },
    bordered: { /* Bordered variant styles */ },
    elevated: { /* Elevated variant styles */ },
  },
  sizes: {
    sm: { /* Small size styles */ },
    md: { /* Medium size styles */ },
    lg: { /* Large size styles */ },
  },
}
```

## How Styles Apply to Components

1. Component tokens are loaded based on the current theme mode
2. Tailwind CSS uses these tokens to generate utility classes
3. Components use the generated utility classes for styling

By following this approach, we ensure:
- Consistent design language
- Easy theme switching
- Maintainable and scalable codebase
- Design token reusability 