import React, { useState } from 'react';
import { Toggle } from '../components/Toggle';

export const ToggleDemo: React.FC = () => {
  const [toggleStates, setToggleStates] = useState({
    basic: false,
    withLabel: false,
    disabled: false,
    disabledChecked: true,
    small: false,
    medium: false,
    large: false,
  });

  const handleToggleChange = (key: keyof typeof toggleStates) => (checked: boolean) => {
    setToggleStates(prev => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Toggle Component</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Basic Toggle</h2>
        <div className="flex items-center gap-8">
          <Toggle
            checked={toggleStates.basic}
            onChange={handleToggleChange('basic')}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Toggle with Label</h2>
        <div className="flex items-center gap-8">
          <Toggle
            label="Toggle me"
            checked={toggleStates.withLabel}
            onChange={handleToggleChange('withLabel')}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Disabled States</h2>
        <div className="flex items-center gap-8">
          <Toggle
            label="Disabled unchecked"
            disabled
            checked={toggleStates.disabled}
            onChange={handleToggleChange('disabled')}
          />
          <Toggle
            label="Disabled checked"
            disabled
            checked={toggleStates.disabledChecked}
            onChange={handleToggleChange('disabledChecked')}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-col gap-4">
          <Toggle
            size="sm"
            label="Small toggle"
            checked={toggleStates.small}
            onChange={handleToggleChange('small')}
          />
          <Toggle
            size="md"
            label="Medium toggle"
            checked={toggleStates.medium}
            onChange={handleToggleChange('medium')}
          />
          <Toggle
            size="lg"
            label="Large toggle"
            checked={toggleStates.large}
            onChange={handleToggleChange('large')}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">With Custom Props</h2>
        <div className="flex items-center gap-8">
          <Toggle
            label="Custom toggle"
            checked={toggleStates.basic}
            onChange={handleToggleChange('basic')}
            inputProps={{
              'aria-label': 'Custom toggle'
            }}
          />
        </div>
      </section>
    </div>
  );
}; 