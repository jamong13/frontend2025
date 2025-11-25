import React from 'react';
import { SectionId } from '../types';

const AboutSection: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
            <img 
              src="https://picsum.photos/800/800?random=1" 
              alt="Fresh Ingredients" 
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold text-dark mb-6">건강한 삶의 시작,<br/>균형 잡힌 한 끼에서</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              프레시볼은 바쁜 현대인들에게 가장 간편하면서도 영양가 높은 식사를 제공하기 위해 시작되었습니다. 
              하와이안 포케의 오리지널 레시피를 한국인의 입맛에 맞게 재해석하여, 남녀노소 누구나 즐길 수 있는 맛을 완성했습니다.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              우리는 타협하지 않는 신선함을 고집합니다. 매일 새벽 농산물 시장에서 공수해온 채소와, 
              엄선된 공급망을 통해 들어오는 최상급 단백질원은 프레시볼의 자부심입니다.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                <p className="text-sm text-gray-500">당일 생산/판매</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">20+</h4>
                <p className="text-sm text-gray-500">신선한 토핑</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">5K+</h4>
                <p className="text-sm text-gray-500">월간 고객 수</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;