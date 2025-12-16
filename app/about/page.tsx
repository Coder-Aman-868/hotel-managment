import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const stats = [
  { value: '500+', label: 'Hotels Listed' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '25+', label: 'Destinations' },
  { value: '4.9', label: 'Average Rating' },
];

const team = [
  { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
  { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
  { name: 'Emily Williams', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
  { name: 'David Kumar', role: 'Head of Partnerships', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
];

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We strive for excellence in every booking experience we provide.' },
  { icon: '🤝', title: 'Trust', desc: 'Building trust through transparency and reliable service.' },
  { icon: '💡', title: 'Innovation', desc: 'Continuously improving our platform with cutting-edge technology.' },
  { icon: '🌍', title: 'Sustainability', desc: 'Promoting eco-friendly travel and sustainable tourism.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About LankaStay</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to make discovering and booking the perfect accommodation in Sri Lanka effortless and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, LankaStay was born from a simple idea: make it easier for travelers to discover the incredible hospitality Sri Lanka has to offer.
                </p>
                <p>
                  What started as a small platform with just 50 hotels has grown into the leading hotel booking service in Sri Lanka, connecting thousands of travelers with their perfect accommodations every month.
                </p>
                <p>
                  Our team of travel enthusiasts works tirelessly to curate the best hotels, from luxury resorts to charming boutique stays, ensuring every guest finds their ideal home away from home.
                </p>
              </div>
              <Link href="/hotels">
                <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Explore Hotels
                </button>
              </Link>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800" alt="Our Story" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold text-blue-600">5+</p>
                <p className="text-gray-500">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The passionate people behind LankaStay</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of happy travelers who have found their perfect stay with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hotels">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Browse Hotels
              </button>
            </Link>
            <Link href="/register-hotel">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                List Your Property
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
