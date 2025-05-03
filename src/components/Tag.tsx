import React from 'react';
import { X } from '@phosphor-icons/react';

export type TagVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'fuchsia'
  | 'bumblebee'
  | 'pink'
  | 'violet'
  | 'aqua'
  | 'lemon'
  | 'blue'
  | 'sky';

export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps {
  /**
   * The variant of the tag
   */
  variant?: TagVariant;
  /**
   * The size of the tag
   */
  size?: TagSize;
  /**
   * Whether the tag is removable
   */
  removable?: boolean;
  /**
   * Callback when the tag is removed
   */
  onRemove?: () => void;
  /**
   * Additional class names
   */
  className?: string;
  /**
   * The content of the tag
   */
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'primary',
  size = 'md',
  removable = false,
  onRemove,
  className = '',
  children,
}) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 12;
      case 'lg':
        return 16;
      default:
        return 14;
    }
  };

  return (
    <span className={`tag tag-${variant} tag-${size} ${className}`}>
      <span className="tag-content">{children}</span>
      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className="tag-remove-button"
          aria-label="Remove tag"
        >
          <X size={getIconSize()} />
        </button>
      )}
    </span>
  );
}; 