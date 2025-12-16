'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    cardNumber: '', expiry: '', cvv: '', cardName: '',
    specialRequests: ''
  });

  const hotel = {
    title: "Shangri-La Colombo",
    room: "Ocean View Suite",
    checkIn: "Dec 20, 2024",
    checkOut: "Dec 23, 2024",
    nights: 3,
    price: 289,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else console.log('Booking confirmed:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {['Guest Details', 'Payment', 'Confirmation'].map((label, i) => (
            <div key={i} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span className={`ml-2 text-sm font-medium ${step === i + 1 ? 'text-blue-600' : 'text-gray-500'}`}>{label}</span>
              {i < 2 && <div className={`w-16 h-1 mx-4 rounded ${step > i + 1 ? 'bg-green-500' : 'bg-gray-200'}`} />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Guest Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                    <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3}
                      placeholder="Any special requests or preferences..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" />
                  </div>
                  <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Details</h2>
                  <div className="flex gap-3 mb-6">
                    {['💳 Visa', '💳 Mastercard', '💳 Amex'].map(card => (
                      <div key={card} className="px-4 py-2 border border-gray-200 rounded-lg text-sm">{card}</div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input type="text" name="expiry" value={formData.expiry} onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input type="text" name="cvv" value={formData.cvv} onChange={handleChange}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name on Card</label>
                      <input type="text" name="cardName" value={formData.cardName} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                      Back
                    </button>
                    <button type="submit" className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                  <p className="text-gray-600 mb-6">Your reservation has been successfully made. A confirmation email has been sent to your email address.</p>
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
                    <p className="text-sm text-gray-500 mb-1">Booking Reference</p>
                    <p className="text-xl font-bold text-gray-900">HB-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="/profile" className="flex-1">
                      <button className="w-full py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                        View My Bookings
                      </button>
                    </Link>
                    <Link href="/" className="flex-1">
                      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                        Back to Home
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="flex gap-4 mb-4">
                <img src={hotel.image} alt={hotel.title} className="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">{hotel.title}</h4>
                  <p className="text-sm text-gray-500">{hotel.room}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Check-in</span>
                  <span className="text-gray-900">{hotel.checkIn}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Check-out</span>
                  <span className="text-gray-900">{hotel.checkOut}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Guests</span>
                  <span className="text-gray-900">2 Adults</span>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">${hotel.price} x {hotel.nights} nights</span>
                  <span className="text-gray-900">${hotel.price * hotel.nights}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service fee</span>
                  <span className="text-gray-900">$45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Taxes</span>
                  <span className="text-gray-900">$87</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${hotel.price * hotel.nights + 45 + 87}</span>
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
