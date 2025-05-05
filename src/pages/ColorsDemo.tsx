import React from 'react';

export const ColorsDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Colors</h1>
        <p className="text-text-secondary">
          The color system in Aurora Design System provides a comprehensive palette for creating visually harmonious and accessible interfaces.
        </p>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl">
        <h2 className="text-heading-md text-text-primary mb-4">Coming Soon</h2>
        <p className="text-text-secondary">
          The colors documentation is currently in development. This page will include:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-text-secondary">
          <li>Primary, secondary, and accent color palettes</li>
          <li>Semantic color usage guidelines</li>
          <li>Accessibility contrast ratios</li>
          <li>Color token system</li>
          <li>Dark mode color adaptations</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorsDemo; 