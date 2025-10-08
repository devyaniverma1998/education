import Navbar from '../components/Navbar/page';  // Path from app/ to components/
import Hero from '@/components/Hero/page';
import Footer from '../components/Footer/page';
import Link from 'next/link';
import ExtraLine from '@/components/ExtraLine/page';
import ProgramsGrid from '@/components/ProgramsGrid/page';
import SecondBanner from '@/components/SecondBanner/page';
import DestinationSlider from '@/components/DestinationSlider/page';
import ThirdBanner from '@/components/ThirdBanner/page';
import TestimonialSlider from '@/components/TestimonialSlider/page';
import BookSlider from '@/components/BookSlider/page';
import FeaturedPrograms from '@/components/FeaturedPrograms/page';
import ContactForm from '@/components/ContactForm/page';
import StudyBanner from '@/components/StudyBanner/page';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
    
      <Hero />
      <ExtraLine />
      <ProgramsGrid />
      <SecondBanner />
      <DestinationSlider />
      {/* <ThirdBanner /> */}
      <TestimonialSlider />
      <BookSlider/>
      <FeaturedPrograms/>
      <ContactForm/>
      <StudyBanner/>
    
    </div>
  );
}