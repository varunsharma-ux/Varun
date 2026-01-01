
import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-[#4A6741] font-semibold tracking-widest uppercase text-xs mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Gathering Place Where the Season Inspires Every Plate.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                Originally a country store on farmland along Powers Ferry Road in early Atlanta, our location has evolved through decades as a grocery, gas station, and beloved neighborhood institution.
              </p>
              <p>
                Formerly the Horseradish Grill, the space was transformed in 2020 into THE CHASTAIN—an upscale neighborhood restaurant that honors its heritage while looking toward a sustainable future.
              </p>
              <p>
                Recognized with a MICHELIN Green Star, our commitment to sustainability is reflected in every detail, from our onsite culinary garden to our deep-rooted partnerships with local regional farms.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/restaurant-exterior/800/1000" 
              alt="The Chastain Exterior" 
              className="rounded-sm shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-[#4A6741] p-8 text-white max-w-xs hidden md:block">
              <h3 className="font-serif text-2xl mb-2 italic">MICHELIN Green Star</h3>
              <p className="text-sm font-light opacity-90">Honoring our commitment to sustainable gastronomy and ecological responsibility.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-serif text-center mb-16 underline decoration-[#4A6741] underline-offset-8">Meet the Team</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="overflow-hidden mb-6">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-2xl font-serif mb-1">{member.name}</h4>
                <p className="text-[#4A6741] font-medium uppercase tracking-widest text-xs mb-4">{member.role}</p>
                <p className="text-gray-500 font-light italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
