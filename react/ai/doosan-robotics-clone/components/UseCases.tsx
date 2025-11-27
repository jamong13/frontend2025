import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { UseCase } from '../types';

const useCases: UseCase[] = [
  {
    id: '1',
    category: 'Manufacturing',
    title: 'Palletizing',
    tag: 'Palletizing',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    category: 'Manufacturing',
    title: 'Laser Robot Welding',
    tag: 'Cobot Solution',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    category: 'Manufacturing',
    title: 'Sanding',
    tag: 'Cobot Solution',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    category: 'Manufacturing',
    title: 'Machine Tending',
    tag: 'Doosan M0617',
    imageUrl: 'https://images.unsplash.com/photo-1631557026743-162fb15d8689?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '5',
    category: 'Service',
    title: 'Dr.Presso',
    tag: 'Food Tech',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '6',
    category: 'Service',
    title: 'School Meal Solution',
    tag: 'Food Tech',
    imageUrl: 'https://images.unsplash.com/photo-1588610582522-f04dc0496154?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '7',
    category: 'Service',
    title: 'Airport Baggage Handling',
    tag: 'Test met bagagerobot',
    imageUrl: 'https://images.unsplash.com/photo-1528659567958-8d26c507c57b?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '8',
    category: 'Service',
    title: 'EV Charging Robot',
    tag: 'Doosan Cobot Solution',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=60',
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Use cases</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              A new way of working<br />
              with robotic solutions.
            </h2>
             <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded hover:border-black transition-colors text-sm font-medium">
              View More Cases <ChevronDown size={16} />
            </button>
          </div>
          <p className="mt-4 text-gray-600">Get inspired by various success stories that innovate your workplace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-2 py-1 text-xs font-bold text-white bg-yellow-500/90 rounded`}>
                   {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <span className={`text-xs font-bold px-2 py-0.5 border ${item.category === 'Manufacturing' ? 'text-blue-600 border-blue-600' : 'text-green-600 border-green-600'} rounded mb-2 inline-block`}>
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-doosan-blue transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;