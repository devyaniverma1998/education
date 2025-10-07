"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProgramsGrid = () => {
  const cards = [
    {
      id: 1,
      image: "/img/program1.jpg",
      topLink: { href: "/programs/faculty", label: "For Faculty" },
      bottomLink: { href: "/programs/ef-tandem", label: "EF Tandem" },
    },
    {
      id: 2,
      image: "/img/program2.jpg",
      topLink: { href: "/programs/students", label: "For Students" },
      bottomLink: { href: "/programs/short-term", label: "Short-term Study" },
    },
    {
      id: 3,
      image: "/img/program3.jpg",
      topLink: { href: "/programs/honors", label: "Honors Programs" },
      bottomLink: { href: "/programs/honors-programs", label: "Honors Programs" },
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white pt-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <Link
            href="/programs"
            className="inline-flex items-center space-x-2 text-2xl md:text-3xl font-bold text-gray-900 group"
          >
            <h2 className="group-hover:text-blue-600 transition-colors duration-300">
              OUR PROGRAMS
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h14m0 0l-6-6m6 6l-6 6"
              />
            </svg>
          </Link>
        </div>

        {/* Slider for Mobile */}
        <div className="block md:hidden mb-12 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true} // <-- This enables arrows
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="relative group rounded-xl shadow-md overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.bottomLink.label}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                  <div className="absolute top-4 left-4">
                    <Link
                      href={card.topLink.href}
                      className="bg-white/90 backdrop-blur-sm rounded-md px-3 py-1 inline-flex items-center space-x-1 text-sm font-semibold text-gray-900 hover:bg-white transition-colors"
                    >
                      <span>{card.topLink.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <Link
                      href={card.bottomLink.href}
                      className="bg-black/70 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
                    >
                      {card.bottomLink.label}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-xl shadow-md overflow-hidden bg-gray-100"
            >
              <img
                src={card.image}
                alt={card.bottomLink.label}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

              <div className="absolute top-4 left-4">
                <Link
                  href={card.topLink.href}
                  className="bg-white/90 backdrop-blur-sm rounded-md px-3 py-1 inline-flex items-center space-x-1 text-sm font-semibold text-gray-900 hover:bg-white transition-colors"
                >
                  <span>{card.topLink.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <Link
                  href={card.bottomLink.href}
                  className="bg-black/70 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  {card.bottomLink.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProgramsGrid;
