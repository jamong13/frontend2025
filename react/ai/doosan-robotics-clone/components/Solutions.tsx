import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Solutions</h2>
          <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-doosan-blue transition-colors">
            View All Solutions <ArrowRight size={16} />
          </a>
        </div>

        <div className="space-y-24">
          
          {/* Solution 1: Dr. Presso */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden min-h-[400px] flex flex-col md:flex-row">
            <div className="p-10 md:p-16 flex flex-col justify-center md:w-1/2 z-10">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-bold mb-6 w-fit">Service</span>
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Dr.Presso</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                Experience the perfect cup of coffee brewed by our precision robotics. 
                Consistent taste, zero fatigue, and engaging performance.
              </p>
            </div>
            <div className="md:absolute md:right-0 md:top-0 md:h-full md:w-3/5">
               <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" 
                alt="Dr. Presso" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent md:via-transparent"></div>
            </div>
          </div>

          {/* Solution 2: Palletizing */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden min-h-[400px] flex flex-col md:flex-row">
             <div className="p-10 md:p-16 flex flex-col justify-center md:w-1/2 z-10">
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-bold mb-6 w-fit">Industrial</span>
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Palletizing</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                 Palletizing solutions sort or stack goods onto pallets during logistics and transport.
                 Maximize productivity and safety through automated palletizing specialized for collaborative robots.
              </p>
            </div>
            <div className="md:absolute md:right-0 md:top-0 md:h-full md:w-3/5">
               <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop" 
                alt="Palletizing" 
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent md:via-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;