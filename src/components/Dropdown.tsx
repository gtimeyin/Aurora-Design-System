import React, { useState, useRef, useEffect } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * The options to display in the dropdown
   */
  options: DropdownOption[];
  /**
   * The currently selected value
   */
  value?: string;
  /**
   * Callback when selection changes
   */
  onChange?: (value: string) => void;
  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;
  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean;
  /**
   * The size of the dropdown
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Additional class names
   */
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  size = 'md',
  error = false,
  errorMessage,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const baseClasses = 'dropdown relative inline-block w-full';
  const triggerClasses = `
    dropdown-trigger
    w-full
    flex items-center justify-between
    border rounded-md
    bg-background-primary
    transition-all duration-200
    ${error ? 'border-status-error' : 'border-border-primary'}
    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-border-focus'}
    ${isOpen ? 'border-border-focus' : ''}
    ${size === 'sm' ? 'px-2 py-1 text-sm' : size === 'lg' ? 'px-4 py-3' : 'px-3 py-2'}
  `;

  const menuClasses = `
    dropdown-menu
    absolute z-50 w-full
    mt-1 py-1
    bg-background-primary
    border border-border-primary
    rounded-md
    shadow-lg
    max-h-60 overflow-auto
    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
  `;

  const optionClasses = (option: DropdownOption) => `
    dropdown-option
    px-3 py-2
    flex items-center
    ${option.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
    ${option.value === value ? 'bg-background-hover text-interactive-primary' : 'hover:bg-background-hover'}
  `;

  return (
    <div className={`${baseClasses} ${className}`} ref={dropdownRef}>
      <div
        className={triggerClasses}
        onClick={toggleDropdown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <span className={!selectedOption ? 'text-text-tertiary' : ''}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18}
        />
      </div>

      <div className={menuClasses} role="listbox">
        {options.map((option) => (
          <div
            key={option.value}
            className={optionClasses(option)}
            onClick={() => handleSelect(option)}
            role="option"
            aria-selected={option.value === value}
            aria-disabled={option.disabled}
          >
            {option.label}
          </div>
        ))}
      </div>

      {error && errorMessage && (
        <div className="mt-1 text-sm text-status-error">
          {errorMessage}
        </div>
      )}
    </div>
  );
}; 