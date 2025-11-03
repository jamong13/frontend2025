import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.2s;

  background: ${({ variant }) =>
    variant === "outline"
      ? "white"
      : variant === "danger"
      ? "#dc2626"
      : "#4f46e5"};

  color: ${({ variant }) => (variant === "outline" ? "#4f46e5" : "#fff")};

  border: ${({ variant }) =>
    variant === "outline" ? "2px solid #4f46e5" : "none"};

  &:hover {
    opacity: 0.9;
  }
`;

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}
