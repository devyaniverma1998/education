import React from 'react';
import Link from 'next/link';
import ExtraLine from '../ExtraLine/page';

const SecondBanner = () => {
  return (
   <>
    <section className="relative w-full overflow-hidden">
      {/* Desktop View: 4-Panel Collage */}
      <div className="hidden md:block h-auto bg-white grid grid-cols-2 gap-0">
        <img src='/img/desktop-banner22.png' alt='SecondBanner image' className='w-full h-full  ' />
      </div>

      {/* Mobile View: Single Banner with Portrait and Circles */}
      <div className="md:hidden h-auto relative ]">
        <img src='/img/mobile-banner22.png' alt='SecondBanner image' className='w-full h-full  ' />
      </div>

  
    </section>

   </>
  );
};

export default SecondBanner;