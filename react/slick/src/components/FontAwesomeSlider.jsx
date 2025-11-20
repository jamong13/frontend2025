import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FontAwesomeSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    className: "fontawesome-slider",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const slides = [
    { id: 1, text: "FontAwesome 1", image: "/images/tree-1.jpg" },
    { id: 2, text: "FontAwesome 2", image: "/images/tree-2.jpg" },
    { id: 3, text: "FontAwesome 3", image: "/images/tree-3.jpg" },
    { id: 4, text: "FontAwesome 4", image: "/images/tree-4.jpg" },
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
const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="slick-arrow slick-prev custom-arrow"
      onClick={onClick}
      aria-label="Previous"
    >
      {/* <i className="fas fa-chevron-left"></i> */}
    </button>
  );
};
const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="slick-arrow slick-next custom-arrow"
      onClick={onClick}
      aria-label="Next"
    >
      {/* <i className="fas fa-chevron-right"></i> */}
    </button>
  );
};

// const Prev = ({ onClick }) => (
//   <button className="prev" onClick={onClick}>
//     ◀
//   </button>
// );

// const Next = ({ onClick }) => (
//   <button className="next" onClick={onClick}>
//     ▶
//   </button>
// );
// prevArrow={<Prev />}
// nextArrow={<Next />}
