
import React from 'react';
import { EVENT_SPACES } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[#4A6741] font-semibold tracking-widest uppercase text-xs mb-4 block">
          Gatherings
        </span>
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Private Dining & Events</h2>
        <p className="text-gray-500 max-w-2xl mx-auto italic">
          From intimate fireside dinners to full restaurant buyouts, discover the perfect space for your next celebration.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {EVENT_SPACES.map((space) => (
          <div key={space.name} className="flex flex-col bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow group">
            <div className="h-64 overflow-hidden">
              <img 
                src={space.imageUrl} 
                alt={space.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-serif mb-2">{space.name}</h3>
              <p className="text-[#4A6741] text-xs font-bold tracking-widest uppercase mb-4">{space.capacity}</p>
              <p className="text-gray-500 font-light mb-6 flex-1 italic leading-relaxed">{space.description}</p>
              <ul className="mb-8 space-y-2">
                {space.features.map(f => (
                  <li key={f} className="text-sm flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-[#4A6741] rounded-full mr-3"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:events@thechastainatl.com" 
                className="block text-center py-3 border border-gray-200 hover:border-[#4A6741] hover:bg-[#4A6741] hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
              >
                Inquire Now
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center max-w-2xl mx-auto p-12 bg-[#FDFCFB] border border-gray-100 rounded-sm">
        <h3 className="text-2xl font-serif mb-4 italic">Offsite Catering</h3>
        <p className="text-gray-500 mb-8 font-light leading-relaxed">
          Bringing THE CHASTAIN experience to you. Contact our team for bespoke offsite events and executive catering.
        </p>
        <a 
          href="mailto:chef@thechastainatl.com" 
          className="text-[#4A6741] font-bold text-sm border-b-2 border-[#4A6741] uppercase tracking-widest pb-1"
        >
          Email our Executive Chef
        </a>
      </div>
    </section>
  );
};

export default Events;
