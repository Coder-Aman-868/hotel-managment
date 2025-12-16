'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contactInfo = [
  { icon: '📍', title: 'Address', value: '123 Galle Road, Colombo 03, Sri Lanka' },
  { icon: '📞', title: 'Phone', value: '+94 11 234 5678' },
  { icon: '✉️', title: 'Email', value: 'support@lankastay.com' },
  { icon: '🕐', title: 'Hours', value: 'Mon - Fri: 9AM - 6PM' },
];

const faqs = [
  { q: 'How do I make a reservation?', a: 'Simply search for your desired destination, select your dates, choose a hotel, and complete the booking process. You will receive a confirmation email immediately.' },
  { q: 'What is the cancellation policy?', a: 'Cancellation policies vary by hotel. You can find the specific policy on each hotel listing page before booking.' },
  { q: 'How can I modify my booking?', a: 'Log into your account, go to My Bookings, and select the booking you wish to modify. You can also contact our support team for assistance.' },
  { q: 'Is my payment information secure?', a: 'Yes, we use industry-standard SSL encryption and never store your full credit card details on our servers.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required>
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={5} placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500">{info.title}</p>
                      <p className="text-gray-900">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-2 block">🗺️</span>
              <p className="text-gray-500">Interactive Map</p>
              <p className="text-sm text-gray-400">123 Galle Road, Colombo 03</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
