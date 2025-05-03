import React, { useState } from 'react';
import { Tabs } from '../components/Tabs';
import { Stack } from '../components/Stack';
import { Box } from '../components/Box';

export const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const basicTabs = [
    {
      id: 'tab1',
      label: 'Account',
      content: (
        <div>
          <h3 className="text-lg font-medium mb-4">Account Settings</h3>
          <p className="text-text-secondary">
            Manage your account settings and preferences.
          </p>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: 'Security',
      content: (
        <div>
          <h3 className="text-lg font-medium mb-4">Security Settings</h3>
          <p className="text-text-secondary">
            Configure your security preferences and two-factor authentication.
          </p>
        </div>
      ),
    },
    {
      id: 'tab3',
      label: 'Notifications',
      content: (
        <div>
          <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
          <p className="text-text-secondary">
            Choose how you want to be notified about activity.
          </p>
        </div>
      ),
    },
  ];

  const tabsWithIcons = [
    {
      id: 'icon1',
      label: (
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-interactive-primary" />
          <span>Active</span>
        </div>
      ),
      content: 'Content for Active tab',
    },
    {
      id: 'icon2',
      label: (
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-status-error" />
          <span>Error</span>
        </div>
      ),
      content: 'Content for Error tab',
    },
    {
      id: 'icon3',
      label: (
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-status-warning" />
          <span>Warning</span>
        </div>
      ),
      content: 'Content for Warning tab',
      disabled: true,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Tabs Component</h1>

      <div className="space-y-12">
        {/* Basic Tabs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Tabs</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Tabs items={basicTabs} />
          </Box>
        </section>

        {/* Button Variant */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Button Variant</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Tabs items={basicTabs} variant="button" />
          </Box>
        </section>

        {/* Controlled Tabs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Controlled Tabs</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Tabs
              items={basicTabs}
              activeId={activeTab}
              onChange={setActiveTab}
            />
          </Box>
        </section>

        {/* Tabs with Icons */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tabs with Icons (Button Variant)</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Tabs items={tabsWithIcons} variant="button" />
          </Box>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <Stack gap="8">
            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Small Tabs (Button Variant)</h3>
              <Tabs items={basicTabs} size="sm" variant="button" />
            </Box>

            <Box className="p-4 border border-border-primary rounded-radius-md">
              <h3 className="text-lg font-medium mb-4">Large Tabs (Default Variant)</h3>
              <Tabs items={basicTabs} size="lg" />
            </Box>
          </Stack>
        </section>

        {/* Full Width Tabs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Full Width Tabs</h2>
          <Box className="p-4 border border-border-primary rounded-radius-md">
            <Tabs items={basicTabs} fullWidth variant="button" />
          </Box>
        </section>
      </div>
    </div>
  );
}; 