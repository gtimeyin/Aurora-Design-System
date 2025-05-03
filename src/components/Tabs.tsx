import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../design-system/ThemeContext';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** Currently active tab ID */
  activeId?: string;
  /** Callback when active tab changes */
  onChange?: (id: string) => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to stretch tabs to full width */
  fullWidth?: boolean;
  /** Optional className for additional styling */
  className?: string;
  /** Visual variant of the tabs */
  variant?: 'default' | 'button';
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  size = 'md',
  fullWidth = false,
  className = '',
  variant = 'default',
}) => {
  // State for controlled and uncontrolled usage
  const [selectedId, setSelectedId] = useState(activeId || items[0]?.id);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const { mode } = useTheme();

  // Update selected tab when activeId prop changes
  useEffect(() => {
    if (activeId) {
      setSelectedId(activeId);
    }
  }, [activeId]);

  // Update indicator position when selected tab changes
  useEffect(() => {
    if (variant === 'button') return; // Don't update indicator for button variant
    
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    const activeTab = tabsElement.querySelector(`[data-tab-id="${selectedId}"]`) as HTMLButtonElement;
    if (!activeTab) return;

    const tabsRect = tabsElement.getBoundingClientRect();
    const activeTabRect = activeTab.getBoundingClientRect();

    setIndicatorStyle({
      left: activeTabRect.left - tabsRect.left,
      width: activeTabRect.width,
    });
  }, [selectedId, variant]);

  const handleTabClick = (id: string) => {
    if (onChange) {
      onChange(id);
    } else {
      setSelectedId(id);
    }
  };

  const tabListClasses = [
    'relative',
    'flex',
    fullWidth ? 'w-full' : '',
    variant === 'default' ? 'border-b border-border-primary' : 'p-1 gap-1',
    variant === 'button' ? 'bg-background-secondary rounded-lg' : '',
    className,
  ].join(' ');

  const getTabClasses = (item: TabItem) => {
    const isSelected = item.id === selectedId;
    const baseClasses = [
      'relative',
      'px-4',
      size === 'sm' ? 'py-2 text-sm' : size === 'lg' ? 'py-4 text-lg' : 'py-3',
      fullWidth ? 'flex-1 text-center' : '',
      'text-text-primary',
      'transition-all',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-interactive-tertiary',
      'focus:ring-opacity-50',
    ];

    // Add variant-specific classes
    if (variant === 'default') {
      baseClasses.push('rounded-t-radius-sm');
    } else if (variant === 'button') {
      baseClasses.push(
        'rounded-md',
        isSelected 
          ? 'bg-background-primary shadow-sm' 
          : 'hover:bg-background-hover hover:text-interactive-primary'
      );
    }

    if (item.disabled) {
      baseClasses.push('opacity-50 cursor-not-allowed text-text-tertiary');
    } else {
      if (variant === 'default') {
        baseClasses.push(
          isSelected
            ? 'text-interactive-primary font-medium'
            : 'hover:text-interactive-primary hover:bg-background-hover'
        );
      } else {
        baseClasses.push(
          isSelected
            ? 'text-text-primary font-medium'
            : 'text-text-secondary'
        );
      }
    }

    return baseClasses.join(' ');
  };

  const indicatorClasses = [
    'absolute',
    'bottom-0',
    'h-0.5',
    'bg-interactive-primary',
    'transition-all',
    'duration-200',
  ].join(' ');

  const panelClasses = [
    'mt-4',
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base',
  ].join(' ');

  return (
    <div>
      {/* Tab List */}
      <div
        ref={tabsRef}
        role="tablist"
        className={tabListClasses}
      >
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === selectedId}
            aria-controls={`panel-${item.id}`}
            id={`tab-${item.id}`}
            data-tab-id={item.id}
            disabled={item.disabled}
            onClick={() => !item.disabled && handleTabClick(item.id)}
            className={getTabClasses(item)}
          >
            {item.label}
          </button>
        ))}
        {variant === 'default' && (
          <div
            className={indicatorClasses}
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: indicatorStyle.width,
            }}
          />
        )}
      </div>

      {/* Tab Panels */}
      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          hidden={item.id !== selectedId}
          className={panelClasses}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}; 