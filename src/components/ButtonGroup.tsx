import React from 'react';
import { Button, ButtonSize } from './Button';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The buttons to be rendered in the group */
  children: React.ReactNode;
  /** The size of the buttons in the group */
  size?: ButtonSize;
  /** Whether the buttons should take up the full width */
  fullWidth?: boolean;
  /** Optional className for additional styling */
  className?: string;
  /** Whether to show dividers between buttons */
  showDividers?: boolean;
  /** Whether to show a border around the group */
  bordered?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  size = 'base',
  fullWidth = false,
  className = '',
  showDividers = true,
  bordered = true,
  ...props
}) => {
  // Convert children to array to handle single child
  const buttons = React.Children.toArray(children);

  const groupClasses = [
    'inline-flex -space-x-[1px] relative',
    fullWidth ? 'w-full' : '',
    bordered ? 'rounded-radius-md' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses} role="group" {...props}>
      {React.Children.map(buttons, (child, index) => {
        if (!React.isValidElement(child)) return null;

        // Only process Button components
        if (child.type !== Button) {
          console.warn('ButtonGroup children should be Button components');
          return child;
        }

        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;

        // Clone the button with modified props
        return React.cloneElement(child, {
          ...child.props,
          className: [
            child.props.className || '',
            'border border-border-primary',
            '!rounded-none relative',
            'focus:z-10',
            'focus:ring-2 focus:ring-interactive-tertiary focus:ring-opacity-40 focus:outline-none dark:focus:ring-interactive-tertiary dark:focus:ring-opacity-40',
            isFirst && '!rounded-l-lg',
            isLast && '!rounded-r-lg',
            fullWidth && 'flex-1',
          ].filter(Boolean).join(' '),
          variant: 'white',
          size: child.props.size || size,
        });
      })}
    </div>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  return (
    <div>
      <ButtonGroup>
        <Button leftIcon={CaretLeft}>Previous</Button>
        <Button>Current</Button>
        <Button rightIcon={CaretRight}>Next</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button leftIcon={CaretLeft} rightIcon={CaretRight}>Navigate</Button>
        <Button>Action</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button leftIcon={CaretLeft} iconOnly aria-label="Previous" />
        <Button rightIcon={CaretRight} iconOnly aria-label="Next" />
      </ButtonGroup>
    </div>
  );
}; 