
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with simple parallax simulation via fixed positioning */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://picsum.photos/seed/garden-hero/1920/1080')`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="inline-block text-white/90 uppercase tracking-[0.3em] text-xs mb-6 font-medium">
          Buckhead • Atlanta • Georgia
        </span>
        <h1 className="text-5xl md:text-8xl text-white font-serif mb-8 leading-tight">
          Rooted in the Season.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed italic font-serif">
          Seasonal New American Cuisine Rooted in Garden-to-Table Craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menus" 
            className="w-full sm:w-auto px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest font-medium"
          >
            View Menus
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 bg-[#4A6741] text-white hover:bg-[#3d5535] transition-all text-sm uppercase tracking-widest font-medium"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
