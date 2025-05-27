
import React, { useState, useEffect } from 'react';

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
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-geometric font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
          Student Success Stories
        </h2>
        <div className="max-w-4xl mx-auto relative h-32">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 text-center transition-opacity duration-1000 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="mb-4">
                <span className="text-6xl text-mid-grey font-light leading-none">"</span>
              </div>
              <blockquote className="font-geometric font-light text-xl md:text-2xl text-charcoal mb-6 leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <cite className="font-geometric font-medium text-mid-grey text-lg">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
        
        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-charcoal' : 'bg-mid-grey'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
