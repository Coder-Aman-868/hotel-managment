const HeroSection = () => {
  return (
    <section style={{ backgroundColor: '#F5F6F8' }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight" style={{ color: '#152C5B' }}>
              Forget Busy Work,<br />
              Start Next Vacation
            </h1>
            <p className="text-lg lg:text-xl text-gray-500 max-w-lg leading-relaxed">
              We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
            </p>
            <button 
              className="text-white px-8 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-all btn-shadow"
              style={{ backgroundColor: '#3252DF' }}
            >
              Show More
            </button>
            
            {/* Stats */}
            <div className="flex space-x-12 pt-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#FFECE7' }}>
                  <svg className="w-7 h-7" style={{ color: '#FF498B' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold" style={{ color: '#152C5B' }}>100K</p>
                <p className="text-sm text-gray-500 mt-1">Travelers</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#CFFAFE' }}>
                  <svg className="w-7 h-7" style={{ color: '#06B6D4' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold" style={{ color: '#152C5B' }}>280</p>
                <p className="text-sm text-gray-500 mt-1">Hotels</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#EAF1FF' }}>
                  <svg className="w-7 h-7" style={{ color: '#3252DF' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                  </svg>
                </div>
                <p className="text-2xl font-semibold" style={{ color: '#152C5B' }}>17K</p>
                <p className="text-sm text-gray-500 mt-1">Trip</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 flex items-center justify-center">
              <div className="text-center text-orange-800">
                <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
                <p className="text-lg font-medium">Luxury Hotel Room</p>
                <p className="text-sm opacity-75">Beautiful interior design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;