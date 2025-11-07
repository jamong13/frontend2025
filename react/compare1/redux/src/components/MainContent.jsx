import React from "react";
import CounterSection from "./CounterSection";
import UserSection from "./UserSection";
export default function MainContent() {
  return (
    <main className="main-content">
      <CounterSection />
      <UserSection />
    </main>
  );
}
