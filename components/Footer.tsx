const Footer = () => {
  return (
    <footer className="mt-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Footer Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-medium bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">LankaStay.</h2>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          {/* For Beginners */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6">For Beginners</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">New Account</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Start Booking a Room</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Use Payments</a></li>
            </ul>
          </div>

          {/* Explore Us */}
          <div>
            <h3 className="text-xl font-medium text-white mb-6">Explore Us</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Our Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Privacy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-base">
            Copyright 2019 • All rights reserved • LankaStay
          </p>
          <div className="mt-6 md:mt-0">
            <button 
              className="relative text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Become Hotel Owner</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-500/50 rounded-xl blur-lg opacity-0 hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;