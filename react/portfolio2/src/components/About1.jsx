import React from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import "./about1.css";

export default function About1() {
  return (
    <div>
      <div id="about" className="about-section">
        <div className="cantainer">
          <div className="section-header">
            <h2 className="section-title">
              About <span className="highlight">Me</span>
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-container">
            {/* left side - 인스타그램 컨셉 : 사진 + 이름 + 학력 + 경력 + 
            스토리 뜬 계정은 관심 분야(웹 퍼블리싱, 웹 프론트엔드, 백엔드) 적기 */}
            <div className="about-intro">
              <div className="intro-container">
                <div className="intro-header">
                  <h4 className="intro-logo">Intro</h4>
                  <div className="intro-search">
                    <label>
                      <input name="myInput" placeholder="Introduce Me" />
                    </label>
                  </div>
                  <div className="intro-heart">
                    {/* 클릭하면 창 띄우는 것을 구현할지 고민하기 */}
                    <button className="intro-btn">
                      <FaRegHeart />
                    </button>
                  </div>
                </div>
                <div className="intro-image">
                  <img src="https://picsum.photos/300/400?random " alt="" />
                </div>
                <div className="intro-res">
                  <ul className="res-list">
                    <li>
                      <button className="intro-btn">
                        <FaRegHeart />
                      </button>
                    </li>
                    <li>
                      <button className="intro-btn">
                        <FaRegComment />
                      </button>
                    </li>
                    <li>
                      <button className="intro-btn">
                        <PiPaperPlaneTiltBold />
                      </button>
                    </li>
                    <li>
                      <button className="intro-btn">
                        <FaRegBookmark />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* right side - 성격 그래프 + 사용 가능 언어 */}
            <div className="about-char"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
