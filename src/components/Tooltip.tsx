import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { semanticTokens } from '../design-system/tokens/semantic';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipSize = 'sm' | 'md';

export interface TooltipProps {
  /** The content to display in the tooltip */
  content: React.ReactNode;
  /** The element that triggers the tooltip */
  children: React.ReactElement;
  /** The placement of the tooltip relative to the trigger element */
  placement?: TooltipPlacement;
  /** The size of the tooltip */
  size?: TooltipSize;
  /** Optional delay before showing the tooltip (in ms) */
  delay?: number;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Optional className for additional styling */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  size = 'md',
  delay = 200,
  disabled = false,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const { mode } = useTheme();

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const spacing = 8; // Gap between trigger and tooltip

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - spacing;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + spacing;
        break;
      case 'bottom':
        top = triggerRect.bottom + spacing;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - spacing;
        break;
    }

    // Adjust for scroll position
    top += window.scrollY;
    left += window.scrollX;

    setPosition({ top, left });
  };

  const showTooltip = () => {
    if (disabled) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      // Wait for next frame to calculate position after tooltip is rendered
      requestAnimationFrame(calculatePosition);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
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
  }, [isVisible]);

  const tooltipClasses = `
    fixed
    z-[1000]
    py-1.5
    px-2.5
    rounded-radius-sm
    bg-foreground-primary
    text-text-inverse-primary
    shadow-elevation-2
    ${size === 'sm' ? 'text-xs' : 'text-sm'}
    ${className}
  `;

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={tooltipClasses}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}; 