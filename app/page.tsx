import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FixedSearchBar from '../components/FixedSearchBar';
import BackToTop from '../components/BackToTop';
import FeaturedHotelsSlider from '../components/FeaturedHotelsSlider';
import HotelSlider from '../components/HotelSlider';
import Footer from '../components/Footer';

export default function Home() {
  const featuredHotels = [
    {
      title: "Blue Origin Fams",
      location: "Jakarta, Indonesia",
      price: 50,
      rating: 4.5,
      featured: true
    },
    {
      title: "Ocean Land",
      location: "Bandung, Indonesia", 
      price: 22,
      rating: 4.8
    },
    {
      title: "Stark House",
      location: "Malang, Indonesia",
      price: 856,
      rating: 4.7
    },
    {
      title: "Vinna Vill",
      location: "Malang, Indonesia",
      price: 62,
      rating: 4.8
    },
    {
      title: "Bobox",
      location: "Medan, Indonesia",
      price: 72,
      rating: 4.3
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
        {/* Featured Hotels Slider */}
        <FeaturedHotelsSlider hotels={featuredHotels} />

        {/* More Hotels Slider */}
        <HotelSlider 
          hotels={moreHotels} 
          title="Discover More Amazing Places"
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
        />

        {/* Premium Collection Slider */}
        <HotelSlider 
          hotels={[...moreHotels].reverse()} 
          title="Premium Collection"
          slidesPerView={3}
          spaceBetween={40}
          autoplay={true}
          effect="coverflow"
        />

        <Footer />
      </div>
      
      {/* Fixed components that appear on scroll */}
      <FixedSearchBar />
      <BackToTop />
    </div>
  );
}