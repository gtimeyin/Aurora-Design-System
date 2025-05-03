import React, { useEffect, useRef } from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { Check, Circle, Minus } from '@phosphor-icons/react';

export type InputType = 'checkbox' | 'radio';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  variant?: 'default' | 'error';
  size?: 'sm' | 'md';
  type?: InputType;
  className?: string;
  indeterminate?: boolean;
  name?: string;
  value?: string | number;
  defaultIndeterminate?: boolean;
  onIndeterminateChange?: (indeterminate: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  variant = 'default',
  size = 'md',
  type = 'checkbox',
  className = '',
  disabled,
  indeterminate = false,
  defaultIndeterminate = false,
  checked,
  defaultChecked,
  onChange,
  onIndeterminateChange,
  ...props
}) => {
  const { mode } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isControlled] = React.useState(checked !== undefined);
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
  const [internalIndeterminate, setInternalIndeterminate] = React.useState(defaultIndeterminate);

  const isChecked = isControlled ? checked : internalChecked;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      onIndeterminateChange?.(indeterminate);
    }
  }, [indeterminate, onIndeterminateChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
      if (internalIndeterminate) {
        setInternalIndeterminate(false);
      }
    }

    onChange?.(e);
  };

  const baseClasses = 'checkbox';
  const variantClasses = variant === 'error' ? 'checkbox-error' : '';
  const sizeClasses = `checkbox-${size}`;
  const typeClasses = `checkbox-${type}`;
  const disabledClasses = disabled ? 'checkbox-disabled' : '';
  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    typeClasses,
    disabledClasses,
    className
  ].filter(Boolean).join(' ');

  const iconSize = size === 'sm' ? 12 : 14;
  
  const circleSize = size === 'sm' ? 6 : 8;

  return (
    <label className={classes}>
      <div className="checkbox-input-wrapper">
        <input
          ref={inputRef}
          type={type}
          className={`checkbox-input ${variant === 'error' ? 'checkbox-error' : ''} ${sizeClasses} ${typeClasses}`}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
        {type === 'checkbox' && (
          <>
            {indeterminate ? (
              <Minus
                size={iconSize}
                weight="bold"
                className="checkbox-icon indeterminate"
              />
            ) : (
          <Check
            size={iconSize}
            weight="bold"
            className="checkbox-icon"
          />
            )}
          </>
        )}
        {type === 'radio' && (
          <Circle
            size={circleSize}
            weight="fill"
            className="radio-icon"
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