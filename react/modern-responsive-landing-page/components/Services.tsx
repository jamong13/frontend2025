import React from 'react';
import { Code, Palette, Smartphone, LineChart, Globe, Shield } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Custom websites built with the latest technologies like React and Tailwind CSS for optimal performance.",
    icon: <Code className="h-8 w-8" />
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and aesthetically pleasing interfaces that provide an exceptional user experience.",
    icon: <Palette className="h-8 w-8" />
  },
  {
    title: "Mobile Solutions",
    description: "Responsive designs that look perfect on smartphones, tablets, and desktops alike.",
    icon: <Smartphone className="h-8 w-8" />
  },
  {
    title: "Digital Marketing",
    description: "Strategies to increase your online presence and reach your target audience effectively.",
    icon: <LineChart className="h-8 w-8" />
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to drive organic traffic.",
    icon: <Globe className="h-8 w-8" />
  },
  {
    title: "Security Audits",
    description: "Ensuring your digital assets are protected against modern web threats and vulnerabilities.",
    icon: <Shield className="h-8 w-8" />
  }
];

export const Services: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">What We Do Best</h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital services designed to scale your business and elevate your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};