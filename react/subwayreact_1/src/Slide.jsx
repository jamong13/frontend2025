/////////Slide.jsx/////////
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/subway.css";

export default function Slide() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500, //슬라이드 1장 넘어가는 속도
    slidesToShow: 1,
    slidesToScroll: 1, //마우스로 스크롤 시 1장씩 넘어감
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const slides = [
    { id: 1, image: "/img/min1.png" },
    { id: 2, image: "/img/min2.png" },
    { id: 3, image: "/img/min3.png" },
    { id: 4, image: "/img/min4.jpg" },
  ];

  return (
    <div className="mini-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="mini-slide">
            <div
              className="mini-slide-content"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

