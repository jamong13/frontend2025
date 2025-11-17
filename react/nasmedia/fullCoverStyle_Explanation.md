# fullCoverStyle 코드 설명

이 문서는 `App.jsx`의 101-107번 줄에 있는 `fullCoverStyle` 코드의 동작 원리와 역할을 설명합니다.

---

## 📋 목차

1. [코드 개요](#코드-개요)
2. [동작 원리](#동작-원리)
3. [시각적 설명](#시각적-설명)
4. [실제 사용 위치](#실제-사용-위치)
5. [동작 시나리오](#동작-시나리오)
6. [useMemo가 필요한 이유](#usememo가-필요한-이유)
7. [전체 섹션 전환 시스템](#전체-섹션-전환-시스템)

---

## 코드 개요

### 전체 코드

```jsx
// src/App.jsx (101-107번 줄)
const fullCoverStyle = useMemo(
  () => ({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 1s ease',
  }),
  [activeSection]
);
```

### 코드의 역할

이 코드는 **전체 화면 슬라이드 효과**를 구현하는 핵심 부분입니다. 사용자가 섹션을 전환할 때 화면이 부드럽게 위아래로 이동하도록 만듭니다.

---

## 동작 원리

### 1. useMemo 사용

```jsx
const fullCoverStyle = useMemo(
  () => { /* ... */ },
  [activeSection]  // 의존성 배열
);
```

**역할**:
- `activeSection`이 변경될 때만 스타일 객체를 재생성
- 성능 최적화 및 불필요한 리렌더링 방지

**동작**:
- `activeSection`이 변경되면 → 새로운 스타일 객체 생성
- `activeSection`이 같으면 → 이전 객체 재사용

### 2. transform: translateY()

```jsx
transform: `translateY(-${activeSection * 100}vh)`
```

**역할**: 세로 이동 거리를 계산하여 섹션을 위로 이동시킵니다.

**계산 예시**:

| activeSection | translateY 값 | 설명 |
|---------------|---------------|------|
| 0 | `translateY(-0vh)` | 첫 번째 섹션 (원위치) |
| 1 | `translateY(-100vh)` | 두 번째 섹션 (100vh 위로) |
| 2 | `translateY(-200vh)` | 세 번째 섹션 (200vh 위로) |
| 3 | `translateY(-300vh)` | 네 번째 섹션 (300vh 위로) |
| 4 | `translateY(-400vh)` | 다섯 번째 섹션 (400vh 위로) |
| 5 | `translateY(-500vh)` | 여섯 번째 섹션 (500vh 위로) |

**공식**: `-activeSection × 100vh`

### 3. transition: 'transform 1s ease'

```jsx
transition: 'transform 1s ease'
```

**역할**: CSS transition을 사용하여 부드러운 애니메이션 효과를 제공합니다.

**속성 설명**:
- `transform`: 변환 속성에만 transition 적용
- `1s`: 1초 동안 전환
- `ease`: 시작과 끝이 느리고 중간이 빠른 곡선 (기본값)

**다른 transition 옵션**:
```css
transition: 'transform 1s linear';    /* 일정한 속도 */
transition: 'transform 1s ease-in';  /* 시작이 느림 */
transition: 'transform 1s ease-out'; /* 끝이 느림 */
transition: 'transform 1s ease-in-out'; /* 시작과 끝이 느림 */
```

---

## 시각적 설명

### 초기 상태 (activeSection = 0)

```
┌─────────────────────┐
│                     │
│   Section 1         │ ← translateY(0vh) - 화면에 보임
│                     │
├─────────────────────┤
│                     │
│   Section 2         │ ← translateY(-100vh) - 화면 밖
│                     │
├─────────────────────┤
│                     │
│   Section 3         │ ← translateY(-200vh) - 화면 밖
│                     │
├─────────────────────┤
│                     │
│   Section 4         │ ← translateY(-300vh) - 화면 밖
│                     │
└─────────────────────┘
```

### Section 2로 이동 (activeSection = 1)

```
┌─────────────────────┐
│                     │
│   Section 1         │ ← translateY(-100vh) - 위로 이동
│                     │
├─────────────────────┤
│                     │
│   Section 2         │ ← translateY(-100vh) - 화면에 보임
│                     │
├─────────────────────┤
│                     │
│   Section 3         │ ← translateY(-200vh) - 화면 밖
│                     │
├─────────────────────┤
│                     │
│   Section 4         │ ← translateY(-300vh) - 화면 밖
│                     │
└─────────────────────┘
```

### 애니메이션 과정

```
시간: 0초 ──────────────── 1초
      │                    │
      │                    │
      ▼                    ▼
┌─────────┐          ┌─────────┐
│ Section │          │ Section │
│    1    │          │    1    │
│         │  ────→   │         │
│ Section │          │ Section │
│    2    │          │    2    │
└─────────┘          └─────────┘
  시작 위치            끝 위치
(translateY(0))    (translateY(-100vh))
```

---

## 실제 사용 위치

### 코드에서의 사용

```jsx
// src/App.jsx (134번 줄)
<div className="full_cover" style={fullCoverStyle}>
  <SectionOne />    {/* 0vh 위치 */}
  <SectionTwo />    {/* 100vh 위치 */}
  <SectionThree />  {/* 200vh 위치 */}
  <SectionFour />   {/* 300vh 위치 */}
  <SectionFive />   {/* 400vh 위치 */}
  <SectionSix />    {/* 500vh 위치 */}
  <Footer />        {/* 600vh 위치 */}
</div>
```

### HTML 구조

```html
<div id="fullpage">
  <div class="full_cover" style="transform: translateY(-100vh); transition: transform 1s ease;">
    <section id="section1">...</section>
    <section id="section2">...</section>
    <section id="section3">...</section>
    <!-- ... -->
  </div>
</div>
```

---

## 동작 시나리오

### 시나리오 1: 첫 번째 섹션에서 두 번째로 이동

**1단계: 초기 상태**
```jsx
activeSection = 0
fullCoverStyle = {
  transform: 'translateY(-0vh)',
  transition: 'transform 1s ease'
}
```

**2단계: 사용자 액션**
- 사용자가 마우스 휠을 아래로 스크롤
- 또는 터치로 위로 스와이프
- 또는 NavigationDots에서 2번 클릭

**3단계: 상태 변경**
```jsx
activeSection = 1
fullCoverStyle = {
  transform: 'translateY(-100vh)',
  transition: 'transform 1s ease'
}
```

**4단계: 애니메이션 실행**
- CSS transition이 1초 동안 실행
- `full_cover` div가 위로 100vh 이동
- Section 2가 화면에 나타남

### 시나리오 2: 네 번째 섹션으로 직접 이동

**1단계: 현재 상태**
```jsx
activeSection = 2  // Section 3에 있음
```

**2단계: NavigationDots에서 4번 클릭**
```jsx
activeSection = 3  // Section 4로 이동
fullCoverStyle = {
  transform: 'translateY(-300vh)',
  transition: 'transform 1s ease'
}
```

**3단계: 결과**
- 1초 동안 200vh 위로 이동 (Section 3 → Section 4)
- Section 4가 화면에 나타남

### 시나리오 3: 위로 스크롤 (이전 섹션으로)

**1단계: 현재 상태**
```jsx
activeSection = 3  // Section 4에 있음
```

**2단계: 마우스 휠을 위로 스크롤**
```jsx
activeSection = 2  // Section 3으로 이동
fullCoverStyle = {
  transform: 'translateY(-200vh)',
  transition: 'transform 1s ease'
}
```

**3단계: 결과**
- 1초 동안 100vh 아래로 이동 (Section 4 → Section 3)
- Section 3이 화면에 나타남

---

## useMemo가 필요한 이유

### useMemo 없이 사용한다면?

```jsx
// ❌ 매 렌더마다 새 객체 생성
const fullCoverStyle = {
  transform: `translateY(-${activeSection * 100}vh)`,
  transition: 'transform 1s ease',
};
```

**문제점**:
1. 컴포넌트가 리렌더링될 때마다 새로운 객체 생성
2. React가 매번 새로운 스타일로 인식
3. 불필요한 DOM 업데이트 발생 가능
4. 메모리 사용량 증가

**예시**:
```jsx
// 다른 상태가 변경되어 리렌더링 발생
setIsMenuOpen(true)  // 메뉴 열기

// fullCoverStyle이 새로 생성됨 (activeSection은 같은데도!)
const fullCoverStyle = {
  transform: 'translateY(-100vh)',  // 같은 값
  transition: 'transform 1s ease',
};  // 하지만 새로운 객체 참조

// React가 새로운 스타일로 인식하여 DOM 업데이트 시도
```

### useMemo 사용 시

```jsx
// ✅ activeSection이 변경될 때만 새 객체 생성
const fullCoverStyle = useMemo(
  () => ({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 1s ease',
  }),
  [activeSection]
);
```

**장점**:
1. `activeSection`이 같으면 같은 객체 재사용
2. 불필요한 객체 생성 방지
3. 성능 최적화
4. 메모리 효율성 향상

**예시**:
```jsx
// 다른 상태가 변경되어 리렌더링 발생
setIsMenuOpen(true)  // 메뉴 열기

// activeSection이 변경되지 않았으므로
// fullCoverStyle은 이전 객체 재사용
// React가 같은 스타일로 인식하여 DOM 업데이트 안 함
```

---

## 전체 섹션 전환 시스템

### 전체 흐름도

```
┌─────────────────────────────────────────┐
│ 1. 사용자 액션                          │
│    - 마우스 휠 스크롤                   │
│    - 터치 스와이프                       │
│    - NavigationDots 클릭                │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 2. 이벤트 핸들러 실행                    │
│    - handleWheel()                       │
│    - handleTouchMove()                   │
│    - NavigationDots.onSelect()           │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 3. changeSection() 호출                 │
│    setActiveSection(newIndex)            │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 4. activeSection 상태 변경               │
│    activeSection: 0 → 1                  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 5. fullCoverStyle 재계산 (useMemo)      │
│    {                                     │
│      transform: 'translateY(-100vh)',   │
│      transition: 'transform 1s ease'    │
│    }                                     │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 6. DOM에 스타일 적용                     │
│    <div style={fullCoverStyle}>          │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 7. CSS transition 실행                   │
│    1초 동안 부드럽게 이동                 │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│ 8. 새로운 섹션이 화면에 표시             │
│    Section 2가 보임                      │
└─────────────────────────────────────────┘
```

### 코드 연계

```jsx
// 1. 이벤트 핸들러 (마우스 휠)
const handleWheel = useCallback((event) => {
  const delta = event.deltaY;
  changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
}, [changeSection]);

// 2. 섹션 변경 함수
const changeSection = useCallback((next) => {
  setActiveSection((prev) => {
    const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, next(prev)));
    return clamped;
  });
}, [isMenuOpen, showIntro]);

// 3. 스타일 계산 (useMemo)
const fullCoverStyle = useMemo(
  () => ({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 1s ease',
  }),
  [activeSection]
);

// 4. DOM에 적용
<div className="full_cover" style={fullCoverStyle}>
  {/* 섹션들 */}
</div>
```

---

## 왜 vh 단위를 사용하나요?

### vh (Viewport Height)란?

- **정의**: 뷰포트(화면) 높이의 1%
- **100vh** = 화면 전체 높이
- **반응형**: 화면 크기가 바뀌어도 자동으로 조정

### vh를 사용하는 이유

1. **정확한 섹션 높이**
   - 각 섹션이 정확히 한 화면 높이를 차지
   - `100vh` = 화면 전체 높이

2. **반응형 디자인**
   - 모바일, 태블릿, 데스크톱 모두에서 동작
   - 화면 크기에 관계없이 정확한 위치 계산

3. **일관성**
   - 모든 섹션이 동일한 높이 (100vh)
   - 계산이 간단함: `activeSection × 100vh`

### 다른 단위와 비교

```css
/* ❌ 픽셀 단위 - 반응형이 아님 */
transform: translateY(-800px);  /* 고정값 */

/* ❌ 퍼센트 - 부모 요소 기준 */
transform: translateY(-100%);  /* 부모 높이 기준 */

/* ✅ vh 단위 - 화면 높이 기준 (권장) */
transform: translateY(-100vh);  /* 화면 높이 기준 */
```

---

## 요약

### 핵심 포인트

| 요소 | 역할 |
|------|------|
| **useMemo** | 성능 최적화 (의존성 변경 시에만 재계산) |
| **transform: translateY()** | 섹션 위치 계산 (위로 이동) |
| **transition** | 부드러운 전환 애니메이션 (1초) |
| **[activeSection]** | 의존성 배열 (이 값이 변경될 때만 재계산) |

### 공식

```
이동 거리 = -activeSection × 100vh
```

### 동작 요약

1. **사용자 액션** → 섹션 전환 요청
2. **activeSection 변경** → 상태 업데이트
3. **fullCoverStyle 재계산** → 새로운 위치 계산
4. **CSS transition 실행** → 1초 동안 부드럽게 이동
5. **새 섹션 표시** → 화면에 나타남

---

## 관련 파일

- `src/App.jsx`: 메인 앱 컴포넌트
- `src/styles/style.css`: 스타일 정의
- `src/components/Section*.jsx`: 각 섹션 컴포넌트

---

**작성일**: 2024  
**프로젝트**: 나스미디어 React 웹사이트

