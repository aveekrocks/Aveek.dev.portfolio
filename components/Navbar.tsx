import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {SITE_CONFIG.name.split(' ')[0]}<span className="text-white">.dev</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
              <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full glass-panel border-t border-slate-800">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 px-3 py-4 border-t border-slate-700 mt-4">
              <a href={SITE_CONFIG.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href={SITE_CONFIG.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-400 hover:text-white">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};