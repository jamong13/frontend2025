import React from "react";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import "./hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* greeting */}
        <div className="hero-greeting">
          <div className="greeting-text">Hello, I'm</div>
        </div>
        {/* Name */}
        <h1 className="hero-name">Your Name</h1>

        {/* Title */}
        <h2 className="hero-title">Full Stack Developer</h2>

        {/* Description */}
        <p className="hero-description">
          I create beautiful and functional web experiences. Passionate about
          clean code and modern design.
        </p>
        {/* CTA Buttons */}
        <div className="hero-buttons">
          {/* onClick={} */}
          <button
            className="btn-primary"
            onClick={() => window.open("/Contact", "_self")}
          >
            Get In Touch
          </button>
          <button
            className="btn-secondary"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            <FiDownload />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
