import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HotelSlider from '../components/HotelSlider';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import HotelCard from '@/components/HotelCard';

export default function Home() {
  const featuredHotels = [
    {
      title: "Shangri-La Colombo",
      location: "Colombo, Sri Lanka",
      price: 189,
      rating: 4.9,
      featured: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cinnamon Grand",
      location: "Colombo, Sri Lanka", 
      price: 145,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Jetwing Lighthouse",
      location: "Galle, Sri Lanka",
      price: 220,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Heritance Kandalama",
      location: "Dambulla, Sri Lanka",
      price: 165,
      rating: 4.8,
      featured: true,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const popularHotels = [
    {
      title: "Amangalla",
      location: "Galle, Sri Lanka",
      price: 450,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tea Trails",
      location: "Hatton, Sri Lanka", 
      price: 380,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cape Weligama",
      location: "Weligama, Sri Lanka",
      price: 320,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Anantara Peace Haven",
      location: "Tangalle, Sri Lanka",
      price: 280,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Jungle Beach",
      location: "Unawatuna, Sri Lanka",
      price: 195,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ulagalla Resort",
      location: "Anuradhapura, Sri Lanka",
      price: 240,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      
      {/* Featured Hotels Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Featured Hotels
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Handpicked luxury accommodations that define exceptional hospitality and unforgettable experiences
            </p>
          </div>
          
          {/* Featured Grid with Mixed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Large Featured Card */}
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-full rounded-3xl overflow-hidden group shadow-2xl">
                <img 
                  src={featuredHotels[0].image} 
                  alt={featuredHotels[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredHotels[0].title}</h3>
                  <p className="text-white/90 mb-4 flex items-center text-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {featuredHotels[0].location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-white font-semibold">{featuredHotels[0].rating}</span>
                        <span className="text-white/80">(245 reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">${featuredHotels[0].price}</div>
                      <div className="text-white/80">per night</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Side Cards */}
            <div className="space-y-6">
              {featuredHotels.slice(1, 3).map((hotel, index) => (
                <HotelCard key={index} title={hotel.title} location={hotel.location} price={hotel.price} featured={hotel.featured} image={hotel.image} rating={hotel.rating} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Hotels Slider */}
      <HotelSlider 
        hotels={popularHotels} 
        title="Popular Destinations"
        subtitle="Discover the most loved hotels across Sri Lanka"
      />
      <Footer />
      <BackToTop />
    </div>
  );
}