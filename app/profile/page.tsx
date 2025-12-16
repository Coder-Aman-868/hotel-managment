'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const bookings = [
  { id: 'HB-2024-ABC123', hotel: 'Shangri-La Colombo', room: 'Ocean View Suite', checkIn: 'Dec 20, 2024', checkOut: 'Dec 23, 2024', status: 'upcoming', total: 999, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' },
  { id: 'HB-2024-DEF456', hotel: 'Jetwing Lighthouse', room: 'Deluxe Room', checkIn: 'Nov 15, 2024', checkOut: 'Nov 18, 2024', status: 'completed', total: 660, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400' },
  { id: 'HB-2024-GHI789', hotel: 'Amangalla', room: 'Heritage Suite', checkIn: 'Oct 5, 2024', checkOut: 'Oct 8, 2024', status: 'completed', total: 1350, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400' },
];

const wishlist = [
  { id: 1, title: 'Tea Trails', location: 'Hatton, Sri Lanka', price: 380, rating: 4.8, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400' },
  { id: 2, title: 'Cape Weligama', location: 'Weligama, Sri Lanka', price: 320, rating: 4.7, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe', email: 'john.doe@example.com', phone: '+1 234 567 8900', country: 'United States'
  });

  const tabs = [
    { id: 'bookings', label: 'My Bookings', icon: '📅' },
    { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              JD
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <p className="text-gray-500">{profile.email}</p>
              <p className="text-sm text-gray-400 mt-1">Member since January 2024</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-3 bg-blue-50 rounded-xl">
                <p className="text-2xl font-bold text-blue-600">{bookings.length}</p>
                <p className="text-sm text-gray-500">Bookings</p>
              </div>
              <div className="text-center px-6 py-3 bg-pink-50 rounded-xl">
                <p className="text-2xl font-bold text-pink-600">{wishlist.length}</p>
                <p className="text-sm text-gray-500">Wishlist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}>
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div key={booking.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                <img src={booking.image} alt={booking.hotel} className="w-full md:w-48 h-36 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.hotel}</h3>
                      <p className="text-sm text-gray-500">{booking.room}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {booking.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span>📅 {booking.checkIn} - {booking.checkOut}</span>
                    <span>🎫 {booking.id}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <p className="font-semibold text-gray-900">${booking.total}</p>
                    <div className="flex gap-2">
                      {booking.status === 'upcoming' && (
                        <button className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors">
                          Cancel
                        </button>
                      )}
                      <Link href={`/hotels/1`}>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === 'wishlist' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(hotel => (
              <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img src={hotel.image} alt={hotel.title} className="w-full h-full object-cover" />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{hotel.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm font-medium">{hotel.rating}</span>
                    </div>
                    <p className="font-semibold text-gray-900">${hotel.price}<span className="text-sm text-gray-500 font-normal">/night</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Profile Settings</h2>
              <button onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isEditing ? 'bg-gray-100 text-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-colors ${
                    isEditing ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'
                  }`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" value={profile.email} onChange={e => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-colors ${
                    isEditing ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'
                  }`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-colors ${
                    isEditing ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'
                  }`} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input type="text" value={profile.country} onChange={e => setProfile({...profile, country: e.target.value})}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-colors ${
                    isEditing ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-50'
                  }`} />
              </div>
            </div>

            {isEditing && (
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            )}

            <div className="border-t border-gray-200 mt-8 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔒</span>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Change Password</p>
                      <p className="text-sm text-gray-500">Update your password regularly</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8">
              <button className="text-red-600 hover:text-red-700 font-medium">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
