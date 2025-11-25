import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-80"></div>
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute left-0 bottom-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Build Your Future <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            With Modern Design
          </span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          We help businesses grow by crafting amazing web experiences. 
          Professional, responsive, and tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#service" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#portfolio" 
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};