import React from "react";

export default function Counter({
  count,
  decrementCount,
  resetCount,
  incrementCount,
}) {
  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrementCount}>-</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}
