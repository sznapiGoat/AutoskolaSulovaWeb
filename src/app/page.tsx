import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Course from '@/components/Course';
import Instructor from '@/components/Instructor';
import Testimonials from '@/components/Testimonials';
import Application from '@/components/Application';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Course />
        <Instructor />
        <Testimonials />
        <Application />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
