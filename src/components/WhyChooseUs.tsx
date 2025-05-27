
import React from 'react';
import { Clock, Check, User } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    text: "Over 10 years of proven experience"
  },
  {
    icon: Check,
    text: "95% acceptance rate"
  },
  {
    icon: User,
    text: "Personalized one-on-one support"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-geometric font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            Why Choose Us
          </h2>
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-center space-x-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <reason.icon 
                  size={32} 
                  className="text-charcoal flex-shrink-0" 
                  strokeWidth={1.5}
                />
                <p className="font-geometric font-light text-xl text-charcoal">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
