import React, { useState } from 'react';
import { IconProps } from '@phosphor-icons/react';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ComponentType<IconProps>;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Callback when an item is expanded/collapsed */
  onChange?: (id: string, isOpen: boolean) => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant of the accordion */
  variant?: 'default' | 'bordered' | 'elevated';
  /** Optional className for additional styling */
  className?: string;
  /** Whether multiple items can be expanded at once */
  allowMultiple?: boolean;
  /** IDs of items that should be expanded by default */
  defaultExpandedIds?: string[];
  /** IDs of controlled expanded items */
  expandedIds?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  onChange,
  size = 'md',
  variant = 'default',
  className = '',
  allowMultiple = false,
  defaultExpandedIds = [],
  expandedIds,
}) => {
  // State for uncontrolled usage
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(
    defaultExpandedIds.reduce((acc, id) => ({ ...acc, [id]: true }), {})
  );

  // Check if an item is expanded (handles both controlled and uncontrolled modes)
  const isItemExpanded = (id: string): boolean => {
    if (expandedIds !== undefined) {
      return expandedIds.includes(id);
    }
    return !!openItems[id];
  };

  // Toggle an accordion item
  const toggleItem = (id: string, disabled?: boolean) => {
    if (disabled) return;
    
    const newIsOpen = !isItemExpanded(id);
    
    // Call onChange if provided
    if (onChange) {
      onChange(id, newIsOpen);
    }
    
    // Update internal state for uncontrolled usage
    if (expandedIds === undefined) {
      if (allowMultiple) {
        setOpenItems(prev => ({
          ...prev,
          [id]: newIsOpen,
        }));
      } else {
        setOpenItems(
          newIsOpen ? { [id]: true } : {}
        );
      }
    }
  };

  // Base classes for different elements
  const accordionClasses = [
    'accordion',
    `accordion-${variant}`,
    `accordion-${size}`,
    className,
  ].filter(Boolean).join(' ');

  const getItemClasses = (item: AccordionItem, isExpanded: boolean) => [
    'accordion-item',
    isExpanded ? 'accordion-item-expanded' : '',
    item.disabled ? 'accordion-item-disabled' : '',
  ].filter(Boolean).join(' ');

  const getButtonClasses = (isExpanded: boolean) => [
    'accordion-button',
    `accordion-button-${size}`,
    isExpanded ? 'accordion-button-expanded' : '',
  ].filter(Boolean).join(' ');

  const getPanelClasses = (isExpanded: boolean) => [
    'accordion-panel',
    `accordion-panel-${size}`,
    isExpanded ? 'accordion-panel-expanded' : '',
  ].filter(Boolean).join(' ');

  // Icon sizes based on accordion size
  const getIconSize = () => {
    switch (size) {
      case 'sm': return 16;
      case 'lg': return 24;
      default: return 20;
    }
  };

  const iconSize = getIconSize();

  return (
    <div className={accordionClasses}>
      {items.map((item) => {
        const isExpanded = isItemExpanded(item.id);
        return (
          <div 
            key={item.id} 
            className={getItemClasses(item, isExpanded)}
          >
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={`panel-${item.id}`}
              id={`button-${item.id}`}
              onClick={() => toggleItem(item.id, item.disabled)}
              disabled={item.disabled}
              className={getButtonClasses(isExpanded)}
            >
              {item.icon && (
                <item.icon 
                  weight="regular" 
                  size={iconSize} 
                  className="accordion-icon" 
                />
              )}
              <span className="accordion-title">{item.title}</span>
              {isExpanded ? (
                <CaretUp weight="bold" size={iconSize} className="accordion-caret" />
              ) : (
                <CaretDown weight="bold" size={iconSize} className="accordion-caret" />
              )}
            </button>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`button-${item.id}`}
              hidden={!isExpanded}
              className={getPanelClasses(isExpanded)}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
