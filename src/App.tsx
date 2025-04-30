import React, { useState } from 'react';
import { ButtonDemo } from './pages/ButtonDemo';
import { TypographyDemo } from './pages/TypographyDemo';
import { BadgeDemo } from './pages/BadgeDemo';
import { CheckboxDemo } from './pages/CheckboxDemo';
import { LayoutDemo } from './pages/LayoutDemo';
import { DarkModeSwitcher } from './components/DarkModeSwitcher';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider } from './design-system/ThemeContext';

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
      default:
        return <div>Demo not found</div>;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-primary">
        <div className="flex">
          <Sidebar activeDemo={activeDemo} onDemoChange={setActiveDemo} />
          <div className="flex-1 ml-64">
            <nav className="p-4 bg-background-secondary border-b border-border-primary flex justify-between items-center">
              <h1 className="text-heading-lg text-text-primary">Aurora Design System</h1>
              <DarkModeSwitcher />
            </nav>
            <main className="container mx-auto p-8">
              {renderDemo()}
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App; 