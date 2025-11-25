import React from 'react';
import { SectionId } from '../types';

const FranchiseSection: React.FC = () => {
  return (
    <section id={SectionId.FRANCHISE} className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Franchise</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              성공적인 창업,<br/>
              프레시볼과 함께하세요
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              체계적인 교육 시스템과 안정적인 물류 공급망으로 초보 창업자도 전문가가 될 수 있습니다. 
              건강 트렌드를 선도하는 프레시볼에서 당신의 꿈을 펼쳐보세요.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-lg">본사 슈퍼바이저의 1:1 밀착 관리</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-lg">S급 상권 분석 및 점포 개발 지원</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-lg">마케팅 및 홍보 전액 본사 지원 (초기 3개월)</span>
              </li>
            </ul>
            <button className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              가맹 상담 신청하기
            </button>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2">50호점</div>
              <div className="text-sm opacity-80">전국 오픈 매장</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-sm opacity-80">업계 최고 수익률</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="text-sm opacity-80">폐업률 (2023년 기준)</div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
              <div className="text-4xl font-bold mb-2">Daily</div>
              <div className="text-sm opacity-80">신선 물류 배송</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;