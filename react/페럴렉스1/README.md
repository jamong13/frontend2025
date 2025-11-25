# 패럴랙스 포트폴리오 사이트

React와 Vite를 사용하여 제작한 패럴랙스 효과가 적용된 원페이지 포트폴리오 사이트입니다. 스크롤 시 부드러운 애니메이션과 패럴랙스 효과를 통해 사용자에게 인상적인 경험을 제공합니다.

---

## 📋 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [시작하기](#시작하기)
3. [기술 스택](#기술-스택)
4. [프로젝트 구조](#프로젝트-구조)
5. [주요 기능](#주요-기능)
6. [컴포넌트 상세 설명](#컴포넌트-상세-설명)
7. [섹션 상세 설명](#섹션-상세-설명)
8. [커스터마이징 가이드](#커스터마이징-가이드)
9. [배포 방법](#배포-방법)
10. [문제 해결](#문제-해결)

---

## 프로젝트 소개

이 프로젝트는 개발자 포트폴리오를 위한 원페이지 웹사이트입니다. 다음과 같은 특징을 가지고 있습니다:

- **원페이지 스크롤**: 모든 콘텐츠가 하나의 페이지에 배치되어 부드러운 스크롤 경험 제공
- **패럴랙스 효과**: 스크롤 시 이미지와 텍스트가 다른 속도로 움직여 입체감 있는 시각 효과 구현
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 등 모든 디바이스에서 최적화된 레이아웃
- **현대적인 UI/UX**: Tailwind CSS를 활용한 깔끔하고 세련된 디자인

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 16.0 이상
- npm 또는 yarn 패키지 매니저

### 설치 및 실행

1. **프로젝트 클론 또는 다운로드**

2. **의존성 패키지 설치**

```bash
npm install
```

설치되는 주요 패키지:
- `react` (^18.2.0): React 라이브러리
- `react-dom` (^18.2.0): React DOM 렌더링
- `react-scroll` (^1.9.0): 부드러운 스크롤 이동 기능
- `react-scroll-parallax` (^3.1.1): 패럴랙스 효과 구현
- `tailwindcss` (^3.4.0): 유틸리티 기반 CSS 프레임워크
- `vite` (^5.0.8): 빠른 빌드 도구

3. **개발 서버 실행**

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인할 수 있습니다.

4. **프로덕션 빌드**

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

5. **빌드 미리보기**

```bash
npm run preview
```

프로덕션 빌드를 로컬에서 미리 확인할 수 있습니다.

---

## 📦 기술 스택

### 핵심 기술

- **React 18**: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **Vite**: 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공하는 빌드 도구

### 스타일링

- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크로 빠르고 일관된 스타일링
- **PostCSS**: CSS 후처리 도구
- **Autoprefixer**: 브라우저 호환성을 위한 CSS 접두사 자동 추가

### 애니메이션 및 스크롤

- **react-scroll-parallax**: 스크롤 기반 패럴랙스 효과 구현
- **react-scroll**: 섹션 간 부드러운 스크롤 이동 기능

---

## 📁 프로젝트 구조

```
페럴렉스/
├── public/                 # 정적 파일 (이미지, 아이콘 등)
├── src/
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── Header.jsx     # 상단 네비게이션 헤더
│   │   ├── ParallaxImage.jsx  # 패럴랙스 이미지 컴포넌트
│   │   └── SectionTitle.jsx   # 섹션 제목 컴포넌트
│   ├── sections/          # 페이지 섹션 컴포넌트
│   │   ├── Hero.jsx       # 홈 섹션 (타이핑 애니메이션)
│   │   ├── About.jsx      # 소개 섹션
│   │   ├── Portfolio.jsx  # 포트폴리오 섹션
│   │   ├── Content.jsx    # 스킬 섹션
│   │   └── Contact.jsx    # 연락처 섹션
│   ├── styles/            # 스타일 파일
│   │   └── global.css     # 전역 스타일 및 커스텀 애니메이션
│   ├── App.jsx            # 메인 앱 컴포넌트
│   └── main.jsx           # 애플리케이션 진입점
├── index.html             # HTML 템플릿
├── package.json           # 프로젝트 의존성 및 스크립트
├── vite.config.js         # Vite 설정 파일
├── tailwind.config.js     # Tailwind CSS 설정
├── postcss.config.js      # PostCSS 설정
└── README.md              # 프로젝트 문서
```

---

## ✨ 주요 기능

### 1. 원페이지 스크롤
- 모든 콘텐츠가 하나의 페이지에 배치되어 부드러운 스크롤 경험 제공
- 섹션 간 자동 스크롤 이동 기능

### 2. 패럴랙스 효과
- **이미지 패럴랙스**: 스크롤 시 이미지가 다른 속도로 움직여 깊이감 연출
- **텍스트 패럴랙스**: 섹션 제목과 텍스트가 부드럽게 등장
- `react-scroll-parallax`의 `useParallax` 훅을 활용한 구현

### 3. 타이핑 애니메이션
- Hero 섹션에서 텍스트가 한 글자씩 타이핑되는 효과
- 커서 깜빡임 애니메이션 포함
- `useState`와 `useEffect`를 활용한 구현

### 4. 반응형 디자인
- 모바일, 태블릿, 데스크톱 등 모든 화면 크기에 최적화
- Tailwind CSS의 반응형 유틸리티 클래스 활용

### 5. 상단 고정 헤더
- 스크롤 시에도 항상 상단에 고정
- 반투명 배경과 블러 효과 적용
- 클릭 시 해당 섹션으로 부드럽게 스크롤 이동

### 6. 인터랙티브 요소
- 포트폴리오 카드 호버 효과
- 버튼 호버 애니메이션
- 폼 입력 필드 포커스 효과

---

## 🧩 컴포넌트 상세 설명

### Header.jsx

**위치**: `src/components/Header.jsx`

**기능**:
- 상단 고정 네비게이션 바
- 섹션 간 부드러운 스크롤 이동
- 현재 섹션 하이라이트 (spy 기능)

**주요 속성**:
- `fixed top-0`: 상단 고정
- `bg-white/90 backdrop-blur-md`: 반투명 배경과 블러 효과
- `react-scroll`의 `Link` 컴포넌트 사용

**커스터마이징**:
```jsx
const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  // 네비게이션 항목 추가/수정
]
```

### ParallaxImage.jsx

**위치**: `src/components/ParallaxImage.jsx`

**기능**:
- 패럴랙스 효과가 적용된 이미지 컴포넌트
- 스크롤 속도 조절 가능

**Props**:
- `src`: 이미지 URL
- `alt`: 이미지 대체 텍스트
- `speed`: 패럴랙스 속도 (기본값: -20, 음수는 역방향)
- `className`: 추가 CSS 클래스

**사용 예시**:
```jsx
<ParallaxImage
  src="image-url.jpg"
  alt="Description"
  speed={-20}
  className="h-96 shadow-xl"
/>
```

### SectionTitle.jsx

**위치**: `src/components/SectionTitle.jsx`

**기능**:
- 섹션 제목에 패럴랙스 효과 적용
- 일관된 스타일링 제공

**Props**:
- `children`: 제목 텍스트
- `className`: 추가 CSS 클래스

**사용 예시**:
```jsx
<SectionTitle>About Me</SectionTitle>
```

---

## 📄 섹션 상세 설명

### Hero.jsx

**위치**: `src/sections/Hero.jsx`

**기능**:
- 풀스크린 홈 섹션 (100vh)
- 타이핑 애니메이션 텍스트
- 배경 패럴랙스 효과
- CTA 버튼 (포트폴리오 보기, 연락하기)
- 하단 스크롤 인디케이터

**주요 특징**:
- `useState`와 `useEffect`를 사용한 타이핑 애니메이션
- `whitespace-nowrap`으로 텍스트가 가로로만 표시되도록 설정
- 커서 깜빡임은 `animate-pulse` 클래스로 구현

**커스터마이징**:
```jsx
const fullText = '안녕하세요, 개발자입니다.' // 타이핑할 텍스트 변경
const typingInterval = setInterval(() => {
  // 100ms 간격으로 한 글자씩 표시 (간격 조절 가능)
}, 100)
```

### About.jsx

**위치**: `src/sections/About.jsx`

**기능**:
- 자기소개 섹션
- 이미지 + 텍스트 2단 레이아웃
- 통계 정보 표시 (프로젝트 수, 경력, 만족도)
- 텍스트와 이미지에 패럴랙스 효과 적용

**레이아웃**:
- 데스크톱: 2열 그리드 (텍스트 | 이미지)
- 모바일: 1열 세로 배치

**커스터마이징**:
- 텍스트 내용 수정
- 통계 숫자 변경
- 이미지 URL 변경

### Portfolio.jsx

**위치**: `src/sections/Portfolio.jsx`

**기능**:
- 포트폴리오 프로젝트 카드 그리드
- 6개 카드 레이아웃 (3열 그리드)
- 호버 시 카드 상승 효과
- 이미지 확대 효과
- 기술 스택 태그 표시

**레이아웃**:
- 데스크톱: 3열 그리드
- 태블릿: 2열 그리드
- 모바일: 1열 세로 배치

**커스터마이징**:
```jsx
const portfolioItems = [
  {
    id: 1,
    title: '프로젝트 제목',
    description: '프로젝트 설명',
    image: '이미지-URL',
    tags: ['React', 'Node.js'],
  },
  // 프로젝트 추가/수정
]
```

### Content.jsx (Skills)

**위치**: `src/sections/Content.jsx`

**기능**:
- 기술 스택 섹션
- 이미지 + 스킬 바 2단 레이아웃
- 프로그레스 바로 스킬 레벨 표시
- 추가 기술 태그 표시

**주요 특징**:
- 각 스킬의 숙련도를 퍼센트로 표시
- 색상별 프로그레스 바
- 애니메이션 효과 포함

**커스터마이징**:
```jsx
const skills = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  // 스킬 추가/수정
]
```

### Contact.jsx

**위치**: `src/sections/Contact.jsx`

**기능**:
- 연락처 폼 (이름, 이메일, 메시지)
- 연락처 정보 표시 (이메일, 전화번호, 위치)
- 폼 제출 처리 (현재는 데모용 alert)

**주요 특징**:
- React의 `useState`로 폼 상태 관리
- 입력 필드 유효성 검사 (required)
- 포커스 시 오렌지색 링 효과

**커스터마이징**:
- 폼 제출 로직을 실제 백엔드 API와 연동
- 연락처 정보 수정
- 추가 필드 추가 (전화번호, 회사명 등)

**폼 제출 연동 예시**:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    // 성공 처리
  } catch (error) {
    // 에러 처리
  }
}
```

---

## 🎨 커스터마이징 가이드

### 색상 변경

`tailwind.config.js` 파일에서 테마 색상을 변경할 수 있습니다:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

또는 각 컴포넌트에서 직접 Tailwind 색상 클래스를 변경:
- `bg-orange-500` → `bg-blue-500` (버튼 색상)
- `text-orange-500` → `text-blue-500` (텍스트 색상)

### 이미지 변경

각 섹션의 이미지 URL을 변경:

1. **Hero 섹션**: `src/sections/Hero.jsx`의 `backgroundImage` URL
2. **About 섹션**: `src/sections/About.jsx`의 `ParallaxImage` 컴포넌트
3. **Content 섹션**: `src/sections/Content.jsx`의 `ParallaxImage` 컴포넌트
4. **Portfolio 섹션**: `src/sections/Portfolio.jsx`의 `portfolioItems` 배열

### 패럴랙스 속도 조절

각 컴포넌트의 `speed` 속성으로 패럴랙스 속도를 조절:

```jsx
// 느린 패럴랙스 (작은 숫자)
const { ref } = useParallax({ speed: 5 })

// 빠른 패럴랙스 (큰 숫자)
const { ref } = useParallax({ speed: 30 })

// 역방향 패럴랙스 (음수)
const { ref } = useParallax({ speed: -20 })
```

### 타이핑 애니메이션 속도 조절

`src/sections/Hero.jsx`에서 타이핑 속도 조절:

```jsx
const typingInterval = setInterval(() => {
  // 100ms → 50ms (더 빠르게)
  // 100ms → 150ms (더 느리게)
}, 100)
```

### 폰트 변경

`tailwind.config.js`에서 폰트 설정:

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Your Font', 'sans-serif'],
      },
    },
  },
}
```

또는 `src/styles/global.css`에서:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### 섹션 순서 변경

`src/App.jsx`에서 섹션 컴포넌트 순서를 변경:

```jsx
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Content />
        <Contact />
        {/* 순서 변경 가능 */}
      </div>
    </ParallaxProvider>
  )
}
```

---

## 🚢 배포 방법

### Vercel 배포 (권장)

1. GitHub에 프로젝트 푸시
2. [Vercel](https://vercel.com)에 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 빌드 설정 자동 감지 (Vite)
6. "Deploy" 클릭

### Netlify 배포

1. GitHub에 프로젝트 푸시
2. [Netlify](https://netlify.com)에 로그인
3. "Add new site" → "Import an existing project"
4. GitHub 저장소 선택
5. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. "Deploy site" 클릭

### GitHub Pages 배포

1. `vite.config.js`에 base 경로 추가:

```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. `package.json`에 배포 스크립트 추가:

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  }
}
```

3. 배포 실행:

```bash
npm run deploy
```

---

## 🔧 문제 해결

### 패키지 설치 오류

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### 패럴랙스 효과가 작동하지 않음

- `ParallaxProvider`로 전체 앱을 감싸는지 확인
- 브라우저 콘솔에서 에러 확인
- `react-scroll-parallax` 버전 확인

### 스타일이 적용되지 않음

- Tailwind CSS가 제대로 설정되었는지 확인
- `global.css`가 `main.jsx`에서 import되었는지 확인
- 브라우저 캐시 삭제 후 재시도

### 타이핑 애니메이션이 세로로 표시됨

- `whitespace-nowrap` 클래스가 적용되었는지 확인
- `inline-flex items-center` 레이아웃 사용 확인

### 빌드 오류

```bash
# Vite 캐시 삭제
rm -rf node_modules/.vite
npm run build
```

---

## 📝 라이선스

MIT License

---

## 🤝 기여하기

프로젝트 개선을 위한 제안이나 버그 리포트는 언제든 환영합니다!

---

## 📧 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해주세요.

---

**즐거운 코딩 되세요! 🚀**
