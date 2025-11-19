import React, { useState } from "react";
import "./TabMenu.css";

export default function TabMenu() {
  const [activeTab, setAvtiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "홈",
      content: (
        <>
          홈 페이지 내용입니다.
          <br />
          여기에 홈 관련 정보를 표시할 수 있습니다.
          <br />
          여러 줄로 작성할 수 있습니다.
        </>
      ),
    },
    {
      id: 1,
      label: "서비스",
      content: (
        <>
          서비스 페이지 내용입니다.
          <br />
          제공하는 서비스에 대한 정보를 표시합니다.
        </>
      ),
    },
    {
      id: 2,
      label: "제품",
      content: (
        <>
          제품 페이지 내용입니다.
          <br />
          제품 목록과 상세 정보를 표시합니다.
        </>
      ),
    },
    {
      id: 3,
      label: "연락처",
      content: (
        <>
          연락처 페이지 내용입니다.
          <br />
          연락 방법과 위치 정보를 표시합니다.
        </>
      ),
    },
  ];
  return (
    <div className="tab-menu-container">
      <h2>탭 메뉴</h2>
      <div className="tab-menu">
        <div className="tab-headers">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-header ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setAvtiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <div className="tab-panel">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
}
