import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        fontFamily: "Noto Sans KR, sans-serif",
        backgroundColor:
          "linear-gradient(180deg, #F9ECEC 0%, #F0D9DA 40%, #C8D9EB 80%, #ECF2F9 100%)",
        color: "#4B5563",
        minHeight: "100vh",
      }}
    >
      {/* ✅ 상단 메뉴 (모든 페이지 공통) */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          padding: "0rem 2rem",
          height: "60px",
          lineHeight: "60px",
          borderBottom: "1px solid #4B5563",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            background:
              "linear-gradient(135deg, #FFB3BA 0%, #FFCCCB 25%, #FFE4B5 50%, #FFD7BE 75%, #E0BBE4 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft: "2rem",
          }}
        >
          LOGO
        </div>
        <div style={{ display: "flex", gap: "2rem", marginRight: "1rem" }}>
          <Link
            to="/"
            style={{
              color: "#4B5563",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            홈
          </Link>
          <Link
            to="/page1"
            style={{
              color: "#4B5563",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            페이지1
          </Link>
          <Link
            to="/page2"
            style={{
              color: "#4B5563",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            페이지2
          </Link>
        </div>
      </nav>

      {/* ✅ 라우팅 설정 */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<page1 />} />
          <Route path="/page2" element={<page2 />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>🎉 환영합니다!</h1>
      <p>위 메뉴에서 페이지를 선택해주세요.</p>
    </div>
  );
}

export default App;
