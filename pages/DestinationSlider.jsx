// components/DestinationSlider.jsx
'use client'; // This directive makes it a client component

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Your destination data
const destinations = [
  {
    name: 'Barcelona',
    image: '/img/desti-1.jpg', // Place your img in the public/img folder
  },
  {
    name: 'Nice',
    image: '/img/desti-2.jpg',
  },
  {
    name: 'Paris',
    image: '/img/desti-3.jpg',
  },
  {
    name: 'Rome',
    image: '/img/desti-4.jpg', // Added for demonstration
  },
  {
    name: 'SriLanka',
    image: '/img/desti-5.jpg', // Added for demonstration
  },
];

export default function DestinationSlider() {
  return (
    <section className="bg-[#1e1e1e] py-12 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our destinations</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Learn a language, immerse yourself in new cultures, or take your course content abroad in any of our 11 EF Hub locations
        </p>

        <Swiper
          // Swiper modules
          modules={[Navigation, Pagination]}
          // Swiper options
          spaceBetween={30} // 30px space between slides
          slidesPerView={1} // Show 1 slide on smaller screens
          navigation // Enable navigation arrows
          loop={true} // Enable continuous loop
          pagination={{
            clickable: true, // Make pagination dots clickable
          }}
          // Responsive breakpoints
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper" // Custom class for additional styling
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-96 w-full rounded-lg overflow-hidden">
                {/* Use Next.js Image for optimization */}
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-bold">{dest.name}</h3>
                </div>

                 {/* Arrow icon on hover */}
                 <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    &rarr;
                 </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}