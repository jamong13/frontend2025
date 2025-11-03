import React, { useState } from "react";

export default function ConditionalButton() {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`px-4 py-2 rounded ${active ? "bg-green-500" : "bg-gray-400"}`}
      onClick={() => setActive(!active)}
    ></button>
  );
}
