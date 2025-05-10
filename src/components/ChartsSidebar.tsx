import React, { useState } from 'react';
import { CaretDown, CaretRight } from '@phosphor-icons/react';

type ChartItem = {
  id: string;
  label: string;
};

type ChartGroup = {
  label: string;
  items: ChartItem[];
};

// Define chart categories
export const chartGroups: ChartGroup[] = [
  {
    label: "Basic Charts",
    items: [
      { id: 'bar-charts', label: 'Bar Charts' },
      { id: 'line-charts', label: 'Line Charts' },
      { id: 'pie-charts', label: 'Pie Charts' },
      { id: 'area-charts', label: 'Area Charts' },
    ]
  },
  {
    label: "Advanced Charts",
    items: [
      { id: 'scatter-plots', label: 'Scatter Plots' },
      { id: 'bubble-charts', label: 'Bubble Charts' },
      { id: 'radar-charts', label: 'Radar Charts' },
      { id: 'gauge-charts', label: 'Gauge Charts' },
    ]
  },
  {
    label: "Specialized Charts",
    items: [
      { id: 'heat-maps', label: 'Heat Maps' },
      { id: 'tree-maps', label: 'Tree Maps' },
      { id: 'candlestick-charts', label: 'Candlestick Charts' },
      { id: 'funnel-charts', label: 'Funnel Charts' },
    ]
  },
  {
    label: "Data Visualization",
    items: [
      { id: 'dashboards', label: 'Dashboards' },
      { id: 'real-time-data', label: 'Real-time Data' },
      { id: 'interactive-charts', label: 'Interactive Charts' },
    ]
  }
];

interface ChartsSidebarProps {
  activeChart: string;
  onChartChange: (chartId: string) => void;
}

export const ChartsSidebar: React.FC<ChartsSidebarProps> = ({ 
  activeChart, 
  onChartChange 
}) => {
  // Track which groups are expanded
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(() => {
    // By default, expand the group containing the active chart
    const initialState: Record<string, boolean> = {};
    
    chartGroups.forEach((group, index) => {
      if (group.items.some(item => item.id === activeChart)) {
        initialState[index] = true;
      }
    });
    
    return initialState;
  });

  const toggleGroup = (groupIndex: number) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupIndex]: !prev[groupIndex]
    }));
  };

  // Find which group contains the active chart (for highlighting)
  const findGroupWithActiveChart = () => {
    return chartGroups.findIndex(group => 
      group.items.some(item => item.id === activeChart)
    );
  };

  return (
    <nav className="w-56 h-full bg-background-secondary p-4 overflow-y-auto custom-scrollbar">
      <div className="space-y-2">
        {chartGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-2">
            <button
              onClick={() => toggleGroup(groupIndex)}
              className={`w-full flex items-center justify-between p-2 rounded-md font-medium transition-colors
                ${findGroupWithActiveChart() === groupIndex 
                  ? 'bg-background-hover text-text-primary' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
                }`}
            >
              <span>{group.label}</span>
              {expandedGroups[groupIndex] 
                ? <CaretDown size={16} weight="bold" /> 
                : <CaretRight size={16} weight="bold" />
              }
            </button>
            
            {/* Collapsible section for group items */}
            <div className={`pl-2 mt-1 space-y-1 transition-all duration-200 overflow-hidden ${
              expandedGroups[groupIndex] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {group.items.map((chart) => (
                <button
                  key={chart.id}
                  onClick={() => onChartChange(chart.id)}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
                    activeChart === chart.id
                      ? 'bg-background-primary text-text-primary font-medium border border-border-tertiary shadow-elevation-1'
                      : 'text-text-primary hover:bg-background-hover'
                  }`}
                >
                  <span>{chart.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}; 