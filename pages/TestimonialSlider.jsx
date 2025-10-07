"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Studying abroad was the best decision I ever made. There is only so much you can learn in a classroom setting—you have to get out there and experience it firsthand.",
    name: "Joshua A.",
    role: "EF Study Abroad Student",
  },
  {
    text: "I learned so much from my exchange program. Meeting people from different cultures broadened my perspective and made me more independent.",
    name: "Sophia L.",
    role: "EF Study Abroad Student",
  },
  {
    text: "The experience was life-changing. I gained confidence and skills I couldn't have learned anywhere else.",
    name: "Daniel K.",
    role: "EF Study Abroad Student",
  },
  {
    text: "EF made studying abroad simple and unforgettable. Highly recommend to anyone considering international education!",
    name: "Emma W.",
    role: "EF Study Abroad Student",
  },
  {
    text: "I loved the program! It was fun, educational, and gave me memories I will cherish forever.",
    name: "Liam R.",
    role: "EF Study Abroad Student",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1} // default mobile
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
            1280: { slidesPerView: 4 }, // large desktop
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-xl shadow-4xl hover:shadow-3xl p-6 h-full flex flex-col justify-between transition-shadow duration-300">
                <p className="text-gray-800 text-md italic mb-4">{t.text}</p>
                <div>
                  <h3 className="text-gray-900 font-bold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
