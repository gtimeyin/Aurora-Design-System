import React, { useState } from 'react';
import { CaretDown, CaretRight, Clock, ArrowClockwise, Pause, CheckCircle, Plus } from '@phosphor-icons/react';

export type DemoStatus = 'not-started' | 'in-progress' | 'in-review' | 'on-hold' | 'completed';

type Demo = {
  id: string;
  label: string;
  status?: DemoStatus;
};

type DemoGroup = {
  label: string;
  items: Demo[];
};

// Group components into logical categories
export const demoGroups: DemoGroup[] = [
  {
    label: "Overview",
    items: [
      { id: 'overview', label: 'Introduction', status: 'in-progress' },
    ]
  },
  {
    label: "Foundations",
    items: [
      { id: 'typography', label: 'Typography', status: 'in-progress' },
      { id: 'colors', label: 'Colors', status: 'not-started' },
      { id: 'spacing', label: 'Spacing', status: 'not-started' },
    ]
  },
  {
    label: "Layout",
    items: [
      { id: 'bento-box', label: 'Bento Box', status: 'in-progress' },
    ]
  },
  {
    label: "Core Components",
    items: [
      { id: 'button', label: 'Button', status: 'in-progress' },
      { id: 'button-group', label: 'Button Group', status: 'in-progress' },
      { id: 'badge', label: 'Badge', status: 'in-progress' },
      { id: 'tag', label: 'Tag', status: 'in-progress' },
      { id: 'checkbox', label: 'Checkbox', status: 'in-progress' },
      { id: 'toggle', label: 'Toggle', status: 'in-progress' },
      { id: 'input', label: 'Input', status: 'in-progress' },
      { id: 'alert', label: 'Alert', status: 'in-progress' },
    ]
  },
  {
    label: "Navigation & Structure",
    items: [
      { id: 'tabs', label: 'Tabs', status: 'in-progress' },
      { id: 'accordion', label: 'Accordion', status: 'in-progress' },
      { id: 'drawer', label: 'Drawer', status: 'in-progress' },
      { id: 'dropdown', label: 'Dropdown', status: 'in-progress' },
    ]
  },
  {
    label: "Data & Display",
    items: [
      { id: 'table', label: 'Table', status: 'in-progress' },
      { id: 'tooltip-popover', label: 'Tooltip & Popover', status: 'in-progress' },
      { id: 'datepicker', label: 'Date Picker', status: 'in-progress' },
    ]
  },
  {
    label: "Feedback",
    items: [
      { id: 'toast', label: 'Toast', status: 'in-progress' },
      { id: 'progress', label: 'Progress', status: 'on-hold' },
      { id: 'skeleton', label: 'Skeleton', status: 'in-review' },
    ]
  },
  {
    label: "Upcoming",
    items: [
      { id: 'calendar', label: 'Calendar', status: 'on-hold' },
      { id: 'slider', label: 'Slider', status: 'in-progress' },
      { id: 'file-upload', label: 'File Upload', status: 'in-progress' },
    ]
  },
  {
    label: "Forms & Validation",
    items: [
      { id: 'form-layout', label: 'Form Layout', status: 'not-started' },
      { id: 'field-validation', label: 'Field Validation', status: 'not-started' },
      { id: 'multi-step-form', label: 'Multi-Step Form', status: 'not-started' },
    ]
  },
  {
    label: "Data Visualization",
    items: [
      { id: 'charts', label: 'Charts', status: 'not-started' },
      { id: 'sparklines', label: 'Sparklines', status: 'not-started' },
      { id: 'data-grid', label: 'Data Grid', status: 'not-started' },
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

  // Status icon mapper
  const getStatusIcon = (status?: DemoStatus) => {
    switch (status) {
      case 'not-started':
        return <Plus size={14} className="text-text-tertiary" />;
      case 'in-progress':
        return <Clock size={14} className="text-status-info" />;
      case 'in-review':
        return <ArrowClockwise size={14} className="text-status-warning" />;
      case 'on-hold':
        return <Pause size={14} className="text-status-error" />;
      case 'completed':
        return <CheckCircle size={14} className="text-status-success" />;
      default:
        return null;
    }
  };

  // Status tooltip text
  const getStatusTooltip = (status?: DemoStatus) => {
    switch (status) {
      case 'not-started':
        return 'Not Started';
      case 'in-progress':
        return 'In Progress';
      case 'in-review':
        return 'In Review';
      case 'on-hold':
        return 'On Hold';
      case 'completed':
        return 'Completed';
      default:
        return '';
    }
  };

  return (
    <nav className="w-56 h-full bg-background-secondary p-4 overflow-y-auto custom-scrollbar">
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
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
              activeDemo === demo.id
                      ? 'bg-background-primary text-text-primary font-medium border border-border-tertiary shadow-elevation-1'
                : 'text-text-primary hover:bg-background-hover'
                  } ${demo.status === 'not-started' ? 'opacity-70' : ''}`}
                  title={getStatusTooltip(demo.status)}
          >
                  <span>{demo.label}</span>
                  {getStatusIcon(demo.status)}
          </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Status Legend */}
      <div className="mt-8 border-t border-border-secondary pt-4">
        <h3 className="text-sm font-medium text-text-secondary mb-2">Component Status</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <Plus size={14} className="text-text-tertiary" />
            <span>Not Started</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <Clock size={14} className="text-status-info" />
            <span>In Progress</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <ArrowClockwise size={14} className="text-status-warning" />
            <span>In Review</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <Pause size={14} className="text-status-error" />
            <span>On Hold</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <CheckCircle size={14} className="text-status-success" />
            <span>Completed</span>
          </div>
        </div>
      </div>
    </nav>
  );
}; 