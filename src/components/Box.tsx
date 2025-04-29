import React from 'react';

type BoxProps = {
  /**
   * The HTML element to render as. Defaults to 'div'.
   */
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

export const Box: React.FC<BoxProps> = ({ as: Component = 'div', className = '', children, ...props }) => (
  <Component className={className} {...props}>
    {children}
  </Component>
); 