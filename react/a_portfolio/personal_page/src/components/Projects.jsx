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
      "React Router를 사용한 페이지 전환이 적용된 사이트, SNS 느낌의 자기소개와 grid 형식으로 배치한 스킬 목록, Swiper를 사용한 썸네일 슬라이드 형식의 프로젝트 목록, 경력기술서를 정리한 사이트, 반응형 웹 디자인 적용",
    skills: "Html, CSS, JavaScript, React, Vite, Figma",
    image: "/img/project1.JPG",
    thumb: "/img/project1_thumb.jpg",
  },
  {
    id: "2",
    title: "e-Sport 'SOO CURRENT'",
    date: "2025.12",
    number: "개인 프로젝트",
    content:
      "가상의 e-Sport 팀을 소개하는 사이트, ai를 활용하여 제작한 로고와 팀원 프로필 이미지, 팀의 경기 일정과 결과를 보여주는 페이지로 구성, 반응형 웹 디자인 적용,",
    skills: "Html, CSS, JavaScript, React, Vite, Figma, AI",
    image: "/img/project.jpg",
    thumb: "/img/project_thumb.jpg",
  },
  {
    id: "3",
    title: "오늘 뭐 하지?",
    date: "2025.12",
    number: "팀(4인) 프로젝트",
    content: "더미2",
    skills: "더미2",
    image: "/img/project.jpg",
    thumb: "/img/project_thumb.jpg",
  },
  {
    id: "4",
    title: "더미",
    date: "2025.11",
    number: "개인 프로젝트",
    content: "더미3",
    skills: "더미3",
    image: "/img/project.jpg",
    thumb: "/img/project_thumb.jpg",
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
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
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
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            className="main-thumbnail-swiper"
            breakpoints={{
              0: {
                navigation: false,
                thumbs: { swiper: null },
              },
              769: {
                navigation: true,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="slide-content">
                  <h2 className="project-title">{project.title}</h2>
                  <img
                    src={project.image}
                    className="slide-image"
                    alt={`Main Slide ${project.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <p className="project-date">{project.date}</p>
                  <p className="project-number">{project.number}</p>
                  <p className="project-content">{project.content}</p>
                  <p className="project-skills">{project.skills}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
