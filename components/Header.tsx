'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-medium bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">LankaStay.</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#" className="text-gray-600 hover:text-[#152C5B] px-1 py-2 text-base font-normal transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-[#152C5B] px-1 py-2 text-base font-normal transition-colors">
              Hotels
            </a>
            <a href="#" className="text-gray-600 hover:text-[#152C5B] px-1 py-2 text-base font-normal transition-colors">
              Rooms
            </a>
            <a href="#" className="text-gray-600 hover:text-[#152C5B] px-1 py-2 text-base font-normal transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-[#152C5B] px-1 py-2 text-base font-normal transition-colors">
              Contact
            </a>
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex">
            <button 
              className="relative text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-500/50 rounded-xl blur-lg opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#152C5B] p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-[#152C5B]">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-[#152C5B]">Hotels</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-[#152C5B]">Rooms</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-[#152C5B]">About</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-[#152C5B]">Contact</a>
              <button 
                className="w-full mt-2 text-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;