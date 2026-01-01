
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menus', href: '#menus' },
    { name: 'Garden', href: '#garden' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
          isScrolled ? 'text-[#2C2C2C]' : 'text-white'
        }`}>
          THE CHASTAIN
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#4A6741] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              isScrolled 
                ? 'bg-[#4A6741] text-white hover:bg-[#3d5535]' 
                : 'bg-white text-[#2C2C2C] hover:bg-gray-100'
            }`}
          >
            Reserve
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center space-y-8 md:hidden">
          <button 
            className="absolute top-8 right-8 text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-10 py-3 bg-[#4A6741] text-white rounded-full text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
