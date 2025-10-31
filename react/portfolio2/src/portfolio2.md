## 왼쪽 영역(내비/사이드/텍스트 블록) 제작 가이드

본 문서는 프로젝트 내 좌측 콘텐츠(예: 내비게이션의 좌측 로고·메뉴, 섹션의 좌측 텍스트 컬럼 등)를 일관성 있게 구현하기 위한 상세 방법, 특이사항, 그리고 React/JavaScript 관점의 구현 포인트를 정리합니다.

### 1) 레이아웃 기본 원칙
- **컨테이너 폭**: 전역 `.container` 대신 섹션 스코프를 붙여 사용 권장. 예: `.about-section .container` 또는 컴포넌트 전용 클래스(`.about-container`).
- **그리드/플렉스**: 좌측 영역을 고정·우측 영역을 가변으로 두는 경우가 많습니다. 미디어쿼리로 모바일에서는 1열, 데스크톱에서는 2열로 전환합니다.

```css
.section {
  padding: 5rem 1rem;
}

@media (min-width: 768px) {
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 왼쪽 1, 오른쪽 1 */
    gap: 2rem;
  }
}
```

### 2) 내비게이션 왼쪽(로고/브랜드) 구성
- **구조**: `navbar > navbar-container > navbar-content` 패턴을 유지합니다. 좌측에는 로고/브랜드, 우측에는 메뉴 그룹.
- **반응형**: 모바일에서는 로고만 좌측, 메뉴는 토글 버튼으로 감춥니다.
- **접근성**: 로고에 `aria-label` 또는 대체 텍스트를 제공.

```jsx
// Navbar.jsx (요약 예시)
<nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-content">
      <a href="#home" className="navbar-logo" aria-label="Home">
        <span className="logo-text">MyBrand</span>
      </a>
      {/* 우측 메뉴/버튼 */}
    </div>
  </div>
  {/* 모바일 메뉴 영역 */}
  {/* ... */}
  
</nav>
```

### 3) 섹션의 좌측 텍스트 블록 패턴
- **타이포 스케일**: 모바일에서는 큰 제목 1.75–2rem, 데스크톱에서는 2–3rem 권장.
- **행간**: 본문은 `line-height: 1.7` 내외.
- **간격**: 타이틀–서브타이틀–버튼 순서의 수직 간격을 고정해 일관성 유지.

```css
.left-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.left-subtitle {
  color: #9ca3af;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}
.left-actions {
  display: flex;
  gap: 0.75rem;
}
```

### 4) 스코프 전략(전역 오염 방지)
- **부모 스코프 접두**: `.contact-section .container`처럼 섹션 루트 클래스를 앞에 붙입니다.
- **고유 클래스**: 범용 `.container` 대신 `.about-container` 등으로 명확히 분리.
- **CSS Modules**: `Component.module.css`를 사용하면 클래스명이 자동으로 유니크화되어 전역 충돌이 사라집니다.
- **CSS-in-JS**: styled-components/Emotion은 컴포넌트 스코프를 기본 제공합니다.

### 5) JavaScript/React 구현 포인트
- **상태 관리**: 좌측 영역의 토글(모바일 메뉴, 아코디언 등)은 `useState`로 단순 관리. 전역 상태가 필요 없는 UI라면 로컬 상태로 끝냅니다.
- **스크롤 연동(active 메뉴)**:
  - IntersectionObserver로 섹션 진입 시 현재 섹션을 추적해 내비 좌측 로고/메뉴 상태를 업데이트.
  - 스로틀링/디바운싱으로 스크롤 이벤트 부하를 줄입니다.
- **부드러운 스크롤**: 앵커 이동 시 `scrollIntoView({ behavior: 'smooth' })` 사용. 접근성 고려해 포커스 이동도 함께 처리.
- **키보드 내비게이션**: 탭 이동 순서가 자연스럽도록 좌측 주요 인터랙션 요소에 `tabIndex`와 `aria-*` 속성을 설정.

```jsx
// 예시: 현재 섹션에 따라 active 메뉴 업데이트
useEffect(() => {
  const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        setActiveSection(id);
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(sec => observer.observe(sec));
  return () => observer.disconnect();
}, []);
```

### 6) 디자인·UX 특이사항
- **시각적 우선순위**: 좌측은 시선이 먼저 머무는 영역이므로 대비(폰트 두께/색상/크기)를 명확히.
- **버튼 터치 타겟**: 모바일 최소 44×44px 권장.
- **포커스 스타일**: 키보드 사용자에게 명확한 포커스 링 제공.
- **다국어 길이**: 텍스트 길이가 달라져도 레이아웃이 깨지지 않도록 `min-height`/자동 줄바꿈 처리.

### 7) 성능·기술 특이사항
- **이미지 최적화**: 좌측에 이미지가 있으면 `loading="lazy"`, 적절한 해상도 소스셋 사용.
- **아이콘 렌더링**: SVG 스프라이트 또는 아이콘 컴포넌트화로 반복 렌더 비용 절감.
- **애니메이션**: transform/opacity 중심으로 구현하고, `will-change`는 필요한 곳에만.

### 8) 코드 예시: 좌측 텍스트 + 우측 이미지 섹션
```jsx
// About.jsx (요약 샘플)
export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="about-container two-col">
        <div className="left">
          <h2 className="left-title">소개</h2>
          <p className="left-subtitle">간단한 자기소개와 핵심 가치</p>
          <div className="left-actions">
            <a href="#projects" className="btn-primary">프로젝트 보기</a>
            <a href="#contact" className="btn-ghost">연락하기</a>
          </div>
        </div>
        <div className="right">
          {/* 이미지/그래픽 */}
        </div>
      </div>
    </section>
  );
}
```

```css
.about-section .about-container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
.about-section .left { display: flex; flex-direction: column; justify-content: center; }
.about-section .right { display: flex; align-items: center; justify-content: center; }
```

### 9) 체크리스트
- [ ] 전역 `.container` 사용 지양(스코프/모듈화로 대체)
- [ ] 모바일 1열, 데스크톱 2열 이상 반응형 동작 확인
- [ ] 좌측 주요 요소 접근성(aria/포커스) 점검
- [ ] 스크롤 연동 활성 상태 정확성(관찰 임계값/성능) 확인
- [ ] 텍스트 길이 변화에도 레이아웃 안정성 유지

필요 시 이 문서에 실제 컴포넌트별 클래스명과 구체 코드를 추가해 운영 문서로 확장하세요.


