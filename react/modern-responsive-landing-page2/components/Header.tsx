import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className={`font-bold text-2xl tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-800'}`}>
                MODERN<span className="text-indigo-600">WEB</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  scrolled ? 'text-slate-600' : 'text-slate-700'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 w-full text-center rounded-md"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};