import React from "react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (index) => {
    const sections = [heroRef, aboutRef, servicesRef, portfolioRef, contactRef];
    sections[index]?.current?.scrollIntoView({
      // 해당 섹션으로 이동하라
      behavior: "smooth", // 부드럽게
      block: "start",
    });
  };
  // sections 배열: 위에서 정의된 다섯 개의 ref 객체를 순서대로 담고 있습니다.

  // index 매개변수: 이 배열의 순서(인덱스)를 받아 스크롤할 대상을 지정합니다.

  // 핵심 동작: 지정된 인덱스의 ref를 찾아 (sections[index]),
  // 실제 DOM 요소(?.current)의 상단이 화면 상단에 맞춰
  // 부드럽게(behavior: 'smooth', block: 'start') 보이도록 스크롤합니다.

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.pageYOffset + window.innerHeight / 3;
      // window.pageYOffset(수직 스크롤 위치) + 화면 높이 1/3 = 화면 상단에서 1/3 위치를 감지 기준
      sections.forEach((section, index) => {
        const top = section.offsetTop; // 현재 순회 중인 섹션의 시작
        const bottom = top + section.offsetHeight;
        // scrollPosition(감지 위치)가 현재 순회 중인 섹션의 시작과 끝 사이에 있는 경우

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(index);
          // 조건이 참이면 핻 섹션의 (index) 값으로 activeSection 상태를 업데이트
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // 메모리 누수 방지
  }, []);
  // 컴포넌트 화면에 나타난 후, 사용자가 스크롤할 때마다 모든 .section 요소를 검사하여
  // 화면에 상단 1/3 지점에 걸려 잇는 섹션이 무엇인지 확인하고,
  // 그 섹션의 인덱스를 activeSection에 상태 저장해
  //이 activeSection상태를 사용하여 내비게이션 메뉴의 스타일을 동적으로 변경할 수 있다.

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Scroll Navigation</h1>
          <ul className="nav-menu">
            <li
              className={activeSection === 0 ? "active" : ""}
              onClick={() => scrollToSection(0)}
            >
              Home
            </li>
            <li
              className={activeSection === 1 ? "active" : ""}
              onClick={() => scrollToSection(1)}
            >
              About
            </li>
            <li
              className={activeSection === 2 ? "active" : ""}
              onClick={() => scrollToSection(2)}
            >
              Services
            </li>
            <li
              className={activeSection === 3 ? "active" : ""}
              onClick={() => scrollToSection(3)}
            >
              Portfolio
            </li>
            <li
              className={activeSection === 4 ? "active" : ""}
              onClick={() => scrollToSection(4)}
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
      <section ref={heroRef} className="section section-hero">
        <div className="section-content">
          <h2 className="fade-in">Welcome to One-page Scroll</h2>
          <p className="fade-in-delay">스크롤 효과를 경험해보세요</p>
        </div>
      </section>

      <section ref={aboutRef} className="section section-about">
        <div className="section-content">
          <h2 className="slide-in-left">About Us</h2>
          <p className="slide-in-left">
            스크할때마다 부드러운 효과가 적용됩니다.
          </p>
          <div className="cards">
            <div className="card card-fade">Card 1</div>
            <div className="card card-fade">Card 2</div>
            <div className="card card-fade">Card 3</div>
          </div>
        </div>
      </section>
      <section ref={servicesRef} className="section section-services">
        <div className="section-content">
          <h2 className="slide-in-right">Our Services</h2>
          <p className="slide-in-right">
            다양한 서비스를 제공합니다. 아래로 스크롤 해보세요.
          </p>
        </div>
      </section>
      <section ref={portfolioRef} className="section section-portfolio">
        <div className="section-content">
          <h2 className="fade-in">Portfolio</h2>
          <p className="fade-in-delay">저희 작업물들을 소개합니다.</p>
          <div className="swiper-container">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              className="portfolio-swiper"
            >
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Prorject 1</div>
                  <h3>프로젝트 1</h3>
                  <p>React와 TypeScript를 사용한 웹 애플리케이션</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Project 2</div>
                  <h3>프로젝트 2</h3>
                  <p>Node.js 기반 RESTful API 서버</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Project 3</div>
                  <h3>프로젝트 3</h3>
                  <p>모바일 반응형 웹 디자인</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Project 4</div>
                  <h3>프로젝트 4</h3>
                  <p>데이터 시각화 대시보드</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Project 5</div>
                  <h3>프로젝트 5</h3>
                  <p>실시간 채팅 애플리케이션</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="portfolio-item">
                  <div className="portfolio-image">Project 6</div>
                  <h3>프로젝트 6</h3>
                  <p>E-commerce 플랫폼</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section ref={contactRef} className="section section-contact">
        <div className="section-content">
          <h2 className="zoom-in">Contact Us</h2>
          <p className="zoom-in">
            연락을 주시면 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
