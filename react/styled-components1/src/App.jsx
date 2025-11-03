import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExamplesSection from "./components/ExamplesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <ExamplesSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
