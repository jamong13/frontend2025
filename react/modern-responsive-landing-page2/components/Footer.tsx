import React from 'react';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tighter">
                MODERN<span className="text-indigo-500">WEB</span>
              </span>
            </a>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              Creating digital experiences that matter. We help forward-thinking companies build modern products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#service" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Developers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ModernWeb Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <span>Made with</span>
            <span className="text-red-500">♥</span>
            <span>in React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};