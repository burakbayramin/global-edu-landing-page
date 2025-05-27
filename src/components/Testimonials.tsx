
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
    <section className="w-full bg-off-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-geometric font-medium text-2xl text-charcoal text-center mb-12">
          Student Success Stories
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Testimonial content */}
          <div className="relative h-32 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 text-center transition-all duration-700 ease-in-out ${
                  index === currentTestimonial 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentTestimonial 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col justify-center h-full px-8">
                  <blockquote className="font-geometric font-light text-lg text-charcoal mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="font-geometric text-mid-grey text-sm">
                    {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>

          {/* Minimalist navigation */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 text-mid-grey hover:text-charcoal transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Simple dot indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-charcoal' 
                      : 'bg-mid-grey/40 hover:bg-mid-grey'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 text-mid-grey hover:text-charcoal transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
