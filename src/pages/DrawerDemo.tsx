import React, { useState } from 'react';
import Drawer from '../components/Drawer';
import { Button } from '../components/Button';
import { Tabs } from '../components/Tabs';

export const DrawerDemo = () => {
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isTopDrawerOpen, setIsTopDrawerOpen] = useState(false);
  const [isBottomDrawerOpen, setIsBottomDrawerOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'full'>('md');
  const [selectedPlacement, setSelectedPlacement] = useState<'right' | 'left' | 'top' | 'bottom'>('right');
  const [selectedTab, setSelectedTab] = useState('basic');

  const openDrawer = () => {
    switch (selectedPlacement) {
      case 'right':
        setIsRightDrawerOpen(true);
        break;
      case 'left':
        setIsLeftDrawerOpen(true);
        break;
      case 'top':
        setIsTopDrawerOpen(true);
        break;
      case 'bottom':
        setIsBottomDrawerOpen(true);
        break;
    }
  };

  const renderDrawerByPlacement = () => {
    switch (selectedPlacement) {
      case 'right':
        return (
          <Drawer
            isOpen={isRightDrawerOpen}
            onClose={() => setIsRightDrawerOpen(false)}
            title="Right Drawer"
            placement="right"
            size={selectedSize}
            footer={
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={() => setIsRightDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsRightDrawerOpen(false)}>Submit</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <p>This is a drawer that slides in from the right side of the screen.</p>
              <p>Drawers are commonly used for forms, quick edits, or detailed information that doesn't need a full page.</p>
              <p>You can add any content here, including forms, detailed information, or any other content that makes sense in a sidebar context.</p>
            </div>
          </Drawer>
        );
      case 'left':
        return (
          <Drawer
            isOpen={isLeftDrawerOpen}
            onClose={() => setIsLeftDrawerOpen(false)}
            title="Left Drawer"
            placement="left"
            size={selectedSize}
            footer={
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={() => setIsLeftDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsLeftDrawerOpen(false)}>Submit</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <p>This is a drawer that slides in from the left side of the screen.</p>
              <p>Left drawers are often used for navigation or filters in mobile applications.</p>
              <p>You can add any content here, including navigation links, filter options, or any other content that makes sense in a sidebar context.</p>
            </div>
          </Drawer>
        );
      case 'top':
        return (
          <Drawer
            isOpen={isTopDrawerOpen}
            onClose={() => setIsTopDrawerOpen(false)}
            title="Top Drawer"
            placement="top"
            size={selectedSize}
            footer={
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={() => setIsTopDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsTopDrawerOpen(false)}>Submit</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <p>This is a drawer that slides in from the top of the screen.</p>
              <p>Top drawers can be useful for notifications, alerts, or compact forms.</p>
              <p>Since vertical space is limited, keep the content concise and focused.</p>
            </div>
          </Drawer>
        );
      case 'bottom':
        return (
          <Drawer
            isOpen={isBottomDrawerOpen}
            onClose={() => setIsBottomDrawerOpen(false)}
            title="Bottom Drawer"
            placement="bottom"
            size={selectedSize}
            footer={
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={() => setIsBottomDrawerOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setIsBottomDrawerOpen(false)}>Submit</Button>
              </div>
            }
          >
            <div className="space-y-4">
              <p>This is a drawer that slides in from the bottom of the screen.</p>
              <p>Bottom drawers are common in mobile interfaces and provide a natural location for actions or temporary content.</p>
              <p>Bottom drawers work well for action sheets, selection menus, or supplementary information.</p>
            </div>
          </Drawer>
        );
    }
  };

  const tabs = [
    { 
      id: 'basic', 
      label: 'Basic Usage',
      content: null, // We'll render content conditionally based on selectedTab
    },
    { 
      id: 'sizes', 
      label: 'Sizes',
      content: null,
    },
    { 
      id: 'placements', 
      label: 'Placements',
      content: null,
    },
    { 
      id: 'customization', 
      label: 'Customization',
      content: null,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Drawer</h1>
        <p className="text-text-secondary">
          Drawers slide in from the edge of the screen to provide additional context or controls without navigating away.
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
                Drawers can be triggered from any element and have configurable placement, size, and content.
              </p>
              <Button onClick={() => setIsRightDrawerOpen(true)}>Open Drawer</Button>
              <Drawer
                isOpen={isRightDrawerOpen}
                onClose={() => setIsRightDrawerOpen(false)}
                title="Basic Drawer"
                placement="right"
                size="md"
                footer={
                  <div className="flex space-x-4">
                    <Button variant="secondary" onClick={() => setIsRightDrawerOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setIsRightDrawerOpen(false)}>Submit</Button>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p>This is the content of the drawer.</p>
                  <p>You can put any content here, including forms, detailed information, or any other content that makes sense in a sidebar context.</p>
                </div>
              </Drawer>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Code Example</h3>
              <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                <code>
{`import React, { useState } from 'react';
import { Drawer, Button } from 'aurora-design-system';

export const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Drawer
      </Button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Basic Drawer"
        footer={
          <div className="flex space-x-4">
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Submit
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p>This is the content of the drawer.</p>
          <p>You can put any content here.</p>
        </div>
      </Drawer>
    </>
  );
};`}
                </code>
              </pre>
            </div>
          </div>
        )}

        {selectedTab === 'sizes' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Drawer Sizes</h2>
              <p className="text-text-secondary mb-4">
                Drawers come in different sizes to accommodate various amounts of content.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="size-sm" 
                    name="size" 
                    checked={selectedSize === 'sm'} 
                    onChange={() => setSelectedSize('sm')} 
                  />
                  <label htmlFor="size-sm">Small</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="size-md" 
                    name="size" 
                    checked={selectedSize === 'md'} 
                    onChange={() => setSelectedSize('md')} 
                  />
                  <label htmlFor="size-md">Medium</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="size-lg" 
                    name="size" 
                    checked={selectedSize === 'lg'} 
                    onChange={() => setSelectedSize('lg')} 
                  />
                  <label htmlFor="size-lg">Large</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="size-full" 
                    name="size" 
                    checked={selectedSize === 'full'} 
                    onChange={() => setSelectedSize('full')} 
                  />
                  <label htmlFor="size-full">Full</label>
                </div>
              </div>
              <Button onClick={() => setIsRightDrawerOpen(true)}>Open {selectedSize} Drawer</Button>
              <Drawer
                isOpen={isRightDrawerOpen}
                onClose={() => setIsRightDrawerOpen(false)}
                title={`${selectedSize.charAt(0).toUpperCase() + selectedSize.slice(1)} Drawer`}
                size={selectedSize}
                footer={
                  <div className="flex space-x-4">
                    <Button variant="secondary" onClick={() => setIsRightDrawerOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setIsRightDrawerOpen(false)}>Submit</Button>
                  </div>
                }
              >
                <div className="space-y-4">
                  <p>This drawer is using the <strong>{selectedSize}</strong> size.</p>
                  <p>Different sizes are useful for different types of content. Choose the size that best fits your content and needs:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Small (sm):</strong> Good for simple forms or quick actions</li>
                    <li><strong>Medium (md):</strong> The default size, balancing space and visibility</li>
                    <li><strong>Large (lg):</strong> For complex forms or detailed information</li>
                    <li><strong>Full:</strong> When you need maximum space, especially on mobile devices</li>
                  </ul>
                </div>
              </Drawer>
            </div>
          </div>
        )}

        {selectedTab === 'placements' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Drawer Placements</h2>
              <p className="text-text-secondary mb-4">
                Drawers can slide in from different sides of the screen.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="placement-right" 
                    name="placement" 
                    checked={selectedPlacement === 'right'} 
                    onChange={() => setSelectedPlacement('right')} 
                  />
                  <label htmlFor="placement-right">Right</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="placement-left" 
                    name="placement" 
                    checked={selectedPlacement === 'left'} 
                    onChange={() => setSelectedPlacement('left')} 
                  />
                  <label htmlFor="placement-left">Left</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="placement-top" 
                    name="placement" 
                    checked={selectedPlacement === 'top'} 
                    onChange={() => setSelectedPlacement('top')} 
                  />
                  <label htmlFor="placement-top">Top</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="placement-bottom" 
                    name="placement" 
                    checked={selectedPlacement === 'bottom'} 
                    onChange={() => setSelectedPlacement('bottom')} 
                  />
                  <label htmlFor="placement-bottom">Bottom</label>
                </div>
              </div>
              <Button onClick={openDrawer}>Open {selectedPlacement} Drawer</Button>
              {renderDrawerByPlacement()}
            </div>
          </div>
        )}

        {selectedTab === 'customization' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Customization</h2>
              <p className="text-text-secondary mb-4">
                Drawers can be customized to match your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-heading-sm text-text-primary">No Header</h3>
                  <Button onClick={() => setIsRightDrawerOpen(true)}>Open Drawer without Header</Button>
                  <Drawer
                    isOpen={isRightDrawerOpen}
                    onClose={() => setIsRightDrawerOpen(false)}
                    showHeader={false}
                  >
                    <div className="space-y-4">
                      <p>This drawer has no header.</p>
                      <p>Use this option when you want to maximize space or provide a completely custom header.</p>
                      <Button variant="primary" onClick={() => setIsRightDrawerOpen(false)}>Close</Button>
                    </div>
                  </Drawer>
                </div>
                <div className="space-y-3">
                  <h3 className="text-heading-sm text-text-primary">No Footer</h3>
                  <Button onClick={() => setIsLeftDrawerOpen(true)}>Open Drawer without Footer</Button>
                  <Drawer
                    isOpen={isLeftDrawerOpen}
                    onClose={() => setIsLeftDrawerOpen(false)}
                    title="No Footer"
                    placement="left"
                  >
                    <div className="space-y-4">
                      <p>This drawer has no footer.</p>
                      <p>This is useful when you don't need action buttons at the bottom or want to place them inside the content area.</p>
                      <div className="flex justify-end mt-8">
                        <Button variant="primary" onClick={() => setIsLeftDrawerOpen(false)}>Close</Button>
                      </div>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Props Reference</h3>
              <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                <code>
{`interface DrawerProps {
  // Required props
  isOpen: boolean;       // Controls drawer visibility
  onClose: () => void;   // Function called when drawer should close
  
  // Optional props
  title?: React.ReactNode;              // Header title
  placement?: 'left' | 'right' | 'top' | 'bottom';  // Drawer placement
  size?: 'sm' | 'md' | 'lg' | 'full';   // Drawer size
  children: React.ReactNode;            // Drawer content
  footer?: React.ReactNode;             // Footer content
  showCloseButton?: boolean;            // Show close button in header
  closeOnEsc?: boolean;                 // Close on Escape key press
  closeOnBackdropClick?: boolean;       // Close when clicking outside
  showHeader?: boolean;                 // Show the header section
  className?: string;                   // Additional CSS classes
}`}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawerDemo; 