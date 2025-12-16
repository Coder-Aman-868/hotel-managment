'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-slate-900">LankaStay</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors relative group">
              Home
              <span className="absolute inset-x-0 -bottom-px h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/hotels" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors relative group">
              Hotels
              <span className="absolute inset-x-0 -bottom-px h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors relative group">
              About
              <span className="absolute inset-x-0 -bottom-px h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors relative group">
              Contact
              <span className="absolute inset-x-0 -bottom-px h-px bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors">
              Sign in
            </Link>
            <Link href="/create-account" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-lg transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link href="/" className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Home</Link>
              <Link href="/hotels" className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Hotels</Link>
              <Link href="/about" className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">About</Link>
              <Link href="/contact" className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">Contact</Link>
              <div className="pt-4 pb-2 border-t border-slate-200 mt-4">
                <Link href="/login" className="block w-full text-left px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors mb-2">
                  Sign in
                </Link>
                <Link href="/create-account" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;