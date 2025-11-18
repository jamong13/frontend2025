import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import FixAnimation from './components/FixAnimation.jsx';
import Header from './components/Header.jsx';
import NavigationDots from './components/NavigationDots.jsx';
import OverlayMenu from './components/OverlayMenu.jsx';
import Footer from './components/Footer.jsx';
import FloatingAd from './components/FloatingAd.jsx';
import SectionOne from './components/SectionOne.jsx';
import SectionTwo from './components/SectionTwo.jsx';
import SectionThree from './components/SectionThree.jsx';
import SectionFour from './components/SectionFour.jsx';
import SectionFive from './components/SectionFive.jsx';
import SectionSix from './components/SectionSix.jsx';

const SECTION_CONFIG = [
  { id: 'section1', label: 'Main', theme: 'dark' },
  { id: 'section2', label: 'Our Value', theme: 'light' },
  { id: 'section3', label: 'What we do', theme: 'dark' },
  { id: 'section4', label: 'Nasreport', theme: 'light' },
  { id: 'section5', label: "Let's be Together", theme: 'dark' },
  { id: 'section6', label: 'Contact', theme: 'dark' },
];

const SECTION_COUNT = SECTION_CONFIG.length;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isTopVisible, setIsTopVisible] = useState(false);

  const wheelLock = useRef(false);
  const touchStartY = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsTopVisible(activeSection > 0);
  }, [activeSection]);

  const sections = useMemo(() => SECTION_CONFIG, []);

  const changeSection = useCallback((next) => {
    if (showIntro || isMenuOpen) {
      return;
    }
    setActiveSection((prev) => {
      const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
      return clamped;
    });
  }, [isMenuOpen, showIntro]);

  const handleWheel = useCallback(
    (event) => {
      if (wheelLock.current || isMenuOpen || showIntro) {
        return;
      }
      const delta = event.deltaY;
      if (delta === 0) return;
      console.log('마우스 휠 deltaY:', delta, delta > 0 ? '(아래로 스크롤)' : '(위로 스크롤)');
      wheelLock.current = true;
      changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
      window.setTimeout(() => {
        wheelLock.current = false;
      }, 1000);
    },
    [changeSection, isMenuOpen, showIntro]
  );

  const handleTouchStart = useCallback((event) => {
    if (isMenuOpen || showIntro) return;
    touchStartY.current = event.touches[0].clientY;
  }, [isMenuOpen, showIntro]);

  const handleTouchMove = useCallback(
    (event) => {
      if (touchStartY.current == null || wheelLock.current || isMenuOpen || showIntro) return;
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
    [changeSection, isMenuOpen, showIntro]
  );

  const handleTouchEnd = useCallback(() => {
    touchStartY.current = null;
  }, []);

  const fullCoverStyle = useMemo(
    () => ({
      transform: `translateY(-${activeSection * 100}vh)`,
      transition: 'transform 1s ease',
    }),
    [activeSection]
  );

  return (
    <div className={`app-root${isMenuOpen ? ' menu-open' : ''}`}>
      <FixAnimation visible={showIntro} onFinished={() => setShowIntro(false)} />

      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        isLightBackground={sections[activeSection]?.theme === 'light'}
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
          <Footer />
        </div>
      </div>

      <FloatingAd />

      {isTopVisible && (
        <button
          type="button"
          id="top-btn"
          aria-label="맨 위로"
          onClick={() => changeSection(() => 0)}
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default App;

