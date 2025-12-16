'use client';

import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show back to top button after scrolling 30% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-[9998] transition-all duration-500 ease-in-out transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      }`}
    >
      {/* Backdrop blur container */}
      <div className="relative group">
        {/* Glowing background effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Main button */}
        <div className="relative w-12 h-12 bg-white/90 backdrop-blur-md rounded-full border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95">
          {/* Inner shadow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-1px_0_0_rgba(0,0,0,0.1)]"></div>
          
          {/* Arrow icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
};

export default BackToTop;