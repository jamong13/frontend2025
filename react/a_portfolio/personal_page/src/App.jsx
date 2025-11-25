import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="app">
      {showIntro && <Intro onFinished={() => setShowIntro(false)} />}
      {!showIntro && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
