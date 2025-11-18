import React, { useMemo, useState, useRef, useCallback } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import FixAnimation from "./components/FixAnimation";
import NavigationDots from "./components/NavigationDots";
import Header from "./components/Header";
import OverlayMenu from "./components/OverlayMenu";

const SECTION_CONFIG = [
  { id: "section1", label: "Main", theme: "dark" }, // index0
  { id: "section2", label: "Our Value", theme: "light" },
  { id: "section3", label: "What we do", theme: "dark" },
  { id: "section4", label: "Nasreport", theme: "light" },
  { id: "section5", label: "Let's be Together", theme: "dark" },
  { id: "section6", label: "Contact", theme: "dark" },
];

const SECTION_COUNT = SECTION_CONFIG.length;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  // 현재 활성화된 섹션 인덱스(0~5)
  const wheelLock = useRef(false);
  const touchStartY = useRef(null);

  const changeSection = useCallback(
    (next) => {
      if (showIntro || isMenuOpen) {
        return;
      }
      setActiveSection((prev) => {
        const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
        return clamped;
      });
    },
    [isMenuOpen, showIntro]
  );

  const handleWheel = useCallback((event) => {
    if (wheelLock.current || isMenuOpen || showIntro) {
      return;
      // wheelLock.current - 휠처리 중복 방지 -> 1초간 추가 휠 이벤트 금지
      // isMenuOpen 메뉴가 열려 있을 땐 휠 금지
      // showIntro 인트로 애니메이션 중 휠 이벤트 무시
    }
    const delta = event.deltaY;
    if (delta === 0) return;
    console.log(
      "마우스 휠 deltaY:",
      delta,
      delta > 0 ? "(아래로 스크롤)" : "(위로 스크롤)"
    );
    // 밑으로 휠 : 양수/ 위로 휠 : 음수
    wheelLock.current = true;
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
  });

  const handleTouchStart = useCallback(
    (event) => {
      if (isMenuOpen || showIntro) {
        return;
        // 메뉴가 열려 있을 때나 인트로 중에는 무시
      }
      touchStartY.current = event.touches[0].clientY;
      // 현재는 첫번째 터치만 처리
    },
    [isMenuOpen, showIntro]
  );

  const handleTouchMove = useCallback(
    (event) => {
      if (
        touchStartY.current == null ||
        wheelLock.current ||
        isMenuOpen ||
        showIntro
      ) {
        return;
        //  시작 위치가 없거나 잠금, 메뉴 보이거나 인트로 상태에서는 빠져 나감
      }
      const currentY = event.touches[0].clientY;
      const delta = touchStartY.current - currentY;

      if (Math.abs(delta) < 50) {
        return;
      }
      wheelLock.current = true;
      changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 1000);
      touchStartY.current = null;
    },
    [isMenuOpen, showIntro, changeSection]
  );

  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, []);

  const fullCoverStyle = useMemo(
    () => ({
      transform: `translateY(-${activeSection * 100}vh)`,
      transition: "transform 1s ease",
    }),
    [activeSection]
  );

  const sections = useMemo(() => SECTION_CONFIG, []);

  return (
    <div className={`app-root${isMenuOpen ? " menu-open" : ""}`}>
      <FixAnimation
        visible={showIntro}
        onFinished={() => setShowIntro(false)}
      />
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        isLightBackground={sections[activeSection]?.theme === "light"}
      />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <NavigationDots
        sections={sections}
        activeIndex={activeSection}
        onSelect={(index) => changeSection(() => index)}
      />
      <div
        id="fullpage"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="full_cover" style={fullCoverStyle}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>
      </div>
    </div>
  );
}
