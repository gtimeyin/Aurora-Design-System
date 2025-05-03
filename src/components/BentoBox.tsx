import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from './Box';

type ColumnSpan = 4 | 6 | 8 | 12;
type FillStrategy = 'expand' | 'filler';

interface ResponsiveSpan {
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
  xl?: ColumnSpan;
}

export interface BentoItem {
  id: string | number;
  content: React.ReactNode;
  /** Column spans for different breakpoints */
  span?: ResponsiveSpan;
  /** Row span - how many rows this item should occupy */
  rowSpan?: 1 | 2 | 3;
  className?: string;
}

export interface BentoBoxProps {
  /** Array of items to display in the bento box layout */
  items: BentoItem[];
  /** Gap between items in pixels */
  gap?: number;
  /** Optional className for the container */
  className?: string;
  /** Callback when an item is removed */
  onRemoveItem?: (id: string | number) => void;
  /** Strategy to fill empty spaces: 'expand' to increase item widths, 'filler' to add empty items */
  fillStrategy?: FillStrategy;
}

export const BentoBox: React.FC<BentoBoxProps> = ({
  items,
  gap = 16,
  className = '',
  onRemoveItem,
  fillStrategy = 'expand',
}) => {
  // Calculate the grid classes and handle empty spaces
  const layoutConfig = useMemo(() => {
    // Group items into rows based on their spans
    const organizeItemsIntoRows = (items: BentoItem[]) => {
      const rows: BentoItem[][] = [];
      let currentRow: BentoItem[] = [];
      let currentRowWidth = 0;

      items.forEach((item) => {
        const itemSpan = item.span?.lg || 4;
        
        // If adding this item would exceed 12 columns, start a new row
        if (currentRowWidth + itemSpan > 12) {
          if (currentRow.length > 0) {
            rows.push(currentRow);
          }
          currentRow = [item];
          currentRowWidth = itemSpan;
        } else {
          currentRow.push(item);
          currentRowWidth += itemSpan;
        }
      });

      // Add the last row if it has items
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      return rows;
    };

    const getExpandedSpanForRow = (items: BentoItem[], totalWidth: number) => {
      if (items.length === 0) return 0;
      
      // For single items in a row that don't fill the space
      if (items.length === 1) {
        const currentSpan = items[0].span?.lg || 4;
        return currentSpan < 12 ? 12 : currentSpan;
      }

      // Calculate how much each item should expand
      const remainingSpace = 12 - totalWidth;
      const expandPerItem = Math.floor(remainingSpace / items.length);
      return expandPerItem;
    };

    const getSpanClasses = (span: ResponsiveSpan, expandBy: number = 0) => {
      const baseSpan = span?.lg || 4;
      const expandedSpan = (baseSpan + expandBy) as ColumnSpan;
      
      return `
        col-span-12
        md:col-span-${expandedSpan}
        lg:col-span-${expandedSpan}
      `.trim();
    };

    const getRowSpanClass = (rowSpan?: 1 | 2 | 3) => {
      return rowSpan && rowSpan > 1 ? `row-span-${rowSpan}` : '';
    };

    // Process items row by row
    const rows = organizeItemsIntoRows(items);
    const processedItems: any[] = [];

    rows.forEach((row) => {
      const rowWidth = row.reduce((sum, item) => sum + (item.span?.lg || 4), 0);
      const expandBy = fillStrategy === 'expand' ? getExpandedSpanForRow(row, rowWidth) : 0;

      row.forEach((item) => {
        processedItems.push({
          ...item,
          spanClass: getSpanClasses(item.span || {}, expandBy),
          rowSpanClass: getRowSpanClass(item.rowSpan)
        });
      });

      // Add filler item if needed
      if (fillStrategy === 'filler' && rowWidth < 12) {
        const fillerId = `filler-${Date.now()}-${processedItems.length}`;
        const fillerSpan = 12 - rowWidth;
        
        processedItems.push({
          id: fillerId,
          content: <div className="w-full h-full bg-background-tertiary/20 rounded-lg" />,
          spanClass: `col-span-12 md:col-span-${fillerSpan} lg:col-span-${fillerSpan}`,
          rowSpanClass: '',
          className: 'filler-item'
        });
      }
    });

    return { items: processedItems };
  }, [items, fillStrategy]);

  return (
    <div
      className={`grid grid-cols-12 gap-4 auto-rows-fr transition-all duration-300 ease-in-out ${className}`}
      style={{ gap: `${gap}px`, minHeight: '200px' }}
    >
      <AnimatePresence>
        {layoutConfig.items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.3 },
              layout: {
                duration: 0.3,
                type: 'spring',
                stiffness: 200,
                damping: 25
              }
            }}
            className={`${item.spanClass} ${item.rowSpanClass} ${item.className || ''}`}
          >
            <Box className="relative h-[400px] w-full bg-background-secondary rounded-lg p-4 transition-shadow hover:shadow-lg">
              {onRemoveItem && !item.className?.includes('filler-item') && (
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-background-primary hover:bg-background-hover transition-colors"
                  aria-label="Remove item"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              {item.content}
            </Box>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}; 