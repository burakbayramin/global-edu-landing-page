
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
    <section className="w-full bg-off-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="relative h-64 md:h-72 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h2 className="font-geometric font-bold text-3xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight max-w-4xl">
                {slide.headline}
              </h2>
              <p className="font-geometric font-light text-lg md:text-xl text-mid-grey mb-8 max-w-2xl mx-auto">
                {slide.subheadline}
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="font-geometric font-medium border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-off-white transition-all duration-300 px-8 py-3 text-base md:text-lg"
              >
                {slide.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                index === currentSlide 
                  ? 'bg-charcoal border-charcoal' 
                  : 'bg-transparent border-mid-grey hover:border-charcoal'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
