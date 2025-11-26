import React, { useState } from "react";
import {
  BsHeart,
  BsHeartFill,
  BsChat,
  BsChatFill,
  BsSend,
  BsSendFill,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";

import "./Profile.css";

const tags = [
  "#프론트엔드",
  "#개발자",
  "#포트폴리오",
  "#꼼꼼한",
  "#생각이 깊은",
  "#창의성 있는",
  "#호기심 많은",
];

export default function Profile() {
  const [heartActive, setHeartActive] = useState(false);
  const [heartHover, setHeartHover] = useState(false);

  const [commentHover, setCommentHover] = useState(false);
  const [shareHover, setShareHover] = useState(false);

  const [bookmarkActive, setBookmarkActive] = useState(false);
  const [bookmarkHover, setBookmarkHover] = useState(false);

  return (
    <div className="profile section">
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
              </div>
              <div className="instar-more">
                <span>⋮</span>
              </div>
            </div>
            <div className="instar-content">
              <div className="instar-main-img">
                <img src="/img/instar2.jpg" alt="main-img" />
              </div>
              <div className="instar-response">
                <div className="instar-response-left">
                  <div
                    className="instar-icon"
                    onMouseEnter={() => setHeartHover(true)}
                    onMouseLeave={() => setHeartHover(false)}
                    onClick={() => setHeartActive((prev) => !prev)}
                    style={{
                      color: heartActive
                        ? "#D02326"
                        : heartHover
                        ? "#F67C7E"
                        : "#000",
                      transform: heartHover ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {heartActive ? (
                      <BsHeartFill />
                    ) : heartHover ? (
                      <BsHeartFill />
                    ) : (
                      <BsHeart />
                    )}
                  </div>

                  <div
                    className="instar-icon"
                    onMouseEnter={() => setCommentHover(true)}
                    onMouseLeave={() => setCommentHover(false)}
                    style={{
                      color: commentHover ? "#F5DFBA" : "#000",
                      transform: commentHover ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {commentHover ? <BsChatFill /> : <BsChat />}
                  </div>
                  <div
                    className="instar-icon"
                    onMouseEnter={() => setShareHover(true)}
                    onMouseLeave={() => setShareHover(false)}
                    style={{
                      color: shareHover ? "#90A4FF" : "#000",
                      transform: shareHover ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {shareHover ? <BsSendFill /> : <BsSend />}
                  </div>
                </div>

                <div className="instar-response-right">
                  <div
                    className="instar-icon"
                    onMouseEnter={() => setBookmarkHover(true)}
                    onMouseLeave={() => setBookmarkHover(false)}
                    onClick={() => setBookmarkActive((prev) => !prev)}
                    style={{
                      color: bookmarkHover ? "#dedede" : "#000",
                      transform: bookmarkHover ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    {bookmarkActive ? (
                      <BsBookmarkFill />
                    ) : bookmarkHover ? (
                      <BsBookmarkFill />
                    ) : (
                      <BsBookmark />
                    )}
                  </div>
                </div>
              </div>
              <div className="instar-txt">
                <p>
                  <strong>Lee_hee_soo</strong>Frontend 개발자 이희수의
                  포트폴리오입니다.
                </p>
                <p className="instar-tag">
                  {tags.map((tag) => (
                    <span key={tag} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
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
              <p>
                <span>계명대학교 중국어문학전공</span>
                <span>/인문 IT 융합전공</span>
              </p>
            </div>
            <div className="profile-card">
              <h4>Edu</h4>
              <p>
                <span>2025.09~</span>
                <span>더조은컴퓨터아카데미</span>
                <span>- 웹 프론트엔드 과정 수료 중</span>
              </p>
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
