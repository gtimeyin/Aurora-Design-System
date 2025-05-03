import React, { forwardRef } from 'react';
import { WarningCircle } from '@phosphor-icons/react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Success message to display
   */
  success?: string;
  /**
   * The size of the input
   */
  size?: InputSize;
  /**
   * Left icon component
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon component
   */
  rightIcon?: React.ReactNode;
  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;
  /**
   * Additional class names for the wrapper
   */
  wrapperClassName?: string;
  /**
   * Additional class names for the input
   */
  inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      success,
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled = false,
      required = false,
      wrapperClassName = '',
      inputClassName = '',
      id,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const wrapperClasses = `
      input-wrapper
      inline-flex
      flex-col
      ${fullWidth ? 'w-full' : ''}
      ${wrapperClassName}
    `;

    const labelClasses = `
      mb-1.5
      text-sm
      font-medium
      text-text-primary
      flex
      items-center
      gap-1
    `;

    const inputWrapperClasses = `
      relative
      flex
      items-center
      ${fullWidth ? 'w-full' : ''}
    `;

    const inputClasses = `
      input
      w-full
      border
      ${size === 'sm' ? 'border-radius-xs' : 'border-radius-md'}
      bg-background-primary
      text-text-primary
      placeholder:text-text-tertiary
      transition-all
      duration-200
      ${error ? 'border-status-error focus:border-status-error' : 'border-border-primary focus:border-border-focus'}
      ${success ? 'border-status-success focus:border-status-success' : ''}
      ${disabled ? 'cursor-not-allowed opacity-50 bg-background-tertiary' : ''}
      ${size === 'sm' ? 'px-2 py-1 text-sm' : size === 'lg' ? 'px-4 py-3' : 'px-3 py-2'}
      ${leftIcon ? 'pl-9' : ''}
      ${rightIcon ? 'pr-9' : ''}
      ${inputClassName}
    `;

    const iconClasses = `
      absolute
      top-1/2
      -translate-y-1/2
      text-text-tertiary
      pointer-events-none
      ${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}
    `;

    const messageClasses = `
      mt-1.5
      text-sm
      flex
      items-center
      gap-1
    `;

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
            {required && <span className="text-status-error">*</span>}
          </label>
        )}
        <div className={inputWrapperClasses}>
          {leftIcon && (
            <span className={`${iconClasses} left-3`}>
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error
                ? `${inputId}-error`
                : success
                ? `${inputId}-success`
                : helperText
                ? `${inputId}-helper`
                : undefined
            }
            className={inputClasses}
            required={required}
            {...props}
          />
          {rightIcon && (
            <span className={`${iconClasses} right-3`}>
              {rightIcon}
            </span>
          )}
          {error && !rightIcon && (
            <WarningCircle
              className={`${iconClasses} right-3 text-status-error`}
              weight="fill"
            />
          )}
        </div>
        {error && (
          <span id={`${inputId}-error`} className={`${messageClasses} text-status-error`}>
            {error}
          </span>
        )}
        {success && !error && (
          <span id={`${inputId}-success`} className={`${messageClasses} text-status-success`}>
            {success}
          </span>
        )}
        {helperText && !error && !success && (
          <span id={`${inputId}-helper`} className={`${messageClasses} text-text-tertiary`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
); 