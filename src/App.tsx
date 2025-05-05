import React, { useState } from 'react';
import { ButtonDemo } from './pages/ButtonDemo';
import { TypographyDemo } from './pages/TypographyDemo';
import { BadgeDemo } from './pages/BadgeDemo';
import { CheckboxDemo } from './pages/CheckboxDemo';
import { LayoutDemo } from './pages/LayoutDemo';
import { DarkModeSwitcher } from './components/DarkModeSwitcher';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider } from './design-system/ThemeContext';
import { TableDemo } from './pages/TableDemo';
import { ToggleDemo } from './pages/ToggleDemo';
import { TagDemo } from './pages/TagDemo';
import { DropdownDemo } from './pages/DropdownDemo';
import { InputDemo } from './pages/InputDemo';
import { TooltipPopoverDemo } from './pages/TooltipPopoverDemo';
import { DatePickerDemo } from './pages/DatePickerDemo';
import { TabsDemo } from './pages/TabsDemo';
import { ButtonGroupDemo } from './pages/ButtonGroupDemo';
import { BentoBoxDemo } from './pages/BentoBoxDemo';
import { AccordionDemo } from './pages/AccordionDemo';
import { DrawerDemo } from './pages/DrawerDemo';
import { IntroductionDemo } from './pages/IntroductionDemo';
import { AlertDemo } from './pages/AlertDemo';
import { Clock, ArrowClockwise, Pause, Plus } from '@phosphor-icons/react';
import { Button } from './components/Button';
import { demoGroups, DemoStatus } from './components/Sidebar';

// Component for rendering placeholder for components in development
const ComponentPlaceholder = ({ id, status }: { id: string; status: string }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'not-started':
        return <Plus size={24} className="text-text-tertiary mb-4" />;
      case 'in-progress':
        return <Clock size={24} className="text-status-info mb-4" />;
      case 'in-review':
        return <ArrowClockwise size={24} className="text-status-warning mb-4" />;
      case 'on-hold':
        return <Pause size={24} className="text-status-error mb-4" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'not-started':
        return 'Not Started';
      case 'in-progress':
        return 'In Progress';
      case 'in-review':
        return 'In Review';
      case 'on-hold':
        return 'On Hold';
      default:
        return '';
    }
  };

  // Different content based on status
  const renderContent = () => {
    if (status === 'not-started') {
      return (
        <>
          <p className="text-text-secondary mb-4">
            This component hasn't been started yet. It's planned for a future release.
          </p>
          <Button variant="secondary" size="sm" disabled>
            Development Planned
          </Button>
        </>
      );
    }
    
    return (
      <>
        <p className="text-text-secondary mb-4">
          This component is currently {getStatusText().toLowerCase()}. Check back soon for updates!
        </p>
        {status === 'in-progress' && (
          <div className="w-48 h-2 bg-background-tertiary rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-status-info"></div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={`flex flex-col items-center justify-center h-64 bg-background-secondary rounded-xl p-8 text-center ${
      status === 'not-started' ? 'bg-opacity-50' : ''
    }`}>
      {getStatusIcon()}
      <h1 className="text-heading-lg text-text-primary mb-2 capitalize">{id.replace(/-/g, ' ')}</h1>
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
        status === 'not-started' ? 'bg-background-tertiary text-text-tertiary' : 'bg-background-tertiary'
      }`}>
        {getStatusText()}
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

function App() {
  const [activeDemo, setActiveDemo] = useState('overview');

  // Get component status from sidebar definition
  const getComponentStatus = (id: string): DemoStatus => {
    // Find the component in the sidebar
    const findComponentInGroups = () => {
      for (const group of demoGroups) {
        const component = group.items.find(item => item.id === id);
        if (component) return component.status || 'completed';
      }
      return 'completed' as DemoStatus;
    };
    
    return findComponentInGroups();
  };

  const renderDemo = () => {
    // Get the current component's status
    const componentStatus = getComponentStatus(activeDemo);
    
    // For components that don't have implementations yet
    const notStartedComponents = [
      'form-layout', 'field-validation', 'multi-step-form',
      'charts', 'sparklines', 'data-grid'
    ];
    
    // For components that have placeholders
    const inDevelopmentComponents = [
      'toast', 'progress', 'skeleton', 'calendar', 'slider', 'file-upload'
    ];
    
    // Show empty state for not started components
    if (notStartedComponents.includes(activeDemo) || componentStatus === 'not-started') {
      return <ComponentPlaceholder id={activeDemo} status="not-started" />;
    }
    
    // Show placeholder for in-development components
    if (inDevelopmentComponents.includes(activeDemo)) {
      return <ComponentPlaceholder id={activeDemo} status={componentStatus} />;
    }
    
    switch (activeDemo) {
      case 'overview':
        return <IntroductionDemo />;
      case 'badge':
        return <BadgeDemo />;
      case 'button':
        return <ButtonDemo />;
      case 'typography':
        return <TypographyDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'layout':
        return <LayoutDemo />;
      case 'table':
        return <TableDemo />;
      case 'toggle':
        return <ToggleDemo />;
      case 'tag':
        return <TagDemo />;
      case 'dropdown':
        return <DropdownDemo />;
      case 'input':
        return <InputDemo />;
      case 'tooltip-popover':
        return <TooltipPopoverDemo />;
      case 'datepicker':
        return <DatePickerDemo />;
      case 'tabs':
        return <TabsDemo />;
      case 'button-group':
        return <ButtonGroupDemo />;
      case 'bento-box':
        return <BentoBoxDemo />;
      case 'accordion':
        return <AccordionDemo />;
      case 'drawer':
        return <DrawerDemo />;
      case 'alert':
        return <AlertDemo />;
      default:
        return <div>Demo not found</div>;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-secondary flex">
        <Sidebar activeDemo={activeDemo} onDemoChange={setActiveDemo} />
        <div className="flex-1 ml-64">
          <nav className="p-4 bg-background-secondary flex justify-between items-center">
            <h1 className="text-heading-md text-text-secondary font-medium">Aurora Design System</h1>
            <DarkModeSwitcher />
          </nav>
          <div className="p-8 bg-background-primary border border-border-secondary rounded-radius-xl p-8 w-full h-full overflow-y-auto">
            <main>
              {renderDemo()}
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App; 