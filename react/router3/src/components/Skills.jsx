import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import "./skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "orange" },
        { name: "CSS3", icon: FaCss3Alt, color: "blue" },
        { name: "JavaScript", icon: FaJs, color: "yellow" },
        { name: "React", icon: FaReact, color: "cyan" },
        { name: "Next.js", icon: SiNextdotjs, color: "white" },
        { name: "Tailwind", icon: SiTailwindcss, color: "lightcyan" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNode, color: "green" },
        { name: "Express", icon: SiExpress, color: "gray" },
        { name: "Python", icon: FaPython, color: "lightyellow" },
        { name: "MongoDB", icon: SiMongodb, color: "lightgreen" },
        { name: "Docker", icon: FaDocker, color: "lightblue" },
        { name: "AWS", icon: FaAws, color: "orange" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "darkorange" },
        { name: "GitHub", icon: FaGitAlt, color: "lightgray" },
        { name: "Docker", icon: FaDocker, color: "lightblue" },
        { name: "AWS", icon: FaAws, color: "orange" },
      ],
    },
  ];
  const getProgressWidth = (index) => {
    const percentage = [95, 90, 85, 88, 82, 80, 92, 85, 78, 75];
    return percentage[index] || 80;
    // ||80을 덧붙인 것은 안정성을 위해서
  };
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Skills</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>
        {/* Skill Categories */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid-inner">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <skill.icon className={`skill-icon skill-${skill.color}`} />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-bars">
          <div className="skills-bars-title">Proficiency Levels</div>
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "MongoDB",
            "Git",
            "Python",
            "CSS",
            "HTML",
            "Express.js",
          ].map((skill, index) => {
            const width = getProgressWidth(index);
            return (
              <div key={index} className="skill-bar-container">
                <div className="skill-bar-header">
                  <span className="skill-bar-label">{skill}</span>
                  <span className="skill-bar-value">{width}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
