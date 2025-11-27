import React from 'react';
import { Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    source: 'Doosan Robotics',
    date: '5 months ago',
    desc: 'Doosan Robotics Official Brand Video',
    platform: 'youtube',
    color: 'text-red-500',
    icon: <Youtube size={16} />
  },
  {
    id: 2,
    source: 'DOOSAN ROBOTICS',
    date: '5 months ago',
    desc: 'Case Study: Fried Chicken Solution',
    platform: 'youtube',
    color: 'text-red-500',
    icon: <Youtube size={16} />
  },
  {
    id: 3,
    source: 'Doosan Robotics',
    date: '5 months ago',
    desc: 'Exhibition Highlights 2024',
    platform: 'facebook',
    color: 'text-blue-500',
    icon: <Facebook size={16} />
  },
  {
    id: 4,
    source: 'Doosan Robotics',
    date: '5 months ago',
    desc: 'New Partnership Announcement',
    platform: 'linkedin',
    color: 'text-blue-400',
    icon: <Linkedin size={16} />
  },
];

const News: React.FC = () => {
  return (
    <section className="py-24 bg-doosan-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet Doosan Robotics'<br />
            Innovative Technology and News.
          </h2>
          <div className="flex space-x-4 text-white/60">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24}/></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={24}/></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24}/></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={24}/></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-doosan-card rounded-lg overflow-hidden group cursor-pointer hover:ring-1 hover:ring-gray-600 transition-all">
              <div className="aspect-video bg-black/40 relative">
                {/* Simulated video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600 transition-colors">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                     <span className={`p-1 bg-gray-100 rounded-full ${item.color}`}>
                        {item.icon}
                     </span>
                     <span className="text-xs font-bold text-gray-900">{item.source}</span>
                   </div>
                   <span className="text-[10px] text-gray-500">{item.date}</span>
                </div>
                <p className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;