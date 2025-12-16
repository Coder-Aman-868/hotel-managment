const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/40 backdrop-blur-sm">
      {/* Hero Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative">
            {/* Glowing accent behind text */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl"></div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 bg-clip-text text-transparent relative z-10">
              Forget Busy Work,<br />
              Start Next Vacation
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed relative z-10">
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <button 
              className="relative z-10 text-white px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg"
            >
              <span className="relative z-10">Show More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-500/50 rounded-xl blur-lg opacity-75"></div>
            </button>
            
            {/* Stats */}
            <div className="flex space-x-12 pt-8 relative z-10">
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto relative bg-gradient-to-br from-pink-100 to-orange-100 group-hover:from-pink-200 group-hover:to-orange-200 transition-all duration-300 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-7 h-7 text-pink-600 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">100K</p>
                <p className="text-sm text-gray-500 mt-1">Travelers</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto relative bg-gradient-to-br from-cyan-100 to-blue-100 group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-7 h-7 text-cyan-600 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">280</p>
                <p className="text-sm text-gray-500 mt-1">Hotels</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto relative bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-7 h-7 text-blue-600 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">17K</p>
                <p className="text-sm text-gray-500 mt-1">Trip</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Glowing background effects */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-pulse delay-700"></div>
            
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-200 via-amber-300 to-orange-400 flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-3xl"></div>
              
              <div className="text-center text-orange-800 relative z-10">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 to-amber-500/50 rounded-full blur-xl"></div>
                  <svg className="w-20 h-20 mx-auto relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                </div>
                <p className="text-lg font-medium bg-gradient-to-r from-orange-900 to-amber-900 bg-clip-text text-transparent">Luxury Hotel Room</p>
                <p className="text-sm opacity-75">Beautiful interior design</p>
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-bounce delay-300"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-300/80 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-orange-300/70 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;