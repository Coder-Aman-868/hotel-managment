'use client';

import DatePicker from './DatePicker';

interface CustomDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}

const CustomDatePicker = ({ 
  value, 
  onChange, 
  label, 
  placeholder = "Select date",
  minDate,
  maxDate,
  disabled = false
}: CustomDatePickerProps) => {
  
  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Convert Date to string in YYYY-MM-DD format
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      onChange(`${year}-${month}-${day}`);
    } else {
      onChange('');
    }
  };

  const getDateValue = () => {
    if (!value) return null;
    return new Date(value);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
          {label}
        </label>
      )}
      <DatePicker
        value={getDateValue()}
        onChange={handleDateChange}
        placeholder={placeholder}
        minDate={minDate}
        maxDate={maxDate}
        disabled={disabled}
        className="w-full"
      />
    </div>
  );
};

export default CustomDatePicker;