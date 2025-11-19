import React, { useState, useEffect } from "react";
import "./Slider.css";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      title: "첫 번째 슬라이드",
      description: "이것은 첫 번째 슬라이드입니다.",
      image: "/images/slide1.jpg",
    },
    {
      id: 1,
      title: "두 번째 슬라이드",
      description: "이것은 두 번째 슬라이드입니다.",
      image: "/images/slide2.jpg",
    },
    {
      id: 2,
      title: "세 번째 슬라이드",
      description: "이것은 세 번째 슬라이드입니다.",
      image: "/images/slide3.jpg",
    },
  ];

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <h2>슬라이드</h2>
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button prev" onClick={goToPrevious}>
          ‹
        </button>
        <button className="slider-button next" onClick={goToNext}>
          ›
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            // 변수와 관계없이 index 숫자만큼만 돌려도 괜찮을 때, (_, index)로 기재해도 괜찮음
            <button
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
