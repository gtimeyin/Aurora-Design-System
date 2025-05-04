import React, { useEffect, useRef } from 'react';
import { X } from '@phosphor-icons/react';
import { createPortal } from 'react-dom';
import { useTheme } from '../design-system/ThemeContext';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Function to close the drawer */
  onClose: () => void;
  /** Drawer title */
  title?: React.ReactNode;
  /** Drawer placement */
  placement?: DrawerPlacement;
  /** Drawer size */
  size?: DrawerSize;
  /** Drawer content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Whether to show the close button in the header */
  showCloseButton?: boolean;
  /** Whether pressing the Escape key should close the drawer */
  closeOnEsc?: boolean;
  /** Whether clicking the backdrop should close the drawer */
  closeOnBackdropClick?: boolean;
  /** Whether the drawer header should be shown */
  showHeader?: boolean;
  /** Additional CSS class for the drawer */
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  placement = 'right',
  size = 'md',
  children,
  footer,
  showCloseButton = true,
  closeOnEsc = true,
  closeOnBackdropClick = true,
  showHeader = true,
  className = '',
}) => {
  const { mode } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Handle pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent scrolling on the body when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore scrolling when drawer is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, closeOnEsc]);

  // Handle clicking outside the drawer
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const drawerClasses = [
    'drawer',
    `drawer-${placement}`,
    `drawer-${size}`,
    isOpen ? 'drawer-open' : '',
    className,
  ].filter(Boolean).join(' ');

  const overlayClasses = [
    'drawer-overlay',
    isOpen ? 'drawer-overlay-open' : '',
  ].filter(Boolean).join(' ');

  const drawerContent = (
    <>
      <div className={overlayClasses} onClick={handleBackdropClick} />
      <div 
        ref={drawerRef}
        className={drawerClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        {showHeader && (
          <div className="drawer-header">
            {title && (
              <h2 id="drawer-title" className="drawer-title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="drawer-close-button"
                aria-label="Close drawer"
              >
                <X size={24} weight="bold" />
              </button>
            )}
          </div>
        )}
        <div className="drawer-body">
          {children}
        </div>
        {footer && (
          <div className="drawer-footer">
            {footer}
          </div>
        )}
      </div>
    </>
  );

  return createPortal(drawerContent, document.body);
};

export default Drawer; 