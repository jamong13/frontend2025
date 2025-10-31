import React from "react";
import { FaCode, FaPaintBrush, FaLightbulb } from "react-icons/fa";
import "./about.css";

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-grid">
          {/* left side - Text */}
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating
              beautiful and functional web applications. With expertise in
              modern technologies and a keen eye for design, I bring ideas to
              life.
            </p>
            <p>
              My goal is to build scalable, maintainable, and user-friendly
              applications that make a difference. I enjoy solving complex
              problems and continuously learning new technologies.
            </p>
            <div className="tech-tags">
              <span className="tech-tag tag-react">React</span>
              <span className="tech-tag tag-node">Node.js</span>
              <span className="tech-tag tag-ts">TypeScript</span>
              <span className="tech-tag tag-mongo">MongoDB</span>
            </div>{" "}
          </div>
          {/* rigth side - services */}
          <div className="about-services">
            <div className="service-card">
              <div className="service-icon service-icon-purple">
                <FaCode />
              </div>
              <div>
                <h3>Clean Code</h3>
                <p>
                  Writing maintainable, scalable, and efficient code that
                  follows best practices.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon service-icon-blue">
                <FaPaintBrush />
              </div>
              <div>
                <h3>UI/UX Design</h3>
                <p>
                  Creating intuitive and visually appealing user interfaces that
                  enhance user experience.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon service-icon-pink">
                <FaLightbulb />
              </div>
              <div>
                <h3>Innovation</h3>
                <p>
                  Staying updated with the latest technologies and implementing
                  modern solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
