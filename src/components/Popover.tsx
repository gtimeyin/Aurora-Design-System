import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { semanticTokens } from '../design-system/tokens/semantic';
import { X } from '@phosphor-icons/react';

export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps {
  /** The content to display in the popover */
  content: React.ReactNode;
  /** The element that triggers the popover */
  children: React.ReactElement;
  /** Optional title for the popover */
  title?: React.ReactNode;
  /** The placement of the popover relative to the trigger element */
  placement?: PopoverPlacement;
  /** Whether the popover is open */
  isOpen?: boolean;
  /** Callback when the open state changes */
  onOpenChange?: (isOpen: boolean) => void;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Whether to close when clicking outside */
  closeOnClickOutside?: boolean;
  /** Optional className for additional styling */
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  title,
  placement = 'bottom',
  isOpen: controlledIsOpen,
  onOpenChange,
  showCloseButton = true,
  closeOnClickOutside = true,
  className = '',
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { mode } = useTheme();

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const calculatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const spacing = 8; // Gap between trigger and popover

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - popoverRect.height - spacing;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.right + spacing;
        break;
      case 'bottom':
        top = triggerRect.bottom + spacing;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.left - popoverRect.width - spacing;
        break;
    }

    // Adjust for scroll position
    top += window.scrollY;
    left += window.scrollX;

    // Keep popover within viewport
    const padding = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust horizontal position
    if (left < padding) {
      left = padding;
    } else if (left + popoverRect.width > viewportWidth - padding) {
      left = viewportWidth - popoverRect.width - padding;
    }

    // Adjust vertical position
    if (top < padding) {
      top = padding;
    } else if (top + popoverRect.height > viewportHeight - padding) {
      top = viewportHeight - popoverRect.height - padding;
    }

    setPosition({ top, left });
  };

  const handleToggle = () => {
    const newIsOpen = !isOpen;
    if (isControlled) {
      onOpenChange?.(newIsOpen);
    } else {
      setUncontrolledIsOpen(newIsOpen);
    }
  };

  const handleClose = () => {
    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setUncontrolledIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(calculatePosition);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeOnClickOutside) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node)
        ) {
          handleClose();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeOnClickOutside]);

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        calculatePosition();
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };
    }
  }, [isOpen]);

  const popoverId = useRef(`popover-${Math.random().toString(36).substr(2, 9)}`);

  const popoverClasses = `
    fixed
    z-[1000]
    min-w-[200px]
    max-w-sm
    rounded-radius-md
    bg-background-primary
    border
    border-border-primary
    shadow-elevation-2
    ${className}
  `;

  const headerClasses = `
    flex
    items-center
    justify-between
    p-3
    border-b
    border-border-primary
    bg-background-secondary
  `;

  const contentClasses = `
    p-3
    bg-background-primary
  `;

  return (
    <>
      <div
        ref={triggerRef}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={popoverId.current}
        className="inline-block"
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          id={popoverId.current}
          role="dialog"
          aria-modal="true"
          className={popoverClasses}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {(title || showCloseButton) && (
            <div className={headerClasses}>
              {title && (
                <div className="text-sm font-medium text-text-primary">
                  {title}
                </div>
              )}
              {showCloseButton && (
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-background-hover rounded-radius-sm text-text-tertiary hover:text-text-primary transition-colors"
                  aria-label="Close popover"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          )}
          <div className={contentClasses}>{content}</div>
        </div>
      )}
    </>
  );
}; 