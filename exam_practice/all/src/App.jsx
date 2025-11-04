import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          시험 준비
        </Link>
        <div className="nav-links">
          <Link to="/">홈</Link>
          <Link to="/q1">Q1</Link>
          <Link to="/q2">Q2</Link>
          <Link to="/q3">Q3</Link>
          <Link to="/q4">Q4</Link>
          <Link to="/q5">Q5</Link>
          <Link to="/q6">Q6</Link>
          <Link to="/q7">Q7</Link>
          <Link to="/q8">Q8</Link>
          <Link to="/q9">Q9</Link>
          <Link to="/q10">Q10</Link>
          <Link to="/bonus">Bonus</Link>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/q1" element={<Q1 />} />
          <Route path="/q2" element={<Q2 />} />
          <Route path="/q3" element={<Q3 />} />
        </Routes>
      </main>
    </div>
  );
}
