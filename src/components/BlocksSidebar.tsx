import React, { useState } from 'react';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

type BlockItem = {
  id: string;
  label: string;
};

type BlockGroup = {
  label: string;
  items: BlockItem[];
};

// Define block categories
export const blockGroups: BlockGroup[] = [
  {
    label: "Layout Blocks",
    items: [
      { id: 'cards', label: 'Cards' },
      { id: 'hero-sections', label: 'Hero Sections' },
      { id: 'feature-sections', label: 'Feature Sections' },
      { id: 'grid-layouts', label: 'Grid Layouts' },
    ]
  },
  {
    label: "Navigation Blocks",
    items: [
      { id: 'headers', label: 'Headers' },
      { id: 'footers', label: 'Footers' },
      { id: 'sidebars', label: 'Sidebars' },
      { id: 'pagination', label: 'Pagination' },
    ]
  },
  {
    label: "Content Blocks",
    items: [
      { id: 'testimonials', label: 'Testimonials' },
      { id: 'pricing-tables', label: 'Pricing Tables' },
      { id: 'team-sections', label: 'Team Sections' },
      { id: 'faq-sections', label: 'FAQ Sections' },
    ]
  },
  {
    label: "Form Blocks",
    items: [
      { id: 'contact-forms', label: 'Contact Forms' },
      { id: 'login-forms', label: 'Login Forms' },
      { id: 'subscription-forms', label: 'Subscription Forms' },
    ]
  }
];

interface BlocksSidebarProps {
  activeBlock: string;
  onBlockChange: (blockId: string) => void;
}

export const BlocksSidebar: React.FC<BlocksSidebarProps> = ({ 
  activeBlock, 
  onBlockChange 
}) => {
  // Track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    // By default, expand the group containing the active block
    const initialState: Record<string, boolean> = {};
    
    blockGroups.forEach((group, index) => {
      if (group.items.some(item => item.id === activeBlock)) {
        initialState[index] = true;
      }
    });
    
    return initialState;
  });

  const toggleGroup = (groupIndex: number) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupIndex]: !prev[groupIndex]
    }));
  };

  // Find which group contains the active block (for highlighting)
  const findGroupWithActiveBlock = () => {
    return blockGroups.findIndex(group => 
      group.items.some(item => item.id === activeBlock)
    );
  };

  return (
    <nav className="w-56 h-full bg-background-secondary p-4 overflow-y-auto custom-scrollbar">
      <div className="space-y-2">
        {blockGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-2">
            <button
              onClick={() => toggleGroup(groupIndex)}
              className={`w-full flex items-center justify-between p-2 rounded-md font-medium transition-colors
                ${findGroupWithActiveBlock() === groupIndex 
                  ? 'bg-background-hover text-text-primary' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
                }`}
            >
              <span>{group.label}</span>
              {expandedGroups[groupIndex] 
                ? <CaretDown size={16} weight="bold" /> 
                : <CaretRight size={16} weight="bold" />
              }
            </button>
            
            {/* Collapsible section for group items */}
            <div className={`pl-2 mt-1 space-y-1 transition-all duration-200 overflow-hidden ${
              expandedGroups[groupIndex] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {group.items.map((block) => (
                <button
                  key={block.id}
                  onClick={() => onBlockChange(block.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
                    activeBlock === block.id
                      ? 'bg-background-primary text-text-primary font-medium border border-border-tertiary shadow-elevation-1'
                      : 'text-text-primary hover:bg-background-hover'
                  }`}
                >
                  <span>{block.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}; 