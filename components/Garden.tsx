
import React from 'react';
import { FARM_PARTNERS } from '../constants';

const Garden: React.FC = () => {
  return (
    <section id="garden" className="py-24 px-6 bg-[#4A6741] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/garden1/400/400" alt="Garden detail" className="rounded-sm w-full h-full object-cover" />
              <img src="https://picsum.photos/seed/garden2/400/400" alt="Garden detail" className="rounded-sm w-full h-full object-cover mt-8" />
              <img src="https://picsum.photos/seed/garden3/400/400" alt="Garden detail" className="rounded-sm w-full h-full object-cover -mt-8" />
              <img src="https://picsum.photos/seed/garden4/400/400" alt="Garden detail" className="rounded-sm w-full h-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-white/70 font-semibold tracking-widest uppercase text-xs mb-4 block">
              The Soul of the Chastain
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Our TC Culinary Garden
            </h2>
            <div className="space-y-6 opacity-90 font-light text-lg leading-relaxed mb-12">
              <p>
                Our onsite culinary garden is central to the THE CHASTAIN experience. Grown using regenerative techniques and deep ecological awareness, it provides the vibrant produce that anchors our menus.
              </p>
              <p>
                From pollinator-friendly perennials to seasonal staples, the garden is a living classroom for our team and a direct bridge from the soil to your plate.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-6">Our Farm Partners</h3>
              <div className="flex flex-wrap gap-3">
                {FARM_PARTNERS.map((farm) => (
                  <span 
                    key={farm} 
                    className="px-4 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-[#4A6741] transition-colors cursor-default"
                  >
                    {farm}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garden;
