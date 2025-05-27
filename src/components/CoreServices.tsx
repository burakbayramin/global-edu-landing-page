
import React from 'react';
import { User, FileText, MapPin, Check } from 'lucide-react';

const services = [
  {
    icon: User,
    title: "Üniversite Seçimi",
    description: "Akademik hedefleriniz ve kariyer planlarınız için mükemmel eşleşmeyi bulun."
  },
  {
    icon: FileText,
    title: "Başvuru Desteği",
    description: "Başvuru sürecinizin her adımında eksiksiz rehberlik."
  },
  {
    icon: Check,
    title: "Burs Danışmanlığı",
    description: "Uzman burs rehberliği ile finansal fırsatlardan maksimum düzeyde yararlanın."
  },
  {
    icon: MapPin,
    title: "Vize ve Göçmenlik",
    description: "Vize gerekliliklerini güven ve kolaylıkla yönetin."
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
