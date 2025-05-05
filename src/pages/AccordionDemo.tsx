import React, { useState } from 'react';
import { Accordion } from '../components/Accordion';
import { Info, Warning, Star, Question, Gear } from '@phosphor-icons/react';
import { Tabs } from '../components/Tabs';
import ScrollContainer from '../components/ScrollContainer';

export const AccordionDemo = () => {
  const [selectedTab, setSelectedTab] = useState('basic');

  const tabs = [
    { 
      id: 'basic', 
      label: 'Basic Usage',
      content: null,
    },
    { 
      id: 'variants', 
      label: 'Variants',
      content: null,
    },
    { 
      id: 'customization', 
      label: 'Customization',
      content: null,
    },
  ];

  const basicItems = [
    {
      id: 'item-1',
      title: 'What is Aurora Design System?',
      content: (
        <div>
          <p>Aurora is a versatile and beautiful design system built for modern applications. It provides a cohesive set of UI components and patterns to create consistent user experiences.</p>
          <p className="mt-2">The system is built with a focus on accessibility, performance, and responsive design.</p>
        </div>
      ),
    },
    {
      id: 'item-2',
      title: 'How do I install Aurora?',
      content: (
        <div>
          <p>You can install Aurora using npm or yarn:</p>
          <pre className="bg-background-secondary p-2 mt-2 rounded-md overflow-x-auto">
            <code>npm install aurora-design-system</code>
          </pre>
          <p className="mt-2">Or with yarn:</p>
          <pre className="bg-background-secondary p-2 mt-2 rounded-md overflow-x-auto">
            <code>yarn add aurora-design-system</code>
          </pre>
        </div>
      ),
    },
    {
      id: 'item-3',
      title: 'Is Aurora open source?',
      content: (
        <p>
          Yes, Aurora is open source and available under the MIT license. You can contribute to the project on GitHub.
        </p>
      ),
    },
  ];

  const iconItems = [
    {
      id: 'icon-1',
      title: 'Getting Started',
      content: 'Learn how to set up and start using Aurora in your project.',
      icon: Info,
    },
    {
      id: 'icon-2',
      title: 'Best Practices',
      content: 'Follow these guidelines for creating consistent and accessible interfaces.',
      icon: Star,
    },
    {
      id: 'icon-3',
      title: 'Troubleshooting',
      content: 'Common issues and how to resolve them.',
      icon: Warning,
      disabled: true,
    },
  ];
  
  const [expandedIds, setExpandedIds] = useState<string[]>(['controlled-1']);

  const handleChange = (id: string, isOpen: boolean) => {
    if (isOpen) {
      setExpandedIds(prev => [...prev, id]);
    } else {
      setExpandedIds(prev => prev.filter(item => item !== id));
    }
  };

  const sizes = ['sm', 'md', 'lg'] as const;
  const variants = ['default', 'bordered', 'elevated'] as const;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Accordion</h1>
        <p className="text-text-secondary">
          Accordions display expandable and collapsible sections to organize content in a limited space.
        </p>
      </div>

      <Tabs 
        items={tabs} 
        activeId={selectedTab}
        onChange={setSelectedTab}
      />

      <div className="space-y-6">
        {selectedTab === 'basic' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Basic Usage</h2>
              <p className="text-text-secondary mb-4">
                Accordions are interactive components that expand and collapse to reveal or hide content.
              </p>
              <div className="space-y-4">
                <Accordion items={basicItems} />
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Code Example</h3>
              <ScrollContainer maxHeight="200px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`import { Accordion } from 'aurora-design-system';

// Basic Accordion example
const items = [
  {
    id: 'item-1',
    title: 'Section 1',
    content: 'Content for section 1'
  },
  {
    id: 'item-2',
    title: 'Section 2',
    content: 'Content for section 2'
  }
];

<Accordion items={items} />
`}
                  </code>
                </pre>
              </ScrollContainer>
            </div>
          </div>
        )}

        {selectedTab === 'variants' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Accordion Variants</h2>
              <p className="text-text-secondary mb-4">
                Accordions can be styled in different ways to match various design needs.
              </p>
              <div className="space-y-6">
                {variants.map(variant => (
                  <div key={variant} className="space-y-2">
                    <h3 className="text-heading-sm text-text-primary capitalize">{variant}</h3>
                    <Accordion
                      items={basicItems.slice(0, 2)}
                      variant={variant}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'customization' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Customization</h2>
              <p className="text-text-secondary mb-4">
                Accordions can be customized with different icons, sizes, and behaviors.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-heading-sm text-text-primary mb-2">With Icons</h3>
                  <Accordion items={iconItems} variant="bordered" />
                </div>
                
                <div>
                  <h3 className="text-heading-sm text-text-primary mb-2">Multiple Expanded Items</h3>
                  <Accordion
                    items={basicItems}
                    variant="elevated"
                    allowMultiple
                    defaultExpandedIds={['item-1']}
                  />
                </div>
                
                <div>
                  <h3 className="text-heading-sm text-text-primary mb-2">Different Sizes</h3>
                  <div className="space-y-4">
                    {sizes.map(size => (
                      <div key={size} className="space-y-2">
                        <h4 className="text-heading-xs text-text-secondary capitalize">{size}</h4>
                        <Accordion
                          items={basicItems.slice(0, 1)}
                          size={size}
                          variant="bordered"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-heading-sm text-text-primary mb-2">Controlled Accordion</h3>
                  <Accordion
                    items={[
                      {
                        id: 'controlled-1',
                        title: 'First Item (Controlled)',
                        content: 'This is a controlled accordion item.',
                        icon: Gear,
                      },
                      {
                        id: 'controlled-2',
                        title: 'Second Item (Controlled)',
                        content: 'You can programmatically control which items are expanded.',
                        icon: Question,
                      },
                    ]}
                    expandedIds={expandedIds}
                    onChange={handleChange}
                    variant="bordered"
                  />
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => setExpandedIds(['controlled-1'])}
                    >
                      Expand First
                    </button>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => setExpandedIds(['controlled-2'])}
                    >
                      Expand Second
                    </button>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => setExpandedIds(['controlled-1', 'controlled-2'])}
                    >
                      Expand Both
                    </button>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => setExpandedIds([])}
                    >
                      Collapse All
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Props Reference</h3>
              <ScrollContainer maxHeight="300px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`interface AccordionProps {
  // Array of accordion items
  items: AccordionItem[];
  
  // Called when an item is expanded/collapsed
  onChange?: (id: string, isOpen: boolean) => void;
  
  // Size variant
  size?: 'sm' | 'md' | 'lg';
  
  // Visual variant
  variant?: 'default' | 'bordered' | 'elevated';
  
  // Whether multiple items can be expanded
  allowMultiple?: boolean;
  
  // Default expanded items (uncontrolled)
  defaultExpandedIds?: string[];
  
  // Controlled expanded items
  expandedIds?: string[];
  
  // Additional CSS class
  className?: string;
}

interface AccordionItem {
  // Unique ID for the item
  id: string;
  
  // Title/header content
  title: React.ReactNode;
  
  // Content to show when expanded
  content: React.ReactNode;
  
  // Whether the item is disabled
  disabled?: boolean;
  
  // Optional icon component
  icon?: React.ComponentType<IconProps>;
}`}
                  </code>
                </pre>
              </ScrollContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionDemo; 