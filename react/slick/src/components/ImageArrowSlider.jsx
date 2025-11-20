import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageArrowSlider = () => {
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
    className: "image-arrow-slider",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      id: 1,
      title: "첫 번째 슬라이드",
      content:
        "이것은 첫 번째 슬라이드의 내용입니다. 텍스트로만 구성된 슬라이더입니다.",
      description: "텍스트 기반 슬라이더의 예제입니다.",
    },
    {
      id: 2,
      title: "두 번째 슬라이드",
      content:
        "이것은 두 번째 슬라이드의 내용입니다. 이미지 대신 텍스트로 정보를 전달합니다.",
      description: "다양한 정보를 텍스트로 표현할 수 있습니다.",
    },
    {
      id: 3,
      title: "세 번째 슬라이드",
      content:
        "이것은 세 번째 슬라이드의 내용입니다. 글자로만 구성된 깔끔한 디자인입니다.",
      description: "텍스트 중심의 슬라이더는 가독성이 좋습니다.",
    },
    {
      id: 4,
      title: "네 번째 슬라이드",
      content:
        "이것은 네 번째 슬라이드의 내용입니다. 이미지 없이도 효과적인 전달이 가능합니다.",
      description: "콘텐츠 중심의 슬라이더입니다.",
    },
    {
      id: 5,
      title: "다섯 번째 슬라이드",
      content:
        "이것은 다섯 번째 슬라이드의 내용입니다. 텍스트만으로도 충분히 매력적인 슬라이더를 만들 수 있습니다.",
      description: "마지막 슬라이드입니다.",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slide">
          <div className="text-slide-content">
            <h3>{slide.title}</h3>
            <p className="slide-text">{slide.content}</p>
            <p className="slide-description">{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageArrowSlider;
const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className="slick-arrow slick-prev custom-image-arrow"
      onClick={onClick || (() => {})}
      aria-label="Previous"
    >
      <img src="/images/prev_btn.png" alt="Previous" />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="slick-arrow slick-next custom-image-arrow"
      onClick={onClick || (() => {})}
      aria-label="Next"
    >
      <img src="/images/next_btn.png" alt="Next" />
    </button>
  );
};
