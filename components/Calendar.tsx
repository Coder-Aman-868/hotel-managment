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
    <div className={`relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm p-6 ${className}`}>
      {/* Glowing orbs background */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-r from-blue-300/25 to-cyan-300/25 rounded-full blur-md animate-pulse delay-500"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigateMonth('prev')}
            className="relative p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 group"
            aria-label="Previous month"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="relative w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-sm"></div>
            <h2 className="relative text-lg font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent px-4 py-2">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
          </div>
          
          <button
            onClick={() => navigateMonth('next')}
            className="relative p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 group"
            aria-label="Next month"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="relative w-5 h-5 text-gray-700 group-hover:text-purple-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-center text-sm font-medium bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent py-2">
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
                relative h-10 w-10 text-sm font-medium rounded-xl transition-all duration-300 group
                focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-1
                ${!isCurrentMonth 
                  ? 'text-gray-300 hover:text-gray-400 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100/50' 
                  : 'text-gray-700'
                }
                ${disabled 
                  ? 'cursor-not-allowed text-gray-300 bg-gray-50/50' 
                  : 'cursor-pointer hover:shadow-lg hover:shadow-blue-200/30'
                }
                ${selected 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-300/40 hover:from-blue-600 hover:to-purple-700' 
                  : ''
                }
                ${todayDate && !selected 
                  ? 'bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 font-semibold border border-blue-200/50 shadow-sm shadow-blue-200/30' 
                  : ''
                }
                ${highlighted && !selected 
                  ? 'bg-gradient-to-br from-yellow-100 to-orange-100 text-orange-800 border border-yellow-200/50' 
                  : ''
                }
                ${hovered && !selected && !disabled 
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 shadow-md shadow-blue-200/20' 
                  : ''
                }
              `}
            >
              {day}
              
              {/* Glowing effects for selected date */}
              {selected && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl blur animate-pulse"></div>
              )}
              
              {/* Today indicator with glow */}
              {todayDate && !selected && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
              )}
              
              {/* Highlighted indicator with glow */}
              {highlighted && !selected && (
                <div className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg shadow-yellow-400/50 animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>

        {/* Footer with today button */}
        <div className="flex justify-center mt-6 pt-4 border-t border-gradient-to-r from-transparent via-gray-200/50 to-transparent">
          <button
            onClick={() => {
              const today = new Date();
              setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
              onDateSelect?.(today);
            }}
            className="relative px-6 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg shadow-blue-300/30 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">Today</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;