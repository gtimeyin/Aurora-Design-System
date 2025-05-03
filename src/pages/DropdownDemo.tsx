import React, { useState } from 'react';
import { Dropdown } from '../components/Dropdown';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'mango', label: 'Mango' },
  { value: 'grape', label: 'Grape' },
];

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan', disabled: true },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
];

export const DropdownDemo: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = useState<string>();
  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedError, setSelectedError] = useState<string>();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Dropdown</h2>
        <div className="max-w-xs">
          <Dropdown
            options={fruits}
            value={selectedFruit}
            onChange={setSelectedFruit}
            placeholder="Select a fruit"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <div className="space-y-4 max-w-xs">
          <Dropdown
            options={fruits}
            value={selectedSize}
            onChange={setSelectedSize}
            placeholder="Small size"
            size="sm"
          />
          <Dropdown
            options={fruits}
            value={selectedSize}
            onChange={setSelectedSize}
            placeholder="Medium size"
            size="md"
          />
          <Dropdown
            options={fruits}
            value={selectedSize}
            onChange={setSelectedSize}
            placeholder="Large size"
            size="lg"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <div className="space-y-4 max-w-xs">
          <Dropdown
            options={countries}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="With disabled option"
          />
          <Dropdown
            options={fruits}
            value={selectedFruit}
            onChange={setSelectedFruit}
            placeholder="Disabled dropdown"
            disabled
          />
          <Dropdown
            options={fruits}
            value={selectedError}
            onChange={setSelectedError}
            placeholder="Error state"
            error
            errorMessage="Please select a valid option"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Long List</h2>
        <div className="max-w-xs">
          <Dropdown
            options={[...countries, ...countries, ...countries]}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="Scrollable list"
          />
        </div>
      </section>
    </div>
  );
}; 