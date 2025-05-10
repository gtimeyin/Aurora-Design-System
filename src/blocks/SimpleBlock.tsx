import React from 'react';

export interface SimpleBlockProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const SimpleBlock: React.FC<SimpleBlockProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="bg-background-secondary rounded-radius-xl border border-border-secondary shadow-elevation-1 overflow-hidden">
      <div className="p-4 border-b border-border-secondary">
        <h3 className="text-heading-md text-text-primary">{title}</h3>
        {description && <p className="text-text-secondary mt-1">{description}</p>}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}; 