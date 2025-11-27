import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-doosan-dark/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter">DOOSAN</div>
          <span className="opacity-50 text-sm hidden sm:block">Robotics</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-doosan-blue transition-colors">Products & Solutions</a>
          <a href="#" className="hover:text-doosan-blue transition-colors">Education & Service</a>
          <a href="#" className="hover:text-doosan-blue transition-colors">Invest Info</a>
          <a href="#" className="hover:text-doosan-blue transition-colors">Company</a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="border border-white/30 px-3 py-1.5 text-xs rounded hover:bg-white hover:text-black transition-colors">
            A/S Application
          </button>
          <button className="border border-white/30 px-3 py-1.5 text-xs rounded hover:bg-white hover:text-black transition-colors">
            Partner Portal ↗
          </button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-doosan-blue">
            <Globe size={16} />
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-doosan-dark absolute top-full left-0 w-full p-4 border-t border-gray-800 shadow-xl">
          <div className="flex flex-col space-y-4 text-white text-sm font-medium">
            <a href="#" className="py-2 border-b border-gray-800">Products & Solutions</a>
            <a href="#" className="py-2 border-b border-gray-800">Education & Service</a>
            <a href="#" className="py-2 border-b border-gray-800">Invest Info</a>
            <a href="#" className="py-2 border-b border-gray-800">Company</a>
            <div className="flex flex-col gap-2 pt-2">
               <button className="border border-white/30 px-3 py-2 text-center rounded">A/S Application</button>
               <button className="border border-white/30 px-3 py-2 text-center rounded">Partner Portal</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;