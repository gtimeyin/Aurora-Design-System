import React, { useState } from 'react';
import { DatePicker } from '../components/DatePicker';
import { Stack } from '../components/Stack';

export const DatePickerDemo = () => {
  const [singleDate, setSingleDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Date Picker</h2>
        <div className="space-y-8">
          {/* Basic Date Picker */}
          <div>
            <h3 className="text-lg font-medium mb-4">Single Date Selection</h3>
            <div className="max-w-xs">
              <DatePicker
                value={singleDate as Date}
                onChange={(date) => setSingleDate(date as Date)}
                placeholder="Select a date"
              />
            </div>
          </div>

          {/* Date Range Picker */}
          <div>
            <h3 className="text-lg font-medium mb-4">Date Range Selection</h3>
            <div className="max-w-xs">
              <DatePicker
                mode="range"
                value={dateRange}
                onChange={(range) => setDateRange(range as [Date | null, Date | null])}
                placeholder="Select date range"
              />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-medium mb-4">States</h3>
            <Stack direction="col" gap="4">
              <div className="max-w-xs">
                <DatePicker
                  placeholder="Disabled date picker"
                  disabled
                />
              </div>
            </Stack>
          </div>
        </div>
      </section>
    </div>
  );
}; 