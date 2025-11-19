import React from "react";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  return (
    <div className="intro">
      <div className="container intro-container">
        <div className="intro-txt intro-txt1"></div>
        <div className="intro-txt intro-txt2"></div>
        <div className="intro-txt intro-txt3"></div>
        <FontAwesomeIcon icon={faArrowPointer} />
      </div>
    </div>
  );
}
