import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FixedSearchBar from '../components/FixedSearchBar';
import BackToTop from '../components/BackToTop';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';

export default function Home() {
  const featuredHotels = [
    {
      title: "Blue Origin Fams",
      location: "Jakarta, Indonesia",
      price: 50,
      rating: 4.5,
      size: "large" as const,
      featured: true
    },
    {
      title: "Ocean Land",
      location: "Bandung, Indonesia", 
      price: 22,
      rating: 4.8,
      size: "medium" as const
    },
    {
      title: "Stark House",
      location: "Malang, Indonesia",
      price: 856,
      rating: 4.7,
      size: "medium" as const
    },
    {
      title: "Vinna Vill",
      location: "Malang, Indonesia",
      price: 62,
      rating: 4.8,
      size: "medium" as const
    },
    {
      title: "Bobox",
      location: "Medan, Indonesia",
      price: 72,
      rating: 4.3,
      size: "medium" as const
    }
  ];

  const moreHotels = [
    {
      title: "Shangri-La",
      location: "Colombo, Sri Lanka",
      price: 89,
      rating: 4.9
    },
    {
      title: "Top View",
      location: "Kandy, Sri Lanka", 
      price: 45,
      rating: 4.6
    },
    {
      title: "Green Villa",
      location: "Galle, Sri Lanka",
      price: 67,
      rating: 4.4
    },
    {
      title: "Wooden Pit",
      location: "Nuwara Eliya, Sri Lanka",
      price: 125,
      rating: 4.8
    },
    {
      title: "Boutique",
      location: "Ella, Sri Lanka",
      price: 78,
      rating: 4.5
    },
    {
      title: "Modern",
      location: "Negombo, Sri Lanka",
      price: 92,
      rating: 4.7
    },
    {
      title: "Silver Rain",
      location: "Sigiriya, Sri Lanka",
      price: 156,
      rating: 4.9
    },
    {
      title: "Cashville",
      location: "Bentota, Sri Lanka",
      price: 134,
      rating: 4.6,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Ellipses */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 bg-gradient-to-br from-violet-400/30 to-indigo-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-50 animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70 animate-bounce delay-300"></div>
      </div>
      
      {/* Main Content with Backdrop Blur */}
      <div className="relative z-10 backdrop-blur-sm">
        <Header />
        <HeroSection />
        {/* Most Picked Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          {/* Section Background with Blur */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl -mx-4 -my-8"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">Most Picked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Large featured card */}
              <div className="lg:row-span-2">
                <HotelCard {...featuredHotels[0]} />
              </div>
              
              {/* Medium cards */}
              <div className="grid grid-cols-1 gap-8">
                <HotelCard {...featuredHotels[1]} />
                <HotelCard {...featuredHotels[2]} />
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                <HotelCard {...featuredHotels[3]} />
                <HotelCard {...featuredHotels[4]} />
              </div>
            </div>
          </div>
        </section>

        {/* More Hotels Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Section Background with Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-blue-50/50 backdrop-blur-sm rounded-3xl -mx-4 -my-8"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {moreHotels.map((hotel, index) => (
                <HotelCard key={index} {...hotel} size="small" />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
      
      {/* Fixed components that appear on scroll */}
      <FixedSearchBar />
      <BackToTop />
    </div>
  );
}