import React, { useState } from "react";
import "./AccordionMenu.css";

export default function AccordionMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      id: 0,
      title: "자주 묻는 질문 1",
      content:
        "이것은 첫 번째 아코디언 항목의 내용입니다. 여기에 자세한 정보를 표시할 수 있습니다.",
    },
    {
      id: 1,
      title: "자주 묻는 질문 2",
      content:
        "이것은 두 번째 아코디언 항목의 내용입니다. 더 많은 정보를 제공할 수 있습니다.",
    },
    {
      id: 2,
      title: "자주 묻는 질문 3",
      content:
        "이것은 세 번째 아코디언 항목의 내용입니다. 사용자에게 유용한 정보를 제공합니다.",
    },
    {
      id: 3,
      title: "자주 묻는 질문 4",
      content:
        "이것은 네 번째 아코디언 항목의 내용입니다. 추가적인 세부 사항을 포함할 수 있습니다.",
    },
  ];
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="accordion-menu-container">
      <h2>아코디언 메뉴</h2>
      <div className="accordion-menu">
        {accordionItems.map((item) => (
          <div key={item.id} className="accordion-item">
            <button
              className={`accordion-header ${
                openIndex === item.id ? "active" : ""
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <span className="accoridon-icon">
                {openIndex === item.id ? "-" : "+"}
              </span>
            </button>
            <div
              className={`accordion-content ${
                openIndex === item.id ? "open" : ""
              }`}
            >
              <div className="accordion-content-inner">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
