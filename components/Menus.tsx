
import React, { useState } from 'react';

const MENU_DATA = {
  Café: [
    { name: "House-Made Pastries", desc: "Daily selection from Chef Castillo's kitchen", price: "$6+" },
    { name: "BRASH Coffee Pour Over", desc: "Sustainably sourced, locally roasted", price: "$5" },
    { name: "Avocado Toast", desc: "Multigrain bread, garden radish, sunflower seeds", price: "$14" },
    { name: "Breakfast Sando", desc: "Farm egg, white cheddar, house sausage", price: "$12" }
  ],
  Lunch: [
    { name: "The Chastain Burger", desc: "Aged beef blend, garden greens, house pickles", price: "$22" },
    { name: "Seasonal Harvest Salad", desc: "Roasted garden vegetables, lemon vinaigrette", price: "$18" },
    { name: "Fresh Catch", desc: "Sustainably sourced, garden herb crust", price: "$34" }
  ],
  Dinner: [
    { name: "TC Garden Root Vegetable Tart", desc: "Whipped goat cheese, fermented honey", price: "$19" },
    { name: "Dry-Aged Ribeye", desc: "Charred scallion butter, garden potatoes", price: "$68" },
    { name: "Herb Roasted Chicken", desc: "Tucker Farms greens, natural jus", price: "$38" },
    { name: "Hand-Rolled Pasta", desc: "Daily garden-inspired preparation", price: "$32" }
  ],
  'Garden Tasting': [
    { name: "Multi-Course Experience", desc: "A curated journey through our garden's peak season", price: "$125 per person" },
    { name: "Wine Pairing", desc: "Thoughtfully selected sustainable vintages", price: "+$75" }
  ]
};

const Menus: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof MENU_DATA>('Dinner');

  return (
    <section id="menus" className="py-24 px-6 bg-[#F8F7F5]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#4A6741] font-semibold tracking-widest uppercase text-xs mb-4 block">
            The Table
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Culinary Offerings</h2>
          <p className="text-gray-500 italic">Menus evolve with the garden's heartbeat.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(MENU_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof MENU_DATA)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-[#4A6741] text-white' 
                  : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white p-8 md:p-16 shadow-xl rounded-sm">
          <h3 className="text-3xl font-serif text-center mb-12 border-b border-gray-100 pb-8">
            {activeTab} Menu
          </h3>
          <div className="space-y-12">
            {MENU_DATA[activeTab].map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h4 className="text-xl font-medium mb-2">{item.name}</h4>
                  <p className="text-gray-500 font-light italic leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[#4A6741] font-serif font-bold text-lg whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
              * Consuming raw or undercooked meats may increase risk of foodborne illness.
            </p>
            <button className="text-[#4A6741] border-b-2 border-[#4A6741] font-bold text-sm uppercase tracking-widest hover:text-[#3d5535] transition-colors">
              Download Full Menu (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
