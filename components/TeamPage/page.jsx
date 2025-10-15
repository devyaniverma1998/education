"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "CEO", image: "/img/team-1.jpg" },
    { id: 2, name: "Jane Smith", role: "CTO", image: "/img/team-2.jpg" },
    { id: 3, name: "Alex Johnson", role: "Lead Designer", image: "/img/team-3.jpg" },
    { id: 4, name: "Maria Williams", role: "Marketing Head", image: "/img/team-4.jpg" },
    { id: 5, name: "David Brown", role: "Developer", image: "/img/team-5.jpg" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            Meet Our Team
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto mt-3">
            Our talented team is here to guide and support you every step of the way.
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
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="relative rounded-xl shadow-lg overflow-hidden bg-gray-900">
                {/* Team Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700"
                />

                {/* Overlay with Name & Role */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-black/50 py-3 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-300 text-sm">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional CTA Button */}
        <div className="mt-6 text-center">
          <Link href="/team" passHref>
            <button className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-gray-800 text-white hover:bg-gray-700 transition-colors">
              See All Members
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
