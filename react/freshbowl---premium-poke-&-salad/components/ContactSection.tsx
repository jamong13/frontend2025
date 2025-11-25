import React from 'react';
import { SectionId } from '../types';

const ContactSection: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-semibold text-lg uppercase tracking-wider mb-2">Contact Us</h2>
          <h3 className="text-4xl font-bold text-dark">문의하기</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8 bg-light p-8 rounded-2xl">
            <div>
              <h4 className="text-xl font-bold text-dark mb-4">본사 위치</h4>
              <p className="text-gray-600">서울특별시 강남구 테헤란로 123, <br/>프레시타워 15층</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-dark mb-4">운영 시간</h4>
              <p className="text-gray-600">평일: 09:00 - 18:00 <br/>점심시간: 12:00 - 13:00 <br/>(주말 및 공휴일 휴무)</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-dark mb-4">연락처</h4>
              <p className="text-gray-600">Tel: 02-1234-5678</p>
              <p className="text-gray-600">Email: hello@freshbowl.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="홍길동" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="010-0000-0000" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="example@email.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">문의 내용</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="문의하실 내용을 입력해주세요."></textarea>
              </div>

              <button type="submit" className="w-full bg-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors">
                문의 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;