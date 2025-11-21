import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ResponsiveSlider = () => {
  const slides = [
    { id: 1, image: "/images/pic_1.jpg" },
    { id: 2, image: "/images/pic_2.jpg" },
    { id: 3, image: "/images/pic_3.jpg" },
    { id: 4, image: "/images/pic_4.jpg" },
    { id: 5, image: "/images/pic_5.jpg" },
    { id: 6, image: "/images/pic_6.jpg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      className="responsive-swiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="slide-content responsive-landscape-slide">
            <img
              src={slide.image}
              alt={`Responsive Slide ${slide.id}`}
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

export default ResponsiveSlider;
