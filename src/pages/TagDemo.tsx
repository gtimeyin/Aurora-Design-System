import React, { useState } from 'react';
import { Tag, TagVariant } from '../components/Tag';

const variants: TagVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
  'fuchsia',
  'bumblebee',
  'pink',
  'violet',
  'aqua',
  'lemon',
  'blue',
  'sky',
];

export const TagDemo: React.FC = () => {
  const [removableTags, setRemovableTags] = useState<TagVariant[]>(variants);

  const handleRemove = (variant: TagVariant) => {
    setRemovableTags(prev => prev.filter(v => v !== variant));
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tag Variants</h2>
        <div className="flex flex-wrap gap-2">
          {variants.map(variant => (
            <Tag key={variant} variant={variant}>
              {variant}
            </Tag>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Tag Sizes</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
          <Tag size="lg">Large</Tag>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Removable Tags</h2>
        <div className="flex flex-wrap gap-2">
          {removableTags.map(variant => (
            <Tag
              key={variant}
              variant={variant}
              removable
              onRemove={() => handleRemove(variant)}
            >
              {variant}
            </Tag>
          ))}
        </div>
        {removableTags.length === 0 && (
          <button
            className="mt-4 text-sm text-interactive-primary hover:underline"
            onClick={() => setRemovableTags(variants)}
          >
            Reset tags
          </button>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Long Content</h2>
        <div className="flex flex-wrap gap-2 max-w-md">
          <Tag>This is a very long tag content that should wrap nicely</Tag>
          <Tag variant="secondary" removable>
            Another long tag with remove button
          </Tag>
        </div>
      </section>
    </div>
  );
}; 