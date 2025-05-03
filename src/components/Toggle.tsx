import React from 'react';

interface ToggleProps {
  /**
   * The size of the toggle
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Label for the toggle
   */
  label?: string;
  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean;
  /**
   * Whether the toggle is checked
   */
  checked?: boolean;
  /**
   * Callback when the toggle state changes
   */
  onChange?: (checked: boolean) => void;
  /**
   * Additional class names
   */
  className?: string;
  /**
   * HTML input props
   */
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked' | 'disabled' | 'onChange' | 'type'>;
}

export const Toggle: React.FC<ToggleProps> = ({
  size = 'md',
  label,
  disabled = false,
  checked = false,
  onChange,
  className = '',
  inputProps = {},
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <label className={`toggle ${disabled ? 'disabled' : ''} ${className}`}>
      <div className="toggle-input-wrapper">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={`toggle-input toggle-${size}`}
          {...inputProps}
        />
        <div className={`toggle-track toggle-${size}`}>
          <div className={`toggle-thumb toggle-${size}`} />
        </div>
      </div>
      {label && <span className={`toggle-label toggle-${size}`}>{label}</span>}
    </label>
  );
}; 