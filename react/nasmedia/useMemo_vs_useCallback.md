# useMemo vs useCallback 차이점 가이드

이 문서는 React의 `useMemo`와 `useCallback` Hook의 차이점과 사용법을 설명합니다.

---

## 📋 목차

1. [핵심 차이점](#핵심-차이점)
2. [useMemo 상세 설명](#usememo-상세-설명)
3. [useCallback 상세 설명](#usecallback-상세-설명)
4. [실제 비교 예시](#실제-비교-예시)
5. [언제 무엇을 사용할까?](#언제-무엇을-사용할까)
6. [내부 구현 비교](#내부-구현-비교)
7. [프로젝트에서의 실제 사용](#프로젝트에서의-실제-사용)

---

## 핵심 차이점

### 요약표

| 구분 | useMemo | useCallback |
|------|---------|-------------|
| **메모이제이션 대상** | **값/객체** | **함수** |
| **반환값** | 계산된 값 | 함수 참조 |
| **사용 목적** | 비용이 큰 계산 결과 저장 | 함수 재생성 방지 |
| **성능 최적화** | 계산 비용 절감 | 함수 재생성 비용 절감 |

### 한 줄 요약

- **useMemo**: 값을 메모이제이션 (객체, 배열, 계산 결과 등)
- **useCallback**: 함수를 메모이제이션 (이벤트 핸들러, 콜백 함수 등)

---

## useMemo 상세 설명

### 기본 문법

```jsx
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b),
  [a, b]  // 의존성 배열
);
```

### 동작 방식

1. **의존성 배열의 값이 변경되면**: 함수를 실행하여 새로운 값을 계산
2. **의존성이 동일하면**: 이전에 계산한 값을 재사용 (재계산 안 함)

### 현재 프로젝트 예시

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

**동작 설명**:
- `activeSection`이 변경될 때만 새로운 스타일 객체 생성
- `activeSection`이 같으면 이전 객체 재사용
- 불필요한 객체 생성 방지로 성능 최적화

### useMemo 없이 사용한다면?

```jsx
// ❌ 매 렌더마다 새 객체 생성
const fullCoverStyle = {
  transform: `translateY(-${activeSection * 100}vh)`,
  transition: 'transform 1s ease',
};
```

**문제점**:
- 컴포넌트가 리렌더링될 때마다 새로운 객체 생성
- 자식 컴포넌트에 props로 전달 시 불필요한 리렌더링 발생 가능
- 메모리 사용량 증가

### useMemo 사용 예시

```jsx
// ✅ 복잡한 계산 결과 메모이제이션
const expensiveValue = useMemo(
  () => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += data[i] * 2;
    }
    return result;
  },
  [data]
);

// ✅ 객체 props 메모이제이션
const style = useMemo(
  () => ({
    color: isActive ? 'red' : 'blue',
    fontSize: size + 'px',
  }),
  [isActive, size]
);

// ✅ 배열 필터링 결과 메모이제이션
const filteredItems = useMemo(
  () => items.filter(item => item.category === selectedCategory),
  [items, selectedCategory]
);
```

---

## useCallback 상세 설명

### 기본 문법

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b]  // 의존성 배열
);
```

### 동작 방식

1. **의존성 배열의 값이 변경되면**: 새로운 함수 생성
2. **의존성이 동일하면**: 이전에 생성한 함수 참조 재사용

### 현재 프로젝트 예시

```jsx
// src/App.jsx (58-72번 줄)
const handleWheel = useCallback(
  (event) => {
    if (wheelLock.current || isMenuOpen || showIntro) {
      return;
    }
    const delta = event.deltaY;
    if (delta === 0) return;
    wheelLock.current = true;
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
  },
  [changeSection, isMenuOpen, showIntro]
);
```

**동작 설명**:
- `changeSection`, `isMenuOpen`, `showIntro`가 변경될 때만 새 함수 생성
- 의존성이 같으면 같은 함수 참조 재사용
- 이벤트 핸들러를 안정적으로 유지하여 자식 컴포넌트 리렌더링 방지

### useCallback 없이 사용한다면?

```jsx
// ❌ 매 렌더마다 새 함수 생성
const handleWheel = (event) => {
  // ...
};
```

**문제점**:
- 컴포넌트가 리렌더링될 때마다 새로운 함수 생성
- 자식 컴포넌트에 props로 전달 시 매번 새로운 함수로 인식
- `React.memo`로 최적화된 자식 컴포넌트도 불필요하게 리렌더링됨

### useCallback 사용 예시

```jsx
// ✅ 이벤트 핸들러 메모이제이션
const handleClick = useCallback(
  () => {
    console.log('Clicked!', id);
  },
  [id]
);

// ✅ 자식 컴포넌트에 전달하는 콜백
const handleSubmit = useCallback(
  (data) => {
    onSubmit(data);
  },
  [onSubmit]
);

// ✅ 조건부 로직이 있는 핸들러
const handleChange = useCallback(
  (value) => {
    if (isValid(value)) {
      setValue(value);
    }
  },
  [isValid]
);
```

---

## 실제 비교 예시

### 같은 결과를 다른 방식으로 (잘못된 사용)

```jsx
// ❌ useMemo로 함수를 메모이제이션 (잘못된 사용)
const handleWheel = useMemo(
  () => (event) => {
    // 함수 로직
  },
  [deps]
);
// 문제: 함수를 반환하지만, 사용 시 () 호출이 필요하거나 복잡함

// ✅ useCallback으로 함수를 메모이제이션 (올바른 사용)
const handleWheel = useCallback(
  (event) => {
    // 함수 로직
  },
  [deps]
);
// 장점: 직접 함수로 사용 가능
```

```jsx
// ❌ useCallback으로 값을 메모이제이션 (잘못된 사용)
const fullCoverStyle = useCallback(
  () => ({ transform: '...', transition: '...' }),
  [activeSection]
);
// 문제: 함수를 반환하므로 사용 시 () 호출 필요
// <div style={fullCoverStyle()} />  // 함수 호출 필요

// ✅ useMemo로 값을 메모이제이션 (올바른 사용)
const fullCoverStyle = useMemo(
  () => ({ transform: '...', transition: '...' }),
  [activeSection]
);
// 장점: 직접 객체로 사용 가능
// <div style={fullCoverStyle} />  // 바로 사용
```

### 실제 사용 비교

```jsx
// useMemo: 스타일 객체
const style = useMemo(
  () => ({ color: 'red', size: 'large' }),
  [color, size]
);
<div style={style} />  // ✅ 객체 직접 사용

// useCallback: 이벤트 핸들러
const handleClick = useCallback(
  () => console.log('clicked'),
  []
);
<button onClick={handleClick} />  // ✅ 함수 직접 사용
```

---

## 언제 무엇을 사용할까?

### useMemo 사용 시기

✅ **사용하는 경우**:
- 복잡한 계산 결과를 저장할 때
- 객체나 배열을 props로 전달할 때
- 자식 컴포넌트의 불필요한 리렌더링을 방지할 때
- 필터링, 정렬, 변환 등의 배열 연산 결과를 저장할 때

```jsx
// 예시 1: 복잡한 계산
const expensiveValue = useMemo(
  () => heavyCalculation(data),
  [data]
);

// 예시 2: 객체/배열 props
const config = useMemo(
  () => ({
    apiUrl: process.env.API_URL,
    timeout: 5000,
  }),
  []
);

// 예시 3: 필터링 결과
const visibleItems = useMemo(
  () => items.filter(item => item.visible),
  [items]
);
```

### useCallback 사용 시기

✅ **사용하는 경우**:
- 함수를 props로 전달할 때
- 자식 컴포넌트가 `React.memo`로 최적화되어 있을 때
- 이벤트 핸들러를 안정적으로 유지해야 할 때
- 의존성 배열에 함수가 포함된 다른 Hook의 의존성으로 사용할 때

```jsx
// 예시 1: 이벤트 핸들러
const handleClick = useCallback(
  () => { /* ... */ },
  [deps]
);

// 예시 2: 자식 컴포넌트에 전달
<ChildComponent onAction={handleAction} />

// 예시 3: useEffect의 의존성
useEffect(() => {
  fetchData();
}, [fetchData]);  // fetchData가 useCallback으로 메모이제이션되어야 함
```

### 사용하지 않아도 되는 경우

❌ **과도한 최적화는 피해야 함**:
- 간단한 계산이나 객체 생성
- 의존성이 자주 변경되는 경우
- 메모이제이션 자체의 오버헤드가 더 큰 경우

```jsx
// ❌ 불필요한 useMemo
const simpleValue = useMemo(() => a + b, [a, b]);
// 단순 덧셈은 useMemo 없이도 충분히 빠름

// ✅ 그냥 사용
const simpleValue = a + b;

// ❌ 불필요한 useCallback
const simpleHandler = useCallback(() => {
  console.log('hello');
}, []);
// 의존성이 없고 간단한 함수는 useCallback 불필요

// ✅ 그냥 사용
const simpleHandler = () => {
  console.log('hello');
};
```

---

## 내부 구현 비교

### useMemo 내부 (개념적)

```jsx
function useMemo(fn, deps) {
  const prevDeps = useRef(deps);
  const prevValue = useRef();
  
  // 의존성 비교
  if (depsChanged(prevDeps.current, deps)) {
    // 의존성이 변경되었으면 새로 계산
    prevValue.current = fn();
    prevDeps.current = deps;
  }
  
  // 캐시된 값 반환
  return prevValue.current;
}
```

**동작 흐름**:
1. 이전 의존성과 현재 의존성 비교
2. 변경되었으면 함수 실행하여 새 값 계산
3. 변경되지 않았으면 캐시된 값 반환

### useCallback 내부 (개념적)

```jsx
function useCallback(fn, deps) {
  const prevDeps = useRef(deps);
  const prevFn = useRef();
  
  // 의존성 비교
  if (depsChanged(prevDeps.current, deps)) {
    // 의존성이 변경되었으면 새 함수 반환
    prevFn.current = fn;
    prevDeps.current = deps;
  }
  
  // 캐시된 함수 반환
  return prevFn.current;
}
```

**동작 흐름**:
1. 이전 의존성과 현재 의존성 비교
2. 변경되었으면 새 함수 반환
3. 변경되지 않았으면 캐시된 함수 반환

### 실제 관계

사실 `useCallback`은 `useMemo`의 특수한 경우입니다:

```jsx
// useCallback은 다음과 같이 구현될 수 있음
function useCallback(fn, deps) {
  return useMemo(() => fn, deps);
}
```

하지만 React는 성능 최적화를 위해 별도로 구현합니다.

---

## 프로젝트에서의 실제 사용

### App.jsx에서의 사용 패턴

#### 1. useMemo: 스타일 객체 메모이제이션

```jsx
// src/App.jsx (101-107번 줄)
const fullCoverStyle = useMemo(
  () => ({
    transform: `translateY(-${activeSection * 100}vh)`,
    transition: 'transform 1s ease',
  }),
  [activeSection]
);

// 사용
<div className="full_cover" style={fullCoverStyle}>
  {/* 섹션들 */}
</div>
```

**효과**:
- `activeSection`이 변경될 때만 새 스타일 객체 생성
- 불필요한 객체 생성 방지
- CSS transition이 부드럽게 작동

#### 2. useCallback: 이벤트 핸들러 메모이제이션

```jsx
// src/App.jsx (58-72번 줄)
const handleWheel = useCallback(
  (event) => {
    if (wheelLock.current || isMenuOpen || showIntro) {
      return;
    }
    const delta = event.deltaY;
    if (delta === 0) return;
    wheelLock.current = true;
    changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
    window.setTimeout(() => {
      wheelLock.current = false;
    }, 1000);
  },
  [changeSection, isMenuOpen, showIntro]
);

// 사용
<div id="fullpage" onWheel={handleWheel}>
  {/* ... */}
</div>
```

**효과**:
- 의존성이 변경될 때만 새 함수 생성
- 이벤트 핸들러가 안정적으로 유지됨
- 불필요한 이벤트 리스너 재등록 방지

#### 3. useCallback: 터치 이벤트 핸들러

```jsx
// src/App.jsx (79-95번 줄)
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

// 사용
<div
  id="fullpage"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  {/* ... */}
</div>
```

**효과**:
- 모바일 터치 이벤트 핸들러 안정성 확보
- 의존성 변경 시에만 함수 재생성
- 터치 스와이프 성능 최적화

---

## 📊 요약 비교표

| 항목 | useMemo | useCallback |
|------|---------|-------------|
| **메모이제이션 대상** | 값/객체/배열 | 함수 |
| **반환값** | 계산된 값 | 함수 참조 |
| **사용 예** | `const value = useMemo(() => {...}, [deps])` | `const fn = useCallback(() => {...}, [deps])` |
| **주요 목적** | 비용이 큰 계산 결과 저장 | 함수 재생성 방지 |
| **성능 이점** | 계산 비용 절감 | 함수 생성 비용 절감 |
| **자식 컴포넌트 최적화** | 객체 props 안정화 | 함수 props 안정화 |
| **내부 구현** | 함수 실행 결과 저장 | 함수 자체 저장 |

---

## 💡 기억하기

### 간단한 규칙

1. **값이 필요하면** → `useMemo`
   ```jsx
   const style = useMemo(() => ({...}), [deps]);
   ```

2. **함수가 필요하면** → `useCallback`
   ```jsx
   const handler = useCallback(() => {...}, [deps]);
   ```

3. **둘 다 의존성 배열이 변경될 때만 재계산/재생성**

4. **과도한 최적화는 피하기** - 간단한 계산이나 함수는 그냥 사용

---

## 🔗 관련 문서

- [React 공식 문서 - useMemo](https://react.dev/reference/react/useMemo)
- [React 공식 문서 - useCallback](https://react.dev/reference/react/useCallback)
- [나스미디어 프로젝트 컴포넌트 문서](./ComponentDocumentation.md)

---

**작성일**: 2024  
**프로젝트**: 나스미디어 React 웹사이트




