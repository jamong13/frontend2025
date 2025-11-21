import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FontAwesomeSlider = () => {
  const slides = [
    { id: 1, image: "/images/window_object_1.jpg" },
    { id: 2, image: "/images/pic_7.jpg" },
    { id: 3, image: "/images/pic_8.jpg" },
    { id: 4, image: "/images/tree-6.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      pagination={{ clickable: true }}
      className="fontawesome-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content">
            <img
              src={slide.image}
              alt={`FontAwesome Slide ${slide.id}`}
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
      <div className="swiper-button-prev-custom">
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="swiper-button-next-custom">
        <i className="fas fa-chevron-right"></i>
      </div>
    </Swiper>
  );
};

export default FontAwesomeSlider;
