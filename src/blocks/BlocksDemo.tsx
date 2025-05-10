import React from 'react';
import { SimpleBlock } from './SimpleBlock';
import { Button } from '../components/Button';

export const BlocksDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-heading-lg text-text-primary mb-2">Blocks</h1>
        <p className="text-text-secondary mb-6">
          Blocks are pre-designed components composed of multiple base components to solve common UI patterns.
          Select a category from the sidebar to explore available blocks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SimpleBlock 
          title="Simple Content Block" 
          description="A basic content container with title and description"
        >
          <p className="text-text-primary mb-4">
            This is a simple content block that can be used to display information with a consistent style.
          </p>
          <Button variant="primary" size="sm">Action Button</Button>
        </SimpleBlock>

        <SimpleBlock 
          title="Card Block" 
          description="Use for featured content or CTAs"
        >
          <div className="flex flex-col space-y-4">
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Placeholder" 
              className="rounded-md w-full h-auto"
            />
            <div className="flex justify-end">
              <Button variant="secondary" size="sm">Learn More</Button>
            </div>
          </div>
        </SimpleBlock>
      </div>
    </div>
  );
}; 