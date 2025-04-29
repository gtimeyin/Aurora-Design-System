import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tailwind max-width value (e.g., 'xl', '2xl', 'full'). Defaults to 'xl'.
   */
  maxWidth?: string;
  /**
   * The HTML element to render as. Defaults to 'div'.
   */
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  maxWidth = 'xl',
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => (
  <Component
    className={`mx-auto px-4 max-w-${maxWidth} ${className}`}
    {...props}
  >
    {children}
  </Component>
); 