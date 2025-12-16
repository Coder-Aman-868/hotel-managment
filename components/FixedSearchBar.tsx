'use client';
import { useState, useEffect } from 'react';

const FixedSearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show search bar after scrolling 30% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = () => {
    console.log('Search:', { checkIn, guests, location });
    setIsExpanded(false);
  };

  return (
    <>
      {/* Compact Search Button */}
      <div
        className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ease-in-out ${
          isVisible && !isExpanded
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsExpanded(true)}
          className="group relative bg-white/90 backdrop-blur-md px-8 py-4 rounded-full border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button content */}
          <div className="relative flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-gray-800 font-medium">Quick Search</span>
          </div>
        </button>
      </div>

      {/* Expanded Search Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          ></div>
          
          {/* Search Panel */}
          <div className="relative w-full max-w-4xl mx-4 mb-6 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl animate-slide-in-up">
            {/* Close button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Search Form */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Find Your Perfect Stay</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Location Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white transition-all duration-200"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Date Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Check-in Date</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white transition-all duration-200"
                  />
                </div>

                {/* Guests Dropdown */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white transition-all duration-200"
                  >
                    {guestOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Hotels
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedSearchBar;