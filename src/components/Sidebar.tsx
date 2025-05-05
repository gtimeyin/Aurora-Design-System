import React, { useState } from 'react';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

type Demo = {
  id: string;
  label: string;
};

type DemoGroup = {
  label: string;
  items: Demo[];
};

// Group components into logical categories
const demoGroups: DemoGroup[] = [
  {
    label: "Overview",
    items: [
      { id: 'overview', label: 'Introduction' },
    ]
  },
  {
    label: "Layout",
    items: [
      { id: 'layout', label: 'Layout' },
      { id: 'bento-box', label: 'Bento Box' },
    ]
  },
  {
    label: "Core Components",
    items: [
      { id: 'button', label: 'Button' },
      { id: 'button-group', label: 'Button Group' },
      { id: 'typography', label: 'Typography' },
      { id: 'badge', label: 'Badge' },
      { id: 'tag', label: 'Tag' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'toggle', label: 'Toggle' },
      { id: 'input', label: 'Input' },
    ]
  },
  {
    label: "Navigation & Structure",
    items: [
      { id: 'tabs', label: 'Tabs' },
      { id: 'accordion', label: 'Accordion' },
      { id: 'drawer', label: 'Drawer' },
      { id: 'dropdown', label: 'Dropdown' },
    ]
  },
  {
    label: "Data & Display",
    items: [
      { id: 'table', label: 'Table' },
      { id: 'tooltip-popover', label: 'Tooltip & Popover' },
      { id: 'datepicker', label: 'Date Picker' },
    ]
  }
];

interface SidebarProps {
  activeDemo: string;
  onDemoChange: (demoId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeDemo, onDemoChange }) => {
  // Track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    // By default, expand the group containing the active demo
    const initialState: Record<string, boolean> = {};
    
    demoGroups.forEach((group, index) => {
      if (group.items.some(item => item.id === activeDemo)) {
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

  // Find which group contains the active demo (for highlighting)
  const findGroupWithActiveDemo = () => {
    return demoGroups.findIndex(group => 
      group.items.some(item => item.id === activeDemo)
    );
  };

  return (
    <nav className="w-64 h-screen bg-background-secondary p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="space-y-2">
        {demoGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-2">
            <button
              onClick={() => toggleGroup(groupIndex)}
              className={`w-full flex items-center justify-between p-2 rounded-md font-medium transition-colors
                ${findGroupWithActiveDemo() === groupIndex 
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
              {group.items.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => onDemoChange(demo.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeDemo === demo.id
                      ? 'bg-background-primary text-text-primary font-medium border border-border-tertiary shadow-elevation-1'
                      : 'text-text-primary hover:bg-background-hover'
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}; 