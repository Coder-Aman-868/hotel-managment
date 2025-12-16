'use client';

import React, { useState, useEffect } from 'react';

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  highlightedDates?: Date[];
  disabledDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  className = '',
  highlightedDates = [],
  disabledDates = []
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const today = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Get previous month's last days to fill the grid
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 0);
  const daysFromPrevMonth = firstDayWeekday;

  // Generate calendar grid
  const calendarDays = [];

  // Previous month days
  for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
    const day = prevMonth.getDate() - i;
    const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day);
    calendarDays.push({
      date,
      day,
      isCurrentMonth: false,
      isPrevMonth: true,
      isNextMonth: false
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    calendarDays.push({
      date,
      day,
      isCurrentMonth: true,
      isPrevMonth: false,
      isNextMonth: false
    });
  }

  // Next month days to complete the grid
  const remainingCells = 42 - calendarDays.length; // 6 rows × 7 days
  for (let day = 1; day <= remainingCells; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
    calendarDays.push({
      date,
      day,
      isCurrentMonth: false,
      isPrevMonth: false,
      isNextMonth: true
    });
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const isDateDisabled = (date: Date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return disabledDates.some(disabledDate => 
      date.toDateString() === disabledDate.toDateString()
    );
  };

  const isDateHighlighted = (date: Date) => {
    return highlightedDates.some(highlightedDate => 
      date.toDateString() === highlightedDate.toDateString()
    );
  };

  const isDateSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const handleDateClick = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) {
      // Navigate to the clicked month
      setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
      return;
    }

    if (isDateDisabled(date)) return;
    
    onDateSelect?.(date);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-lg font-semibold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((calendarDay, index) => {
          const { date, day, isCurrentMonth } = calendarDay;
          const disabled = isDateDisabled(date);
          const highlighted = isDateHighlighted(date);
          const selected = isDateSelected(date);
          const todayDate = isToday(date);
          const hovered = hoveredDate?.toDateString() === date.toDateString();

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date, isCurrentMonth)}
              onMouseEnter={() => setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
              disabled={disabled}
              className={`
                relative h-10 w-10 text-sm font-medium rounded-lg transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                ${!isCurrentMonth 
                  ? 'text-gray-300 hover:text-gray-400 hover:bg-gray-50' 
                  : 'text-gray-700'
                }
                ${disabled 
                  ? 'cursor-not-allowed text-gray-300 bg-gray-50' 
                  : 'cursor-pointer hover:bg-blue-50'
                }
                ${selected 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : ''
                }
                ${todayDate && !selected 
                  ? 'bg-blue-100 text-blue-600 font-semibold' 
                  : ''
                }
                ${highlighted && !selected 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : ''
                }
                ${hovered && !selected && !disabled 
                  ? 'bg-blue-100 text-blue-600' 
                  : ''
                }
              `}
            >
              {day}
              
              {/* Today indicator */}
              {todayDate && !selected && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
              )}
              
              {/* Highlighted indicator */}
              {highlighted && !selected && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer with today button */}
      <div className="flex justify-center mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={() => {
            const today = new Date();
            setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
            onDateSelect?.(today);
          }}
          className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Today
        </button>
      </div>
    </div>
  );
};

export default Calendar;