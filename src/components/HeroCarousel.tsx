
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const slides = [
  {
    headline: "Unlock Your Global Education Journey",
    subheadline: "Expert guidance to study abroad—simplified.",
    cta: "Get a Free Consultation"
  },
  {
    headline: "Find Your Perfect University Match",
    subheadline: "Curated options tailored to your goals.",
    cta: "Explore Programs"
  },
  {
    headline: "Maximize Your Scholarship Success",
    subheadline: "Insider tips for funding your dreams.",
    cta: "Check Eligibility"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-off-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="relative h-48 md:h-56">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h1 className="font-geometric font-bold text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
                {slide.headline}
              </h1>
              <p className="font-geometric font-light text-xl md:text-2xl text-mid-grey mb-8 max-w-2xl mx-auto">
                {slide.subheadline}
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="font-geometric font-medium border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-off-white transition-all duration-300 px-8 py-3 text-lg"
              >
                {slide.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-charcoal' : 'bg-mid-grey'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
