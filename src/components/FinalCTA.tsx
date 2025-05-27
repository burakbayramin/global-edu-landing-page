import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <div className="container mx-auto px-6 text-center">        <p className="font-geometric font-light text-2xl md:text-3xl text-mid-grey mb-8">
          Yurt dışında üniversite okumaya hazır mısın?
        </p>
        <Button
          size="lg"
          className="font-geometric font-medium bg-charcoal text-off-white hover:bg-mid-grey transition-all duration-300 px-10 py-4 text-lg border-none"
        >
          Ücretsiz Seansınız için Rezervasyon Yaptırın
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
