import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
  height: fit-content;

  ${({ size }) => size === "sm" && `padding : 6px 12px; font-size: 14px`}
  ${({ size }) => size === "md" && `padding : 10px 20px; font-size: 16px`}
  ${({ size }) => size === "lg" && `padding : 14px 26px; font-size: 18px`}
`;
// height: fit-content; : 내용에 맞는 높이

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
