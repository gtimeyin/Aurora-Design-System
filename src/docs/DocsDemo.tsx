import React from 'react';

export const DocsDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Documentation</h1>
        <p className="text-text-secondary">
          Comprehensive guides and documentation for the Aurora Design System.
          Select a topic from the sidebar to explore the documentation.
        </p>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl">
        <h2 className="text-heading-md text-text-primary mb-4">Getting Started</h2>
        <p className="text-text-secondary mb-4">
          Aurora Design System provides a unified set of UI components, patterns, and guidelines for creating cohesive user experiences.
        </p>
        
        <h3 className="text-heading-sm text-text-primary mt-6 mb-2">Installation</h3>
        <div className="bg-background-tertiary p-3 rounded font-mono text-sm text-text-primary mb-4">
          npm install aurora-design-system
        </div>
        
        <h3 className="text-heading-sm text-text-primary mt-6 mb-2">Usage</h3>
        <div className="bg-background-tertiary p-3 rounded font-mono text-sm text-text-primary">
          {`import { Button } from 'aurora-design-system';
          
function MyComponent() {
  return (
    <Button variant="primary">Click Me</Button>
  );
}`}
        </div>
      </div>
    </div>
  );
}; 