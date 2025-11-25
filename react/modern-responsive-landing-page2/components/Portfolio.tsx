import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Modern Dashboard', category: 'Web App', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'E-commerce Store', category: 'Development', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Financial App', category: 'Mobile', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Travel Blog', category: 'Content', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Restaurant UI', category: 'Design', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Social Network', category: 'Platform', imageUrl: 'https://picsum.photos/600/400?random=6' },
  { id: 7, title: 'AI Analytics', category: 'Data', imageUrl: 'https://picsum.photos/600/400?random=7' },
  { id: 8, title: 'Health Tracker', category: 'Mobile', imageUrl: 'https://picsum.photos/600/400?random=8' },
];

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent index out of bounds when resizing
  useEffect(() => {
    const maxIndex = Math.max(0, portfolioItems.length - itemsPerPage);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, currentIndex]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, portfolioItems.length - itemsPerPage);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, portfolioItems.length - itemsPerPage);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const maxIndex = Math.max(0, portfolioItems.length - itemsPerPage);

  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Recent Work</h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects. We take pride in delivering high-quality work.
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-4 lg:-translate-x-12 z-20 bg-white/90 hover:bg-white text-indigo-600 p-3 rounded-full shadow-lg border border-slate-100 transition-all focus:outline-none hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-4 lg:translate-x-12 z-20 bg-white/90 hover:bg-white text-indigo-600 p-3 rounded-full shadow-lg border border-slate-100 transition-all focus:outline-none hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden py-4 -mx-4 px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {portfolioItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="group/card relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-full">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-80 object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                      <div className="mt-4 transform translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 delay-100">
                        <span className="inline-block text-white border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-slate-900 transition-colors">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-indigo-600 w-6' : 'bg-slate-300 w-2 hover:bg-indigo-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};
