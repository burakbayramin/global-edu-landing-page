
import React from 'react';
import { User, FileText, MapPin, Check } from 'lucide-react';

const services = [
  {
    icon: User,
    title: "University Selection",
    description: "Find the perfect match for your academic goals and career aspirations."
  },
  {
    icon: FileText,
    title: "Application Support",
    description: "Complete guidance through every step of your application process."
  },
  {
    icon: Check,
    title: "Scholarship Advising",
    description: "Maximize funding opportunities with expert scholarship guidance."
  },
  {
    icon: MapPin,
    title: "Visa & Immigration",
    description: "Navigate visa requirements with confidence and ease."
  }
];

const CoreServices = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <service.icon 
                  size={48} 
                  className="text-charcoal group-hover:text-mid-grey transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-geometric font-medium text-xl text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="font-geometric font-light text-mid-grey leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
