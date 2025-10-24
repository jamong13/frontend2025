import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // 컴포넌트가 처음 화면에 나타날 때, 한번 실행되는 코드
  useEffect(() => {
    // mount = 처음 랜더링 된 곳
    const handleScroll = () => {
      document.querySelectorAll(".slideanim").forEach((el) => {
        // .slideanim 클래스 요소 선택
        const pos = el.getBoundingClientRect().top; // offset().top과 비슷
        // offset().top은 전체의 최상단으로부터의 거리
        // 요소의 '현재' 화면 상단으로부터의 거리(px)를 구함. = 현재 뷰포트의 어디쯤 요소가 있는지 알 수 있음
        const winHeight = window.innerHeight; // 브라우저 높이
        if (pos < winHeight - 100) {
          // 요소 위치가 화면 아랫쪽에 100px 위에 도달하면 실행
          // 스크롤 내려서 그 요소가 거의 화면 안에 들어오면
          el.classList.add("slide"); //애니메이션 시작
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    // 클린업 컴포넌트가 사라질 때 -> 컴포넌트가 사라질 때 스크롤 이벤트 제거(메모리 누수 방지)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
