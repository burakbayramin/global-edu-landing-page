
import React from 'react';
import { FileText, Folder, User, MapPin } from 'lucide-react';

const steps = [
  { icon: FileText, label: "Application" },
  { icon: Folder, label: "Documentation" },
  { icon: User, label: "Interview" },
  { icon: MapPin, label: "Visa" }
];

const ProcessOverview = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-geometric font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
          Our Process
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="w-16 h-16 rounded-full border-2 border-charcoal flex items-center justify-center mb-4 bg-off-white hover:bg-charcoal hover:text-off-white transition-all duration-300 group">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="font-geometric font-medium text-charcoal text-lg">
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-24 h-px bg-mid-grey" style={{ transform: 'translateX(-50%)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
