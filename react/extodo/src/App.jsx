import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Moviepage from "./pages/Moviepage";
import Foodpage from "./pages/Foodpage";

function App() {
  return (
    <div
      style={{
        fontFamily: "Pretendard, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* ✅ 상단 메뉴 (모든 페이지 공통) */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "1rem 0",
          borderBottom: "1px solid #1e293b",
          backgroundColor: "#1e293b",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          홈
        </Link>
        <Link
          to="/movies"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          영화 추천
        </Link>
        <Link
          to="/food"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          맛집 추천
        </Link>
      </nav>

      {/* ✅ 라우팅 설정 */}
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Moviepage />} />
          <Route path="/food" element={<Foodpage />} />
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
