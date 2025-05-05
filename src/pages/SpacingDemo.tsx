import React from 'react';

export const SpacingDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Spacing</h1>
        <p className="text-text-secondary">
          Consistent spacing is critical for harmonious layouts and visual rhythm across interfaces built with the Aurora Design System.
        </p>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl">
        <h2 className="text-heading-md text-text-primary mb-4">Coming Soon</h2>
        <p className="text-text-secondary">
          The spacing documentation is currently in development. This page will include:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-text-secondary">
          <li>Spacing scale and units</li>
          <li>Guidelines for consistent component spacing</li>
          <li>Layout spacing principles</li>
          <li>Responsive spacing adaptations</li>
          <li>Spacing token system</li>
        </ul>
      </div>
    </div>
  );
};

export default SpacingDemo; 