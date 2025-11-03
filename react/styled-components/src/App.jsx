import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const IconButton = styled.button`
  background: #4f46e5;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: 0.2s;

  &:hover {
    background: #3f3ab9;
  }
`;

export default function App() {
  return (
    <div>
      <IconButton>
        <FaSearch />
      </IconButton>
    </div>
  );
}
