import React, { useState } from 'react';
import { Alert } from '../components/Alert';
import { Tabs } from '../components/Tabs';
import { Button } from '../components/Button';
import ScrollContainer from '../components/ScrollContainer';

export const AlertDemo = () => {
  const [showDismissibleAlert, setShowDismissibleAlert] = useState(true);
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
      id: 'sizes', 
      label: 'Sizes',
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
        <h1 className="text-heading-lg text-text-primary mb-2">Alert</h1>
        <p className="text-text-secondary">
          Alerts provide contextual feedback messages for user actions with different severity levels.
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
                Alerts can be used to provide feedback or important information to users.
              </p>
              <div className="space-y-4">
                <Alert>This is a default info alert.</Alert>
                <Alert title="Alert with Title">
                  This is an alert with a title that provides more context.
                </Alert>
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Code Example</h3>
              <ScrollContainer maxHeight="200px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`import { Alert } from 'aurora-design-system';

// Basic Alert
<Alert>This is a default info alert.</Alert>

// Alert with title
<Alert title="Alert with Title">
  This is an alert with a title that provides more context.
</Alert>`}
                  </code>
                </pre>
              </ScrollContainer>
            </div>
          </div>
        )}

        {selectedTab === 'variants' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Alert Variants</h2>
              <p className="text-text-secondary mb-4">
                Alerts come in different variants to indicate different types of messages.
              </p>
              <div className="space-y-4">
                <Alert variant="info" title="Info">
                  This is an informational alert for general updates or information.
                </Alert>
                <Alert variant="success" title="Success">
                  This is a success alert for successful operations or positive feedback.
                </Alert>
                <Alert variant="warning" title="Warning">
                  This is a warning alert for potentially problematic situations.
                </Alert>
                <Alert variant="error" title="Error">
                  This is an error alert for critical problems or errors.
                </Alert>
                <Alert variant="neutral" title="Neutral">
                  This is a neutral alert for generic notifications.
                </Alert>
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Code Example</h3>
              <ScrollContainer maxHeight="200px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`import { Alert } from 'aurora-design-system';

<Alert variant="info" title="Info">
  This is an informational alert.
</Alert>

<Alert variant="success" title="Success">
  This is a success alert.
</Alert>

<Alert variant="warning" title="Warning">
  This is a warning alert.
</Alert>

<Alert variant="error" title="Error">
  This is an error alert.
</Alert>

<Alert variant="neutral" title="Neutral">
  This is a neutral alert.
</Alert>`}
                  </code>
                </pre>
              </ScrollContainer>
            </div>
          </div>
        )}

        {selectedTab === 'sizes' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Alert Sizes</h2>
              <p className="text-text-secondary mb-4">
                Alerts come in different sizes to fit various layouts and importance levels.
              </p>
              <div className="space-y-4">
                <Alert size="sm" title="Small Alert">
                  This is a small alert for compact layouts.
                </Alert>
                <Alert size="md" title="Medium Alert">
                  This is a medium alert (default size).
                </Alert>
                <Alert size="lg" title="Large Alert">
                  This is a large alert for important messages that need more prominence.
                </Alert>
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Code Example</h3>
              <ScrollContainer maxHeight="200px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`import { Alert } from 'aurora-design-system';

<Alert size="sm" title="Small Alert">
  This is a small alert.
</Alert>

<Alert size="md" title="Medium Alert">
  This is a medium alert (default size).
</Alert>

<Alert size="lg" title="Large Alert">
  This is a large alert.
</Alert>`}
                  </code>
                </pre>
              </ScrollContainer>
            </div>
          </div>
        )}

        {selectedTab === 'customization' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-heading-md text-text-primary mb-2">Customization</h2>
              <p className="text-text-secondary mb-4">
                Alerts can be customized with icons, dismissible functionality, and more.
              </p>
              <div className="space-y-4">
                <Alert showIcon={false} title="No Icon">
                  This alert has no icon.
                </Alert>
                
                {showDismissibleAlert && (
                  <Alert 
                    dismissible 
                    onDismiss={() => setShowDismissibleAlert(false)}
                    title="Dismissible Alert"
                  >
                    This alert can be dismissed by clicking the X button.
                  </Alert>
                )}
                
                {!showDismissibleAlert && (
                  <div className="mb-4">
                    <Button 
                      variant="secondary" 
                      onClick={() => setShowDismissibleAlert(true)}
                    >
                      Show Dismissible Alert
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-background-secondary p-4 rounded-md">
              <h3 className="text-heading-sm text-text-primary mb-2">Props Reference</h3>
              <ScrollContainer maxHeight="300px">
                <pre className="bg-background-tertiary p-4 rounded-md overflow-x-auto">
                  <code>
{`interface AlertProps {
  // Alert variant
  variant?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
  
  // Alert size
  size?: 'sm' | 'md' | 'lg';
  
  // Alert title (optional)
  title?: React.ReactNode;
  
  // Alert content
  children: React.ReactNode;
  
  // Whether the alert is dismissible
  dismissible?: boolean;
  
  // Function called when the alert is dismissed
  onDismiss?: () => void;
  
  // Whether to show the default icon
  showIcon?: boolean;
  
  // Custom icon to display
  icon?: React.ReactElement;
  
  // Additional CSS class
  className?: string;
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

export default AlertDemo; 