import React from 'react';

const clients = [
  'MAHLE', 'HYUNDAI', 'TOYOTA', 'SAMSUNG C&T', 'LG Electronics', 'LANCOME', 'DIOR', 'dyson', 'Continental'
];

const Clients: React.FC = () => {
  return (
    <section className="relative py-32 bg-doosan-dark overflow-hidden">
      {/* Abstract Globe Background simulation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <span className="text-white/60 text-sm font-medium mb-4 block">Our Clients</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-20 max-w-4xl">
          Leading companies in 50 countries<br />
          have increased productivity and reduced costs<br />
          with Doosan Robots.
        </h2>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-70 grayscale">
          {clients.map((client, idx) => (
            <div key={idx} className="text-white text-xl font-bold font-sans tracking-wider hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;