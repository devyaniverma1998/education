import Navbar from '../components/Navbar';  // Path from app/ to components/
import Hero from '@/pages/Hero';
import Footer from '../components/Footer';
import Link from 'next/link';
import ExtraLine from '@/pages/ExtraLine';
import ProgramsGrid from '@/pages/ProgramsGrid';
import SecondBanner from '@/pages/SecondBanner';
import DestinationSlider from '@/pages/DestinationSlider';
import ThirdBanner from '@/pages/ThirdBanner';
import TestimonialSlider from '@/pages/TestimonialSlider';
import BookSlider from '@/pages/BookSlider';
import FeaturedPrograms from '@/pages/FeaturedPrograms';
import ContactForm from '@/pages/ContactForm';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
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
      <Footer />
    </div>
  );
}