import React from 'react';

export const IntroductionDemo = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-display-sm text-text-primary">Aurora Design System</h1>
        <p className="text-paragraph-lg text-text-secondary">
          A comprehensive design system for building modern, accessible, and consistent user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background-secondary p-6 rounded-xl shadow-elevation-1">
          <h2 className="text-heading-md text-text-primary mb-3">Getting Started</h2>
          <p className="text-text-secondary mb-4">
            Aurora provides a complete set of UI components designed to work together seamlessly while maintaining
            visual consistency across your application.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>30+ UI components</li>
            <li>Semantic design tokens</li>
            <li>Responsive and accessible</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div className="bg-background-secondary p-6 rounded-xl shadow-elevation-1">
          <h2 className="text-heading-md text-text-primary mb-3">Design Principles</h2>
          <p className="text-text-secondary mb-4">
            Aurora is built on a set of core principles that guide our design decisions.
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Consistency and coherence</li>
            <li>Accessibility first</li>
            <li>Responsive by default</li>
            <li>Simplicity and clarity</li>
          </ul>
        </div>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl shadow-elevation-1">
        <h2 className="text-heading-md text-text-primary mb-3">Component Organization</h2>
        <p className="text-text-secondary mb-4">
          Aurora's components are organized into categories to help you find what you need:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Core Components</h3>
            <p className="text-text-secondary">
              Fundamental building blocks like buttons, inputs, and typography.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Navigation & Structure</h3>
            <p className="text-text-secondary">
              Components for organizing content and navigation like tabs, accordions, and drawers.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Layout</h3>
            <p className="text-text-secondary">
              Components for arranging and structuring content on the page.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Data & Display</h3>
            <p className="text-text-secondary">
              Components for presenting structured data and information.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Feedback</h3>
            <p className="text-text-secondary">
              Components for providing feedback like alerts, toasts, and notifications.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Utilities</h3>
            <p className="text-text-secondary">
              Helper components and utilities for common patterns.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl shadow-elevation-1">
        <h2 className="text-heading-md text-text-primary mb-3">Design Tokens</h2>
        <p className="text-text-secondary mb-4">
          Aurora is built on a comprehensive token system that ensures consistency and makes theming easy:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Primitive Tokens</h3>
            <p className="text-text-secondary">
              Raw values like colors, spacing, and typography that serve as the foundation.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Semantic Tokens</h3>
            <p className="text-text-secondary">
              Context-based tokens that apply meaning to primitive tokens and handle theming.
            </p>
          </div>
          
          <div className="bg-background-primary p-4 rounded-lg border border-border-secondary">
            <h3 className="text-heading-sm text-text-primary mb-2">Component Tokens</h3>
            <p className="text-text-secondary">
              Component-specific tokens that define styling at the component level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionDemo; 