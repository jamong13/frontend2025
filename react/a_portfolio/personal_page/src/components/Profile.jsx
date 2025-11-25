import React from "react";
import { FaCode, FaPaintBrush, FaLightbulb } from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  return (
    <div id="profile" className="profile-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Profile</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="profile-grid">
          <div className="profile-instar">
            <div className="instar-header">
              <div className="instar-profile">
                <div className="instar-profile-img">
                  <img src="/img/instar1.jpg" alt="profile-img" />
                </div>
                <div className="instar-name">
                  <h5>LEE HEE SOO</h5>
                  <p>Frontend developer</p>
                </div>
                <div className="instar-more">
                  <span>⋮</span>
                </div>
              </div>
            </div>
            <div className="instar-content">
              <div className="instar-main-img">
                <img src="/img/instar2.jpg" alt="main-img" />
              </div>
              <div className="instar-txt"></div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-card">
              <h4>Name</h4>
              <p>이희수</p>
            </div>
            <div className="profile-card">
              <h4>Birth</h4>
              <p>1997.02.06</p>
            </div>
            <div className="profile-card">
              <h4>E-mail</h4>
              <p>limehs0618@gmail.com</p>
            </div>
            <div className="profile-card">
              <h4>최종 학력</h4>
              <p>계명대학교 중국어문학전공/인문 IT 융합전공</p>
            </div>
            <div className="profile-card">
              <h4>Edu</h4>
              <p>2025.09~ 더조은컴퓨터아카데미 - 웹 프론트엔드 과정 수료 중</p>
            </div>
            <div className="profile-card">
              <h4>Hobby</h4>
              <p>게임, 그림 그리기, 레진공예, 타로 등</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
