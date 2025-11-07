import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Counter() {
  const { count, decrementCount, resetCount, incrementCount } = useAppContext();
  return (
    <div className="counter">
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}
