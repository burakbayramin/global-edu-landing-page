
import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import CoreServices from '@/components/CoreServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessOverview from '@/components/ProcessOverview';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-off-white font-geometric">
      <HeroCarousel />
      
      {/* Subtle divider */}
      <div className="w-full h-px bg-mid-grey/20"></div>
      
      <CoreServices />
      
      {/* Subtle divider */}
      <div className="w-full h-px bg-mid-grey/20"></div>
      
      <WhyChooseUs />
      
      {/* Subtle divider */}
      <div className="w-full h-px bg-mid-grey/20"></div>
      
      <ProcessOverview />
      
      {/* Subtle divider */}
      <div className="w-full h-px bg-mid-grey/20"></div>
      
      <Testimonials />
      
      {/* Subtle divider */}
      <div className="w-full h-px bg-mid-grey/20"></div>
      
      <FinalCTA />
      
      <Footer />
    </div>
  );
};

export default Index;
