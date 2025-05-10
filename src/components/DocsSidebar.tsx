import React, { useState } from 'react';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

type DocItem = {
  id: string;
  label: string;
};

type DocGroup = {
  label: string;
  items: DocItem[];
};

// Define doc categories
export const docGroups: DocGroup[] = [
  {
    label: "Getting Started",
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'usage', label: 'Usage' },
      { id: 'theming', label: 'Theming' },
    ]
  },
  {
    label: "Core Concepts",
    items: [
      { id: 'tokens', label: 'Design Tokens' },
      { id: 'typography', label: 'Typography System' },
      { id: 'colors', label: 'Color System' },
      { id: 'spacing', label: 'Spacing System' },
    ]
  },
  {
    label: "Guidelines",
    items: [
      { id: 'accessibility', label: 'Accessibility' },
      { id: 'responsive-design', label: 'Responsive Design' },
      { id: 'dark-mode', label: 'Dark Mode' },
      { id: 'localization', label: 'Localization' },
    ]
  },
  {
    label: "Resources",
    items: [
      { id: 'figma-library', label: 'Figma Library' },
      { id: 'changelog', label: 'Changelog' },
      { id: 'contributing', label: 'Contributing' },
      { id: 'roadmap', label: 'Roadmap' },
    ]
  }
];

interface DocsSidebarProps {
  activeDoc: string;
  onDocChange: (docId: string) => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({ 
  activeDoc, 
  onDocChange 
}) => {
  // Track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    // By default, expand the group containing the active doc
    const initialState: Record<string, boolean> = {};
    
    docGroups.forEach((group, index) => {
      if (group.items.some(item => item.id === activeDoc)) {
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

  // Find which group contains the active doc (for highlighting)
  const findGroupWithActiveDoc = () => {
    return docGroups.findIndex(group => 
      group.items.some(item => item.id === activeDoc)
    );
  };

  return (
    <nav className="w-56 h-full bg-background-secondary p-4 overflow-y-auto custom-scrollbar">
      <div className="space-y-2">
        {docGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-2">
            <button
              onClick={() => toggleGroup(groupIndex)}
              className={`w-full flex items-center justify-between p-2 rounded-md font-medium transition-colors
                ${findGroupWithActiveDoc() === groupIndex 
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
              {group.items.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => onDocChange(doc.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
                    activeDoc === doc.id
                      ? 'bg-background-primary text-text-primary font-medium border border-border-tertiary shadow-elevation-1'
                      : 'text-text-primary hover:bg-background-hover'
                  }`}
                >
                  <span>{doc.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}; 