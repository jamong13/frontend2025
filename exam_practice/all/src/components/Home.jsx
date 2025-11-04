import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>홈 페이지</h1>
      <p>11월달 시험 준비</p>

      <Link to="/q1" className="cta-button">
        Q1
      </Link>
    </div>
  );
}
