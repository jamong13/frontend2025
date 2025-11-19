import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BasicSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    className: "basic-slider",
  };
  const slides = [
    { id: 1, text: "Slide 1", image: "/images/slide1.jpg" },
    { id: 2, text: "Slide 2", image: "/images/slide2.jpg" },
    { id: 3, text: "Slide 3", image: "/images/slide3.jpg" },
    { id: 4, text: "Slide 4", image: "/images/pic_1.jpg" },
    { id: 5, text: "Slide 5", image: "/images/pic_2.jpg" },
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
