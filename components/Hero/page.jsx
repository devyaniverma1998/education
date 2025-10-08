import React from 'react';
import Link from 'next/link';


const Hero = () => {
  return (
   <>
    <section className="relative w-full overflow-hidden">
      {/* Desktop View: 4-Panel Collage */}
      <div className="hidden md:block h-auto bg-gradient-to-br from-blue-50 to-emerald-50 grid grid-cols-2 gap-0">
        <img src='/img/desktop-banner11.png' alt='hero image' className='w-full h-full object-cover ' />
      </div>

      {/* Mobile View: Single Banner with Portrait and Circles */}
      <div className="md:hidden h-auto relative ]">
        <img src='/img/mobile-banner11.png' alt='hero image' className='w-full h-full object-cover ' />
      </div>

  
    </section>

   </>
  );
};

export default Hero;