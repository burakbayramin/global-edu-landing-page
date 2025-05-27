
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-off-white py-6 border-b border-mid-grey/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-4">
          <img 
            src="/lovable-uploads/f5062d04-e501-4b4d-a0a3-d5dfa511f54c.png" 
            alt="Noventra Logo" 
            className="h-12 w-12"
          />
          <h1 className="font-geometric font-bold text-4xl md:text-5xl text-charcoal">
            NOVENTRA
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
