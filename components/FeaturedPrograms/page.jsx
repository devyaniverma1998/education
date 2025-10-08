"use client";
import React, { useRef } from "react";
import Link from "next/link";

/**
 * FeaturedPrograms
 * - Desktop: 3-column grid
 * - Mobile: horizontal snap slider showing 1 card per view
 * - Includes Prev/Next arrow controls on mobile
 */
const FeaturedPrograms = ({ programs = samplePrograms }) => {
  const sliderRef = useRef(null);

  const scrollByWidth = (direction = "next") => {
    const el = sliderRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth * 0.85;
    const offset = direction === "next" ? slideWidth : -slideWidth;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Featured Programs
          </h2>
          <Link
            href="/features"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            View all
          </Link>
        </div>

        {/* ===== Mobile Slider ===== */}
        <div className="relative md:hidden mb-10">
          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={() => scrollByWidth("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={() => scrollByWidth("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-3 scrollbar-hide"
          >
            {programs.map((p) => (
              <article
                key={p.id}
                className="snap-center shrink-0 w-[85%] sm:w-[75%] rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={p.href} className="block group">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400?text=Program+Image';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                      {p.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                      {p.description}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
                      Learn More
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* ===== Desktop Grid ===== */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {programs.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <Link href={p.href} className="block group">
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/900x600?text=Program+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-600 mb-1 uppercase tracking-wide">
                    {p.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gray-900 text-white">
                    Learn More
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Sample Data ---------- */
const samplePrograms = [
  {
    id: 1,
    image: "/img/book-1.png",
    title: "Global Business Leadership",
    category: "Business",
    description:
      "Gain hands-on experience with global business strategy, leadership, and innovation through immersive workshops and projects.",
    href: "/programs/global-business",
  },
  {
    id: 2,
    image: "/img/book-2.png",
    title: "Creative Design & Branding",
    category: "Design",
    description:
      "Learn branding, typography, and design systems in this intensive course crafted for aspiring designers and marketing professionals.",
    href: "/programs/creative-design",
  },
  {
    id: 3,
    image: "/img/book-3.png",
    title: "Technology & AI Bootcamp",
    category: "Technology",
    description:
      "Explore artificial intelligence, cloud computing, and modern frameworks in a hands-on coding environment.",
    href: "/programs/ai-bootcamp",
  },
  {
    id: 4,
    image: "/img/book-4.png",
    title: "International Hospitality Program",
    category: "Hospitality",
    description:
      "Develop your career in hospitality management with global internships and real-world case studies.",
    href: "/programs/hospitality",
  },
  {
    id: 5,
    image: "/img/book-5.png",
    title: "Sustainability & Environment Studies",
    category: "Environment",
    description:
      "Understand the impact of human development on ecosystems and explore green technologies shaping the future.",
    href: "/programs/sustainability",
  },
  {
    id: 6,
    image: "/img/book-6.png",
    title: "Digital Marketing & Analytics",
    category: "Marketing",
    description:
      "Master SEO, campaign strategy, and analytics tools to build data-driven digital marketing expertise.",
    href: "/programs/digital-marketing",
  },
];

export default FeaturedPrograms;
