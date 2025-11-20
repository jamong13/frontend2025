import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MultipleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    variableWidth: false,
    className: "multiple-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const slides = [
    { id: 1, text: "1", image: "/images/pic_1.jpg" },
    { id: 2, text: "2", image: "/images/pic_2.jpg" },
    { id: 3, text: "3", image: "/images/pic_3.jpg" },
    { id: 4, text: "4", image: "/images/pic_4.jpg" },
    { id: 5, text: "5", image: "/images/pic_5.jpg" },
    { id: 6, text: "6", image: "/images/pic_6.jpg" },
  ];
  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slide">
          <div
            className="slide-content multiple"
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
