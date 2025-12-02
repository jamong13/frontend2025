# 🚀 개인 포트폴리오 웹사이트

> HTML, CSS, JavaScript, React로 만든 현대적이고 반응형 개인 포트폴리오 웹사이트

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [스크린샷](#스크린샷)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [주요 컴포넌트](#주요-컴포넌트)
- [개발 과정](#개발-과정)
- [향후 계획](#향후-계획)
- [연락처](#연락처)

## 🎯 프로젝트 소개

이 프로젝트는 **개인 포트폴리오 웹사이트**로, 제가 개발한 프로젝트들을 소개하고 
제 기술 스택과 경력을 보여주기 위해 제작했습니다.

현대적이고 깔끔한 디자인과 부드러운 애니메이션 효과를 적용하여 
방문자에게 좋은 사용자 경험을 제공하는 것을 목표로 합니다.

### ✨ 핵심 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **부드러운 애니메이션**: Scroll Reveal, Fade In 효과
- **다크 모드 지원**: 사용자 선호에 따른 테마 전환
- **SEO 최적화**: 검색 엔진 최적화 적용
- **빠른 로딩 속도**: 최적화된 이미지와 코드 스플리팅

## 🎨 주요 기능

### 1. 홈 섹션
- 인상적인 히어로 섹션
- 타이핑 애니메이션 효과
- 소셜 미디어 링크

### 2. About Me
- 자기 소개
- 기술 스택 시각화
- 경력 및 교육 배경

### 3. 프로젝트 포트폴리오
- 프로젝트 카드 레이아웃
- 필터링 기능 (카테고리별)
- 프로젝트 상세 모달
- GitHub 및 데모 링크

### 4. 기술 스택
- 아이콘과 함께 기술 스택 시각화
- 숙련도 표시
- 카테고리별 분류

### 5. 연락처
- 연락처 폼
- 이메일 전송 기능
- 소셜 미디어 링크

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Variables
  - Animations & Transitions
  - Media Queries
- **JavaScript (ES6+)**:
  - DOM 조작
  - Event Handling
  - Async/Await
  - Fetch API
- **React 18.2.0**:
  - Functional Components
  - Hooks (useState, useEffect, useRef)
  - React Router
  - Context API

### 라이브러리 & 도구
- **React Router**: 페이지 라우팅
- **Framer Motion**: 애니메이션
- **EmailJS**: 이메일 전송
- **AOS (Animate On Scroll)**: 스크롤 애니메이션
- **React Icons**: 아이콘 라이브러리

### 개발 도구
- **Create React App**: 프로젝트 초기 설정
- **npm**: 패키지 관리
- **Git**: 버전 관리
- **VS Code**: 코드 에디터

## 📸 스크린샷

### 데스크톱 뷰
![Desktop View](./screenshots/desktop.png)

### 모바일 뷰
![Mobile View](./screenshots/mobile.png)

### 다크 모드
![Dark Mode](./screenshots/dark-mode.png)

## 🚀 시작하기

### 필수 요구사항

다음 소프트웨어가 설치되어 있어야 합니다:

- [Node.js](https://nodejs.org/) (v16.0.0 이상)
- [npm](https://www.npmjs.com/) (v8.0.0 이상) 또는 [yarn](https://yarnpkg.com/)

### 설치 방법

1. **저장소 클론**

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. **의존성 설치**

```bash
npm install
# 또는
yarn install
```

3. **환경 변수 설정**

`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **개발 서버 실행**

```bash
npm start
# 또는
yarn start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
# 또는
yarn build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 📁 프로젝트 구조

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│       ├── profile.jpg
│       └── projects/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

## 🧩 주요 컴포넌트

### Header
- 반응형 네비게이션 바
- 스크롤 시 배경색 변경
- 부드러운 스크롤 애니메이션

### Hero Section
- 타이핑 애니메이션 효과
- CTA 버튼
- 소셜 미디어 아이콘

### Projects
- 프로젝트 카드 그리드 레이아웃
- 필터링 기능
- 모달을 통한 상세 정보 표시

### Skills
- 기술 스택 아이콘
- 숙련도 바
- 호버 효과

### Contact Form
- 폼 유효성 검사
- EmailJS를 통한 이메일 전송
- 성공/실패 메시지

## 💻 개발 과정

### 1단계: 기획 및 디자인
- 와이어프레임 작성
- 색상 팔레트 선정
- UI/UX 디자인

### 2단계: 프로젝트 설정
- Create React App으로 프로젝트 초기화
- 필요한 라이브러리 설치
- 폴더 구조 설정

### 3단계: 컴포넌트 개발
- Header 컴포넌트
- Hero 섹션
- About 섹션
- Projects 섹션
- Skills 섹션
- Contact 섹션

### 4단계: 스타일링
- CSS 변수로 테마 관리
- 반응형 디자인 구현
- 애니메이션 효과 추가

### 5단계: 기능 구현
- 라우팅 설정
- 이메일 전송 기능
- 필터링 기능
- 다크 모드 구현

### 6단계: 최적화
- 이미지 최적화
- 코드 스플리팅
- 성능 최적화
- SEO 최적화

## 🔮 향후 계획

- [ ] 다국어 지원 (i18n)
- [ ] 블로그 섹션 추가
- [ ] 다크 모드 개선
- [ ] PWA 기능 추가
- [ ] 성능 모니터링 도구 통합
- [ ] 테스트 코드 작성 (Jest, React Testing Library)
- [ ] TypeScript 마이그레이션
- [ ] 백엔드 API 연동

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👤 개발자

**Your Name**

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- 이메일: your.email@example.com
- 포트폴리오: [https://your-portfolio.com](https://your-portfolio.com)

## 🙏 감사의 말

이 프로젝트를 만들면서 도움을 주신 모든 분들께 감사드립니다.

특히 다음 리소스들을 참고했습니다:
- [React 공식 문서](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)

## 📊 프로젝트 통계

![GitHub stars](https://img.shields.io/github/stars/your-username/portfolio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/portfolio-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/portfolio-website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/portfolio-website)

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

