import React from 'react';

export const TypographyDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-display-lg text-text-primary">Typography System</h1>

      {/* Paragraph Styles */}
      <section className="space-y-4">
        <h2 className="text-heading-lg text-text-primary">Paragraph Styles (0% letter spacing)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Paragraph Large</h3>
            <p className="text-paragraph-lg">Regular - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-lg-medium">Medium - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-lg-semibold">Semi Bold - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-lg-bold">Bold - The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Paragraph Base</h3>
            <p className="text-paragraph-base">Regular - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-base-medium">Medium - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-base-semibold">Semi Bold - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-base-bold">Bold - The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Paragraph Small</h3>
            <p className="text-paragraph-sm">Regular - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-sm-medium">Medium - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-sm-semibold">Semi Bold - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-sm-bold">Bold - The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Paragraph Extra Small</h3>
            <p className="text-paragraph-xs">Regular - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-xs-medium">Medium - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-xs-semibold">Semi Bold - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-paragraph-xs-bold">Bold - The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </section>

      {/* Heading Styles */}
      <section className="space-y-4">
        <h2 className="text-heading-lg text-text-primary">Heading Styles (-2% letter spacing)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Heading Extra Large</h3>
            <h1 className="text-heading-xl">Regular</h1>
            <h1 className="text-heading-xl-medium">Medium</h1>
            <h1 className="text-heading-xl-semibold">Semi Bold</h1>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Heading Large</h3>
            <h2 className="text-heading-lg">Regular</h2>
            <h2 className="text-heading-lg-medium">Medium</h2>
            <h2 className="text-heading-lg-semibold">Semi Bold</h2>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Heading Medium</h3>
            <h3 className="text-heading-md">Regular</h3>
            <h3 className="text-heading-md-medium">Medium</h3>
            <h3 className="text-heading-md-semibold">Semi Bold</h3>
          </div>
          <div>
            <h3 className="text-heading-sm text-text-secondary mb-2">Heading Small</h3>
            <h4 className="text-heading-sm">Regular</h4>
            <h4 className="text-heading-sm-medium">Medium</h4>
            <h4 className="text-heading-sm-semibold">Semi Bold</h4>
          </div>
        </div>
      </section>

      {/* Display Styles */}
      <section className="space-y-4">
        <h2 className="text-heading-lg text-text-primary">Display Styles (-2% letter spacing)</h2>
        <div className="space-y-4">
          <p className="text-display-lg">Display Large (Semi Bold)</p>
          <p className="text-display-md">Display Medium (Semi Bold)</p>
          <p className="text-display-sm">Display Small (Semi Bold)</p>
          <p className="text-display-xs">Display Extra Small (Semi Bold)</p>
        </div>
      </section>

      {/* Label Styles */}
      <section className="space-y-4">
        <h2 className="text-heading-lg text-text-primary">Label Styles (-1% letter spacing)</h2>
        <div className="space-y-4">
          <p className="text-label-lg">Label Large (Medium)</p>
          <p className="text-label-base">Label Base (Medium)</p>
          <p className="text-label-sm">Label Small (Medium)</p>
          <p className="text-label-xs">Label Extra Small (Medium)</p>
        </div>
      </section>

      {/* Caption Style */}
      <section className="space-y-4">
        <h2 className="text-heading-lg text-text-primary">Caption Style (0% letter spacing)</h2>
        <div className="space-y-4">
          <p className="text-caption">Caption (Medium)</p>
          <p className="text-caption-bold">Caption Bold</p>
        </div>
      </section>
    </div>
  );
}; 