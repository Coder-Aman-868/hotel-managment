'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const hotels = [
  { id: 1, title: "Shangri-La Colombo", location: "Colombo, Sri Lanka", price: 189, rating: 4.9, reviews: 245, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", amenities: ["Pool", "Spa", "WiFi", "Restaurant"] },
  { id: 2, title: "Cinnamon Grand", location: "Colombo, Sri Lanka", price: 145, rating: 4.8, reviews: 189, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800", amenities: ["Pool", "Gym", "WiFi", "Bar"] },
  { id: 3, title: "Jetwing Lighthouse", location: "Galle, Sri Lanka", price: 220, rating: 4.7, reviews: 156, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800", amenities: ["Beach", "Pool", "Spa", "Restaurant"] },
  { id: 4, title: "Heritance Kandalama", location: "Dambulla, Sri Lanka", price: 165, rating: 4.8, reviews: 203, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800", amenities: ["Pool", "Nature", "WiFi", "Restaurant"] },
  { id: 5, title: "Amangalla", location: "Galle, Sri Lanka", price: 450, rating: 4.9, reviews: 98, image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800", amenities: ["Heritage", "Pool", "Spa", "Fine Dining"] },
  { id: 6, title: "Tea Trails", location: "Hatton, Sri Lanka", price: 380, rating: 4.8, reviews: 87, image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800", amenities: ["Mountain", "Tea", "Hiking", "Luxury"] },
];

export default function HotelsPage() {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recommended');

  const amenitiesList = ["Pool", "Spa", "WiFi", "Restaurant", "Gym", "Beach", "Bar", "Parking"];

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
          <div className="bg-white rounded-2xl p-4 shadow-xl flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-xs text-gray-500 mb-1">Location</label>
              <input type="text" placeholder="Where are you going?" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-xs text-gray-500 mb-1">Check-in</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-xs text-gray-500 mb-1">Check-out</label>
              <input type="date" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="flex-1 min-w-[120px]">
              <label className="block text-xs text-gray-500 mb-1">Guests</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium self-end">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <div className="flex items-center gap-3">
                  <input type="number" value={priceRange[0]} onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-20 px-2 py-1 border rounded-lg text-sm" placeholder="Min" />
                  <span className="text-gray-400">-</span>
                  <input type="number" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-20 px-2 py-1 border rounded-lg text-sm" placeholder="Max" />
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Amenities</label>
                <div className="space-y-2">
                  {amenitiesList.map(amenity => (
                    <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedAmenities.includes(amenity)} onChange={() => toggleAmenity(amenity)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Rating</label>
                <div className="flex gap-2">
                  {[3, 4, 5].map(star => (
                    <button key={star} className="px-3 py-1 border border-gray-200 rounded-lg text-sm hover:border-blue-500 hover:text-blue-600 transition-colors">
                      {star}+ ⭐
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600"><span className="font-semibold text-gray-900">{hotels.length}</span> hotels found</p>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="space-y-6">
              {hotels.map(hotel => (
                <Link href={`/hotels/${hotel.id}`} key={hotel.id}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                    <div className="md:w-80 h-56 md:h-auto relative">
                      <img src={hotel.image} alt={hotel.title} className="w-full h-full object-cover" />
                      <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.title}</h3>
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {hotel.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                          <span className="text-blue-600 font-semibold">{hotel.rating}</span>
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{hotel.reviews} reviews</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map(amenity => (
                          <span key={amenity} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">{amenity}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
                          <span className="text-gray-500 text-sm"> / night</span>
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Previous</button>
              {[1, 2, 3, 4, 5].map(page => (
                <button key={page} className={`w-10 h-10 rounded-lg font-medium transition-colors ${page === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'}`}>
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Next</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
