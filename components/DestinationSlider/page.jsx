"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DestinationSlider = () => {
  const destinations = [
    { id: 1, name: "Barcelona", image: "/img/desti-1.jpg" },
    { id: 2, name: "London", image: "/img/desti-2.jpg" },
    { id: 3, name: "Paris", image: "/img/desti-3.jpg" },
    { id: 4, name: "Rome", image: "/img/desti-4.jpg" },
    { id: 5, name: "SriLanka", image: "/img/desti-5.jpg" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Destinations
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto mt-3">
            Learn a language, immerse yourself in new cultures, or take your
            course content abroad in any of our Study Hub locations.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-12"
        >
          {destinations.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="relative rounded-xl shadow-lg overflow-hidden">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-80 object-cover transition-transform duration-700"
                />

                {/* Overlay with Bottom-Centered Text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-black/40 py-3 flex justify-center">
                  <h3 className="text-xl font-semibold text-white tracking-wide text-center">
                    {card.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* See More Button */}
        <div className="mt-6 text-center">
          <Link href="/destinations" passHref>
            <button className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;
