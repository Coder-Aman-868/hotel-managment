import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
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
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Header />
      <HeroSection />
      <SearchBar />
      
      {/* Most Picked Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-semibold mb-12" style={{ color: '#152C5B' }}>Most Picked</h2>
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
      </section>

      {/* More Hotels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {moreHotels.map((hotel, index) => (
            <HotelCard key={index} {...hotel} size="small" />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}