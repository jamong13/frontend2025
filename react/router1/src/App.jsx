import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navigation from "./pages/Navgation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  );
}
