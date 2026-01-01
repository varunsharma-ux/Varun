
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#2C2C2C] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif mb-8 tracking-tighter">THE CHASTAIN</h2>
            <div className="space-y-4 opacity-70 font-light text-sm leading-relaxed">
              <p>4320 Powers Ferry Road<br />Atlanta, GA 30342</p>
              <p>(404) 257-6416</p>
              <p>info@thechastainatl.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 italic">Hours</h4>
            <div className="space-y-4 text-xs font-bold tracking-widest uppercase opacity-70">
              <p>Café: Daily 7am - 2pm</p>
              <p>Lunch: Mon-Fri 11am - 2pm</p>
              <p>Brunch: Sat-Sun 11am - 2pm</p>
              <p>Dinner: Nightly from 5pm</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 italic">Connect</h4>
            <div className="space-y-4 text-xs font-bold tracking-widest uppercase">
              <a href="#" className="block opacity-70 hover:opacity-100 hover:text-[#4A6741] transition-all">Instagram</a>
              <a href="#" className="block opacity-70 hover:opacity-100 hover:text-[#4A6741] transition-all">Facebook</a>
              <a href="#" className="block opacity-70 hover:opacity-100 hover:text-[#4A6741] transition-all">OpenTable</a>
              <a href="mailto:careers@thechastainatl.com" className="block opacity-70 hover:opacity-100 hover:text-[#4A6741] transition-all">Careers</a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 italic">Newsletter</h4>
            <p className="text-sm opacity-70 font-light mb-6 italic">Stay rooted in our seasonal updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/20 px-4 py-2 w-full text-sm outline-none focus:border-[#4A6741]"
              />
              <button className="bg-[#4A6741] px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#3d5535] transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
          <p>© {new Date().getFullYear()} THE CHASTAIN • ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
