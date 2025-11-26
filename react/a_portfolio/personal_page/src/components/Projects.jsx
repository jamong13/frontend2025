import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "./Projects.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const projects = [
  {
    id: "1",
    title: "Who is LEE HEE SOO?",
    date: "2025.11",
    number: "개인 프로젝트",
    content:
      "React Router를 사용한 페이지 전환이 적용된 사이트, SNS 느낌의 자기소개와 grid 형식으로 배치한 스킬 목록, Swiper를 사용한 썸네일 슬라이드 형식의 프로젝트 목록, 경력 기술서를 정리한 사이트",
    skills: "Html, CSS, JavaScript, React, Vite",
    image: "",
    thumb: "",
  },
  {
    id: "2",
    title: "더미",
    date: "2025.11",
    number: "개인 프로젝트",
    content: "더미1",
    skills: "더미1",
    image: "",
    thumb: "",
  },
  {
    id: "3",
    title: "더미",
    date: "2025.11",
    number: "개인 프로젝트",
    content: "더미2",
    skills: "더미2",
    image: "",
    thumb: "",
  },
  {
    id: "4",
    title: "더미",
    date: "2025.11",
    number: "개인 프로젝트",
    content: "더미3",
    skills: "더미3",
    image: "",
    thumb: "",
  },
];

export default function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <section className="projects-section">
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="main-thumbnail-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="slide-content">
                  <img
                    src={project.image}
                    alt={`Main Slide ${project.id}`}
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
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="thumbnail-slide">
                  <img
                    src={project.thumb}
                    alt={`Thumbnail ${project.id}`}
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
        </section>
      </div>
    </div>
  );
}
