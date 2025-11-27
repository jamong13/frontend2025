import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: `#${SectionId.HOME}` },
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Menu', href: `#${SectionId.MENU}` },
  { label: 'Franchise', href: `#${SectionId.FRANCHISE}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href={`#${SectionId.HOME}`} className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            F
          </div>
          <span className={`font-bold text-2xl tracking-tight ${isScrolled || isOpen ? 'text-dark' : 'text-white'} transition-colors`}>
            FreshBowl
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-8 h-8 ${isScrolled || isOpen ? 'text-dark' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-40 flex flex-col justify-center items-center`}
        >
          <nav className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;