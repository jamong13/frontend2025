import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BasicSlider = () => {
  const slides = [
    { id: 1, image: "/images/slide1.jpg" },
    { id: 2, image: "/images/slide2.jpg" },
    { id: 3, image: "/images/slide3.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      //    슬라이드 간격
      slidesPerView={1}
      //   한번에 1개 슬라이드 표시
      navigation
      //   화살표 버튼
      pagination={{ clickable: true }}
      //   하단 페이저(도트)
      className="basic-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BasicSlider;
