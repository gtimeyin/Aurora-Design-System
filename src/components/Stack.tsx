import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Direction of stacking: 'row' or 'col'. Defaults to 'col'.
   */
  direction?: 'row' | 'col';
  /**
   * Tailwind gap value (e.g., '4', '8'). Defaults to '4'.
   */
  gap?: string;
  /**
   * The HTML element to render as. Defaults to 'div'.
   */
  as?: React.ElementType;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'col',
  gap = '4',
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => (
  <Component
    className={`flex flex-${direction} gap-${gap} ${className}`}
    {...props}
  >
    {children}
  </Component>
); 