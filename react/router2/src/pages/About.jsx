import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>우리에 대해</h1>
      <section className="about-section">
        <h2>회사 소개</h2>
        <p>
          우리는 현대적인 웹 애플리케이션을 개발하는 팀입니다. React와 같은 최신
          기술을 사용하여 사용자에게 최고의 경험을 제공합니다.
        </p>
      </section>

      <section className="about-section">
        <h2>우리의 가치</h2>
        <ul className="values-list">
          <li>✅ 혁신적인 솔루션 제공</li>
          <li>✅ 사용자 중심 개발</li>
          <li>✅ 코드 품질 우선</li>
          <li>✅ 지속적인 학습과 성장</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>기술 스택</h2>
        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">React Router</span>
          <span className="tech-badge">Vite</span>
          <span className="tech-badge">JavaScript</span>
        </div>
      </section>
    </div>
  );
}
