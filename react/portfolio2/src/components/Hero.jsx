import React from "react";
import { useEffect, useState } from "react";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import "./hero.css";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY); // $(window).scrollTop;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // offsetY 스크롤된 픽셀값 저장 state
  //   window.scrollY 화면에서 스크롤된 Y축 거리
  //   스크롤할 때마다 setOffsetY()가 실행되어 offsetY 값이 갱신됩니다.
  // 컴포넌트가 사라질 때(unmount) 이벤트 리스너를 정리(clean-up)해줍니다.
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    // ID contact인 요소를 찾아 부드럽게 스크롤해줘.
  };
  return (
    <section id="home" className="hero">
      <div
        className="blob blob1"
        style={{
          transform: `translateY(${offsetY * 0.5})`,
          animation: "pulse 8s ease-in-out infinite",
        }}
      ></div>
      <div
        className="blob blob-2"
        style={{
          transform: `translateY(${offsetY * 0.3}px)`,
          animation: "pulse 8s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>
      <div className="hero-content">
        {/* greeting */}
        <div className="hero-greeting">
          <div className="greeting-text">Hello, I'm</div>
        </div>
        {/* Name */}
        <h1 className="hero-name">Your Name</h1>

        {/* Title */}
        <h2 className="hero-title">Full Stack Developer</h2>

        {/* Description */}
        <p className="hero-description">
          I create beautiful and functional web experiences. Passionate about
          clean code and modern design.
        </p>
        {/* CTA Buttons */}
        <div className="hero-buttons">
          <button onClick={scrollToContact} className="btn-primary">
            Get In Touch
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <FiDownload />
            Download CV
          </button>
        </div>
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-content">
            <span className="scroll-text">Scroll down</span>
            <FiChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
