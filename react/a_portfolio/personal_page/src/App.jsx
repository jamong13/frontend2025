import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="app">
      {showIntro && <Intro onFinished={() => setShowIntro(false)} />}
      {!showIntro && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      {!showIntro && <Footer />}
    </div>
  );
}
