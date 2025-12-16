interface HotelCardProps {
  title: string;
  location: string;
  price: number;
  rating?: number;
  image?: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const HotelCard = ({ 
  title, 
  location, 
  price, 
  rating = 4.5, 
  image, 
  featured = false,
  size = 'medium' 
}: HotelCardProps) => {
  const sizeClasses = {
    small: 'h-56',
    medium: 'h-72',
    large: 'h-96'
  };

  const gradients = [
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600', 
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-indigo-400 to-indigo-600',
    'from-teal-400 to-teal-600',
    'from-orange-400 to-orange-600',
    'from-red-400 to-red-600'
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group btn-shadow">
      {/* Image Container */}
      <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${randomGradient} flex items-center justify-center relative`}>
            <div className="absolute inset-0 gradient-overlay"></div>
            <div className="text-center text-white z-10">
              <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
              <p className="text-sm font-medium opacity-90">{title}</p>
            </div>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span 
            className="text-white px-4 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: '#3252DF' }}
          >
            ${price} per night
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Popular Choice
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-2" style={{ color: '#152C5B' }}>{title}</h3>
          <p className="text-gray-500 text-base">{location}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-base font-medium" style={{ color: '#152C5B' }}>{rating}</span>
          </div>
          
          <button 
            className="text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all text-sm"
            style={{ backgroundColor: '#3252DF' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;