/* eslint-disable react/function-component-definition */
// components/TimeRangeSelector.tsx

import React from 'react';

interface TimeRangeSelectorProps {
  selectedRange: string;
  onSelectRange: (range: string) => void;
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  selectedRange,
  onSelectRange,
}) => {
  const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'All'];

  return (
    <div className="bg-red-900">
      {timeRanges.map((range) => (
        <button
          type="button"
          key={range}
          onClick={() => onSelectRange(range)}
          className={range === selectedRange ? 'active' : ''}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;
