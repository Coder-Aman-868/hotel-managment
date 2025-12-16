'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const hotel = {
  id: 1,
  title: "Shangri-La Colombo",
  location: "1 Galle Face, Colombo 02, Sri Lanka",
  price: 189,
  rating: 4.9,
  reviews: 245,
  description: "Experience luxury at its finest at Shangri-La Colombo, where contemporary elegance meets warm Sri Lankan hospitality. Overlooking the Indian Ocean, this stunning property offers world-class amenities and breathtaking views.",
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
  ],
  amenities: [
    { name: "Free WiFi", icon: "📶" },
    { name: "Swimming Pool", icon: "🏊" },
    { name: "Spa & Wellness", icon: "💆" },
    { name: "Fitness Center", icon: "🏋️" },
    { name: "Restaurant", icon: "🍽️" },
    { name: "Room Service", icon: "🛎️" },
    { name: "Parking", icon: "🅿️" },
    { name: "Airport Shuttle", icon: "🚐" },
  ],
  rooms: [
    { type: "Deluxe Room", price: 189, size: "42 sqm", beds: "1 King Bed", view: "City View" },
    { type: "Ocean View Suite", price: 289, size: "65 sqm", beds: "1 King Bed", view: "Ocean View" },
    { type: "Presidential Suite", price: 589, size: "120 sqm", beds: "1 King Bed + Living", view: "Panoramic Ocean" },
  ],
};

export default function HotelDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <img src={hotel.images[selectedImage]} alt={hotel.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {hotel.images.slice(1).map((img, i) => (
              <div key={i} onClick={() => setSelectedImage(i + 1)} 
                className={`relative h-44 lg:h-60 rounded-xl overflow-hidden cursor-pointer transition-all ${selectedImage === i + 1 ? 'ring-4 ring-blue-500' : 'hover:opacity-90'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">⭐ {hotel.rating}</span>
                <span className="text-gray-500 text-sm">{hotel.reviews} reviews</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{hotel.title}</h1>
              <p className="text-gray-500 flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {hotel.location}
              </p>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Hotel</h2>
              <p className="text-gray-600 leading-relaxed">{hotel.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hotel.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-2xl">{amenity.icon}</span>
                    <span className="text-sm text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Room Types */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rooms</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-semibold text-gray-900">{room.type}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span>📐 {room.size}</span>
                        <span>🛏️ {room.beds}</span>
                        <span>🌅 {room.view}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">${room.price}</p>
                        <p className="text-sm text-gray-500">per night</p>
                      </div>
                      <Link href={`/booking?hotel=${hotel.id}&room=${i}`}>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                          Select
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Guest Reviews</h2>
              <div className="space-y-4">
                {[
                  { name: "Sarah M.", date: "Dec 2024", rating: 5, comment: "Absolutely stunning hotel! The ocean view was breathtaking and the staff were incredibly attentive." },
                  { name: "John D.", date: "Nov 2024", rating: 5, comment: "Best hotel experience in Sri Lanka. The spa was amazing and the food was exceptional." },
                  { name: "Emily R.", date: "Nov 2024", rating: 4, comment: "Beautiful property with great amenities. Would definitely recommend for a luxury stay." },
                ].map((review, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                          {review.name[0]}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, j) => (
                          <svg key={j} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-gray-900">${hotel.price}</span>
                  <span className="text-gray-500"> / night</span>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
                  <span className="text-blue-600 font-semibold">{hotel.rating}</span>
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <select value={guests} onChange={e => setGuests(+e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>

              <Link href={`/booking?hotel=${hotel.id}`}>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  Reserve Now
                </button>
              </Link>

              <p className="text-center text-sm text-gray-500 mt-4">You won&apos;t be charged yet</p>

              <div className="border-t border-gray-200 mt-6 pt-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>${hotel.price} x 3 nights</span>
                  <span>${hotel.price * 3}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service fee</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-900 pt-3 border-t">
                  <span>Total</span>
                  <span>${hotel.price * 3 + 45}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
