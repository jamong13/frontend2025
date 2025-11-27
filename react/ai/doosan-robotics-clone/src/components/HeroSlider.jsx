import React, { useEffect, useRef, useState } from "react";
import "./HeroSlider.css";

export default function HeroSlider({ images = [], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const timerRef = useRef(null);

  if (!images || images.length === 0) return null;

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPrevIndex(index);
      setIndex((i) => (i + 1) % images.length);
    }, interval);
  }

  function goTo(i) {
    if (i === index) return;
    setPrevIndex(index);
    setIndex(i);
    startTimer();
  }

  return (
    <div className="hero-slider">
      {images.map((src, i) => {
        const isCurrent = i === index;
        const isPrev = i === prevIndex;
        const className = isCurrent
          ? "slide slide--current"
          : isPrev
          ? "slide slide--prev"
          : "slide";
        return (
          <div
            key={i}
            className={className}
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={`hero-${i}`}
            onTransitionEnd={(e) => {
              // 현재 슬라이드의 transform 전환이 끝났을 때 prevIndex 제거
              if (e.propertyName === "transform" && isCurrent)
                setPrevIndex(null);
            }}
          />
        );
      })}

      <div className="hero-slider__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`go-to-${i}`}
          />
        ))}
      </div>
    </div>
  );
}
