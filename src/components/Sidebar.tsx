import React from 'react';

type Demo = {
  id: string;
  label: string;
};

const demos: Demo[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'badge', label: 'Badge' },
  { id: 'button', label: 'Button' },
  { id: 'button-group', label: 'Button Group' },
  { id: 'typography', label: 'Typography' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'layout', label: 'Layout' },
  { id: 'table', label: 'Table' },
  { id: 'toggle', label: 'Toggle' },
  { id: 'tag', label: 'Tag' },
  { id: 'dropdown', label: 'Dropdown' },
  { id: 'input', label: 'Input' },
  { id: 'tooltip-popover', label: 'Tooltip & Popover' },
  { id: 'datepicker', label: 'Date Picker' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'bento-box', label: 'Bento Box' },
];

interface SidebarProps {
  activeDemo: string;
  onDemoChange: (demoId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeDemo, onDemoChange }) => {
  return (
    <nav className="w-64 h-screen bg-background-secondary p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="space-y-2">
        {demos.map((demo) => (
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
    </nav>
  );
}; 