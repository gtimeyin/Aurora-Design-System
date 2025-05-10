import React from 'react';

interface TopNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const sections = [
    { id: 'base', label: 'Base Components' },
    { id: 'blocks', label: 'Blocks' },
    { id: 'charts', label: 'Charts' },
    { id: 'docs', label: 'Docs' },
  ];

  return (
    <div className="py-2 px-4">
      <div className="flex space-x-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`py-2 px-4 font-medium rounded-lg transition-colors ${
              activeSection === section.id
                ? 'bg-background-primary text-text-primary shadow-elevation-1'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}; 