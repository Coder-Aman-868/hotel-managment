'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import HotelCard from './HotelCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface Hotel {
  title: string;
  location: string;
  price: number;
  rating?: number;
  image?: string;
  featured?: boolean;
}

interface HotelSliderProps {
  hotels: Hotel[];
  title: string;
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  effect?: 'slide' | 'coverflow';
  className?: string;
}

const HotelSlider = ({
  hotels,
  title,
  slidesPerView = 3,
  spaceBetween = 30,
  autoplay = true,
  effect = 'slide',
  className = ""
}: HotelSliderProps) => {
  return (
    <section className={`relative py-16 ${className}`}>
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-blue-50/30 to-purple-50/20 backdrop-blur-sm rounded-3xl -mx-4"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={autoplay ? {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            } : false}
            effect={effect}
            coverflowEffect={effect === 'coverflow' ? {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            } : undefined}
            breakpoints={{
              640: {
                slidesPerView: Math.min(2, slidesPerView),
                spaceBetween: 20,
              },
              768: {
                slidesPerView: Math.min(2, slidesPerView),
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: Math.min(3, slidesPerView),
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: slidesPerView,
                spaceBetween: spaceBetween,
              },
            }}
            className="hotel-swiper"
          >
            {hotels.map((hotel, index) => (
              <SwiperSlide key={index}>
                <HotelCard {...hotel} className="h-full" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white/90 border border-white/20">
            <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-white/90 border border-white/20">
            <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .hotel-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .hotel-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(59, 130, 246, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .hotel-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transform: scale(1.2);
        }
        
        .hotel-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .hotel-swiper .swiper-slide > div {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default HotelSlider;