import React from 'react';
import { Button } from '../components/Button';
import { 
  Plus, 
  ArrowRight, 
  MagnifyingGlass, 
  Heart, 
  Star, 
  Gear, 
  Bell, 
  User,
  Trash,
  X,
  Warning
} from '@phosphor-icons/react';

export const ButtonDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-8">Button Component Demo</h1>
        
        {/* Regular Variants */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Regular Variants</h2>
          <div className="flex gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="white">White</Button>
            <Button variant="text">Text</Button>
          </div>
        </section>

        {/* Destructive Variants */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Destructive Variants</h2>
          <div className="flex gap-4">
            <Button variant="primary-destructive">Primary</Button>
            <Button variant="secondary-destructive">Secondary</Button>
            <Button variant="white-destructive">White</Button>
            <Button variant="text-destructive">Text</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="base">Base</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="primary-destructive" size="xs">Extra Small</Button>
              <Button variant="primary-destructive" size="sm">Small</Button>
              <Button variant="primary-destructive" size="base">Base</Button>
              <Button variant="primary-destructive" size="lg">Large</Button>
              <Button variant="primary-destructive" size="xl">Extra Large</Button>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Button States</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button className="active">Active</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="primary-destructive">Default</Button>
              <Button variant="primary-destructive" disabled>Disabled</Button>
              <Button variant="primary-destructive" loading>Loading</Button>
              <Button variant="primary-destructive" className="active">Active</Button>
            </div>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Buttons with Icons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button leftIcon={Plus}>Add Item</Button>
              <Button rightIcon={ArrowRight}>Continue</Button>
              <Button leftIcon={MagnifyingGlass} rightIcon={ArrowRight}>Search</Button>
              <Button iconOnly leftIcon={Heart} />
              <Button iconOnly leftIcon={Star} />
              <Button iconOnly leftIcon={Gear} />
              <Button iconOnly leftIcon={Bell} />
              <Button iconOnly leftIcon={User} />
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary-destructive" leftIcon={Trash}>Delete Item</Button>
              <Button variant="primary-destructive" rightIcon={X}>Remove</Button>
              <Button variant="primary-destructive" leftIcon={Warning} rightIcon={X}>Delete Account</Button>
              <Button variant="primary-destructive" iconOnly leftIcon={Trash} />
              <Button variant="primary-destructive" iconOnly leftIcon={X} />
            </div>
          </div>
        </section>

        {/* All Variants with Icons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Variants with Icons</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Regular Variants</h3>
              <Button variant="primary" leftIcon={Plus}>Primary with Icon</Button>
              <Button variant="secondary" leftIcon={Plus}>Secondary with Icon</Button>
              <Button variant="white" leftIcon={Plus}>White with Icon</Button>
              <Button variant="text" leftIcon={Plus}>Text with Icon</Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Destructive Variants</h3>
              <Button variant="primary-destructive" leftIcon={Trash}>Primary with Icon</Button>
              <Button variant="secondary-destructive" leftIcon={Trash}>Secondary with Icon</Button>
              <Button variant="white-destructive" leftIcon={Trash}>White with Icon</Button>
              <Button variant="text-destructive" leftIcon={Trash}>Text with Icon</Button>
            </div>
          </div>
        </section>

        {/* All Sizes with Icons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Sizes with Icons</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button size="xs" leftIcon={Plus}>Extra Small</Button>
              <Button size="sm" leftIcon={Plus}>Small</Button>
              <Button size="base" leftIcon={Plus}>Base</Button>
              <Button size="lg" leftIcon={Plus}>Large</Button>
              <Button size="xl" leftIcon={Plus}>Extra Large</Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="primary-destructive" size="xs" leftIcon={Trash}>Extra Small</Button>
              <Button variant="primary-destructive" size="sm" leftIcon={Trash}>Small</Button>
              <Button variant="primary-destructive" size="base" leftIcon={Trash}>Base</Button>
              <Button variant="primary-destructive" size="lg" leftIcon={Trash}>Large</Button>
              <Button variant="primary-destructive" size="xl" leftIcon={Trash}>Extra Large</Button>
            </div>
          </div>
        </section>

        {/* Icon Only Buttons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Icon Only Buttons</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button size="xs" iconOnly leftIcon={Plus} />
              <Button size="sm" iconOnly leftIcon={Plus} />
              <Button size="base" iconOnly leftIcon={Plus} />
              <Button size="lg" iconOnly leftIcon={Plus} />
              <Button size="xl" iconOnly leftIcon={Plus} />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="primary-destructive" size="xs" iconOnly leftIcon={Trash} />
              <Button variant="primary-destructive" size="sm" iconOnly leftIcon={Trash} />
              <Button variant="primary-destructive" size="base" iconOnly leftIcon={Trash} />
              <Button variant="primary-destructive" size="lg" iconOnly leftIcon={Trash} />
              <Button variant="primary-destructive" size="xl" iconOnly leftIcon={Trash} />
            </div>
          </div>
        </section>

        {/* States with Icons */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">States with Icons</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button leftIcon={Plus}>Default</Button>
              <Button disabled leftIcon={Plus}>Disabled</Button>
              <Button loading leftIcon={Plus}>Loading</Button>
              <Button className="active" leftIcon={Plus}>Active</Button>
            </div>
            <div className="flex gap-4">
              <Button variant="primary-destructive" leftIcon={Trash}>Default</Button>
              <Button variant="primary-destructive" disabled leftIcon={Trash}>Disabled</Button>
              <Button variant="primary-destructive" loading leftIcon={Trash}>Loading</Button>
              <Button variant="primary-destructive" className="active" leftIcon={Trash}>Active</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 