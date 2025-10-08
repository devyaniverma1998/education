// components/BookSlider.jsx
'use client'; // This directive makes it a client component
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Your destination data
const destinations = [
    {

        image: '/img/book-1.png', // Place your img in the public/img folder
    },
    {

        image: '/img/book-2.png',
    },
    {

        image: '/img/book-3.png',
    },
    {

        image: '/img/book-4.png',
    },
    {

        image: '/img/book-5.png',
    },
    {

        image: '/img/book-6.png',
    },
    {

        image: '/img/book-7.png',
    }
];

export default function BookSlider() {
    return (
        <section className="bg-[#1e1e1e] py-12 text-white">
            <div className="container mx-auto px-4">

                <Swiper
                    // Swiper modules
                    modules={[Navigation, Pagination]}
                    // Swiper options
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{

                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    className="mySwiper" // Custom class for additional styling
                >
                    {destinations.map((dest, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-48 w-full rounded-lg overflow-hidden">
                                {/* Use Next.js Image for optimization */}
                                <Image
                                    src={dest.image}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                    alt='book image'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}