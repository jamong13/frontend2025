import React from 'react';
import { HelpCircle, MapPin, BookOpen, Headphones } from 'lucide-react';
import { SupportItem } from '../types';

const items: SupportItem[] = [
  {
    id: 'inquiry',
    title: 'Purchase Inquiry',
    description: 'Considering buying a robot? Get 1:1 consultation with an expert.',
    icon: <HelpCircle className="w-10 h-10 text-doosan-blue" />,
  },
  {
    id: 'dealer',
    title: 'Find a Dealer',
    description: 'We will guide you to the nearest dealer to your customer.',
    icon: <MapPin className="w-10 h-10 text-doosan-blue" />,
  },
  {
    id: 'education',
    title: 'Doosan Robot Education',
    description: 'Improve robot operation skills with step-by-step online/offline training.',
    icon: <BookOpen className="w-10 h-10 text-doosan-blue" />,
  },
  {
    id: 'as',
    title: 'A/S Application',
    description: 'Robot expert support available 365 days a year.',
    icon: <Headphones className="w-10 h-10 text-doosan-blue" />,
  },
];

const Support: React.FC = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-doosan-blue transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              <div className="self-end bg-blue-50 p-4 rounded-full group-hover:bg-blue-100 transition-colors">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;