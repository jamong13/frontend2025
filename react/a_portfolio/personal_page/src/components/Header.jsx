import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "profile", label: "Profile", path: "/" },
    { id: "skills", label: "Skills", path: "/skills" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "resume", label: "Resume", path: "/resume" },
  ];

  return (
    <nav className="header">
      <div className="container header-container">
        <div className="header-content">
          <div className="header-logo">
            <span className="logo-text">
              <Link to="/">HS's Portfolio</Link>
            </span>
          </div>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-button ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-button ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
