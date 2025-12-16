'use client';

import React, { useState, useRef, useEffect } from 'react';
import Calendar from './Calendar';

interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value = { startDate: null, endDate: null },
  onChange,
  placeholder = 'Select date range',
  className = '',
  minDate,
  maxDate,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempRange, setTempRange] = useState<DateRange>(value);
  const [selectingEnd, setSelectingEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectingEnd(false);
        setTempRange(value);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value]);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDisplayText = () => {
    if (!value.startDate && !value.endDate) return placeholder;
    if (value.startDate && !value.endDate) return formatDate(value.startDate);
    if (value.startDate && value.endDate) {
      return `${formatDate(value.startDate)} - ${formatDate(value.endDate)}`;
    }
    return placeholder;
  };

  const handleDateSelect = (date: Date) => {
    if (!selectingEnd && !tempRange.startDate) {
      // First selection - set start date
      setTempRange({ startDate: date, endDate: null });
      setSelectingEnd(true);
    } else if (selectingEnd && tempRange.startDate) {
      // Second selection - set end date
      let startDate = tempRange.startDate;
      let endDate = date;

      // Ensure start date is before end date
      if (endDate < startDate) {
        [startDate, endDate] = [endDate, startDate];
      }

      const newRange = { startDate, endDate };
      setTempRange(newRange);
      onChange?.(newRange);
      setIsOpen(false);
      setSelectingEnd(false);
    } else {
      // Reset and start over
      setTempRange({ startDate: date, endDate: null });
      setSelectingEnd(true);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    const emptyRange = { startDate: null, endDate: null };
    setTempRange(emptyRange);
    onChange?.(emptyRange);
    setSelectingEnd(false);
  };

  const getHighlightedDates = () => {
    if (!tempRange.startDate || !tempRange.endDate) return [];
    
    const dates = [];
    const current = new Date(tempRange.startDate);
    const end = new Date(tempRange.endDate);
    
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    
    return dates;
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Field */}
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          relative w-full px-4 py-3 border border-gray-300 rounded-lg bg-white cursor-pointer
          transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
          ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'hover:border-gray-400'}
          ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''}
        `}
      >
        <div className="flex items-center justify-between">
          <span className={`text-sm ${!value.startDate && !value.endDate ? 'text-gray-500' : 'text-gray-900'}`}>
            {getDisplayText()}
          </span>
          
          <div className="flex items-center space-x-2">
            {(value.startDate || value.endDate) && !disabled && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Clear dates"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-fade-in">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4">
            {/* Instructions */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                {!tempRange.startDate 
                  ? 'Select start date' 
                  : selectingEnd 
                    ? 'Select end date' 
                    : 'Click to select new range'
                }
              </p>
            </div>

            {/* Calendar */}
            <Calendar
              selectedDate={tempRange.startDate || undefined}
              onDateSelect={handleDateSelect}
              minDate={minDate}
              maxDate={maxDate}
              highlightedDates={getHighlightedDates()}
              className="shadow-none border-0 p-0"
            />

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setTempRange({ startDate: null, endDate: null });
                  setSelectingEnd(false);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Clear
              </button>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSelectingEnd(false);
                    setTempRange(value);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                
                <button
                  onClick={() => {
                    if (tempRange.startDate && tempRange.endDate) {
                      onChange?.(tempRange);
                      setIsOpen(false);
                      setSelectingEnd(false);
                    }
                  }}
                  disabled={!tempRange.startDate || !tempRange.endDate}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;