import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { user } = useAppContext();
  return (
    <header className="header">
      <h1>⚛️ useContext 방식</h1>
      <p>
        현재 사용자: {user.name} ({user.age}세)
      </p>
    </header>
  );
}
