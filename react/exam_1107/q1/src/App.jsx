import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const getCountColor = () => {
    if (count < 0) {
      return "red";
    }
    if (count > 0) {
      return "blue";
    }
    return "black";
  };

  return (
    <div style={styles.container}>
      <header>
        <h1 style={styles.title}>카운터 앱</h1>
      </header>
      <main>
        <h1
          style={{
            ...styles.countDisplay,
            color: getCountColor(),
          }}
        >
          {count}
        </h1>
        <div style={styles.btnGroup}>
          <button onClick={handleDecrease} style={styles.btn}>
            감소
          </button>
          <button onClick={handleIncrease} style={styles.btn}>
            증가
          </button>
          <button onClick={handleReset} style={styles.resetBtn}>
            초기화
          </button>
        </div>
      </main>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    margin: "10px auto",
    textAlign: "center",
    background: "#dedede",
    padding: "20px 20px 30px",
  },
  title: {
    fontSize: "2rem",
  },
  countDisplay: {
    fontSize: "3rem",
    transition: "color 0.3s ease",
  },
  btnGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "20px",
  },
  btn: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  resetBtn: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#5e5e5e",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};
