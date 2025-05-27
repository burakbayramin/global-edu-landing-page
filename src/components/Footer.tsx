
import React from 'react';
import { Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-off-white border-t border-mid-grey/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h3 className="font-geometric font-bold text-2xl text-charcoal">
              Noventra
            </h3>
          </div>

          {/* Contact Info */}
          <div className="flex-grow text-center">
            <div className="space-y-2 text-mid-grey font-geometric font-light">
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} strokeWidth={1.5} />
                <span className="text-sm">123 Education Street, Global City, GC 12345</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} strokeWidth={1.5} />
                <span className="text-sm">hello@noventra.com | +1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex-shrink-0">
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-charcoal hover:text-mid-grey transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a 
                href="#" 
                className="text-charcoal hover:text-mid-grey transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-mid-grey/20 text-center">
          <p className="font-geometric font-light text-sm text-mid-grey">
            © 2024 Noventra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
