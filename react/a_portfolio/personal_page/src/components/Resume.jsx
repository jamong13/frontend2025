import React from "react";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <section className="resume-section">
          <article className="resume-list">
            <h2 className="resume-company">(주)코인스이앤씨</h2>
            <p className="resume-period">2022.11 ~ 2025.07</p>
            <h3>공사팀 지원</h3>
            <ul>
              <li>공단 출입 신청</li>
              <li>작업자 관리</li>
              <li>공사 정산</li>
            </ul>
            <h3>회사 행정</h3>
            <ul>
              <li>회사 소개서, 제품 카탈로그 작성</li>
              <li>직원 4대 보험 가입</li>
              <li>공사 실적 기입</li>
              <li>회사 홈페이지 관리</li>
            </ul>
            <h3>포스코 협력 업체 업무</h3>
            <ul>
              <li>납품 물품 회사 홈페이지 등록</li>
              <li>납품 물품 e-카탈로그 등록</li>
            </ul>
          </article>
          <article className="resume-list">
            <h2 className="resume-company">(주)Seekers</h2>
            <p className="resume-period">2019.05 ~ 2019.11</p>
            <h3>회사 웹페이지 관리</h3>
            <ul>
              <li>HTML 수정, CSS 수정</li>
              <li>이벤트 페이지 추가(HTML, CSS, jQuery 사용)</li>
            </ul>
            <h3>외부 협업 사업</h3>
            <ul>
              <li>웹페이지 신규 웹사이트 제작(HTML, CSS 사용)</li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}
