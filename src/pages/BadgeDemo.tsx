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
      </div>
    </div>
  );
}; 