import React from "react";

export default function Header({ user }) {
  return (
    <header className="header">
      <h1>⚛️ Props Drilling 방식</h1>
      <p>
        현재 사용자: {user.name} ({user.age}세)
      </p>
    </header>
  );
}
