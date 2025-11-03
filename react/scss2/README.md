# React + SCSS 예제 프로젝트

이 프로젝트는 React에서 SCSS를 사용하는 방법을 배우기 위한 실습 예제입니다.

## 📁 프로젝트 구조

```
my-app/
├── src/
│   ├── examples/           # 예제 컴포넌트들
│   │   ├── Button.jsx      # 버튼 컴포넌트 (일반 SCSS)
│   │   ├── Button.scss     
│   │   ├── Card.jsx        # 카드 컴포넌트 (CSS Modules)
│   │   ├── Card.module.scss
│   │   ├── TodoApp.jsx     # Todo 앱 (CSS Modules)
│   │   ├── TodoApp.module.scss
│   │   ├── ExampleApp.jsx  # 메인 예제 앱
│   │   ├── ExampleApp.scss
│   │   └── README.md
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── scss-examples.md        # SCSS 문법 가이드
├── react-styling-guide.md  # React 스타일링 방법 비교
└── README.md              # 이 파일
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 을 엽니다.

### 3. 빌드

```bash
npm run build
```

## 📚 학습 자료

### 1. SCSS 기본 문법
- 📄 **[scss-examples.md](./scss-examples.md)** - SCSS의 모든 기능을 설명합니다
  - 변수 (Variables)
  - 중첩 (Nesting)
  - 믹스인 (Mixins)
  - 상속 (Extend/Inheritance)
  - 연산자 (Operators)
  - 함수 (Functions)
  - 조건문 & 반복문
  - 파셜 & 임포트
  - **React에서 SCSS 사용하기**

### 2. React 스타일링 방법 비교
- 📄 **[react-styling-guide.md](./react-styling-guide.md)** - React에서 사용 가능한 모든 스타일링 방법을 비교합니다
  - 일반 CSS
  - CSS Modules
  - SCSS/SASS
  - Styled-Components
  - Emotion
  - Tailwind CSS
  - Inline Styles
  - 각 방법의 장단점 비교표

## 🎨 포함된 예제

### 1. 버튼 컴포넌트 (일반 SCSS)
- **파일**: `src/examples/Button.jsx`, `Button.scss`
- **기능**: 다양한 크기와 색상 변형
- **배울 점**: SCSS 변수, 믹스인, BEM 네이밍

### 2. 카드 컴포넌트 (CSS Modules)
- **파일**: `src/examples/Card.jsx`, `Card.module.scss`
- **기능**: 이미지, 태그, 푸터를 포함하는 카드
- **배울 점**: CSS Modules 사용법, 로컬 스코프

### 3. Todo 앱 (CSS Modules + SCSS)
- **파일**: `src/examples/TodoApp.jsx`, `TodoApp.module.scss`
- **기능**: 완전한 할 일 관리 애플리케이션
- **배울 점**: 
  - 복잡한 컴포넌트 스타일링
  - 반응형 디자인
  - 상태에 따른 스타일 변경
  - 그라디언트 배경
  - 커스텀 스크롤바

## 🛠️ 사용된 기술

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **SCSS** - CSS 전처리기
- **CSS Modules** - 스타일 모듈화

## 💡 SCSS 핵심 기능 예제

### 변수 사용
```scss
$primary-color: #3498db;
$spacing-md: 16px;

.button {
  background-color: $primary-color;
  padding: $spacing-md;
}
```

### 중첩 (Nesting)
```scss
.card {
  padding: 20px;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  &__title {
    font-size: 1.5rem;
  }
}
```

### 믹스인 (Mixin)
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

### 함수
```scss
.button {
  background: $primary-color;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}
```

## 📖 추가 학습 자료

- [SCSS 공식 문서](https://sass-lang.com/)
- [React 공식 문서](https://react.dev/)
- [CSS Modules 가이드](https://github.com/css-modules/css-modules)
- [BEM 방법론](http://getbem.com/)

## ⚡ 빠른 팁

1. **CSS Modules 파일명**: `*.module.scss` 또는 `*.module.css`
2. **일반 SCSS 파일명**: `*.scss`
3. **import 방법**:
   ```jsx
   // 일반 SCSS
   import './Button.scss';
   
   // CSS Modules
   import styles from './Button.module.scss';
   ```
4. **클래스 사용**:
   ```jsx
   // 일반 SCSS
   <button className="btn btn--primary">버튼</button>
   
   // CSS Modules
   <button className={styles.btn}>버튼</button>
   ```

## 🎯 다음 단계

1. ✅ 예제 코드 살펴보기
2. ✅ 직접 스타일 수정해보기
3. ✅ 새로운 컴포넌트 만들어보기
4. ✅ 다른 스타일링 방법 시도해보기 (Styled-Components, Tailwind 등)

## 📝 라이선스

MIT

---

행복한 코딩 되세요! 🚀✨
