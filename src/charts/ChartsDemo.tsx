import React from 'react';

export const ChartsDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Charts</h1>
        <p className="text-text-secondary">
          Data visualization components for creating interactive and accessible charts.
          Select a chart type from the sidebar to explore available options.
        </p>
      </div>

      <div className="bg-background-secondary p-6 rounded-xl">
        <h2 className="text-heading-md text-text-primary mb-4">Coming Soon</h2>
        <p className="text-text-secondary">
          The charts section is currently in development. This page will include:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-text-secondary">
          <li>Bar charts</li>
          <li>Line charts</li>
          <li>Pie and donut charts</li>
          <li>Area charts</li>
          <li>Scatter plots</li>
          <li>Interactive data visualizations</li>
        </ul>
      </div>
    </div>
  );
}; 