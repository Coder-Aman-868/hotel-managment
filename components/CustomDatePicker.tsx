'use client';

import { useState } from 'react';

interface CustomDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const CustomDatePicker = ({ value, onChange, label, placeholder = "Select date" }: CustomDatePickerProps) => {
  const [focused, setFocused] = useState(false);

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return placeholder;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="text-sm font-medium" style={{ color: '#152C5B' }}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:border-transparent text-gray-700 custom-date-input"
          style={{ 
            focusRingColor: '#3252DF',
            backgroundColor: '#FFFCFC'
          }}
        />
        
        {/* Custom calendar icon */}
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Display formatted date when not focused */}
        {!focused && !value && (
          <div className="absolute inset-0 flex items-center px-4 pointer-events-none">
            <span className="text-gray-500">{placeholder}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;