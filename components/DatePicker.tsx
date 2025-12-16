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
          relative w-full px-4 py-3 border border-gray-200/50 rounded-xl bg-gradient-to-r from-white to-blue-50/30 cursor-pointer backdrop-blur-sm
          transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400/50 focus-within:border-blue-300/50 shadow-sm hover:shadow-md
          ${disabled ? 'bg-gradient-to-r from-gray-50 to-gray-100/30 cursor-not-allowed opacity-60' : 'hover:border-blue-300/50 hover:shadow-blue-200/20'}
          ${isOpen ? 'ring-2 ring-blue-400/50 border-blue-300/50 shadow-lg shadow-blue-200/30' : ''}
        `}
      >
        {/* Glowing background effect when focused */}
        {isOpen && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl blur-sm"></div>
        )}
        <div className="relative flex items-center justify-between z-10">
          <span className={`text-sm font-medium ${!value ? 'bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent' : 'bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent'}`}>
            {value ? formatDate(value) : placeholder}
          </span>
          
          <div className="flex items-center space-x-2">
            {value && !disabled && (
              <button
                onClick={handleClear}
                className="relative p-1 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 group"
                aria-label="Clear date"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <svg className="relative w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
              <svg 
                className={`relative w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-[9999] animate-fade-in">
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>
            <Calendar
              selectedDate={value || undefined}
              onDateSelect={handleDateSelect}
              minDate={minDate}
              maxDate={maxDate}
              highlightedDates={highlightedDates}
              disabledDates={disabledDates}
              className="relative shadow-2xl border-0 p-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;