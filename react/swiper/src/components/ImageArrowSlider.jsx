import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageArrowSlider = () => {
  const slides = [
    { id: 1, image: "/images/slide1.jpg" },
    { id: 2, image: "/images/slide2.jpg" },
    { id: 3, image: "/images/slide3.jpg" },
    { id: 4, image: "/images/pic_1.jpg" },
  ];

  return (
    <div className="image-arrow-swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-image",
          prevEl: ".swiper-button-prev-image",
        }}
        pagination={{
          clickable: true,
          el: ".image-arrow-pagination",
          bulletClass: "custom-pagination-bullet",
          bulletActiveClass: "custom-pagination-bullet-active",
        }}
        className="image-arrow-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Image Arrow Slide ${slide.id}`}
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
        <div className="swiper-button-prev-image">
          <img src="/images/prev_btn.png" alt="Previous" />
        </div>
        <div className="swiper-button-next-image">
          <img src="/images/next_btn.png" alt="Next" />
        </div>
      </Swiper>
      <div className="image-arrow-pagination"></div>
    </div>
  );
};

export default ImageArrowSlider;
