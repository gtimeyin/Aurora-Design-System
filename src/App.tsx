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

function App() {
  const [activeDemo, setActiveDemo] = useState('overview');

  const renderDemo = () => {
    switch (activeDemo) {
      case 'overview':
        return <div className="p-8">Welcome to Aurora Design System</div>;
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