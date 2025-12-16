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
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 mx-4 -mt-12 relative z-10 max-w-5xl mx-auto shadow-2xl border border-white/20">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-75"></div>
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 -m-8">
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
            <label className="text-sm font-medium bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">Select Location</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/90"
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
              className="relative w-full text-white p-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Search</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-500/50 rounded-xl blur-lg opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;