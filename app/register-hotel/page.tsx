'use client';

import { useState } from 'react';
import Link from 'next/link';

const facilitiesList = [
  'Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Fitness Center', 'Restaurant',
  'Room Service', 'Parking', 'Airport Shuttle', 'Business Center', 'Laundry Service',
  'Pet Friendly', 'Air Conditioning', 'Bar/Lounge', 'Conference Room', '24/7 Front Desk'
];

export default function RegisterHotelPage() {
  const [formData, setFormData] = useState({
    hotelName: '',
    registrationNo: '',
    address: '',
    facilities: [] as string[]
  });
  const [images, setImages] = useState<File[]>([]);
  const [documents, setDocuments] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFacilityToggle = (facility: string) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages(prev => [...prev, ...files]);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(prev => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setDocuments(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreview(prev => prev.filter((_, i) => i !== index));
  };

  const removeDocument = (index: number) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register Hotel:', { ...formData, images, documents });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-blue-600">HotelBook</h1>
          </Link>
          <p className="text-gray-500 mt-2">Register your hotel and reach millions of travelers</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Register Your Hotel</h2>
              <p className="text-sm text-gray-500">Fill in the details below to get started</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hotel Name */}
            <div>
              <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
              <input type="text" id="hotelName" name="hotelName" value={formData.hotelName} onChange={handleChange}
                placeholder="Enter your hotel name" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required />
            </div>

            {/* Registration No */}
            <div>
              <label htmlFor="registrationNo" className="block text-sm font-medium text-gray-700 mb-2">Registration Number</label>
              <input type="text" id="registrationNo" name="registrationNo" value={formData.registrationNo} onChange={handleChange}
                placeholder="Enter hotel registration number" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows={3}
                placeholder="Enter complete hotel address" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" required />
            </div>

            {/* Upload Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                <input type="file" id="images" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                <label htmlFor="images" className="cursor-pointer">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Click to upload hotel images</p>
                  <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 10MB each</p>
                </label>
              </div>
              {imagePreview.length > 0 && (
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {imagePreview.map((src, i) => (
                    <div key={i} className="relative group">
                      <img src={src} alt={`Preview ${i + 1}`} className="w-full h-20 object-cover rounded-lg" />
                      <button type="button" onClick={() => removeImage(i)} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upload Documents */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                <input type="file" id="documents" accept=".pdf,.doc,.docx" multiple onChange={handleDocumentUpload} className="hidden" />
                <label htmlFor="documents" className="cursor-pointer">
                  <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">Click to upload documents</p>
                  <p className="text-sm text-gray-400 mt-1">PDF, DOC, DOCX (License, Registration, etc.)</p>
                </label>
              </div>
              {documents.length > 0 && (
                <div className="space-y-2 mt-4">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-gray-700 truncate max-w-xs">{doc.name}</span>
                      </div>
                      <button type="button" onClick={() => removeDocument(i)} className="text-red-500 hover:text-red-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Facilities */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Facilities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {facilitiesList.map(facility => (
                  <label key={facility} className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.facilities.includes(facility) 
                      ? 'border-blue-500 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input type="checkbox" checked={formData.facilities.includes(facility)} onChange={() => handleFacilityToggle(facility)} className="hidden" />
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${
                      formData.facilities.includes(facility) ? 'bg-blue-600' : 'border-2 border-gray-300'
                    }`}>
                      {formData.facilities.includes(facility) && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{facility}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" required />
              <span className="text-sm text-gray-600">
                I confirm that all information provided is accurate and I agree to the{' '}
                <Link href="#" className="text-blue-600 hover:underline">Partner Terms</Link> and{' '}
                <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-lg">
              Submit Registration
            </button>
          </form>
        </div>

        <div className="text-center mt-6 space-y-2">
          <p className="text-gray-500">
            Already registered? <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">Login to Dashboard</Link>
          </p>
          <p className="text-gray-500">
            Need a user account? <Link href="/create-account" className="text-blue-600 hover:text-blue-700 font-medium">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
