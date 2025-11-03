# React useContext 가이드

## 📚 목차
1. [useContext란?](#usecontext란)
2. [왜 필요한가?](#왜-필요한가)
3. [기본 사용법](#기본-사용법)
4. [예제 프로젝트 구조](#예제-프로젝트-구조)
5. [Context 생성](#context-생성)
6. [Provider 설정](#provider-설정)
7. [useContext 사용](#usecontext-사용)
8. [전체 예제](#전체-예제)
9. [실행 방법](#실행-방법)

---

## useContext란?

`useContext`는 React의 Hook 중 하나로, **전역 상태 관리**를 위한 Context API를 더 간편하게 사용할 수 있게 해주는 훅입니다.

### Context API와 useContext의 관계

```
Context API = createContext + Provider + useContext
           ↓
    전역 상태 관리 시스템
```

**props drilling 문제 해결**: 컴포넌트 트리 여러 단계를 거치며 props를 전달하는 대신, Context를 통해 직접 값을 전달할 수 있습니다.

---

## 왜 필요한가?

### Props Drilling 문제

```tsx
// ❌ 나쁜 예: Props Drilling
function App() {
  const theme = 'dark';
  return <GrandParent theme={theme} />;
}

function GrandParent({ theme }) {
  return <Parent theme={theme} />;
}

function Parent({ theme }) {
  return <Child theme={theme} />; // 3단계를 거쳐야 전달됨
}

function Child({ theme }) {
  return <div>Current theme: {theme}</div>;
}
```

### useContext로 해결

```tsx
// ✅ 좋은 예: useContext 사용
function App() {
  return (
    <ThemeProvider>
      <GrandParent />
    </ThemeProvider>
  );
}

function GrandParent() {
  return <Parent />; // props 전달 불필요
}

function Parent() {
  return <Child />;  // props 전달 불필요
}

function Child() {
  const { theme } = useContext(ThemeContext); // 직접 접근
  return <div>Current theme: {theme}</div>;
}
```

---

## 기본 사용법

### 1단계: Context 생성

```tsx
import { createContext } from 'react';

// Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

### 2단계: Provider 컴포넌트 만들기

```tsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 3단계: useContext로 값 사용하기

```tsx
import { useContext } from 'react';

function MyComponent() {
  const { theme } = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
```

---

## 예제 프로젝트 구조

```
useContext/
├── src/
│   ├── contexts/
│   │   ├── ThemeContext.tsx    # 테마 관련 Context
│   │   └── UserContext.tsx     # 사용자 관련 Context
│   ├── components/
│   │   ├── ThemeToggle.tsx     # 테마 변경 컴포넌트
│   │   ├── Counter.tsx         # 카운터 컴포넌트
│   │   └── UserProfile.tsx     # 사용자 프로필 컴포넌트
│   ├── App.tsx                 # 메인 앱 컴포넌트
│   ├── main.tsx                # 진입점
│   └── index.css               # 전역 스타일
├── index.html
├── package.json
└── vite.config.ts
```

---

## Context 생성

### ThemeContext.tsx 상세 분석

```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. 타입 정의
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. Context 생성 (초기값: undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Provider 컴포넌트
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 상태 관리
  const [theme, setTheme] = useState<Theme>('light');

  // 테마 토글 함수
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Context.Provider로 감싸서 값 전달
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Custom Hook (선택사항이지만 권장)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  // Context가 Provider 밖에서 사용되면 에러 발생
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
```

### 주요 포인트

1. **타입 안정성**: TypeScript로 타입을 정의하여 안전한 개발
2. **초기값 관리**: `createContext`에 `undefined`를 초기값으로 설정
3. **Custom Hook**: 매번 `useContext`를 직접 사용하는 대신, `useTheme` 같은 커스텀 훅 생성
4. **에러 처리**: Provider 밖에서 사용 시 명확한 에러 메시지

---

## Provider 설정

### App.tsx에서 Provider로 감싸기

```tsx
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    // 중첩하여 여러 Context 사용 가능
    <ThemeProvider>
      <UserProvider>
        <div className="app">
          {/* 여기서부터 useContext 사용 가능 */}
          <SomeComponent />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
```

### Provider 중첩 순서

```tsx
<ThemeProvider>
  <UserProvider>
    {/* ThemeContext와 UserContext 모두 사용 가능 */}
    <Component />
  </UserProvider>
</ThemeProvider>
```

---

## useContext 사용

### 컴포넌트에서 사용하기

#### 방법 1: useContext 직접 사용

```tsx
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

#### 방법 2: Custom Hook 사용 (권장)

```tsx
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

**장점**:
- 코드가 더 깔끔함
- 에러 처리가 내장됨
- Provider 체크가 자동으로 됨

---

## 전체 예제

### ThemeContext.tsx

```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

### 컴포넌트에서 사용

```tsx
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h3>Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

---

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 열기

### 3. 빌드

```bash
npm run build
```

### 4. 프로덕션 미리보기

```bash
npm run preview
```

---

## 예제 프로젝트 기능

### 1. Theme Context
- 테마를 light/dark로 전환
- 여러 컴포넌트에서 테마 값 공유

### 2. Counter with Theme
- 테마에 따라 색상 변경
- Counter는 로컬 상태, 테마는 전역 상태

### 3. User Context
- 사용자 로그인/로그아웃
- 사용자 정보를 전역으로 관리

---

## useContext vs 다른 상태 관리

| 방법 | 사용 시기 | 복잡도 | 성능 |
|------|----------|--------|------|
| **useState** | 로컬 상태 | 낮음 | 빠름 |
| **useContext** | 몇 개 컴포넌트에 필요한 전역 상태 | 중간 | 중간 |
| **Redux** | 대규모 앱, 복잡한 상태 | 높음 | 빠름 |
| **Zustand** | 중간 규모 앱 | 낮음 | 빠름 |

### 언제 useContext를 사용해야 할까?

✅ **사용하면 좋은 경우**
- 사용자 인증 정보
- 테마 설정
- 언어 설정
- 알림 시스템
- 3-5단계 정도 깊이의 props drilling

❌ **다른 방법을 고려할 것**
- 매우 복잡한 상태 로직
- 성능이 중요한 대규모 앱
- 시간 여행 디버깅이 필요한 경우

---

## 주의사항

### 1. Provider 밖에서 사용하지 않기

```tsx
// ❌ 잘못된 사용
function App() {
  const { theme } = useTheme(); // 에러 발생!
  return <div>...</div>;
}

// ✅ 올바른 사용
function App() {
  return (
    <ThemeProvider>
      <SomeComponent /> {/* 여기서는 사용 가능 */}
    </ThemeProvider>
  );
}
```

### 2. Context 분리하기

```tsx
// ❌ 모든 것을 하나의 Context에
const AppContext = createContext({
  user: null,
  theme: 'light',
  language: 'ko',
  notifications: []
});

// ✅ 관련된 것끼리 분리
const UserContext = createContext(...);
const ThemeContext = createContext(...);
const LanguageContext = createContext(...);
```

### 3. 불필요한 리렌더링 방지

```tsx
// ⚠️ 주의: 전체 객체를 value로 전달하면 리렌더링 발생
<Context.Provider value={{ user, theme, language }}>

// ✅ useMemo 사용으로 방지
const value = useMemo(() => ({ user, theme, language }), [user, theme, language]);
<Context.Provider value={value}>
```

---

## 요약

1. **useContext**는 React의 전역 상태 관리 훅입니다
2. **Props Drilling** 문제를 해결합니다
3. **Context 생성 → Provider 설정 → useContext 사용**의 3단계로 사용
4. **Custom Hook**을 만들어 사용하면 더 안전하고 편리합니다
5. 복잡한 대규모 앱에는 Redux나 Zustand 등 다른 라이브러리를 고려하세요

---

## 추가 학습 자료

- [React 공식 문서 - useContext](https://react.dev/reference/react/useContext)
- [React 공식 문서 - Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [TypeScript with React Hooks](https://react-typescript-cheatsheet.netlify.app/)

---

**Happy Coding! 🚀**



