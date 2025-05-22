import React, { useState } from "react";
import { ComboTextBox, ComboTextBoxItem } from "../components/ComboTextBox";

const sampleItems: ComboTextBoxItem[] = [
  { id: "1", label: "React" },
  { id: "2", label: "TypeScript" },
  { id: "3", label: "JavaScript" },
  { id: "4", label: "HTML" },
  { id: "5", label: "CSS" },
  { id: "6", label: "Node.js" },
  { id: "7", label: "Python" },
  { id: "8", label: "Java" },
  { id: "9", label: "C++" },
  { id: "10", label: "Ruby" },
];

export const ComboTextBoxDemo: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<ComboTextBoxItem[]>([]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">ComboTextBox</h1>
        <p className="text-text-secondary">
          A combination of a search input and tag selector that allows users to
          search and select multiple items.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-heading-md text-text-primary mb-4">
            Basic Usage
          </h2>
          <div className="max-w-md">
            <ComboTextBox
              items={sampleItems}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              placeholder="Search technologies..."
            />
          </div>
        </div>

        <div>
          <h2 className="text-heading-md text-text-primary mb-4">
            Disabled State
          </h2>
          <div className="max-w-md">
            <ComboTextBox
              items={sampleItems}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
              placeholder="Search technologies..."
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-heading-md text-text-primary mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-text-secondary">
            <li>Search through available items</li>
            <li>Select multiple items as tags</li>
            <li>Remove tags by clicking the X or pressing backspace</li>
            <li>Keyboard navigation with arrow keys</li>
            <li>Enter to select highlighted item</li>
            <li>Escape to close dropdown</li>
            <li>Click outside to close dropdown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
