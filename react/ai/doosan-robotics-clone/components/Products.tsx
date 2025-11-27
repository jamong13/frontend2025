import React from 'react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'h-series',
    series: 'H-SERIES',
    name: 'High-Power',
    description: 'The most powerful payload among collaborative robots on the market.',
    models: ['H2017', 'H2515'],
    type: 'High-Power',
    imageUrl: 'https://images.unsplash.com/photo-1624458316124-7c38575003c2?q=80&w=1400&auto=format&fit=crop', // Abstract tech placeholder
  },
  {
    id: 'm-series',
    series: 'M-SERIES',
    name: 'Masterpiece',
    description: 'The premium cobot lineup with the highest quality sensors.',
    models: ['M1509', 'M1013', 'M0617', 'M0609'],
    type: 'Masterpiece',
    imageUrl: 'https://images.unsplash.com/photo-1555541999-96866d03f0b2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'a-series',
    series: 'A-SERIES',
    name: 'Agile',
    description: 'The A-Series offers speed and cost-effectiveness for any industry.',
    models: ['A0912', 'A0509', 'A0509s'],
    type: 'Agile',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'e-series',
    series: 'E-SERIES',
    name: 'Edge',
    description: 'NSF-certified specifically designed for the food and beverage industry.',
    models: ['E0509'],
    type: 'Edge',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da9e2f58?q=80&w=1400&auto=format&fit=crop',
  },
];

const Products: React.FC = () => {
  return (
    <section className="py-32 bg-doosan-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2">
            World's Largest Scale
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500">
            Cobot Lineup
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-doosan-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="h-64 bg-white/5 relative p-8 flex items-center justify-center">
                 {/* Simulated Product Image - utilizing filters to make it look "techy" */}
                 <img 
                    src={product.imageUrl} 
                    alt={product.series}
                    className="w-full h-full object-contain mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                 />
                 <div className="absolute top-4 right-4 bg-white/10 px-2 py-1 rounded text-xs">
                    {product.series}
                 </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-gray-400 text-sm font-medium mb-1">{product.name}</span>
                <h3 className="text-2xl font-bold mb-4">{product.series}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {product.models.map((model) => (
                    <span key={model} className="px-2 py-1 bg-doosan-blue/20 text-doosan-blue text-xs font-bold rounded border border-doosan-blue/30">
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
           {/* View All Button Card */}
           <div className="bg-transparent border border-gray-800 rounded-xl flex items-center justify-center group cursor-pointer hover:border-doosan-blue transition-colors min-h-[300px]">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center mx-auto mb-4 group-hover:border-doosan-blue group-hover:bg-doosan-blue group-hover:text-white transition-all">
                  <span className="text-xl">→</span>
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white">View Full Lineup</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Products;