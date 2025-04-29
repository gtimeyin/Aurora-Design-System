import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns. Defaults to 2.
   */
  cols?: number;
  /**
   * Tailwind gap value (e.g., '4', '8'). Defaults to '4'.
   */
  gap?: string;
  /**
   * The HTML element to render as. Defaults to 'div'.
   */
  as?: React.ElementType;
}

export const Grid: React.FC<GridProps> = ({
  cols = 2,
  gap = '4',
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => (
  <Component
    className={`grid grid-cols-${cols} gap-${gap} ${className}`}
    {...props}
  >
    {children}
  </Component>
); 