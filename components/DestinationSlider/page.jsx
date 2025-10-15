'use client'; // This directive makes it a client component
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

// 1. IMPORT IMAGES DIRECTLY
// This is the recommended way in Next.js for static images.
// Replace these with your actual image paths in the /public or /src/assets directory
// Note: You must have these files in your project, e.g., in the `public` folder.
// For demonstration, let's assume they are in `public/` and we can import them.
// If you cannot import from `public` and they are truly in `public`, then the original path might work,
// but for static optimization and better loading, imports are preferred.
// If your images are in the `public` folder, you might not be able to import them like this.

// *** CRITICAL ASSUMPTION: The images are in a place where they can be imported,
// *** OR, we stick to the original structure and focus on the parent/fill issue.
// *** I will first correct the original structure, as that is the common pattern for public folder assets.
// *** The original issue is likely that the paths are incorrect or the images don't exist in `public/`.

// Original Destination Data (assuming images are in the `public` folder)
const destinations = [
  { id: 1, name: 'Barcelona', image: '/desti-1.jpg' },
  { id: 2, name: 'London', image: '/desti-2.jpg' },
  { id: 3, name: 'Paris', image: '/desti-3.jpg' },
  { id: 4, name: 'Rome', image: '/desti-4.jpg' },
  { id: 5, name: 'SriLanka', image: '/desti-5.jpg' },
];

export default function DestinationSlider() {
  const handleSlideClick = (name) => {
    console.log(`Clicked on ${name}`);
    // Add your navigation or action logic here
  };

  return (
    <section className="bg-[#1e1e1e] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Destination
          </h2>
        </div>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Learn a language, immerse yourself in new cultures, or take your course content abroad in any of our Study Hub locations
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {destinations.map((dest) => (
            <SwiperSlide key={dest.id} id={`slide-${dest.id}`}>
              {/* The parent container has defined dimensions (h-96 w-full) and position: relative (due to 'relative') */}
              <Link href={`/destinations/${dest.name.toLowerCase()}`} passHref>
                <div
                  id={`dest-slide-${dest.id}`}
                  className="group relative h-96 w-full rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleSlideClick(dest.name)}
                >
                  {/* Image with fill:
                      - The `fill` prop is correct for this structure.
                      - We should remove the `onError` and `onLoad` for production unless specifically needed for complex logging, as they can sometimes interfere.
                      - **Crucially**, make sure the images (`/desti-1.jpg`, etc.) are in your **`public`** folder. If they are in `public/img/`, the path must be `/img/desti-1.jpg`.
                      - **Enhancement**: Wrap the slide content in a `Link` for better accessibility and navigation.
                  */}
                  <Image
                    id={`image-${dest.id}`}
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Recommended for performance with `fill`
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    // Removed onError and onLoad for cleaner code, the error is likely not in this handling.
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-6 z-10"> {/* Added z-10 to ensure text is above overlay */}
                    <h3 className="text-3xl font-bold">{dest.name}</h3>
                  </div>

                  {/* Arrow icon on hover */}
                  <div className="absolute bottom-6 right-6 text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"> {/* Added z-10 */}
                    &rarr;
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 text-center">
          <Link href="/destinations" passHref>
            <button className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-100 text-black hover:bg-gray-200 transition-colors">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}