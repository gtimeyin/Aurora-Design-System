import React, { useState, useCallback } from 'react';
import { Checkbox } from '../components/Checkbox';

export const CheckboxDemo: React.FC = () => {
  const [parentChecked, setParentChecked] = useState(false);
  const [childChecked, setChildChecked] = useState([false, false, false]);

  const handleParentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    
    // If parent was in indeterminate state or unchecked, checking it should check all children
    // If parent was checked, unchecking it should uncheck all children
    setParentChecked(newChecked);
    setChildChecked(Array(childChecked.length).fill(newChecked));
  }, [childChecked.length]);

  const handleChildChange = useCallback((index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChildChecked = [...childChecked];
    newChildChecked[index] = e.target.checked;
    setChildChecked(newChildChecked);

    // Calculate new parent state based on children
    const checkedCount = newChildChecked.filter(checked => checked).length;
    
    // If all children are checked, parent should be checked
    // If no children are checked, parent should be unchecked
    // If some children are checked, parent should be unchecked (indeterminate is calculated separately)
    setParentChecked(checkedCount === newChildChecked.length);
  }, [childChecked]);

  // Calculate indeterminate state
  // Parent should be indeterminate if some but not all children are checked
  const isIndeterminate = childChecked.some(checked => checked) && !childChecked.every(checked => checked);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Checkbox & Radio Component</h1>

      <div className="space-y-8">
        {/* Indeterminate State */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Indeterminate State</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Checkbox
                label="Select All Items"
                checked={parentChecked}
                indeterminate={isIndeterminate}
                onChange={handleParentChange}
              />
              <div className="ml-6 space-y-2">
                {childChecked.map((checked, index) => (
                  <Checkbox
                    key={index}
                    label={`Item ${index + 1}`}
                    checked={checked}
                    onChange={handleChildChange(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Size Variants with Indeterminate State */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Indeterminate Size Variants</h2>
          <div className="space-y-4">
            <Checkbox
              label="Small indeterminate checkbox"
              size="sm"
              indeterminate
            />
            <Checkbox
              label="Medium indeterminate checkbox"
              size="md"
              indeterminate
            />
          </div>
        </section>

        {/* Type Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Type Variants</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Checkbox</h3>
              <div className="space-y-4">
                <Checkbox label="Default checkbox" />
                <Checkbox label="Checked checkbox" defaultChecked />
                <Checkbox label="Disabled checkbox" disabled />
                <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Radio</h3>
              <div className="space-y-4">
                <Checkbox type="radio" label="Default radio" name="radio-group" />
                <Checkbox type="radio" label="Checked radio" name="radio-group" defaultChecked />
                <Checkbox type="radio" label="Disabled radio" name="radio-group" disabled />
                <Checkbox type="radio" label="Disabled checked radio" name="radio-group" disabled defaultChecked />
              </div>
            </div>
          </div>
        </section>

        {/* Style Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Style Variants</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Default</h3>
              <div className="space-y-4">
                <Checkbox label="Default checkbox" />
                <Checkbox type="radio" label="Default radio" name="radio-default" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Error</h3>
              <div className="space-y-4">
                <Checkbox label="Error checkbox" variant="error" />
                <Checkbox type="radio" label="Error radio" variant="error" name="radio-error" />
              </div>
            </div>
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Checkbox Sizes</h3>
              <div className="space-y-4">
                <Checkbox label="Small checkbox" size="sm" />
                <Checkbox label="Medium checkbox" size="md" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Radio Sizes</h3>
              <div className="space-y-4">
                <Checkbox type="radio" label="Small radio" size="sm" name="radio-sizes" />
                <Checkbox type="radio" label="Medium radio" size="md" name="radio-sizes" />
              </div>
            </div>
          </div>
        </section>

        {/* Combined Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Combined Variants</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Error + Sizes</h3>
              <div className="space-y-4">
                <Checkbox label="Small error" size="sm" variant="error" />
                <Checkbox label="Medium error" size="md" variant="error" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Error + Radio</h3>
              <div className="space-y-4">
                <Checkbox type="radio" label="Small error radio" size="sm" variant="error" name="radio-error-sizes" />
                <Checkbox type="radio" label="Medium error radio" size="md" variant="error" name="radio-error-sizes" />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Checkbox Group</h3>
              <div className="space-y-4">
                <Checkbox label="Accept terms and conditions" />
                <Checkbox label="Subscribe to newsletter" />
                <Checkbox label="Enable notifications" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Radio Group</h3>
              <div className="space-y-4">
                <Checkbox type="radio" label="Option 1" name="radio-group-example" />
                <Checkbox type="radio" label="Option 2" name="radio-group-example" />
                <Checkbox type="radio" label="Option 3" name="radio-group-example" />
              </div>
            </div>
          </div>
        </section>

        {/* Without Label */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Without Label</h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Checkbox</h3>
              <div className="flex gap-4">
                <Checkbox size="sm" />
                <Checkbox size="md" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Radio</h3>
              <div className="flex gap-4">
                <Checkbox type="radio" size="sm" name="radio-no-label" />
                <Checkbox type="radio" size="md" name="radio-no-label" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 