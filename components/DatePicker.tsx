'use client';

import React, { useState, useRef, useEffect } from 'react';
import Calendar from './Calendar';

interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  highlightedDates?: Date[];
  disabledDates?: Date[];
}

const DatePicker: React.FC<DatePickerProps> = ({
  value = null,
  onChange,
  placeholder = 'Select date',
  className = '',
  minDate,
  maxDate,
  disabled = false,
  highlightedDates = [],
  disabledDates = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDateSelect = (date: Date) => {
    onChange?.(date);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.(null);
  };

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Field */}
      <div
        onClick={handleInputClick}
        className={`
          relative w-full px-4 py-3 border border-gray-300 rounded-lg bg-white cursor-pointer
          transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500
          ${disabled ? 'bg-gray-50 cursor-not-allowed opacity-60' : 'hover:border-gray-400'}
          ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''}
        `}
      >
        <div className="flex items-center justify-between">
          <span className={`text-sm ${!value ? 'text-gray-500' : 'text-gray-900'}`}>
            {value ? formatDate(value) : placeholder}
          </span>
          
          <div className="flex items-center space-x-2">
            {value && !disabled && (
              <button
                onClick={handleClear}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Clear date"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 animate-fade-in">
          <Calendar
            selectedDate={value || undefined}
            onDateSelect={handleDateSelect}
            minDate={minDate}
            maxDate={maxDate}
            highlightedDates={highlightedDates}
            disabledDates={disabledDates}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;