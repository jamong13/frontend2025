import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoplaySlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // 마우스 위로 올릴 시 정지
    pauseOnFocus: true, // 키보드 tab 키로 이동해서 슬라이더 안에 포커스 잡히면 정지
    className: "autoplay-slider",
  };
  const slides = [
    { id: 1, text: "Auto 1", image: "/images/car1.jpg" },
    { id: 2, text: "Auto 2", image: "/images/car2.jpg" },
    { id: 3, text: "Auto 3", image: "/images/car3.jpg" },
    { id: 4, text: "Auto 4", image: "/images/car4.jpg" },
  ];
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slide">
          <div
            className="slide-content"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3>{slide.text}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
}
