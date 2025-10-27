import React from "react";
import { Link, useLocation } from "react-router-dom";
// useLocation : react-router 제공하는 훅, 경로(pathname)
import "./Navgation.css";

export default function Navgation() {
  const location = useLocation();
  return (
    <nav className="Navigation">
      <div className="container">
        <Link to="/" className="nav-brand">
          React Router 예제
        </Link>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              소개
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              연락처
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
