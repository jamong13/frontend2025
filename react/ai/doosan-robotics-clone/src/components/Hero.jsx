import React from "react";
import HeroSlider from "./HeroSlider";
import img1 from "./hero/hero1.png";
import img2 from "./hero/hero2.png";
import img3 from "./hero/hero3.png";

export default function Hero() {
  const images = [img1, img2, img3];
  return (
    <header>
      <HeroSlider images={images} interval={4500} />
    </header>
  );
}
