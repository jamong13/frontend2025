import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <h1>홈페이지</h1>
        <p>React Router를 사용한 예제 프로젝트에 오신 걸 환영합니다.</p>
        <p>이 예제는 다음과 같은 React Router기능들을 볼 수 있습니다.</p>
        <ul style={{ marginLeft: "20px", color: "#666" }}>
          <li>BrowserRouter - HTML5 히스토리 API 사용</li>
          <li>Routes와 Route - 페이지 라우팅</li>
          <li>Link - 클라이언트 사이드 네비게이션</li>
          <li>useLocation - 현재 경로 정보</li>
        </ul>
        <div style={{ marginTop: "30px" }}>
          <Link
            to="/about"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#61dafb",
              color: "#282c34",
              textDecoration: "none",
              borderRadius: "4px",
              marginRight: "10px",
            }}
          >
            소개페이지 이동
          </Link>
          <Link
            to="/contact"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "transparent",
              color: "#61dafb",
              textDecoration: "none",
              border: "2px solid #61dafb",
              borderRadius: "4px",
            }}
          >
            연락처페이지 이동
          </Link>
        </div>
      </div>
    </div>
  );
}
