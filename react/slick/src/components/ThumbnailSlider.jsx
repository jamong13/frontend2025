import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ThumbnailSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const mainSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "main-slider",
  };

  const navSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    className: "nav-slider",
    focusOnSelect: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };

  const mainSlides = [
    { id: 1, text: "Main 1", image: "/images/pic_1.jpg" },
    { id: 2, text: "Main 2", image: "/images/pic_2.jpg" },
    { id: 3, text: "Main 3", image: "/images/pic_3.jpg" },
    { id: 4, text: "Main 4", image: "/images/pic_4.jpg" },
    { id: 5, text: "Main 5", image: "/images/pic_5.jpg" },
    { id: 6, text: "Main 6", image: "/images/pic_6.jpg" },
    { id: 7, text: "Main 7", image: "/images/pic_7.jpg" },
    { id: 8, text: "Main 8", image: "/images/pic_8.jpg" },
  ];

  const navSlides = [
    { id: 1, text: "1", image: "/images/pic_t1.jpg" },
    { id: 2, text: "2", image: "/images/pic_t2.jpg" },
    { id: 3, text: "3", image: "/images/pic_t3.jpg" },
    { id: 4, text: "4", image: "/images/pic_t4.jpg" },
    { id: 5, text: "5", image: "/images/pic_t5.jpg" },
    { id: 6, text: "6", image: "/images/pic_t6.jpg" },
    { id: 7, text: "7", image: "/images/pic_t7.jpg" },
    { id: 8, text: "8", image: "/images/pic_t8.jpg" },
  ];
  return (
    <>
      <Slider
        {...mainSettings}
        asNavFor={nav2}
        ref={(slider) => setNav1(slider)}
      >
        {/* asNavFor={nav2} 썸네일슬라이더(nav2)와 동기화 */}
        {/* ref={(slider) => setNav1(slider) 메인슬라이더 인스턴스를 nav1상태에 저장 */}
        {/* 썸네일 클릭시 메인슬라이더를 제어하기 위해 사용 */}
        {mainSlides.map((slide) => (
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
      <Slider
        {...navSettings}
        asNavFor={nav1}
        ref={(slider) => setNav2(slider)}
      >
        {navSlides.map((slide) => (
          <div key={slide.id} className="slide">
            <div
              className="slide-content thumbnail"
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
    </>
  );
}
