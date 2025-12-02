import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Roster from "./components/Roster";
import Highlights from "./components/Highlights";
import Media from "./components/Media";
import Schedule from "./components/Schedule";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pager from "./components/Pager";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Pager />
      <Hero />
      <About />
      <Roster />
      <Highlights />
      <Media />
      <Schedule />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
