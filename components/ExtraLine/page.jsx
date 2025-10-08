import React from 'react';
import Link from 'next/link';

const ExtraLine = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white shadow-sm min-h-[120px]">
      <div className="max-w-7xl mx-auto flex items-center justify-center py-6 md:py-2 px-4">
        {/* Left Gradient Bar */}
        <div className="hidden md:block mr-8 h-16 w-1 bg-gradient-to-b from-emerald-400 to-yellow-500 rounded-full"></div>

        {/* Centered Text */}
        <div className="flex-1 text-center max-w-4xl">
          <h1 className="text-base md:text-3xl  text-black leading-relaxed md:leading-snug break-words">
            Future-ready study abroad programs from the world leader in language learning
          </h1>
        </div>

        {/* Right Thin Line */}
        <div className="hidden md:block ml-8 h-12 w-0.5 border-r border-gray-300"></div>
      </div>
      
      {/* CTA Button (Mobile Only - Bottom Center) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden">
        <Link
          href="/programs"
          className="px-5 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
        
      </div>
      <hr />
    </section>
  );
};

export default ExtraLine;