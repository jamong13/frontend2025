import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2084&auto=format&fit=crop" 
          alt="Fresh Salad Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        
        {/* H1 Wrapper with Background */}
        <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl mb-12 border border-white/10 inline-block max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-xl">
            자연을 담은 한 그릇,<br />
            <span className="text-primary-400 text-green-400 mt-2 block">프레시볼</span>
          </h1>
        </div>

        <p className="text-lg md:text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          매일 아침 배송되는 신선한 재료로 만든<br className="md:hidden"/> 프리미엄 포케 샐러드를 만나보세요.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <a 
            href={`#${SectionId.MENU}`}
            className="px-12 py-4 bg-primary hover:bg-green-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            메뉴 보기
          </a>
          <a 
            href={`#${SectionId.FRANCHISE}`}
            className="px-12 py-4 bg-white hover:bg-gray-100 text-dark font-bold rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            가맹 문의
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;