import React from "react";
import "./App.css";
import BasicSlider from "./components/BasicSlider";

export default function App() {
  return (
    <div className="container">
      <h1>Slick Slider 종류별 예제</h1>
      <section className="slider-section">
        <h2>1. 기본 슬라이더(Basic Slider)</h2>
        <BasicSlider />
      </section>
    </div>
  );
}
