import React from "react";
import TabMenu from "./components/TabMenu";
import AccordionMenu from "./components/AccordionMenu";
import "./App.css";
import Slider from "./components/Slider";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <h1>React 탭 & 아코디언 메뉴 & 슬라이드</h1>
        <TabMenu />
        <AccordionMenu />
        <Slider />
      </div>
    </div>
  );
}
