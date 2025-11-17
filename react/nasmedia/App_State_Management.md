# App.jsx 상태 관리 설명

이 문서는 `App.jsx`의 27-30번 줄에 있는 4개의 `useState` Hook이 관리하는 상태와 그 역할을 설명합니다.

---

## 📋 목차

1. [개요](#개요)
2. [상태별 상세 설명](#상태별-상세-설명)
3. [상태 간 상호작용](#상태-간-상호작용)
4. [상태 변경 흐름](#상태-변경-흐름)
5. [요약표](#요약표)

---

## 개요

### 코드 위치

```jsx
// src/App.jsx (27-30번 줄)
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState(0);
const [showIntro, setShowIntro] = useState(true);
const [isTopVisible, setIsTopVisible] = useState(false);
```

### 관리하는 상태

이 4개의 상태는 전체 애플리케이션의 UI 상태를 관리합니다:

1. **isMenuOpen**: 오버레이 메뉴 열림/닫힘
2. **activeSection**: 현재 활성화된 섹션 인덱스
3. **showIntro**: 인트로 애니메이션 표시 여부
4. **isTopVisible**: 상단 이동 버튼 표시 여부

---

## 상태별 상세 설명

### 1. isMenuOpen - 메뉴 열림/닫힘 상태

```jsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

#### 역할

오버레이 메뉴(햄버거 메뉴)의 열림/닫힘 상태를 관리합니다.

#### 초기값

`false` (메뉴 닫힘 상태)

#### 사용 위치

**1. 본문 스크롤 제어 (35-40번 줄)**
```jsx
useEffect(() => {
  document.body.style.overflow = isMenuOpen ? 'hidden' : 'visible';
  return () => {
    document.body.style.overflow = 'visible';
  };
}, [isMenuOpen]);
```
- 메뉴가 열리면 본문 스크롤 비활성화
- 메뉴가 닫히면 본문 스크롤 활성화

**2. 섹션 전환 차단 (49번 줄)**
```jsx
const changeSection = useCallback((next) => {
  if (showIntro || isMenuOpen) {
    return;  // 메뉴 열림 중에는 섹션 전환 불가
  }
  // ...
}, [isMenuOpen, showIntro]);
```

**3. 휠 이벤트 무시 (60번 줄)**
```jsx
const handleWheel = useCallback((event) => {
  if (wheelLock.current || isMenuOpen || showIntro) {
    return;  // 메뉴 열림 중에는 휠 이벤트 무시
  }
  // ...
}, [changeSection, isMenuOpen, showIntro]);
```

**4. 터치 이벤트 무시 (75, 81번 줄)**
```jsx
const handleTouchStart = useCallback((event) => {
  if (isMenuOpen || showIntro) return;
  // ...
}, [isMenuOpen, showIntro]);
```

**5. CSS 클래스 추가 (110번 줄)**
```jsx
<div className={`app-root${isMenuOpen ? ' menu-open' : ''}`}>
```
- 메뉴 열림 시 `menu-open` 클래스 추가

**6. Header 컴포넌트 (113-117번 줄)**
```jsx
<Header
  isMenuOpen={isMenuOpen}
  onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
  isLightBackground={sections[activeSection]?.theme === 'light'}
/>
```
- 메뉴 상태를 Header에 전달
- 메뉴 토글 함수 제공

**7. OverlayMenu 컴포넌트 (119번 줄)**
```jsx
<OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
```
- 메뉴 열림/닫힘 상태 전달
- 닫기 함수 제공

#### 상태 변경 시점

- **열기**: 헤더의 햄버거 버튼 클릭
  ```jsx
  onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
  ```

- **닫기**: 
  - 메뉴 내 링크 클릭
  - 배경 클릭
  ```jsx
  onClose={() => setIsMenuOpen(false)}
  ```

---

### 2. activeSection - 현재 활성화된 섹션 인덱스

```jsx
const [activeSection, setActiveSection] = useState(0);
```

#### 역할

현재 화면에 보이는 섹션의 인덱스를 관리합니다 (0~5).

#### 초기값

`0` (첫 번째 섹션)

#### 섹션 인덱스

| 인덱스 | 섹션 | 라벨 |
|--------|------|------|
| 0 | Section 1 | Main |
| 1 | Section 2 | Our Value |
| 2 | Section 3 | What we do |
| 3 | Section 4 | Nasreport |
| 4 | Section 5 | Let's be Together |
| 5 | Section 6 | Contact |

#### 사용 위치

**1. 상단 이동 버튼 표시 (42-44번 줄)**
```jsx
useEffect(() => {
  setIsTopVisible(activeSection > 0);
}, [activeSection]);
```
- 첫 번째 섹션이 아니면 상단 이동 버튼 표시

**2. 섹션 변경 함수 (52-55번 줄)**
```jsx
setActiveSection((prev) => {
  const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
  return clamped;  // 0~5 범위로 제한
});
```
- 섹션 인덱스를 0~5 범위로 제한

**3. 섹션 위치 스타일 계산 (101-107번 줄)**
```jsx
const fullCoverStyle = useMemo(
  () => ({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 1s ease',
  }),
  [activeSection]
);
```
- 섹션 위치에 따라 이동 거리 계산
- `activeSection = 1` → `translateY(-100vh)`
- `activeSection = 2` → `translateY(-200vh)`

**4. Header 로고 색상 결정 (116번 줄)**
```jsx
<Header
  isLightBackground={sections[activeSection]?.theme === 'light'}
/>
```
- 밝은 배경 섹션(2, 4)에서는 어두운 로고 표시
- 어두운 배경 섹션(1, 3, 5, 6)에서는 밝은 로고 표시

**5. NavigationDots 활성 표시 (121-125번 줄)**
```jsx
<NavigationDots
  sections={sections}
  activeIndex={activeSection}
  onSelect={(index) => changeSection(() => index)}
/>
```
- 현재 활성 섹션을 도트로 표시

**6. 상단 이동 버튼 클릭 (152번 줄)**
```jsx
onClick={() => changeSection(() => 0)}
```
- 첫 번째 섹션으로 이동

#### 상태 변경 시점

- **마우스 휠 스크롤**
  ```jsx
  changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
  ```
  - 아래로 스크롤: `prev + 1`
  - 위로 스크롤: `prev - 1`

- **터치 스와이프**
  ```jsx
  changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
  ```
  - 위로 스와이프: `prev + 1`
  - 아래로 스와이프: `prev - 1`

- **NavigationDots 클릭**
  ```jsx
  onSelect={(index) => changeSection(() => index)}
  ```
  - 특정 섹션으로 직접 이동

- **상단 이동 버튼 클릭**
  ```jsx
  onClick={() => changeSection(() => 0)}
  ```
  - 첫 번째 섹션으로 이동

---

### 3. showIntro - 인트로 애니메이션 표시 여부

```jsx
const [showIntro, setShowIntro] = useState(true);
```

#### 역할

페이지 최초 로드 시 인트로 애니메이션 표시 여부를 관리합니다.

#### 초기값

`true` (인트로 표시)

#### 사용 위치

**1. 섹션 전환 차단 (49번 줄)**
```jsx
const changeSection = useCallback((next) => {
  if (showIntro || isMenuOpen) {
    return;  // 인트로 중에는 섹션 전환 불가
  }
  // ...
}, [isMenuOpen, showIntro]);
```

**2. 휠 이벤트 무시 (60번 줄)**
```jsx
const handleWheel = useCallback((event) => {
  if (wheelLock.current || isMenuOpen || showIntro) {
    return;  // 인트로 중에는 휠 이벤트 무시
  }
  // ...
}, [changeSection, isMenuOpen, showIntro]);
```

**3. 터치 이벤트 무시 (75, 81번 줄)**
```jsx
const handleTouchStart = useCallback((event) => {
  if (isMenuOpen || showIntro) return;
  // ...
}, [isMenuOpen, showIntro]);
```

**4. FixAnimation 컴포넌트 (111번 줄)**
```jsx
<FixAnimation 
  visible={showIntro} 
  onFinished={() => setShowIntro(false)} 
/>
```
- 인트로 애니메이션 표시/숨김 제어
- 애니메이션 완료 시 콜백 호출

#### 상태 변경 시점

**1. 페이지 로드**
- `showIntro = true` (초기값)
- 인트로 애니메이션 표시

**2. 애니메이션 완료 (3.2초 후)**
```jsx
onFinished={() => setShowIntro(false)}
```
- `setShowIntro(false)` 호출
- 인트로 숨김
- 메인 콘텐츠 표시 및 섹션 전환 가능

#### 동작 흐름

```
1. 페이지 로드
   ↓
2. showIntro = true
   ↓
3. FixAnimation 표시 (3.2초 동안)
   ↓
4. 애니메이션 완료
   ↓
5. onFinished() 호출
   ↓
6. setShowIntro(false)
   ↓
7. 인트로 숨김, 메인 콘텐츠 표시
```

---

### 4. isTopVisible - 상단 이동 버튼 표시 여부

```jsx
const [isTopVisible, setIsTopVisible] = useState(false);
```

#### 역할

우측 상단의 "맨 위로" 버튼 표시 여부를 관리합니다.

#### 초기값

`false` (버튼 숨김)

#### 사용 위치

**1. activeSection에 따라 자동 업데이트 (42-44번 줄)**
```jsx
useEffect(() => {
  setIsTopVisible(activeSection > 0);
}, [activeSection]);
```
- `activeSection = 0` → `isTopVisible = false` (버튼 숨김)
- `activeSection > 0` → `isTopVisible = true` (버튼 표시)

**2. 조건부 렌더링 (147-156번 줄)**
```jsx
{isTopVisible && (
  <button
    type="button"
    id="top-btn"
    aria-label="맨 위로"
    onClick={() => changeSection(() => 0)}
  >
    <i className="fa fa-arrow-up" aria-hidden="true" />
  </button>
)}
```
- `isTopVisible`이 `true`일 때만 버튼 렌더링

#### 상태 변경 시점

**자동 변경** (activeSection에 따라)
- `activeSection = 0` → `isTopVisible = false`
- `activeSection = 1` → `isTopVisible = true`
- `activeSection = 2` → `isTopVisible = true`
- `activeSection = 3` → `isTopVisible = true`
- `activeSection = 4` → `isTopVisible = true`
- `activeSection = 5` → `isTopVisible = true`

#### 동작

- **첫 번째 섹션**: 버튼 숨김 (이미 맨 위에 있음)
- **두 번째 섹션 이후**: 버튼 표시 (맨 위로 이동 가능)
- **버튼 클릭**: 첫 번째 섹션으로 이동

---

## 상태 간 상호작용

### 상태 의존성 다이어그램

```
┌─────────────────┐
│   showIntro     │
│   (인트로)      │
└────────┬────────┘
         │
         ├─→ 섹션 전환 차단
         │   (activeSection 변경 불가)
         │
         └─→ 휠/터치 이벤트 무시

┌─────────────────┐
│  isMenuOpen     │
│  (메뉴)         │
└────────┬────────┘
         │
         ├─→ 섹션 전환 차단
         │   (activeSection 변경 불가)
         │
         ├─→ 본문 스크롤 비활성화
         │
         └─→ 휠/터치 이벤트 무시

┌─────────────────┐
│ activeSection   │
│ (현재 섹션)     │
└────────┬────────┘
         │
         ├─→ isTopVisible 결정
         │   (0보다 크면 true)
         │
         ├─→ fullCoverStyle 계산
         │   (위치 결정)
         │
         └─→ Header 로고 색상 결정
             (밝은 배경 여부)
```

### 상태 간 영향 관계

| 상태 | 영향을 받는 상태 | 영향받는 기능 |
|------|----------------|-------------|
| `isMenuOpen` | - | 섹션 전환, 스크롤, 휠/터치 이벤트 |
| `activeSection` | `isTopVisible` | 섹션 위치, 로고 색상, 도트 네비게이션 |
| `showIntro` | - | 섹션 전환, 휠/터치 이벤트 |
| `isTopVisible` | `activeSection` | 상단 이동 버튼 표시 |

---

## 상태 변경 흐름

### 시나리오 1: 페이지 로드

```
1. 초기 상태
   ├─ showIntro = true
   ├─ activeSection = 0
   ├─ isMenuOpen = false
   └─ isTopVisible = false

2. 인트로 애니메이션 표시 (3.2초)

3. 애니메이션 완료
   └─ showIntro = false

4. 메인 콘텐츠 표시
   └─ 섹션 전환 가능해짐
```

### 시나리오 2: 섹션 전환

```
1. 현재 상태
   ├─ activeSection = 0
   └─ isTopVisible = false

2. 사용자가 아래로 스크롤

3. 상태 변경
   ├─ activeSection = 1
   └─ isTopVisible = true (자동 업데이트)

4. 결과
   ├─ Section 2가 화면에 표시
   ├─ 상단 이동 버튼 표시
   ├─ fullCoverStyle 변경 (위로 100vh 이동)
   └─ Header 로고 색상 변경 (밝은 배경)
```

### 시나리오 3: 메뉴 열기/닫기

```
1. 메뉴 열기
   └─ isMenuOpen = true
      ├─ 본문 스크롤 비활성화
      ├─ 섹션 전환 차단
      └─ 휠/터치 이벤트 무시

2. 메뉴 닫기
   └─ isMenuOpen = false
      ├─ 본문 스크롤 활성화
      ├─ 섹션 전환 가능
      └─ 휠/터치 이벤트 활성화
```

### 시나리오 4: NavigationDots 클릭

```
1. 현재 상태
   └─ activeSection = 2

2. 4번 도트 클릭

3. 상태 변경
   └─ activeSection = 3
      ├─ isTopVisible = true (이미 true)
      ├─ fullCoverStyle 변경 (위로 300vh 이동)
      └─ Header 로고 색상 변경 (밝은 배경)

4. 결과
   └─ Section 4가 화면에 표시
```

### 시나리오 5: 상단 이동 버튼 클릭

```
1. 현재 상태
   ├─ activeSection = 3
   └─ isTopVisible = true

2. 상단 이동 버튼 클릭

3. 상태 변경
   ├─ activeSection = 0
   └─ isTopVisible = false (자동 업데이트)

4. 결과
   ├─ Section 1이 화면에 표시
   ├─ 상단 이동 버튼 숨김
   └─ fullCoverStyle 변경 (원위치로 이동)
```

---

## 요약표

### 상태 요약

| 상태 | 타입 | 초기값 | 역할 | 주요 사용 위치 |
|------|------|--------|------|---------------|
| `isMenuOpen` | `boolean` | `false` | 메뉴 열림/닫힘 | OverlayMenu, Header, 스크롤 제어 |
| `activeSection` | `number` | `0` | 현재 섹션 인덱스 (0~5) | 섹션 위치, 로고 색상, 도트 네비게이션 |
| `showIntro` | `boolean` | `true` | 인트로 표시 여부 | FixAnimation, 섹션 전환 차단 |
| `isTopVisible` | `boolean` | `false` | 상단 버튼 표시 | 상단 이동 버튼 조건부 렌더링 |

### 상태 변경 함수

| 상태 | 변경 함수 | 주요 변경 시점 |
|------|----------|---------------|
| `isMenuOpen` | `setIsMenuOpen` | 햄버거 버튼 클릭, 메뉴 닫기 |
| `activeSection` | `setActiveSection` | 스크롤, 터치, 도트 클릭, 상단 이동 |
| `showIntro` | `setShowIntro` | 페이지 로드, 인트로 완료 |
| `isTopVisible` | `setIsTopVisible` | `activeSection` 변경 시 자동 |

### 상태 제약 조건

| 상태 | 제약 조건 | 영향 |
|------|----------|------|
| `isMenuOpen = true` | 섹션 전환 불가 | `changeSection` 차단 |
| `showIntro = true` | 섹션 전환 불가 | `changeSection` 차단 |
| `activeSection` | 0~5 범위로 제한 | `Math.max(0, Math.min(5, value))` |
| `isTopVisible` | `activeSection`에 의존 | `activeSection > 0` |

---

## 핵심 포인트

### 1. 상태 차단 메커니즘

```jsx
// isMenuOpen 또는 showIntro이 true면 섹션 전환 차단
if (showIntro || isMenuOpen) {
  return;
}
```

이 두 상태가 `true`일 때는 사용자가 섹션을 전환할 수 없습니다.

### 2. 자동 상태 업데이트

```jsx
// activeSection이 변경되면 isTopVisible 자동 업데이트
useEffect(() => {
  setIsTopVisible(activeSection > 0);
}, [activeSection]);
```

`activeSection`이 변경되면 관련 상태들이 자동으로 업데이트됩니다.

### 3. 상태 기반 UI 제어

- **조건부 렌더링**: `{isTopVisible && <button>}`
- **조건부 스타일**: `className={isMenuOpen ? 'menu-open' : ''}`
- **조건부 동작**: `if (showIntro || isMenuOpen) return`

모든 UI 동작이 상태에 따라 결정됩니다.

---

## 관련 파일

- `src/App.jsx`: 메인 앱 컴포넌트 (상태 관리)
- `src/components/Header.jsx`: 헤더 컴포넌트
- `src/components/OverlayMenu.jsx`: 오버레이 메뉴
- `src/components/NavigationDots.jsx`: 섹션 네비게이션
- `src/components/FixAnimation.jsx`: 인트로 애니메이션

---

**작성일**: 2024  
**프로젝트**: 나스미디어 React 웹사이트

