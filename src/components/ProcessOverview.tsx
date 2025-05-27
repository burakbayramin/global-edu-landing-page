
import React from 'react';
import { FileText, Folder, User, MapPin } from 'lucide-react';

const steps = [
  { icon: FileText, label: "Başvuru" },
  { icon: Folder, label: "Belgelendirme" },
  { icon: User, label: "Mülakat" },
  { icon: MapPin, label: "Vize" }
];

const ProcessOverview = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-geometric font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
          Sürecimiz
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 rounded-full border-2 border-charcoal flex items-center justify-center mb-6 bg-off-white hover:bg-charcoal hover:text-off-white transition-all duration-300 group">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="font-geometric font-medium text-charcoal text-lg text-center">
                  {step.label}
                </span>
              </div>
            ))}
            
            {/* Connector lines - only on desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-mid-grey/30 -z-0" style={{ 
              marginLeft: '10%', 
              marginRight: '10%' 
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;
