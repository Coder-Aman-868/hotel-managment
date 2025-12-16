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
          relative w-full px-4 py-3 border border-gray-200/50 rounded-xl bg-gradient-to-r from-white to-purple-50/30 cursor-pointer backdrop-blur-sm
          transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-400/50 focus-within:border-purple-300/50 shadow-sm hover:shadow-md
          ${disabled ? 'bg-gradient-to-r from-gray-50 to-gray-100/30 cursor-not-allowed' : 'hover:border-purple-300/50 hover:shadow-purple-200/20'}
          ${isOpen ? 'ring-2 ring-purple-400/50 border-purple-300/50 shadow-lg shadow-purple-200/30' : ''}
        `}
      >
        {/* Glowing background effect when focused */}
        {isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl blur-sm"></div>
        )}
        <div className="relative flex items-center justify-between z-10">
          <span className={`text-sm font-medium ${!value.startDate && !value.endDate ? 'bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent' : 'bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent'}`}>
            {getDisplayText()}
          </span>
          
          <div className="flex items-center space-x-2">
            {(value.startDate || value.endDate) && !disabled && (
              <button
                onClick={handleClear}
                className="relative p-1 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 group"
                aria-label="Clear dates"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="relative w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
              <svg className="relative w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-fade-in">
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm p-6">
              {/* Instructions */}
              <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100/50 shadow-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl blur-sm"></div>
                  <p className="relative text-sm font-medium bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                    {!tempRange.startDate 
                      ? '✨ Select start date' 
                      : selectingEnd 
                        ? '🎯 Select end date' 
                        : '🔄 Click to select new range'
                    }
                  </p>
                </div>
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
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gradient-to-r from-transparent via-purple-200/50 to-transparent">
                <button
                  onClick={() => {
                    setTempRange({ startDate: null, endDate: null });
                    setSelectingEnd(false);
                  }}
                  className="relative px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400/50 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative">Clear</span>
                </button>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setSelectingEnd(false);
                      setTempRange(value);
                    }}
                    className="relative px-4 py-2 text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400/50 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative">Cancel</span>
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
                    className="relative px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl shadow-lg shadow-purple-300/30 hover:from-purple-600 hover:to-pink-700 hover:shadow-xl hover:shadow-purple-400/40 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Apply ✨</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;