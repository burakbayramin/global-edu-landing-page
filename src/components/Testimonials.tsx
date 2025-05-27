
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Noventra made my dream of studying at Oxford a reality. Their personalized guidance was invaluable.",
    author: "Sarah Chen, Oxford University"
  },
  {
    quote: "The scholarship advice helped me secure full funding for my Master's at MIT. Couldn't have done it without them.",
    author: "Raj Patel, MIT"
  },
  {
    quote: "From application to visa, every step was seamless. Professional service that truly delivers results.",
    author: "Emma Rodriguez, Cambridge University"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-geometric font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
          Student Success Stories
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full border border-mid-grey hover:border-charcoal transition-colors duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-mid-grey group-hover:text-charcoal transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full border border-mid-grey hover:border-charcoal transition-colors duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-mid-grey group-hover:text-charcoal transition-colors duration-300" />
          </button>

          {/* Testimonial content */}
          <div className="relative h-48 md:h-40 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 text-center transition-all duration-500 ease-in-out ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col justify-center h-full">
                  <div className="mb-4">
                    <span className="text-6xl text-mid-grey font-light leading-none">"</span>
                  </div>
                  <blockquote className="font-geometric font-light text-xl md:text-2xl text-charcoal mb-6 leading-relaxed px-4">
                    {testimonial.quote}
                  </blockquote>
                  <cite className="font-geometric font-medium text-mid-grey text-lg">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-charcoal scale-110' 
                  : 'bg-mid-grey hover:bg-charcoal hover:scale-105'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
