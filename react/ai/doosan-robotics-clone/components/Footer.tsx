import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-doosan-dark text-gray-400 py-16 text-xs border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div>
            <h4 className="text-white font-bold mb-4">Products & Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Heritage</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Solutions</a></li>
              <li><a href="#" className="hover:text-white">Software</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Education & Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Training</a></li>
              <li><a href="#" className="hover:text-white">Download Center</a></li>
              <li><a href="#" className="hover:text-white">Service Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Invest Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">IR Materials</a></li>
              <li><a href="#" className="hover:text-white">Governance</a></li>
              <li><a href="#" className="hover:text-white">Announcements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Company Info</a></li>
              <li><a href="#" className="hover:text-white">Sustainability</a></li>
              <li><a href="#" className="hover:text-white">News & Events</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
           <div className="col-span-2 lg:col-span-1">
             <div className="relative inline-block w-full">
                <button className="w-full flex justify-between items-center bg-transparent border border-gray-700 px-4 py-2 text-gray-300 hover:border-gray-500">
                  <span>Related Sites</span>
                  <ChevronDown size={14} />
                </button>
             </div>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                <span className="font-bold text-white">Doosan Robotics</span>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Legal Notice</a>
            </div>
            <div className="flex items-center gap-4">
               <button className="flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1 hover:border-white hover:text-white transition-colors">
                  <Globe size={12} />
                  <span>Global (EN)</span>
               </button>
            </div>
        </div>
        <div className="mt-8 text-[10px] text-gray-600">
           Copyright © 2024 Doosan Robotics Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;