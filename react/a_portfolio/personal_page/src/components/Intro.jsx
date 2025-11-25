import React from "react";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

export default function Intro({ onFinished }) {
  const handleClick = () => {
    onFinished?.();
  };

  return (
    <div id="intro" className="jersey-25-regular" onClick={handleClick}>
      <div className="container intro-container">
        <div className="intro-txt intro-txt1">
          <span>Who</span>
        </div>
        <div className="intro-txt intro-txt2">
          <span>Is</span>
        </div>
        <div className="intro-txt intro-txt3">
          <span>LEE HEE SOO</span>
        </div>
        <div className="intro-txt intro-txt4">
          <span>?</span>
        </div>
        <div className="intro-mark">
          <div className="circle-box big-circle">
            <div className="circle-box medium-circle">
              <div className="circle-box small-circle"></div>
            </div>
          </div>
          <div className="intro-mark-question">
            <FontAwesomeIcon icon={faArrowPointer} />
          </div>
          <p>Click</p>
        </div>
      </div>
    </div>
  );
}
