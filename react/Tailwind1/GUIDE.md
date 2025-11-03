# Tailwind CSS 완벽 가이드

이 문서는 Tailwind CSS를 처음 접하는 분들을 위한 상세한 가이드입니다.

## 📖 목차

1. [Tailwind CSS란?](#tailwind-css란)
2. [왜 Tailwind CSS를 사용하나요?](#왜-tailwind-css를-사용하나요)
3. [기본 문법](#기본-문법)
4. [실전 예제 분석](#실전-예제-분석)
5. [자주 사용하는 클래스](#자주-사용하는-클래스)
6. [반응형 디자인](#반응형-디자인)
7. [실무 팁](#실무-팁)

## Tailwind CSS란?

Tailwind CSS는 **유틸리티 우선(Utility-First)** CSS 프레임워크입니다. 

### 전통적인 CSS vs Tailwind CSS

**전통적인 방식:**
```css
/* style.css */
.button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.5rem;
}
.button:hover {
  background-color: #2563eb;
}
```

```html
<button class="button">클릭</button>
```

**Tailwind 방식:**
```html
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
  클릭
</button>
```

CSS 파일 없이 HTML에서 직접 스타일을 작성합니다!

## 왜 Tailwind CSS를 사용하나요?

### ✅ 장점

1. **빠른 개발 속도**
   - CSS 파일을 왔다갔다 할 필요 없음
   - 클래스 이름 고민 불필요

2. **일관된 디자인**
   - 미리 정의된 스케일 사용
   - 팀 프로젝트에서 일관성 유지

3. **작은 번들 크기**
   - 사용하지 않는 스타일은 자동 제거 (PurgeCSS)
   - 프로덕션 빌드가 매우 작음

4. **반응형 디자인이 쉬움**
   - `md:`, `lg:` 같은 접두사로 간단히 구현

5. **커스터마이징 가능**
   - `tailwind.config.js`에서 자유롭게 설정

### ⚠️ 단점

1. HTML이 길어질 수 있음
2. 처음에는 클래스 이름을 외워야 함
3. Tailwind 문법을 모르는 팀원과의 협업 시 러닝 커브

## 기본 문법

### 1. 간격 (Spacing)

Tailwind는 `0.25rem` (4px) 단위로 간격을 정의합니다.

```jsx
p-0   // padding: 0
p-1   // padding: 0.25rem  (4px)
p-2   // padding: 0.5rem   (8px)
p-4   // padding: 1rem     (16px)
p-6   // padding: 1.5rem   (24px)
p-8   // padding: 2rem     (32px)

// 방향별 적용
pt-4  // padding-top: 1rem
pr-4  // padding-right: 1rem
pb-4  // padding-bottom: 1rem
pl-4  // padding-left: 1rem

// 수평/수직
px-4  // padding-left + padding-right: 1rem
py-2  // padding-top + padding-bottom: 0.5rem

// 마진도 동일
m-4, mt-4, mx-4, my-4 등
```

### 2. 색상 (Colors)

색상은 `색상명-농도` 형식입니다. 농도는 50, 100, 200, ..., 900까지 있습니다.

```jsx
// 배경색
bg-gray-100    // 밝은 회색
bg-gray-500    // 중간 회색
bg-gray-900    // 어두운 회색

bg-blue-500    // 파란색
bg-red-500     // 빨간색
bg-green-500   // 초록색

// 텍스트 색상
text-white
text-gray-600
text-blue-500

// 테두리 색상
border-gray-200
border-blue-500
```

### 3. 크기 (Sizing)

```jsx
// 너비 (Width)
w-full      // width: 100%
w-1/2       // width: 50%
w-1/3       // width: 33.333%
w-64        // width: 16rem (256px)
w-screen    // width: 100vw

// 높이 (Height)
h-full      // height: 100%
h-screen    // height: 100vh
h-64        // height: 16rem

// 최소/최대
min-w-0, max-w-xl, min-h-screen, max-h-full
```

### 4. 타이포그래피 (Typography)

```jsx
// 글자 크기
text-xs     // 0.75rem  (12px)
text-sm     // 0.875rem (14px)
text-base   // 1rem     (16px)
text-lg     // 1.125rem (18px)
text-xl     // 1.25rem  (20px)
text-2xl    // 1.5rem   (24px)
text-3xl    // 1.875rem (30px)
text-4xl    // 2.25rem  (36px)

// 굵기
font-thin       // 100
font-light      // 300
font-normal     // 400
font-medium     // 500
font-semibold   // 600
font-bold       // 700

// 정렬
text-left
text-center
text-right
```

### 5. Flexbox

```jsx
// 기본
flex              // display: flex
flex-col          // flex-direction: column
flex-row          // flex-direction: row

// 정렬
justify-start     // 왼쪽 정렬
justify-center    // 중앙 정렬
justify-between   // 양쪽 정렬
justify-end       // 오른쪽 정렬

items-start       // 위 정렬
items-center      // 수직 중앙
items-end         // 아래 정렬

// 간격
gap-2, gap-4, gap-6

// Flex 크기
flex-1            // flex: 1 1 0%
flex-auto         // flex: 1 1 auto
flex-none         // flex: none
```

### 6. Grid

```jsx
// 기본
grid              // display: grid
grid-cols-2       // 2열
grid-cols-3       // 3열
grid-cols-4       // 4열

// 간격
gap-4             // grid-gap: 1rem

// 예제
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## 실전 예제 분석

### 예제 1: 버튼 만들기

```jsx
<button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
  클릭하세요
</button>
```

**분석:**
- `px-6`: 좌우 패딩 1.5rem
- `py-2`: 상하 패딩 0.5rem
- `bg-blue-500`: 파란색 배경
- `text-white`: 흰색 글자
- `rounded`: 모서리 둥글게 (border-radius: 0.25rem)
- `hover:bg-blue-600`: 호버 시 더 어두운 파란색
- `transition`: 부드러운 전환 효과

### 예제 2: 카드 만들기

```jsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
  <h3 className="text-xl font-bold mb-2">제목</h3>
  <p className="text-gray-600">내용입니다.</p>
</div>
```

**분석:**
- `bg-white`: 흰색 배경
- `rounded-lg`: 큰 둥근 모서리
- `shadow-lg`: 큰 그림자
- `p-6`: 전체 패딩 1.5rem
- `hover:shadow-xl`: 호버 시 더 큰 그림자
- `text-xl`: 큰 글자 크기
- `font-bold`: 굵은 글씨
- `mb-2`: 아래 마진 0.5rem
- `text-gray-600`: 중간 회색 글자

### 예제 3: 그라디언트 버튼

```jsx
<button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">
  멋진 버튼
</button>
```

**분석:**
- `bg-gradient-to-r`: 왼쪽에서 오른쪽으로 그라디언트
- `from-blue-500`: 시작 색상
- `to-purple-500`: 종료 색상
- `shadow-lg`: 큰 그림자
- `transform`: 변형 효과 활성화
- `hover:scale-105`: 호버 시 5% 확대
- `transition`: 부드러운 애니메이션

### 예제 4: 중앙 정렬 컨테이너

```jsx
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold">중앙에 있어요!</h2>
  </div>
</div>
```

**분석:**
- `min-h-screen`: 최소 높이 100vh
- `flex`: Flexbox 사용
- `items-center`: 수직 중앙 정렬
- `justify-center`: 수평 중앙 정렬
- `rounded-xl`: 매우 둥근 모서리

## 자주 사용하는 클래스

### 레이아웃

```jsx
// Container
container         // 반응형 컨테이너
mx-auto          // 수평 중앙 정렬

// Display
block, inline-block, inline, flex, grid, hidden

// Position
relative, absolute, fixed, sticky
top-0, right-0, bottom-0, left-0
```

### 테두리

```jsx
// Border
border           // border: 1px
border-2         // border: 2px
border-4         // border: 4px

// Border Radius
rounded          // 작은 둥근 모서리
rounded-lg       // 큰 둥근 모서리
rounded-full     // 완전한 원형

// Border Color
border-gray-200
border-blue-500
```

### 효과

```jsx
// Shadow
shadow-sm        // 작은 그림자
shadow           // 기본 그림자
shadow-lg        // 큰 그림자
shadow-xl        // 매우 큰 그림자

// Opacity
opacity-0        // 완전 투명
opacity-50       // 반투명
opacity-100      // 불투명

// Transform
scale-105        // 5% 확대
rotate-45        // 45도 회전
translate-x-4    // X축으로 이동
```

## 반응형 디자인

Tailwind는 **모바일 우선(Mobile First)** 접근 방식입니다.

### 브레이크포인트

```
sm:  640px  이상   (작은 태블릿)
md:  768px  이상   (태블릿)
lg:  1024px 이상   (작은 데스크톱)
xl:  1280px 이상   (데스크톱)
2xl: 1536px 이상   (큰 화면)
```

### 사용 예제

```jsx
// 모바일: 1열, 태블릿: 2열, 데스크톱: 4열
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>아이템 1</div>
  <div>아이템 2</div>
  <div>아이템 3</div>
  <div>아이템 4</div>
</div>

// 모바일에서 숨기기
<div className="hidden md:block">
  태블릿 이상에서만 보임
</div>

// 글자 크기 반응형
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  반응형 제목
</h1>

// 패딩 반응형
<div className="p-4 md:p-8 lg:p-12">
  반응형 패딩
</div>
```

### 실전 반응형 카드 예제

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-8">
  <div className="bg-white rounded-lg p-4 md:p-6 shadow hover:shadow-lg transition">
    <h3 className="text-lg md:text-xl font-bold mb-2">카드 제목</h3>
    <p className="text-sm md:text-base text-gray-600">카드 내용</p>
  </div>
  {/* 더 많은 카드들... */}
</div>
```

**동작 방식:**
- **모바일 (< 640px)**: 1열, 작은 패딩
- **작은 태블릿 (≥ 640px)**: 2열
- **큰 태블릿 (≥ 1024px)**: 3열, 큰 패딩
- **데스크톱 (≥ 1280px)**: 4열

## 실무 팁

### 1. 반복되는 스타일은 컴포넌트로

같은 스타일을 여러 번 사용한다면 컴포넌트로 만드세요.

```jsx
// Button.jsx
export default function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-6 py-2 rounded-lg font-semibold transition'
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  )
}

// 사용
<Button variant="primary">클릭</Button>
<Button variant="danger">삭제</Button>
```

### 2. 조건부 스타일링

```jsx
function Alert({ type, message }) {
  return (
    <div className={`p-4 rounded ${
      type === 'success' ? 'bg-green-100 text-green-800' :
      type === 'error' ? 'bg-red-100 text-red-800' :
      'bg-blue-100 text-blue-800'
    }`}>
      {message}
    </div>
  )
}
```

### 3. 다크 모드

```jsx
// tailwind.config.js
export default {
  darkMode: 'class', // 또는 'media'
  // ...
}

// 사용
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  다크 모드 지원
</div>
```

### 4. 커스텀 색상 추가

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      }
    }
  }
}

// 사용
<div className="bg-brand-500 text-brand-50">커스텀 색상</div>
```

### 5. 자주 사용하는 조합

```jsx
// 중앙 정렬 컨테이너
"container mx-auto px-4"

// 카드
"bg-white rounded-lg shadow-lg p-6"

// 버튼
"px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"

// 입력 필드
"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"

// 그리드 레이아웃
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 플렉스 센터
"flex items-center justify-center"

// 프로필 이미지
"w-12 h-12 rounded-full"
```

### 6. VSCode 확장 프로그램

- **Tailwind CSS IntelliSense**: 자동완성 지원
- **Headwind**: 클래스 자동 정렬

### 7. 디버깅 팁

개발 중에 요소의 테두리를 보려면:

```jsx
// 모든 요소에 테두리
<div className="*:border *:border-red-500">
  {/* 자식 요소들 */}
</div>

// 또는 개별적으로
<div className="border border-red-500">테스트</div>
```

### 8. 성능 최적화

프로덕션 빌드 시 자동으로 사용하지 않는 스타일이 제거됩니다.

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 이 경로들의 파일에서 사용된 클래스만 포함됩니다
}
```

## 연습 과제

### 초급

1. 버튼 3개 만들기 (Primary, Secondary, Danger)
2. 간단한 카드 만들기
3. 입력 폼 만들기

### 중급

1. 반응형 네비게이션 바 만들기
2. 프로필 카드 (이미지, 이름, 설명, 버튼)
3. 그리드 레이아웃 갤러리

### 고급

1. 대시보드 레이아웃 (사이드바 + 메인)
2. 애니메이션이 있는 카드
3. 완전한 로그인 페이지

## 마치며

Tailwind CSS는 처음에는 낯설 수 있지만, 익숙해지면 매우 빠르고 효율적으로 개발할 수 있습니다.

**핵심은 연습입니다!** 이 프로젝트의 예제들을 직접 수정해보고, 자신만의 컴포넌트를 만들어보세요.

### 다음 단계

1. 공식 문서 읽기: https://tailwindcss.com
2. Tailwind UI 참고: https://tailwindui.com
3. 다른 사람의 코드 분석하기
4. 개인 프로젝트에 적용하기

**Happy Coding! 🚀**


