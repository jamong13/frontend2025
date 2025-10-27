import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          React Router
        </Link>
        <div className="nav-links">
          <Link to="/">홈</Link>
          <Link to="/about">소개</Link>
          <Link to="/products">상품</Link>
          <Link to="/contact">연락처</Link>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
