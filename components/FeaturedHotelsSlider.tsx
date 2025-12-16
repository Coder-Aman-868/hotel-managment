'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import HotelCard from './HotelCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

interface Hotel {
  title: string;
  location: string;
  price: number;
  rating?: number;
  image?: string;
  featured?: boolean;
}

interface FeaturedHotelsSliderProps {
  hotels: Hotel[];
  className?: string;
}

const FeaturedHotelsSlider = ({
  hotels,
  className = ""
}: FeaturedHotelsSliderProps) => {
  return (
    <section className={`relative py-20 ${className}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-x-clip">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-400/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Background with Blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-50/30 to-purple-50/20 backdrop-blur-sm rounded-3xl -mx-4"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Most Picked
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium accommodations
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              nextEl: '.featured-swiper-button-next',
              prevEl: '.featured-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 35,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="featured-hotel-swiper pb-16!"
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index}>
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <HotelCard {...hotel} className="h-full shadow-xl hover:shadow-2xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons with Blur Effect */}
          <button className="featured-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:from-blue-600 hover:to-purple-700 border border-white/20">
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
          
          <button className="featured-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:from-blue-600 hover:to-purple-700 border border-white/20">
            <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .featured-hotel-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        
        .featured-hotel-swiper .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: rgba(59, 130, 246, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .featured-hotel-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transform: scale(1.3);
          border-color: rgba(255, 255, 255, 0.8);
        }
        
        .featured-hotel-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .featured-hotel-swiper .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default FeaturedHotelsSlider;