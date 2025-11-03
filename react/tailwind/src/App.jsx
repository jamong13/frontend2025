import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ResposiveText from "./components/ResposiveText";
import DarkModeBox from "./components/DarkModeBox";
import ConditionalButton from "./components/ConditionalButton";

export default function App() {
  return (
    <div className="space-y-4 p-6">
      {/* space-y-4 : div 안에 직계 자식 요소 수직 간격 - 4 */}
      <Button />
      <Card />
      <ResposiveText />
      <DarkModeBox />
      <ConditionalButton />
    </div>
  );
}
