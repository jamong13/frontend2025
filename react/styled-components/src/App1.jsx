import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #4f4625;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cusor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #3f3ab9;
  }
  &:active {
    bacground: #322f8c;
  }
`;
// & = Button
export default function App() {
  return <Button>App</Button>;
}
