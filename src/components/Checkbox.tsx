import React from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { Check, Circle } from '@phosphor-icons/react';

export type InputType = 'checkbox' | 'radio';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  variant?: 'default' | 'error';
  size?: 'sm' | 'md';
  type?: InputType;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  variant = 'default',
  size = 'md',
  type = 'checkbox',
  className = '',
  disabled,
  ...props
}) => {
  const { mode } = useTheme();

  const baseClasses = 'checkbox';
  const variantClasses = variant === 'error' ? 'checkbox-error' : '';
  const sizeClasses = `checkbox-${size}`;
  const typeClasses = `checkbox-${type}`;
  const classes = [baseClasses, variantClasses, sizeClasses, typeClasses, className].filter(Boolean).join(' ');

  const iconSize = size === 'sm' ? 12 : 14;

  return (
    <label className={classes}>
      <div className="checkbox-input-wrapper">
        <input
          type={type}
          className={`checkbox-input ${variant === 'error' ? 'checkbox-error' : ''} ${sizeClasses} ${typeClasses}`}
          disabled={disabled}
          {...props}
        />
        {type === 'checkbox' ? (
          <Check
            size={iconSize}
            weight="bold"
            className="checkbox-icon"
          />
        ) : (
          <Circle
            size={iconSize}
            weight="fill"
            className="checkbox-icon"
          />
        )}
      </div>
      {label && (
        <span className={`checkbox-label ${variant === 'error' ? 'checkbox-error' : ''} ${sizeClasses}`}>
          {label}
        </span>
      )}
    </label>
  );
}; 