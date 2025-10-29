import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import About1 from "./components/About1";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Hero />
        {/* 같은 클래스명을 썼을 경우 다른 CSS라도 전역상태가 되어 다른 jsx에도 적용됨 */}
        <About />
        <About1 />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
