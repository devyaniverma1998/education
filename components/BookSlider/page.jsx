'use client';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// Image data
const destinations = [
    { image: '/img/book-1.png' },
    { image: '/img/book-2.png' },
    { image: '/img/book-3.png' },
    { image: '/img/book-4.png' },
    { image: '/img/book-5.png' },
    { image: '/img/book-6.png' },
    { image: '/img/book-7.png' },
];

export default function BookSlider() {
    return (
        <section className="bg-[#1e1e1e] py-12 text-white">
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}

                <div className="flex items-center justify-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        See Our Gallery</h2>

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
                    {destinations.map((dest, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative h-56 sm:h-64 w-full rounded-lg overflow-hidden">
                                <Image
                                    src={dest.image}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="transition-transform duration-500 group-hover:scale-110"
                                    alt="Book gallery image"
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
