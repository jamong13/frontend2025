import React, { useRef } from 'react';
import { SectionId, MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "클래식 연어 포케",
    description: "신선한 노르웨이 생연어와 특제 스파이시 마요 소스의 환상적인 조화. 오메가3가 풍부한 연어로 건강과 맛을 동시에 챙기세요.",
    price: "13,900원",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tags: ["Best", "Signature"]
  },
  {
    id: 2,
    name: "하와이안 튜나 포케",
    description: "담백한 참치와 클래식 간장 소스로 즐기는 오리지널 하와이안 맛. 현지의 맛을 그대로 재현했습니다.",
    price: "12,900원",
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?auto=format&fit=crop&w=800&q=80",
    tags: ["High Protein"]
  },
  {
    id: 3,
    name: "그릴드 머쉬룸 샐러드",
    description: "구운 버섯 3종과 트러플 오일이 어우러진 풍미 가득한 비건 메뉴. 버섯의 쫄깃한 식감이 일품입니다.",
    price: "11,900원",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Vegan"]
  },
  {
    id: 4,
    name: "수비드 치킨 보울",
    description: "저온 조리 닭가슴살로 부드러움을 극대화한 다이어트 최적화 메뉴. 퍽퍽하지 않고 촉촉한 닭가슴살을 즐겨보세요.",
    price: "10,900원",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    tags: ["Diet"]
  },
  {
    id: 5,
    name: "우삼겹 메밀면 샐러드",
    description: "고소한 우삼겹과 상큼한 메밀면이 만난 든든한 한 끼. 한국적인 맛과 샐러드의 조화가 매력적입니다.",
    price: "14,500원",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    tags: ["Fusion"]
  },
  {
    id: 6,
    name: "쉬림프 아보카도 보울",
    description: "통통한 새우와 부드러운 아보카도의 건강한 만남. 신선한 해산물과 크리미한 아보카도의 조합입니다.",
    price: "13,500원",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80",
    tags: ["Healthy"]
  }
];

const MenuSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.MENU} className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Our Menu</h2>
          <h3 className="text-4xl font-bold text-dark">신선함을 골라 담으세요</h3>
          <p className="mt-4 text-gray-600">모든 메뉴는 현미밥, 메밀면, 채소만 중 선택 가능합니다.</p>
        </div>

        <div className="relative group">
          {/* Left Navigation Button */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
            aria-label="Previous menu items"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Container - items-stretch added for equal height */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 md:px-2 md:mx-0 scrollbar-hide items-stretch"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[85vw] md:min-w-[380px] snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group/card h-auto"
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/0 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-dark/80 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-dark group-hover/card:text-primary transition-colors">{item.name}</h4>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  <button className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform active:scale-95 mt-auto">
                    주문하기
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 hover:bg-white text-dark p-3 rounded-full shadow-lg backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center hover:scale-110"
            aria-label="Next menu items"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden text-center text-gray-400 text-sm mt-[-20px] mb-8 animate-pulse">
          <span>&larr; 좌우로 스크롤하여 메뉴 확인 &rarr;</span>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;