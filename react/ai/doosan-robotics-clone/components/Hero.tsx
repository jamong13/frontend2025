import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop")',
        }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-doosan-dark/70 via-doosan-dark/40 to-doosan-dark/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          AI-Powered Robot Solutions<br />
          <span className="text-gray-300">for a Better Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Innovation in every motion, revolutionizing the way we work.
          Experience the future of automation with Doosan.
        </p>
        
        <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/40 rounded-full text-white overflow-hidden transition-all hover:bg-white hover:text-doosan-dark">
          <span className="relative z-10 font-medium">Turn imagination into reality with Doosan robots</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute bottom-10 w-full text-center animate-bounce text-white/50">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;