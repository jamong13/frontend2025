import React from "react";

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <h1>소개</h1>
        <p>
          이 프로젝트는 React Router DOM을 사용하여 만들어진 예제 웹
          애플리케이션입니다.
        </p>
        <h2 style={{ color: "#333", marginTop: "30px", marginBottom: "15px" }}>
          주요 기능
        </h2>
        <ul style={{ marginLeft: "20px", color: "#666", lineHeight: "1.8" }}>
          <li>
            <strong>클라이언트 사이드 라우팅:</strong> 페이지 새로고침 없이
            부드러운 네비게이션
          </li>
          <li>
            <strong>활성 링크 하이라이트:</strong> 현재 페이지에 해당하는
            네비게이션 링크 강조
          </li>
          <li>
            <strong>반응형 디자인:</strong> 모바일과 데스크톱 모두에서 최적화된
            경험
          </li>
          <li>
            <strong>현대적인 UI:</strong> 깔끔하고 직관적인 사용자 인터페이스
          </li>
        </ul>
        <h2 style={{ color: "#333", marginTop: "30px", marginBottom: "15px" }}>
          기술 스택
        </h2>
        <ul style={{ marginLeft: "20px", color: "#666", lineHeight: "1.8" }}>
          <li>React 18</li>
          <li>React Router DOM v6</li>
          <li>CSS3</li>
          <li>JavaScript ES6+</li>
        </ul>
        <p style={{ marginTop: "30px", fontStyle: "italic", color: "#888" }}>
          이 예제는 React Router의 기본적인 사용법을 보여주며, 더 복잡한 라우팅
          패턴의 기초가 됩니다.
        </p>
      </div>
    </div>
  );
}
