'use client';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// CORRECTED: Ensure paths start with / (relative to the public folder)
const books = [
    { id: 1, image: '/book-1.png' }, // Correct for public/book-1.png
    { id: 2, image: '/book-2.png' },
    { id: 3, image: '/book-3.png' },
    { id: 4, image: '/book-4.png' },
    { id: 5, image: '/book-5.png' },
    { id: 6, image: '/book-6.png' },
    { id: 7, image: '/book-7.png' },
];

export default function BookSlider() {
    const handleSlideClick = (id) => {
        console.log(`Clicked on slide with ID ${id}`);
        // Add your navigation or action logic here
    };

    return (
        <section className="bg-[#1e1e1e] py-12 text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        See Our Gallery
                    </h2>
                </div>

                {/* Swiper Section */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                    className="mySwiper"
                >
                    {books.map((dest) => (
                        <SwiperSlide key={dest.id} id={`slide-${dest.id}`}>
                            {/* Parent div is relative and has defined height */}
                            <div
                                id={`book-slide-${dest.id}`}
                                className="group relative h-72 w-full rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                                onClick={() => handleSlideClick(dest.id)}
                            >
                                <Image
                                    id={`book-image-${dest.id}`}
                                    src={dest.image} // Uses the corrected path
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw" 
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                    alt={`Book gallery image ${dest.id}`}
                                    onError={(e) => {
                                        console.error(`Failed to load image: ${dest.image}`);
                                        e.currentTarget.src = '/img/placeholder.png'; // Fallback
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* See More Button */}
                <div className="mt-10">
                    <Link href="/gallery">
                        <button className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}