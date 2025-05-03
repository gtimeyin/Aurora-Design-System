import React, { useState } from 'react';
import { BentoBox, BentoItem } from '../components/BentoBox';
import { Button } from '../components/Button';
import { Stack } from '../components/Stack';

const generateItem = (id: number): BentoItem => {
  const isWide = id % 3 === 0;
  const span = isWide 
    ? { sm: 12 as const, md: 8 as const, lg: 8 as const } 
    : { sm: 12 as const, md: 4 as const, lg: 4 as const };
  const rowSpan = id % 5 === 0 ? 2 : 1;

  return {
    id,
    content: (
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Item {id}</h3>
          <span className="text-sm bg-background-tertiary px-2 py-1 rounded-md">
            {`${span.lg} cols`}
          </span>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          This is a dynamic bento box item that can resize based on its content and layout.
          {rowSpan > 1 && " This item spans multiple rows."}
        </p>
        <div className="flex-grow bg-background-tertiary rounded-lg p-4">
          <div className="flex flex-col gap-2">
            <p className="text-text-secondary">Column spans:</p>
            <ul className="text-sm space-y-1">
              <li>Mobile: {span.sm} columns</li>
              <li>Tablet: {span.md} columns</li>
              <li>Desktop: {span.lg} columns</li>
              {rowSpan > 1 && <li>Row span: {rowSpan}</li>}
            </ul>
          </div>
        </div>
      </div>
    ),
    span,
    rowSpan
  };
};

const initialItems = Array.from({ length: 5 }, (_, i) => generateItem(i + 1));

export const BentoBoxDemo = () => {
  const [items, setItems] = useState<BentoItem[]>(initialItems);
  const [nextId, setNextId] = useState(initialItems.length + 1);
  const [fillStrategy, setFillStrategy] = useState<'expand' | 'filler'>('expand');

  const handleAddItem = () => {
    const newItem = generateItem(nextId);
    setItems(prev => [...prev, newItem]);
    setNextId(prev => prev + 1);
  };

  const handleRemoveItem = (id: string | number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleFillStrategy = () => {
    setFillStrategy(prev => prev === 'expand' ? 'filler' : 'expand');
  };

  return (
    <div className="p-8">
      <Stack gap="8">
        <div>
          <h1 className="text-2xl font-bold mb-4">Bento Box Layout</h1>
          <p className="text-text-secondary mb-4">
            A 12-column grid layout system that allows for dynamic and responsive layouts.
            Each item spans a minimum of 4 columns, with larger items spanning 8 or 12 columns.
            Empty spaces are handled using the {fillStrategy} strategy.
          </p>
          <div className="flex gap-4 mb-8">
            <Button onClick={handleAddItem}>Add Item</Button>
            <Button 
              variant="secondary"
              onClick={toggleFillStrategy}
            >
              Toggle Fill Strategy ({fillStrategy})
            </Button>
          </div>
        </div>

        <BentoBox
          items={items}
          className="w-full"
          onRemoveItem={handleRemoveItem}
          fillStrategy={fillStrategy}
        />
      </Stack>
    </div>
  );
}; 