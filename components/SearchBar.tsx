'use client';

import { useState } from 'react';
import CustomDatePicker from './CustomDatePicker';
import CustomDropdown from './CustomDropdown';

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2');
  const [location, setLocation] = useState('');

  const guestOptions = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5', label: '5+ Guests' }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 mx-4 -mt-12 relative z-10 max-w-5xl mx-auto btn-shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Check Available */}
        <CustomDatePicker
          value={checkIn}
          onChange={setCheckIn}
          label="Check Available"
          placeholder="Pick a date"
        />

        {/* Guests */}
        <CustomDropdown
          options={guestOptions}
          value={guests}
          onChange={setGuests}
          label="Person"
          placeholder="Select guests"
        />

        {/* Select Location */}
        <div className="space-y-3">
          <label className="text-sm font-medium" style={{ color: '#152C5B' }}>Select Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:border-transparent text-gray-700"
              style={{ 
                focusRingColor: '#3252DF',
                backgroundColor: '#FFFCFC'
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button 
            className="w-full text-white p-4 rounded-xl font-medium hover:opacity-90 transition-all btn-shadow"
            style={{ backgroundColor: '#3252DF' }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;