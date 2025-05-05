import React from 'react';
import { X } from '@phosphor-icons/react';
import { 
  Info, 
  CheckCircle, 
  Warning, 
  XCircle, 
  Bell 
} from '@phosphor-icons/react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type AlertSize = 'sm' | 'md' | 'lg';

export interface AlertProps {
  /** The variant of the alert */
  variant?: AlertVariant;
  /** The size of the alert */
  size?: AlertSize;
  /** The title of the alert */
  title?: React.ReactNode;
  /** The content of the alert */
  children: React.ReactNode;
  /** Whether the alert is dismissible */
  dismissible?: boolean;
  /** Function called when the alert is dismissed */
  onDismiss?: () => void;
  /** Whether to show an icon */
  showIcon?: boolean;
  /** Custom icon to display */
  icon?: React.ReactElement;
  /** Additional CSS class */
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  size = 'md',
  title,
  children,
  dismissible = false,
  onDismiss,
  showIcon = true,
  icon,
  className = '',
}) => {
  const getIcon = () => {
    if (icon) return icon;

    switch (variant) {
      case 'info':
        return <Info weight="fill" />;
      case 'success':
        return <CheckCircle weight="fill" />;
      case 'warning':
        return <Warning weight="fill" />;
      case 'error':
        return <XCircle weight="fill" />;
      case 'neutral':
        return <Bell weight="fill" />;
      default:
        return <Info weight="fill" />;
    }
  };

  const alertClasses = [
    'alert',
    `alert-${variant}`,
    `alert-${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={alertClasses} role="alert">
      {showIcon && (
        <div className="alert-icon">
          {getIcon()}
        </div>
      )}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-description">{children}</div>
      </div>
      {dismissible && (
        <button 
          type="button" 
          className="alert-close" 
          onClick={onDismiss}
          aria-label="Close alert"
        >
          <X size={18} weight="bold" />
        </button>
      )}
    </div>
  );
};

export default Alert; 