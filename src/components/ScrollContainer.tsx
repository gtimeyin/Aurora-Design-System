import React, { useEffect, useRef } from 'react';
import { initScrollbarForElement } from '../design-system/utils/scrollbar';

interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string;
}

/**
 * A container with custom scrollbar styling for consistent scrollable areas throughout the application
 */
export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  className = '',
  maxHeight = '300px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scrollbar behavior when the component mounts
    if (containerRef.current) {
      initScrollbarForElement(containerRef.current);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`overflow-y-auto custom-scrollbar ${className}`}
      style={{ maxHeight }}
    >
      {children}
    </div>
  );
};

export default ScrollContainer; 