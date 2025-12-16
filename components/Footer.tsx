const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#152C5B' }} className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-medium text-white mb-6">LankaStay.</h2>
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
              className="text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all btn-shadow"
              style={{ backgroundColor: '#3252DF' }}
            >
              Become Hotel Owner
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;