import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Theme', href: '#theme' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Dates', href: '#dates' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary-dark/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-secondary p-1.5 rounded-lg shadow-lg shadow-secondary/20">
            <img src="/icaebms-logo.png" alt="ICAEBMS Logo" className="h-8 w-auto" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter text-white">
            ICAEBMS <span className="text-secondary">2026</span>
          </span>
        </div>

        {/* Desktop Menu - Forcefully pushed to the right side */}
        <div className="hidden md:flex items-center gap-12 ml-auto">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-semibold text-[13px] uppercase tracking-widest text-white/80 hover:text-secondary hover:-translate-y-0.5 inline-block transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#register" className="btn btn-primary px-6 py-2 text-xs">
            Register
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            className="p-2 rounded-lg bg-white/10 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark border-t border-white/10 shadow-2xl py-10 flex flex-col items-center gap-6 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white/70 font-bold text-xl hover:text-secondary uppercase tracking-widest transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#register" className="btn btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>
            Register Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
