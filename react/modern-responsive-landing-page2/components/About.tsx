import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <img 
                 src="https://picsum.photos/600/400" 
                 alt="Team working" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-bold text-lg">Established 2024</p>
                 <p className="text-sm opacity-90">Building digital excellence</p>
               </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
            <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
              Who We Are & <br/>Why Choose Us
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We are a passionate team of designers and developers dedicated to delivering top-notch digital solutions. Our mission is to transform your ideas into reality using the latest technologies and design trends.
            </p>
            
            <div className="space-y-4">
              {[
                'Creative and innovative design solutions',
                'Responsive development for all devices',
                'User-centric approach to problem solving',
                'Dedicated support and maintenance'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
               <a href="#contact" className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center group">
                 Learn more about our team 
                 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};