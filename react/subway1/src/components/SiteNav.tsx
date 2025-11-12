import { useState } from "react";
import type { FocusEvent } from "react";
import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  path: string;
  exact?: boolean;
  subItems: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    exact: true,
    subItems: [
      { label: "브랜드 소개", to: "/#brand" },
      { label: "오늘의 수프", to: "/#soup" },
      { label: "온라인 주문", to: "/#order" },
      { label: "지점 찾기", to: "/#stores" },
    ],
  },
  {
    label: "메뉴소개",
    path: "/menu",
    subItems: [
      { label: "샌드위치", to: "/menu#sandwich" },
      { label: "랩ㆍ기타", to: "/menu#wrap" },
      { label: "샐러드", to: "/menu#salad" },
      { label: "아침메뉴", to: "/menu#breakfast" },
      { label: "스마일 썹", to: "/menu#smile-sub" },
    ],
  },
  {
    label: "이용방법",
    path: "/how-to-order",
    subItems: [
      { label: "써브웨이 이용방법", to: "/how-to-order#guide" },
      { label: "빵 & 재료 소개", to: "/how-to-order#ingredients" },
      { label: "앱 주문 안내", to: "/how-to-order#app" },
      { label: "단체 주문", to: "/how-to-order#group" },
    ],
  },
  {
    label: "새소식",
    path: "/news",
    subItems: [
      { label: "이벤트 · 프로모션", to: "/news#event" },
      { label: "뉴스 · 공지사항", to: "/news#notice" },
      { label: "광고 영상", to: "/news#media" },
      { label: "브랜드 캠페인", to: "/news#campaign" },
    ],
  },
  {
    label: "가맹점",
    path: "/franchise",
    subItems: [
      { label: "가맹 절차", to: "/franchise#process" },
      { label: "투자 비용", to: "/franchise#investment" },
      { label: "지사 안내", to: "/franchise#branch" },
      { label: "사업 설명회", to: "/franchise#seminar" },
      { label: "FAQ", to: "/franchise#faq" },
    ],
  },
];

export default function SiteNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  {
    /* ## 네비게이션 구조 요약

          - **상단 헤더(`site-header`)**
            - 브랜드 영역: `Subway`와 `Fresh Choice` 텍스트를 노출
            - 네비게이션 래퍼(`header-nav`): 마우스/포커스 이벤트로 메가 메뉴 열림 상태를 제어

          - **기본 메뉴(`top-nav`)**
            - `navItems` 배열을 기반으로 홈, 메뉴소개, 이용방법, 새소식, 가맹점 링크를 생성
            - 각 항목은 `NavLink`로 라우팅되고, 활성 경로에 `active` 클래스가 적용
            - 항목에 마우스를 올리거나 포커스하면 `hoveredItem` 상태가 업데이트되어 서브 메뉴 열림

          - **메가 메뉴(`mega-menu`)**
            - `data-open` 속성으로 열림 여부(`hoveredItem` 존재 여부)를 표시
            - `navItems` 항목마다 하나의 열(`mega-column`)이 렌더링되며,
              현재 호버된 항목은 `mega-column-active` 클래스를 가짐
            - 각 열은 `subItems` 배열을 기반으로 서브 링크 목록을 제공 (`Link` 컴포넌트 사용)
            - `onMouseEnter`와 `onFocus`로 열 상태 유지, 포인터 또는 키보드 탐색 시 안정적으로 작동

          - **포커스 제어**
            - `header-nav`의 `onBlur` 핸들러가 전달받은 `FocusEvent`를 통해 포커스가 내부 요소를 벗어나면 `hoveredItem`을 `null`로 리셋
            - `onMouseLeave` 역시 동일하게 `hoveredItem`을 초기화해 메뉴가 닫히도록 처리 */
  }
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container brand-container">
          <div className="brand">
            <span className="brand-primary">Subway</span>
            <span className="brand-secondary">Fresh Choice</span>
          </div>
        </div>
      </div>
      <div
        className="header-nav"
        onMouseLeave={() => setHoveredItem(null)}
        onBlur={(event: FocusEvent<HTMLDivElement>) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHoveredItem(null);
          }
        }}
        // onMouseLeave -> 마우스가 메뉴 영역 밖으로 나가면 닫힘
        // onBlur -> 키보드 탐색 중 포커스가 다른 요소로 이동해도 닫힘
        // null 어떤값도 선택되지 않은상태
        // 메뉴에서 마우스가 벗어나면 상태를 초기화
      >
        <div className="container">
          <nav className="site-nav">
            <ul className="top-nav">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="nav-item"
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onFocus={() => setHoveredItem(item.label)}
                  // hoveredItem상태가 업데이트됨 -> 서브(메가메뉴 열림)
                >
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                  >
                    {item.label}
                  </NavLink>
                  {/* navItem 배열을 기반으로 홈, 메뉴소개, 회사소개 이용방버 새소식 등 링크를 생성 */}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* [data-open="true"] 상태 시 mega-menu 표시*/}
        <div className="mega-menu" data-open={hoveredItem ? "true" : "false"}>
          <div className="mega-menu-inner">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`mega-column${
                  hoveredItem === item.label ? " mega-column-active" : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onFocus={() => setHoveredItem(item.label)}
              >
                <span className="mega-heading">{item.label}</span>
                <ul>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link to={subItem.to} className="dropdown-link">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
