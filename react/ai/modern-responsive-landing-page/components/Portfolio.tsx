import React from 'react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Modern Dashboard', category: 'Web App', imageUrl: 'https://picsum.photos/600/400?random=1' },
  { id: 2, title: 'E-commerce Store', category: 'Development', imageUrl: 'https://picsum.photos/600/400?random=2' },
  { id: 3, title: 'Financial App', category: 'Mobile', imageUrl: 'https://picsum.photos/600/400?random=3' },
  { id: 4, title: 'Travel Blog', category: 'Content', imageUrl: 'https://picsum.photos/600/400?random=4' },
  { id: 5, title: 'Restaurant UI', category: 'Design', imageUrl: 'https://picsum.photos/600/400?random=5' },
  { id: 6, title: 'Social Network', category: 'Platform', imageUrl: 'https://picsum.photos/600/400?random=6' },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">Recent Work</h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Take a look at some of our recent projects. We take pride in delivering high-quality work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-white text-2xl font-bold">{item.title}</h4>
                <div className="mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <span className="inline-block text-white border border-white/30 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-slate-900 transition-colors">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
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