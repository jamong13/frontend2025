import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>Child Component</h2>
      <p>Theme from Context: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
