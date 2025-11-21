import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CustomNavSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { id: 1, image: "/images/math_img_1.jpg" },
    { id: 2, image: "/images/math_img_2.jpg" },
    { id: 3, image: "/images/math_img_3.jpg" },
  ];

  //   swiperRef.current = {
  //   // 슬라이더 제어 메서드
  //   slideNext(),        // 다음 슬라이드로 이동
  //   slidePrev(),        // 이전 슬라이드로 이동
  //   slideTo(index),     // 특정 인덱스로 이동
  //   update(),           // 슬라이더 업데이트

  //   // 속성
  //   activeIndex,        // 현재 활성 슬라이드 인덱스
  //   slides,             // 모든 슬라이드 요소들
  //   params,             // 설정된 파라미터들
  //   // ... 기타 많은 메서드와 속성
  // }
  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      //   swiper slidePrev() : 이전 슬라이드 이동
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      //   swiper slideNext() : 다음 슬라이드 이동
    }
  };

  return (
    <div className="custom-nav-swiper-container">
      <div className="custom-nav-buttons">
        <button className="custom-prev-btn" onClick={goToPrev}>
          ← 이전
        </button>
        <button className="custom-next-btn" onClick={goToNext}>
          다음 →
        </button>
      </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // Swiper 인스턴스를 rel에 저장
        // 이후 컴포넌트 어디서든 접근 가능
        className="custom-nav-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img
                src={slide.image}
                alt={`Custom Nav Slide ${slide.id}`}
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
    </div>
  );
};

export default CustomNavSlider;
// 초기상태
// 1. const swiperRef = useRef(null); 아직 아무것도 없음
// 2. Swiper 초기화 후 (onSlider 콜백을 실행)
// swiperRef.current = swiper  // Swiper 인스턴스 객체가 저장됨
// 3. 버튼 클릭 시
// swiperRef.current.slidePrev()  // 이전 슬라이드로 이동
// swiperRef.current.slideNext()  // 다음 슬라이드로 이동
