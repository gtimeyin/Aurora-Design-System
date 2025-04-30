import React from 'react';
import { Badge } from '../components/Badge';
import { 
  Check, 
  X, 
  Warning, 
  Info, 
  Star, 
  Bell, 
  User,
  ArrowRight 
} from '@phosphor-icons/react';

export const BadgeDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-8">Badge Component Demo</h1>
        
        {/* Badge Styles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Badge Styles</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Badge style="modern">Modern</Badge>
              <Badge style="modern-no-outline">Modern (No Outline)</Badge>
              <Badge style="solid">Solid</Badge>
              <Badge style="outline">Outline</Badge>
            </div>
          </div>
        </section>

        {/* Badge Types */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Badge Types</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge type="default">Default</Badge>
              <Badge type="left-icon" leftIcon={Info}>Left Icon</Badge>
              <Badge type="right-icon" rightIcon={ArrowRight}>Right Icon</Badge>
              <div className="flex items-center gap-2">
                <Badge type="indicator" variant="error">
                  <span>Indicator</span>
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Variants with Modern Style */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modern Style Variants</h2>
          <div className="flex gap-4">
            <Badge style="modern" variant="primary">Primary</Badge>
            <Badge style="modern" variant="secondary">Secondary</Badge>
            <Badge style="modern" variant="success">Success</Badge>
            <Badge style="modern" variant="warning">Warning</Badge>
            <Badge style="modern" variant="error">Error</Badge>
            <Badge style="modern" variant="info">Info</Badge>
          </div>
        </section>

        {/* Variants with Modern No Outline Style */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modern (No Outline) Style Variants</h2>
          <div className="flex gap-4">
            <Badge style="modern-no-outline" variant="primary">Primary</Badge>
            <Badge style="modern-no-outline" variant="secondary">Secondary</Badge>
            <Badge style="modern-no-outline" variant="success">Success</Badge>
            <Badge style="modern-no-outline" variant="warning">Warning</Badge>
            <Badge style="modern-no-outline" variant="error">Error</Badge>
            <Badge style="modern-no-outline" variant="info">Info</Badge>
          </div>
        </section>

        {/* Variants with Solid Style */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Solid Style Variants</h2>
          <div className="flex gap-4">
            <Badge style="solid" variant="primary">Primary</Badge>
            <Badge style="solid" variant="secondary">Secondary</Badge>
            <Badge style="solid" variant="success">Success</Badge>
            <Badge style="solid" variant="warning">Warning</Badge>
            <Badge style="solid" variant="error">Error</Badge>
            <Badge style="solid" variant="info">Info</Badge>
          </div>
        </section>

        {/* Variants with Outline Style */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Outline Style Variants</h2>
          <div className="flex gap-4">
            <Badge style="outline" variant="primary">Primary</Badge>
            <Badge style="outline" variant="secondary">Secondary</Badge>
            <Badge style="outline" variant="success">Success</Badge>
            <Badge style="outline" variant="warning">Warning</Badge>
            <Badge style="outline" variant="error">Error</Badge>
            <Badge style="outline" variant="info">Info</Badge>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Badge Sizes</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
            {/* Indicator sizes */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge type="indicator" size="sm" variant="error">
                  <span>Small Indicator</span>
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge type="indicator" size="md" variant="error">
                  <span>Medium Indicator</span>
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge type="indicator" size="lg" variant="error">
                  <span>Large Indicator</span>
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Badge style="modern" type="left-icon" leftIcon={Check} variant="success">Completed</Badge>
              <Badge style="modern" type="left-icon" leftIcon={X} variant="error">Failed</Badge>
              <Badge style="modern" type="left-icon" leftIcon={Warning} variant="warning">Warning</Badge>
              <Badge style="modern" type="left-icon" leftIcon={Info} variant="info">Information</Badge>
              <Badge style="modern" type="left-icon" leftIcon={Star} variant="primary">Featured</Badge>
              <Badge style="modern" type="left-icon" leftIcon={Bell} variant="secondary">Notifications</Badge>
              <Badge style="modern" type="left-icon" leftIcon={User} variant="secondary">User</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge style="solid" type="right-icon" rightIcon={ArrowRight} variant="primary">View More</Badge>
              <Badge style="outline" type="left-icon" leftIcon={Bell} variant="primary">Updates</Badge>
              <div className="flex items-center gap-2">
                <span>Status</span>
                <Badge type="indicator" variant="success">
                  <span>Success</span>
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Color Variants */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Color Variants</h2>
          <div className="space-y-6">
            {/* Modern Style */}
            <div>
              <h3 className="text-lg font-medium mb-3">Modern Style</h3>
              <div className="flex flex-wrap gap-4">
                <Badge style="modern" variant="fuchsia">Fuchsia</Badge>
                <Badge style="modern" variant="bumblebee">Bumblebee</Badge>
                <Badge style="modern" variant="pink">Pink</Badge>
                <Badge style="modern" variant="violet">Violet</Badge>
                <Badge style="modern" variant="aqua">Aqua</Badge>
                <Badge style="modern" variant="lemon">Lemon</Badge>
                <Badge style="modern" variant="blue">Blue</Badge>
                <Badge style="modern" variant="sky">Sky</Badge>
              </div>
            </div>
            
            {/* Solid Style */}
            <div>
              <h3 className="text-lg font-medium mb-3">Solid Style</h3>
              <div className="flex flex-wrap gap-4">
                <Badge style="solid" variant="fuchsia">Fuchsia</Badge>
                <Badge style="solid" variant="bumblebee">Bumblebee</Badge>
                <Badge style="solid" variant="pink">Pink</Badge>
                <Badge style="solid" variant="violet">Violet</Badge>
                <Badge style="solid" variant="aqua">Aqua</Badge>
                <Badge style="solid" variant="lemon">Lemon</Badge>
                <Badge style="solid" variant="blue">Blue</Badge>
                <Badge style="solid" variant="sky">Sky</Badge>
              </div>
            </div>
            
            {/* Outline Style */}
            <div>
              <h3 className="text-lg font-medium mb-3">Outline Style</h3>
              <div className="flex flex-wrap gap-4">
                <Badge style="outline" variant="fuchsia">Fuchsia</Badge>
                <Badge style="outline" variant="bumblebee">Bumblebee</Badge>
                <Badge style="outline" variant="pink">Pink</Badge>
                <Badge style="outline" variant="violet">Violet</Badge>
                <Badge style="outline" variant="aqua">Aqua</Badge>
                <Badge style="outline" variant="lemon">Lemon</Badge>
                <Badge style="outline" variant="blue">Blue</Badge>
                <Badge style="outline" variant="sky">Sky</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Data Visualization Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Visualization Example</h2>
          <div className="p-6 border border-border-primary rounded-lg">
            <h3 className="text-lg font-medium mb-4">Sales by Category</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="primary">Technology</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$45,245</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="fuchsia">Fashion</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$35,750</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="bumblebee">Food</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$28,320</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="pink">Beauty</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$22,700</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="violet">Home</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$18,450</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge style="solid" variant="aqua">Sports</Badge>
                  <span>Products</span>
                </div>
                <span className="font-semibold">$12,800</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 