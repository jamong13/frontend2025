import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ThumbnailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    { id: 1, image: "/images/tree-1.jpg", thumb: "/images/tree-1-thumb.jpg" },
    { id: 2, image: "/images/tree-2.jpg", thumb: "/images/tree-2-thumb.jpg" },
    { id: 3, image: "/images/tree-3.jpg", thumb: "/images/tree-3-thumb.jpg" },
    { id: 4, image: "/images/tree-4.jpg", thumb: "/images/tree-4-thumb.jpg" },
    { id: 5, image: "/images/tree-5.jpg", thumb: "/images/tree-5-thumb.jpg" },
  ];

  return (
    <div className="thumbnail-swiper-container">
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          //   thumbSwiper && 가 존재하는지 확인
          // !thumbsSwiper.destroyed Swiper가 파괴되지 않았는지
          //   조건이 참이면 thumbsSwiper 사용, 거짓이면 null
        }}
        // thumbsSwipere - 썸네일 슬라이더의 인스턴스 참조, useState(null)로 초기화
        // 하단 썸네일 슬라이더의 onSwiper={setThumbsSwiper} 로 설정됨
        className="main-thumbnail-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Main Slide ${slide.id}`}
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
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        // 썸네일 슬라이더가 생성되면
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        className="thumbnail-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="thumbnail-slide">
              <img
                src={slide.thumb}
                alt={`Thumbnail ${slide.id}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
