import React, { useState } from "react";
import Child from "./Child";
import { ThemeContext } from "./ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          height: "100vh",
          padding: "20px",
        }}
      >
        <h1>Current Theme: {theme}</h1>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}
