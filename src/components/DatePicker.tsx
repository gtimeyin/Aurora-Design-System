import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../design-system/ThemeContext';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { Popover } from './Popover';

export type DatePickerMode = 'single' | 'range';

export interface DatePickerProps {
  /** The selected date or date range */
  value?: Date | [Date | null, Date | null];
  /** Callback when date selection changes */
  onChange?: (value: Date | [Date | null, Date | null]) => void;
  /** Whether to allow range selection */
  mode?: DatePickerMode;
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Optional className for additional styling */
  className?: string;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  mode = 'single',
  placeholder = 'Select date',
  disabled = false,
  className = '',
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  const { mode: themeMode } = useTheme();

  // Handle single date or range values
  const selectedDate = mode === 'single' ? value as Date : null;
  const [startDate, endDate] = mode === 'range' ? (value as [Date | null, Date | null] || [null, null]) : [null, null];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // Add padding days from previous month
    const padding = firstDay.getDay();
    for (let i = padding - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }

    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Add padding days from next month
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    if (mode === 'single') {
      onChange?.(date);
      setIsOpen(false);
    } else if (mode === 'range') {
      if (!startDate || (startDate && endDate) || date < startDate) {
        onChange?.([date, null]);
      } else {
        onChange?.([startDate, date]);
        setIsOpen(false);
      }
    }
  };

  const isDateInRange = (date: Date) => {
    if (mode === 'range' && startDate && hoverDate && !endDate) {
      return date >= startDate && date <= hoverDate;
    }
    if (mode === 'range' && startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    return false;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const displayValue = () => {
    if (mode === 'single') {
      return selectedDate ? formatDate(selectedDate) : placeholder;
    }
    if (mode === 'range') {
      if (!startDate) return placeholder;
      return `${formatDate(startDate)} - ${formatDate(endDate) || '...'}`;
    }
    return placeholder;
  };

  const buttonClasses = [
    'w-full',
    'px-3',
    'py-2',
    'text-left',
    'border',
    'rounded-radius-md',
    'bg-background-primary',
    'text-text-primary',
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-border-focus cursor-pointer',
    isOpen ? 'border-border-focus shadow-elevation-1' : 'border-border-primary',
    'transition-all',
    className
  ].join(' ');

  const calendarClasses = [
    'p-4',
    'bg-background-primary',
    'rounded-radius-md',
    'shadow-elevation-2',
    'border',
    'border-border-primary'
  ].join(' ');

  const dayButtonClasses = (day: Date) => {
    const isSelected = mode === 'single'
      ? selectedDate?.toDateString() === day.toDateString()
      : day.toDateString() === startDate?.toDateString() || day.toDateString() === endDate?.toDateString();
    
    const isInRange = isDateInRange(day);
    const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

    return [
      'w-9',
      'h-9',
      'rounded-radius-sm',
      'flex',
      'items-center',
      'justify-center',
      'text-sm',
      'transition-colors',
      isSelected
        ? 'bg-interactive-primary text-text-inverse-primary'
        : isInRange
        ? 'bg-interactive-tertiary bg-opacity-20'
        : 'hover:bg-background-hover',
      isCurrentMonth ? 'text-text-primary' : 'text-text-tertiary'
    ].join(' ');
  };

  return (
    <div className={className}>
      <Popover
        isOpen={isOpen && !disabled}
        onOpenChange={setIsOpen}
        content={
          <div className={calendarClasses}>
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-1 hover:bg-background-hover rounded-radius-sm"
              >
                <CaretLeft size={16} />
              </button>
              <div className="font-medium">
                {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-1 hover:bg-background-hover rounded-radius-sm"
              >
                <CaretRight size={16} />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-sm text-text-tertiary font-medium text-center"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateClick(day)}
                  onMouseEnter={() => mode === 'range' && startDate && !endDate && setHoverDate(day)}
                  onMouseLeave={() => setHoverDate(null)}
                  className={dayButtonClasses(day)}
                >
                  {day.getDate()}
                </button>
              ))}
            </div>
          </div>
        }
      >
        <button className={buttonClasses} disabled={disabled}>
          {displayValue()}
        </button>
      </Popover>
    </div>
  );
}; 