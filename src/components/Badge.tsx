import React from 'react';
import { IconProps } from '@phosphor-icons/react';

export type BadgeStyle = 'modern' | 'modern-no-outline' | 'solid' | 'outline';
export type BadgeVariant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info'
  | 'fuchsia'
  | 'bumblebee'
  | 'pink'
  | 'violet'
  | 'aqua'
  | 'lemon'
  | 'blue'
  | 'sky';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeType = 'default' | 'left-icon' | 'right-icon' | 'indicator';

export interface BadgeProps {
  /** The style of the badge (modern, modern-no-outline, solid, outline) */
  style?: BadgeStyle;
  /** The variant of the badge */
  variant?: BadgeVariant;
  /** The size of the badge */
  size?: BadgeSize;
  /** The type of badge (default, left-icon, right-icon, indicator) */
  type?: BadgeType;
  /** Optional icon to display before the text */
  leftIcon?: React.ComponentType<IconProps>;
  /** Optional icon to display after the text */
  rightIcon?: React.ComponentType<IconProps>;
  /** The content of the badge */
  children: React.ReactNode;
  /** Optional className for additional styling */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  style = 'modern',
  variant = 'primary',
  size = 'md',
  type = 'default',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className = '',
}) => {
  const baseClasses = 'badge';
  const styleClasses = `badge-${style}`;
  const variantClasses = `badge-${variant}`;
  const sizeClasses = `badge-${size}`;
  const typeClasses = `badge-${type}`;

  const classes = [baseClasses, styleClasses, variantClasses, sizeClasses, typeClasses, className]
    .filter(Boolean)
    .join(' ');

  const iconSize = size === 'sm' ? 12 : size === 'md' ? 14 : 16;

  if (type === 'indicator') {
    return <span className={classes} />;
  }

  return (
    <span className={classes}>
      {type === 'left-icon' && LeftIcon && (
        <LeftIcon
          size={iconSize}
          weight="bold"
          className="mr-1"
        />
      )}
      {children}
      {type === 'right-icon' && RightIcon && (
        <RightIcon
          size={iconSize}
          weight="bold"
          className="ml-1"
        />
      )}
    </span>
  );
}; 