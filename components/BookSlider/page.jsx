"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookSlider = () => {
    const books = [
        { id: 1, image: "/img/book-1.png" },
        { id: 2, image: "/img/book-2.png" },
        { id: 3, image: "/img/book-3.png" },
        { id: 4, image: "/img/book-4.png" },
        { id: 5, image: "/img/book-5.png" },
        { id: 6, image: "/img/book-6.png" },
        { id: 7, image: "/img/book-7.png" },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-black py-5 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center pt-3 justify-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        See Our Gallery
                    </h2>

                </div>

                {/* Slider for All Devices */}
                <div className="mb-12 relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                                 spaceBetween={20}
                                 navigation
                                 pagination={{ clickable: true }}
                                 breakpoints={{
                                   0: { slidesPerView: 1 },
                                   640: { slidesPerView: 2 },
                                   1024: { slidesPerView: 5 },
                                 }}
                    >
                        {books.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="relative group rounded-xl shadow-md overflow-hidden bg-gray-100">
                                    <img
                                        src={card.image}
                                        alt={`Book ${card.id}`} // Improved alt text for accessibility
                                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="mt-5 text-center">
                        <Link href="/gallery" passHref>
                            <button className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-black hover:bg-gray-200 transition-colors">
                                See More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSlider;