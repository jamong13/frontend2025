# SectionTitle 컴포넌트 상세 가이드

## 📋 목차

1. [컴포넌트 개요](#컴포넌트-개요)
2. [코드 분석](#코드-분석)
3. [기능 상세 설명](#기능-상세-설명)
4. [사용 방법](#사용-방법)
5. [프로젝트 내 사용 현황](#프로젝트-내-사용-현황)
6. [커스터마이징 가이드](#커스터마이징-가이드)
7. [패럴랙스 효과 이해하기](#패럴랙스-효과-이해하기)
8. [스타일링 상세](#스타일링-상세)
9. [성능 최적화](#성능-최적화)
10. [문제 해결](#문제-해결)
11. [고급 활용법](#고급-활용법)

---

## 컴포넌트 개요

### 기본 정보

- **파일 위치**: `src/components/SectionTitle.jsx`
- **컴포넌트 타입**: 함수형 컴포넌트 (Functional Component)
- **의존성**: `react-scroll-parallax`
- **용도**: 섹션 제목에 패럴랙스 효과를 적용한 재사용 가능한 컴포넌트

### 주요 특징

- ✅ **패럴랙스 효과**: 스크롤 시 제목이 부드럽게 움직이는 효과
- ✅ **반응형 디자인**: 모바일과 데스크톱에서 다른 크기로 표시
- ✅ **재사용성**: 모든 섹션에서 일관된 스타일 적용
- ✅ **커스터마이징 가능**: 추가 스타일 클래스 전달 가능
- ✅ **간단한 사용법**: `<SectionTitle>제목</SectionTitle>` 형태로 사용

---

## 코드 분석

### 전체 코드

```jsx
import { useParallax } from 'react-scroll-parallax'

const SectionTitle = ({ children, className = '' }) => {
  const { ref } = useParallax({ speed: 10 })

  return (
    <h2
      ref={ref}
      className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
```

### 코드 라인별 설명

#### 1. Import 문
```jsx
import { useParallax } from 'react-scroll-parallax'
```
- `react-scroll-parallax` 라이브러리에서 `useParallax` 훅을 가져옵니다.
- 이 훅은 패럴랙스 효과를 구현하는 핵심입니다.

#### 2. 컴포넌트 정의
```jsx
const SectionTitle = ({ children, className = '' }) => {
```
- **`children`**: 제목 텍스트를 받는 Props (필수)
- **`className`**: 추가 CSS 클래스를 받는 Props (선택, 기본값: 빈 문자열)
- 화살표 함수로 정의된 함수형 컴포넌트입니다.

#### 3. 패럴랙스 훅 사용
```jsx
const { ref } = useParallax({ speed: 10 })
```
- `useParallax` 훅을 호출하여 패럴랙스 효과를 설정합니다.
- **`speed: 10`**: 스크롤 속도보다 10배 빠르게 움직입니다.
- **`ref`**: DOM 요소에 연결할 참조를 반환합니다.

#### 4. JSX 반환
```jsx
return (
  <h2
    ref={ref}
    className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 ${className}`}
  >
    {children}
  </h2>
)
```
- **`<h2>`**: 시맨틱 HTML 제목 태그 사용
- **`ref={ref}`**: 패럴랙스 효과를 적용하기 위한 참조 연결
- **`className`**: Tailwind CSS 클래스와 사용자 정의 클래스 결합
- **`{children}`**: 제목 텍스트 렌더링

---

## 기능 상세 설명

### 1. 패럴랙스 효과 (Parallax Effect)

#### 작동 원리

1. **스크롤 감지**: `react-scroll-parallax`가 스크롤 위치를 실시간으로 감지합니다.
2. **속도 계산**: `speed: 10` 값에 따라 요소의 이동 속도를 계산합니다.
3. **변환 적용**: CSS `transform` 속성을 사용하여 요소를 이동시킵니다.

#### Speed 값의 의미

```jsx
speed: 10  // 스크롤 속도의 10배로 이동 (빠르게 위로)
speed: 5   // 스크롤 속도의 5배로 이동 (느리게 위로)
speed: 0   // 고정 (움직이지 않음)
speed: -5  // 스크롤과 반대 방향으로 이동 (아래로)
speed: -10 // 스크롤과 반대 방향으로 빠르게 이동
```

#### 시각적 효과

- **스크롤 다운**: 제목이 위로 이동 (배경보다 빠르게)
- **스크롤 업**: 제목이 아래로 이동
- **부드러운 전환**: CSS transition으로 자연스러운 움직임

### 2. 반응형 디자인

#### Tailwind CSS 반응형 클래스

```jsx
className="text-4xl md:text-5xl ..."
```

- **`text-4xl`**: 모바일 기본 크기 (2.25rem / 36px)
- **`md:text-5xl`**: 중간 크기 이상 화면에서 5xl (3rem / 48px)

#### 브레이크포인트

| 화면 크기 | 클래스 | 폰트 크기 |
|---------|--------|----------|
| 모바일 (< 768px) | `text-4xl` | 36px |
| 태블릿 이상 (≥ 768px) | `md:text-5xl` | 48px |

### 3. 스타일링 시스템

#### 기본 스타일 클래스

```jsx
className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
```

- **`text-4xl md:text-5xl`**: 반응형 폰트 크기
- **`font-bold`**: 굵은 글꼴 (font-weight: 700)
- **`text-gray-800`**: 진한 회색 텍스트 (#1f2937)
- **`mb-8`**: 하단 여백 2rem (32px)

#### 커스텀 클래스 병합

```jsx
className={`기본클래스 ${className}`}
```

- 사용자가 전달한 `className`이 기본 클래스 뒤에 추가됩니다.
- Tailwind의 클래스 우선순위에 따라 나중에 오는 클래스가 적용됩니다.

---

## 사용 방법

### 기본 사용법

```jsx
import SectionTitle from '../components/SectionTitle'

function MySection() {
  return (
    <section>
      <SectionTitle>About Me</SectionTitle>
    </section>
  )
}
```

### 커스텀 스타일 추가

```jsx
<SectionTitle className="text-center text-blue-500">
  My Custom Title
</SectionTitle>
```

### 여러 줄 제목

```jsx
<SectionTitle>
  <span>First Line</span>
  <br />
  <span>Second Line</span>
</SectionTitle>
```

### 아이콘과 함께 사용

```jsx
<SectionTitle>
  <span className="flex items-center gap-2">
    <Icon />
    Portfolio
  </span>
</SectionTitle>
```

---

## 프로젝트 내 사용 현황

### 1. About 섹션

**파일**: `src/sections/About.jsx`

```jsx
import SectionTitle from '../components/SectionTitle'

const About = () => {
  return (
    <section>
      <div className="text-center mb-16">
        <SectionTitle>About Me</SectionTitle>
      </div>
      {/* ... */}
    </section>
  )
}
```

**사용 위치**: 섹션 상단 중앙
**레이아웃**: `text-center`로 중앙 정렬

### 2. Portfolio 섹션

**파일**: `src/sections/Portfolio.jsx`

```jsx
<div className="text-center mb-16">
  <SectionTitle>Portfolio</SectionTitle>
  <p className="text-gray-600 text-lg">
    제가 작업한 프로젝트들을 소개합니다
  </p>
</div>
```

**사용 위치**: 섹션 상단, 설명 텍스트 위
**추가 요소**: 제목 아래 설명 문구 포함

### 3. Content (Skills) 섹션

**파일**: `src/sections/Content.jsx`

```jsx
<div className="text-center mb-16">
  <SectionTitle>Skills</SectionTitle>
</div>
```

**사용 위치**: 섹션 상단 중앙
**컨텍스트**: 기술 스택 섹션 제목

### 4. Contact 섹션

**파일**: `src/sections/Contact.jsx`

```jsx
<div className="text-center mb-16">
  <SectionTitle>Contact</SectionTitle>
  <p className="text-gray-600 text-lg">
    프로젝트나 협업에 대해 이야기하고 싶으시다면 연락주세요
  </p>
</div>
```

**사용 위치**: 섹션 상단, 설명 텍스트 위
**추가 요소**: 제목 아래 설명 문구 포함

### 사용 패턴 분석

모든 섹션에서 공통적으로:
- ✅ `text-center`로 중앙 정렬
- ✅ `mb-16` (또는 유사한 여백)으로 하단 여백 설정
- ✅ 제목 아래 설명 텍스트가 있는 경우가 많음

---

## 커스터마이징 가이드

### 1. 패럴랙스 속도 변경

#### 컴포넌트 내부 수정

```jsx
// 더 빠른 패럴랙스
const { ref } = useParallax({ speed: 20 })

// 더 느린 패럴랙스
const { ref } = useParallax({ speed: 5 })

// 역방향 패럴랙스
const { ref } = useParallax({ speed: -10 })
```

#### Props로 받기 (고급)

```jsx
const SectionTitle = ({ children, className = '', speed = 10 }) => {
  const { ref } = useParallax({ speed })
  // ...
}

// 사용
<SectionTitle speed={20}>Title</SectionTitle>
```

### 2. 색상 변경

#### Props로 전달

```jsx
<SectionTitle className="text-blue-500">Title</SectionTitle>
<SectionTitle className="text-red-600">Title</SectionTitle>
<SectionTitle className="text-green-500">Title</SectionTitle>
```

#### 컴포넌트 내부 수정

```jsx
className={`text-4xl md:text-5xl font-bold text-orange-500 mb-8 ${className}`}
```

### 3. 크기 변경

#### Props로 전달

```jsx
<SectionTitle className="text-3xl md:text-4xl">Small Title</SectionTitle>
<SectionTitle className="text-6xl md:text-7xl">Large Title</SectionTitle>
```

#### 컴포넌트 내부 수정

```jsx
className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${className}`}
```

### 4. 정렬 변경

```jsx
<SectionTitle className="text-left">Left Aligned</SectionTitle>
<SectionTitle className="text-right">Right Aligned</SectionTitle>
<SectionTitle className="text-center">Center Aligned</SectionTitle>
```

### 5. 여백 조정

```jsx
<SectionTitle className="mb-4">Less Margin</SectionTitle>
<SectionTitle className="mb-12">More Margin</SectionTitle>
<SectionTitle className="mt-8 mb-16">Custom Margins</SectionTitle>
```

### 6. 그라데이션 텍스트

```jsx
<SectionTitle className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  Gradient Title
</SectionTitle>
```

### 7. 그림자 효과

```jsx
<SectionTitle className="drop-shadow-lg">
  Shadow Title
</SectionTitle>
```

---

## 패럴랙스 효과 이해하기

### react-scroll-parallax 라이브러리

#### 설치

```bash
npm install react-scroll-parallax
```

#### 기본 사용법

```jsx
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'

// 1. 앱 전체를 ParallaxProvider로 감싸기
function App() {
  return (
    <ParallaxProvider>
      <YourComponent />
    </ParallaxProvider>
  )
}

// 2. 컴포넌트에서 useParallax 사용
function YourComponent() {
  const { ref } = useParallax({ speed: 10 })
  return <div ref={ref}>Content</div>
}
```

### Speed 값 상세 설명

#### 양수 값 (위로 이동)

```jsx
speed: 10  // 스크롤 1px → 요소 10px 위로 이동
speed: 20  // 스크롤 1px → 요소 20px 위로 이동
```

**시각적 효과**: 요소가 배경보다 빠르게 위로 이동

#### 음수 값 (아래로 이동)

```jsx
speed: -10  // 스크롤 1px → 요소 10px 아래로 이동
speed: -20  // 스크롤 1px → 요소 20px 아래로 이동
```

**시각적 효과**: 요소가 배경보다 느리게 이동 (또는 반대 방향)

#### 0 값 (고정)

```jsx
speed: 0  // 요소가 고정됨
```

### 패럴랙스 효과의 시각적 예시

```
스크롤 전:
┌─────────────────┐
│   SectionTitle  │  ← 제목 위치
└─────────────────┘

스크롤 다운 (speed: 10):
┌─────────────────┐
│   SectionTitle  │  ← 제목이 위로 이동
└─────────────────┘
     ↑
   더 빠르게 이동
```

### 다른 패럴랙스 옵션

```jsx
const { ref } = useParallax({
  speed: 10,
  opacity: [1, 0],        // 투명도 변화
  scale: [1, 1.2],        // 크기 변화
  rotate: [0, 360],       // 회전
  translateY: [0, -100],  // Y축 이동
})
```

---

## 스타일링 상세

### Tailwind CSS 클래스 분석

#### 텍스트 크기

```jsx
text-4xl  // font-size: 2.25rem (36px), line-height: 2.5rem
md:text-5xl  // font-size: 3rem (48px), line-height: 1
```

#### 폰트 굵기

```jsx
font-bold  // font-weight: 700
```

**다른 옵션**:
- `font-thin` (100)
- `font-light` (300)
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-extrabold` (800)
- `font-black` (900)

#### 텍스트 색상

```jsx
text-gray-800  // color: #1f2937
```

**Gray 색상 팔레트**:
- `text-gray-100` ~ `text-gray-900`
- 숫자가 클수록 진한 색상

#### 여백

```jsx
mb-8  // margin-bottom: 2rem (32px)
```

**여백 옵션**:
- `m-{size}`: 모든 방향
- `mx-{size}`: 좌우
- `my-{size}`: 상하
- `mt-{size}`: 위
- `mb-{size}`: 아래
- `ml-{size}`: 왼쪽
- `mr-{size}`: 오른쪽

**크기**:
- `0` (0px)
- `1` (4px)
- `2` (8px)
- `4` (16px)
- `8` (32px)
- `12` (48px)
- `16` (64px)

### 커스텀 CSS 추가

#### global.css에 스타일 추가

```css
/* src/styles/global.css */
.section-title-custom {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.05em;
}
```

#### 사용

```jsx
<SectionTitle className="section-title-custom">
  Custom Title
</SectionTitle>
```

---

## 성능 최적화

### 1. 패럴랙스 성능 고려사항

#### 최적화 팁

- ✅ **적절한 speed 값 사용**: 너무 큰 값은 성능 저하
- ✅ **요소 수 제한**: 너무 많은 패럴랙스 요소는 성능 저하
- ✅ **will-change 사용**: 브라우저 최적화 힌트

```jsx
<h2
  ref={ref}
  className="..."
  style={{ willChange: 'transform' }}
>
  {children}
</h2>
```

### 2. 렌더링 최적화

#### React.memo 사용

```jsx
import { memo } from 'react'

const SectionTitle = memo(({ children, className = '' }) => {
  // ...
})

export default SectionTitle
```

**장점**: Props가 변경되지 않으면 리렌더링 방지

### 3. CSS 최적화

#### GPU 가속 활용

```jsx
className="... transform-gpu"
```

또는

```css
.section-title {
  transform: translateZ(0);
  will-change: transform;
}
```

---

## 문제 해결

### 문제 1: 패럴랙스 효과가 작동하지 않음

#### 원인 및 해결

1. **ParallaxProvider 누락**
   ```jsx
   // App.jsx에서 확인
   <ParallaxProvider>
     <App />
   </ParallaxProvider>
   ```

2. **ref 연결 확인**
   ```jsx
   // ref가 제대로 연결되었는지 확인
   <h2 ref={ref}>  // ✅ 올바름
   <h2>            // ❌ ref 누락
   ```

3. **브라우저 콘솔 확인**
   - 에러 메시지 확인
   - `react-scroll-parallax` 버전 확인

### 문제 2: 스타일이 적용되지 않음

#### 원인 및 해결

1. **클래스 우선순위**
   ```jsx
   // className prop이 나중에 오므로 우선순위가 높음
   className={`기본클래스 ${className}`}
   ```

2. **Tailwind CSS 설정 확인**
   - `tailwind.config.js`에서 content 경로 확인
   - 빌드 후에도 스타일이 적용되는지 확인

### 문제 3: 반응형이 작동하지 않음

#### 원인 및 해결

1. **viewport meta 태그 확인**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. **브레이크포인트 확인**
   - `md:`는 768px 이상에서 작동
   - 개발자 도구로 화면 크기 확인

### 문제 4: 성능 이슈

#### 해결 방법

1. **패럴랙스 요소 수 줄이기**
2. **speed 값 낮추기**
3. **React.memo 사용**
4. **브라우저 DevTools Performance 탭으로 분석**

---

## 고급 활용법

### 1. 조건부 패럴랙스

```jsx
const SectionTitle = ({ children, className = '', enableParallax = true }) => {
  const parallaxConfig = enableParallax ? { speed: 10 } : { speed: 0 }
  const { ref } = useParallax(parallaxConfig)
  
  return (
    <h2 ref={ref} className={...}>
      {children}
    </h2>
  )
}

// 사용
<SectionTitle enableParallax={false}>Static Title</SectionTitle>
```

### 2. 애니메이션과 결합

```jsx
const SectionTitle = ({ children, className = '' }) => {
  const { ref } = useParallax({ speed: 10 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref])

  return (
    <h2
      ref={ref}
      className={`... transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </h2>
  )
}
```

### 3. 다중 패럴랙스 효과

```jsx
const SectionTitle = ({ children, className = '' }) => {
  const { ref } = useParallax({ 
    speed: 10,
    opacity: [1, 0.5],
    scale: [1, 1.1]
  })

  return (
    <h2 ref={ref} className={...}>
      {children}
    </h2>
  )
}
```

### 4. TypeScript 버전

```tsx
import { useParallax } from 'react-scroll-parallax'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '',
  speed = 10 
}) => {
  const { ref } = useParallax({ speed })

  return (
    <h2
      ref={ref}
      className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionTitle
```

### 5. 다양한 변형 버전

#### 왼쪽 정렬 버전

```jsx
const SectionTitleLeft = ({ children, className = '' }) => {
  const { ref } = useParallax({ speed: 10 })

  return (
    <h2
      ref={ref}
      className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-left ${className}`}
    >
      {children}
    </h2>
  )
}
```

#### 작은 제목 버전

```jsx
const SectionSubtitle = ({ children, className = '' }) => {
  const { ref } = useParallax({ speed: 5 })

  return (
    <h3
      ref={ref}
      className={`text-2xl md:text-3xl font-semibold text-gray-700 mb-6 ${className}`}
    >
      {children}
    </h3>
  )
}
```

---

## 요약

### 핵심 포인트

1. **간단한 사용법**: `<SectionTitle>제목</SectionTitle>`
2. **패럴랙스 효과**: `speed: 10`으로 부드러운 스크롤 애니메이션
3. **반응형 디자인**: 모바일과 데스크톱에서 다른 크기
4. **재사용성**: 모든 섹션에서 일관된 스타일
5. **커스터마이징**: `className` prop으로 스타일 확장 가능

### 권장 사용 패턴

```jsx
<div className="text-center mb-16">
  <SectionTitle>Section Name</SectionTitle>
  <p className="text-gray-600 text-lg">
    Optional description
  </p>
</div>
```

### 성능 최적화 체크리스트

- [ ] 적절한 speed 값 사용 (5-20 권장)
- [ ] 불필요한 리렌더링 방지 (React.memo 고려)
- [ ] GPU 가속 활용 (transform-gpu)
- [ ] 패럴랙스 요소 수 제한

---

**이 문서는 SectionTitle 컴포넌트의 모든 기능과 사용법을 상세히 설명합니다.**
**추가 질문이나 개선 사항이 있으면 이슈를 등록해주세요.**

