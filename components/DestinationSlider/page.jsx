// components/DestinationSlider.jsx
'use client'; // This directive makes it a client component
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// Your destination data
const destinations = [
  {
    name: 'Barcelona',
    image: '/img/desti-1.jpg', // Place your img in the public/img folder
  },
  {
    name: 'London',
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

     s
        <p className="text-center max-w-2xl mx-auto mb-12">
          Learn a language, immerse yourself in new cultures, or take your course content abroad in any of our Study Hub locations
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
         <div className="mt-10 text-center">
                    <Link href="/destinations">
                        <button className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                            See More
                        </button>
                    </Link>
                </div>
      </div>
    </section>
  );
}