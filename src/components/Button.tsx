import React from 'react';
import { IconProps } from '@phosphor-icons/react';
import { Spinner } from './Spinner';

export type ButtonVariant = 
  | 'primary' 
  | 'primary-destructive'
  | 'secondary'
  | 'secondary-destructive'
  | 'white'
  | 'white-destructive'
  | 'text'
  | 'text-destructive';
export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ComponentType<IconProps>;
  rightIcon?: React.ComponentType<IconProps>;
  iconOnly?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'base',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconOnly = false,
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'btn relative inline-flex items-center justify-center';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const stateClasses = [
    disabled && 'disabled',
    iconOnly && 'icon-only',
  ].filter(Boolean).join(' ');

  const classes = [baseClasses, variantClasses, sizeClasses, stateClasses, className]
    .filter(Boolean)
    .join(' ');

  // Get icon sizes based on button size and whether it's icon-only
  const getIconSize = () => {
    if (iconOnly) {
      // Icon-only sizes
      switch (size) {
        case 'xs': return 16;
        case 'sm': return 20;
        case 'base': return 24;
        case 'lg': return 24;
        case 'xl': return 28;
        default: return 24;
      }
    } else {
      // Left & right icon sizes
      switch (size) {
        case 'xs': return 16;
        case 'sm': return 16;
        case 'base': return 20;
        case 'lg': return 20;
        case 'xl': return 20;
        default: return 20;
      }
    }
  };

  const iconSize = getIconSize();
  
  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner 
            size={`${iconSize / 16}rem`}
            color={variant === 'text' ? 'currentColor' : undefined}
          />
        </div>
      ) : null}
      <div className={`inline-flex items-center gap-2 ${loading ? 'opacity-0' : ''}`}>
        {!iconOnly && LeftIcon && (
          <LeftIcon
            size={iconSize}
            weight="bold"
          />
        )}
        {!iconOnly && children}
        {!iconOnly && RightIcon && (
          <RightIcon
            size={iconSize}
            weight="bold"
          />
        )}
        {iconOnly && (LeftIcon || RightIcon) && (
          <div className="flex items-center justify-center">
            {LeftIcon && <LeftIcon size={iconSize} weight="bold" />}
            {RightIcon && <RightIcon size={iconSize} weight="bold" />}
          </div>
        )}
      </div>
    </button>
  );
}; 