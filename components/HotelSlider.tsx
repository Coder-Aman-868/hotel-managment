'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import HotelCard from './HotelCard';

import 'swiper/css';

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
  subtitle?: string;
  className?: string;
}

const HotelSlider = ({
  hotels,
  title,
  subtitle,
  className = ""
}: HotelSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full blur-3xl opacity-50 translate-y-48 -translate-x-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{title}</h2>
          {subtitle && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalSlides(swiper.snapGrid.length);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-4"
        >
          {hotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <HotelCard {...hotel} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation & Pagination */}
        <div className="flex items-center justify-center mt-10 space-x-6">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Custom Pagination Dots */}
          <div className="flex items-center space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelSlider;
