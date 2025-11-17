# FixAnimation.jsx useEffect 설명

이 문서는 `FixAnimation.jsx`의 4-16번 줄에 있는 `useEffect` Hook과 조건부 렌더링의 동작 원리와 역할을 설명합니다.

---

## 📋 목차

1. [코드 개요](#코드-개요)
2. [useEffect 상세 설명](#useeffect-상세-설명)
3. [조건부 렌더링](#조건부-렌더링)
4. [전체 동작 흐름](#전체-동작-흐름)
5. [클린업 함수의 중요성](#클린업-함수의-중요성)
6. [옵셔널 체이닝](#옵셔널-체이닝)
7. [실제 사용 예시](#실제-사용-예시)

---

## 코드 개요

### 전체 코드

```jsx
// src/components/FixAnimation.jsx (4-16번 줄)
useEffect(() => {
  if (!visible) {
    return;
  }
  const timer = window.setTimeout(() => {
    onFinished?.();
  }, 3200);
  return () => window.clearTimeout(timer);
}, [visible, onFinished]);

if (!visible) {
  return null;
}
```

### 코드의 역할

이 코드는 인트로 애니메이션의 **타이머 관리**와 **조건부 렌더링**을 담당합니다.

---

## useEffect 상세 설명

### 전체 구조

```jsx
useEffect(() => {
  // 1. 조건 확인
  if (!visible) {
    return;
  }
  
  // 2. 타이머 설정
  const timer = window.setTimeout(() => {
    onFinished?.();
  }, 3200);
  
  // 3. 클린업 함수
  return () => window.clearTimeout(timer);
}, [visible, onFinished]);
```

### 단계별 동작

#### 1단계: 조건 확인 (5-7번 줄)

```jsx
if (!visible) {
  return;
}
```

**역할**: 
- `visible`이 `false`면 타이머를 설정하지 않고 즉시 종료
- 애니메이션이 숨겨진 상태에서는 타이머가 필요 없음

**동작**:
```jsx
// visible = false인 경우
if (!false) {  // if (true)
  return;  // 실행 안 됨
}
// 타이머 설정 진행

// visible = true인 경우
if (!true) {  // if (false)
  return;  // 실행됨 → 타이머 설정 안 함
}
```

#### 2단계: 타이머 설정 (8-10번 줄)

```jsx
const timer = window.setTimeout(() => {
  onFinished?.();
}, 3200);
```

**역할**: 
- `visible`이 `true`일 때만 실행
- 3.2초(3200ms) 후에 `onFinished` 콜백 함수 호출
- `onFinished?.()`: 옵셔널 체이닝으로 안전하게 호출

**동작**:
```jsx
// 3.2초 후 실행될 함수
const callback = () => {
  onFinished?.();  // 콜백 호출
};

// 타이머 설정
const timer = window.setTimeout(callback, 3200);
```

**타임라인**:
```
0ms:    타이머 설정
        ↓
3200ms: onFinished() 호출
```

#### 3단계: 클린업 함수 (11번 줄)

```jsx
return () => window.clearTimeout(timer);
```

**역할**: 
- 컴포넌트가 언마운트되거나 의존성이 변경될 때 실행
- 설정한 타이머를 취소하여 메모리 누수 방지

**실행 시점**:
1. 컴포넌트 언마운트 시
2. `visible` 또는 `onFinished` 변경 시 (effect 재실행 전)

**예시**:
```jsx
// 컴포넌트 마운트
useEffect 실행 → 타이머 설정

// 1초 후 컴포넌트 언마운트
클린업 함수 실행 → 타이머 취소
→ onFinished() 호출 안 됨
```

#### 4단계: 의존성 배열 (12번 줄)

```jsx
}, [visible, onFinished]);
```

**역할**: 
- `visible` 또는 `onFinished`가 변경될 때 effect 재실행
- 이전 effect의 클린업 함수 실행 후 새 effect 실행

**동작**:
```jsx
// 초기 마운트
visible = true, onFinished = 함수1
→ effect 실행, 타이머 설정

// visible 변경
visible = false
→ 클린업 함수 실행 (타이머 취소)
→ effect 재실행 (타이머 설정 안 함)

// onFinished 변경
onFinished = 함수2
→ 클린업 함수 실행 (타이머 취소)
→ effect 재실행 (새 타이머 설정)
```

---

## 조건부 렌더링

### 코드 (14-16번 줄)

```jsx
if (!visible) {
  return null;
}
```

### 역할

- `visible`이 `false`면 아무것도 렌더링하지 않음
- `null`을 반환하여 DOM에 요소를 추가하지 않음

### 동작

```jsx
// visible = true인 경우
if (!true) {  // if (false)
  return null;  // 실행 안 됨
}
// 컴포넌트 렌더링 진행

// visible = false인 경우
if (!false) {  // if (true)
  return null;  // 실행됨 → 렌더링 중단
}
```

### React에서 null 반환의 의미

```jsx
// null 반환 시
return null;
// → React가 아무것도 렌더링하지 않음
// → DOM에 요소가 추가되지 않음
// → 컴포넌트가 화면에 나타나지 않음
```

---

## 전체 동작 흐름

### 시나리오 1: 컴포넌트 마운트 (visible = true)

```
1. 컴포넌트 마운트
   ↓
2. useEffect 실행
   ↓
3. visible = true 확인
   ↓
4. 타이머 설정 (3.2초)
   ↓
5. 컴포넌트 렌더링 (애니메이션 표시)
   ↓
6. 3.2초 후
   ↓
7. onFinished() 호출
   ↓
8. App.jsx에서 setShowIntro(false) 실행
   ↓
9. visible = false
   ↓
10. useEffect 재실행
    if (!visible) return (타이머 설정 안 함)
    ↓
11. 렌더링
    if (!visible) return null (렌더링 안 함)
    ↓
12. 컴포넌트 언마운트 (화면에서 사라짐)
```

### 시나리오 2: visible이 false로 변경

```
1. visible = false로 변경
   ↓
2. useEffect 재실행
   ↓
3. if (!visible) return
   → 타이머 설정 안 함
   ↓
4. if (!visible) return null
   → 렌더링 안 함
   ↓
5. 컴포넌트가 화면에서 사라짐
```

### 시나리오 3: 컴포넌트 언마운트

```
1. 컴포넌트 언마운트
   ↓
2. 클린업 함수 실행
   ↓
3. window.clearTimeout(timer)
   ↓
4. 타이머 취소 (메모리 누수 방지)
```

### 시나리오 4: visible이 true → false → true로 변경

```
1. visible = true
   → 타이머 설정

2. visible = false로 변경
   → 클린업 함수 실행 (타이머 취소)
   → effect 재실행 (타이머 설정 안 함)
   → return null (렌더링 안 함)

3. visible = true로 변경
   → effect 재실행
   → 타이머 재설정
   → 컴포넌트 렌더링
```

---

## 클린업 함수의 중요성

### 메모리 누수 방지

#### ❌ 클린업 함수 없이 사용한다면?

```jsx
useEffect(() => {
  const timer = window.setTimeout(() => {
    onFinished?.();
  }, 3200);
  // 클린업 함수 없음
}, [visible, onFinished]);
```

**문제점**:
1. 컴포넌트가 언마운트되어도 타이머가 계속 실행됨
2. 3.2초 후 `onFinished`가 호출되어 상태 업데이트 시도
3. 이미 언마운트된 컴포넌트의 상태를 업데이트하려고 시도
4. 메모리 누수 및 잠재적 오류 발생

**예시**:
```jsx
// 1. 컴포넌트 마운트
useEffect 실행 → 타이머 설정

// 2. 1초 후 컴포넌트 언마운트
컴포넌트 제거됨

// 3. 2.2초 후 (총 3.2초)
타이머 실행 → onFinished() 호출
→ 이미 언마운트된 컴포넌트의 상태 업데이트 시도
→ 경고 또는 오류 발생 가능
```

#### ✅ 클린업 함수 사용 시

```jsx
useEffect(() => {
  const timer = window.setTimeout(() => {
    onFinished?.();
  }, 3200);
  return () => window.clearTimeout(timer);  // 클린업 함수
}, [visible, onFinished]);
```

**장점**:
1. 컴포넌트 언마운트 시 타이머 자동 취소
2. 메모리 누수 방지
3. 안전한 상태 관리

**예시**:
```jsx
// 1. 컴포넌트 마운트
useEffect 실행 → 타이머 설정

// 2. 1초 후 컴포넌트 언마운트
클린업 함수 실행 → 타이머 취소
컴포넌트 제거됨

// 3. 2.2초 후 (총 3.2초)
타이머가 이미 취소되어 실행 안 됨
→ 안전함
```

### 클린업 함수 실행 시점

```jsx
// 1. 컴포넌트 언마운트 시
useEffect(() => {
  const timer = window.setTimeout(...);
  return () => {
    // 언마운트 시 실행
    window.clearTimeout(timer);
  };
}, []);

// 2. 의존성 변경 시 (effect 재실행 전)
useEffect(() => {
  const timer = window.setTimeout(...);
  return () => {
    // visible 또는 onFinished 변경 시 실행
    window.clearTimeout(timer);
  };
}, [visible, onFinished]);
```

---

## 옵셔널 체이닝 (?.)

### 코드

```jsx
onFinished?.();
```

### 역할

- `onFinished`가 `undefined` 또는 `null`이면 호출하지 않음
- 에러를 방지하여 안전하게 함수 호출

### 비교

#### ❌ 옵셔널 체이닝 없이

```jsx
onFinished();  // onFinished가 undefined면 에러 발생
```

**문제점**:
```jsx
// onFinished가 undefined인 경우
onFinished();
// TypeError: onFinished is not a function
```

#### ✅ 옵셔널 체이닝 사용

```jsx
onFinished?.();  // onFinished가 undefined면 아무것도 안 함
```

**장점**:
```jsx
// onFinished가 undefined인 경우
onFinished?.();
// 아무것도 실행 안 됨 (에러 없음)

// onFinished가 함수인 경우
onFinished?.();
// 함수 실행됨
```

### 옵셔널 체이닝 동작

```jsx
// onFinished가 함수인 경우
onFinished = () => setShowIntro(false);
onFinished?.();  // 함수 실행됨

// onFinished가 undefined인 경우
onFinished = undefined;
onFinished?.();  // 아무것도 실행 안 됨 (에러 없음)

// onFinished가 null인 경우
onFinished = null;
onFinished?.();  // 아무것도 실행 안 됨 (에러 없음)
```

---

## 조건부 렌더링의 두 가지 방법

### 1. useEffect 내부 (5-7번 줄)

```jsx
if (!visible) {
  return;  // effect 실행 중단
}
```

**역할**: 
- 타이머 설정을 막음
- effect 실행만 중단

**효과**:
- 타이머가 설정되지 않음
- 하지만 컴포넌트는 여전히 렌더링될 수 있음

### 2. 컴포넌트 렌더링 (14-16번 줄)

```jsx
if (!visible) {
  return null;  // 렌더링 중단
}
```

**역할**: 
- DOM에 아무것도 렌더링하지 않음
- 컴포넌트가 화면에 나타나지 않음

**효과**:
- 컴포넌트가 화면에 표시되지 않음
- DOM에 요소가 추가되지 않음

### 차이점

| 위치 | 역할 | 효과 |
|------|------|------|
| **useEffect 내부** | 타이머 설정 방지 | 타이머만 중단 |
| **컴포넌트 렌더링** | DOM 렌더링 방지 | 화면에 표시 안 함 |

### 함께 사용하는 이유

```jsx
// 1. useEffect 내부: 타이머 관리
useEffect(() => {
  if (!visible) {
    return;  // 타이머 설정 안 함
  }
  // 타이머 설정
}, [visible, onFinished]);

// 2. 컴포넌트 렌더링: 화면 표시 제어
if (!visible) {
  return null;  // 화면에 표시 안 함
}
```

**효과**:
- `visible = false`일 때 타이머도 설정 안 하고 화면에도 표시 안 함
- 완전히 비활성화됨

---

## 실제 사용 예시

### App.jsx에서의 사용

```jsx
// src/App.jsx
const [showIntro, setShowIntro] = useState(true);

<FixAnimation 
  visible={showIntro} 
  onFinished={() => setShowIntro(false)} 
/>
```

### 동작 과정

```
1. 페이지 로드
   showIntro = true
   ↓
2. FixAnimation 마운트
   visible = true
   ↓
3. useEffect 실행
   if (!true) return  // 실행 안 됨
   타이머 설정 (3.2초)
   ↓
4. 렌더링
   if (!true) return null  // 실행 안 됨
   애니메이션 표시
   ↓
5. 3.2초 후
   onFinished() 호출
   setShowIntro(false)
   ↓
6. showIntro = false
   visible = false
   ↓
7. useEffect 재실행
   if (!false) return  // 실행됨
   타이머 설정 안 함
   ↓
8. 렌더링
   if (!false) return null  // 실행됨
   애니메이션 숨김
```

### Props 전달

```jsx
// App.jsx
<FixAnimation 
  visible={showIntro}           // boolean
  onFinished={() => setShowIntro(false)}  // function
/>
```

**Props 타입**:
- `visible`: `boolean` - 애니메이션 표시 여부
- `onFinished`: `function` - 애니메이션 완료 콜백

---

## useEffect 의존성 배열 분석

### [visible, onFinished]

```jsx
}, [visible, onFinished]);
```

### visible이 변경될 때

#### true → false

```
1. visible = false로 변경
   ↓
2. 클린업 함수 실행
   window.clearTimeout(timer)  // 타이머 취소
   ↓
3. effect 재실행
   if (!false) return  // 실행됨
   타이머 설정 안 함
```

#### false → true

```
1. visible = true로 변경
   ↓
2. 클린업 함수 실행 (이전 effect가 있었다면)
   ↓
3. effect 재실행
   if (!true) return  // 실행 안 됨
   타이머 재설정 (3.2초)
```

### onFinished가 변경될 때

```
1. onFinished 함수 변경
   ↓
2. 클린업 함수 실행
   window.clearTimeout(timer)  // 이전 타이머 취소
   ↓
3. effect 재실행
   새로운 onFinished로 타이머 재설정
```

**이유**: 
- 새로운 콜백 함수로 타이머를 재설정해야 함
- 이전 콜백이 호출되는 것을 방지

---

## 요약

### 핵심 포인트

1. **useEffect**: `visible`이 `true`일 때만 3.2초 타이머 설정
2. **클린업 함수**: 컴포넌트 언마운트 시 타이머 취소
3. **조건부 렌더링**: `visible`이 `false`면 렌더링하지 않음
4. **옵셔널 체이닝**: `onFinished`가 없어도 에러 없이 동작

### 코드의 역할

| 부분 | 역할 |
|------|------|
| `if (!visible) return` | 타이머 설정 방지 |
| `window.setTimeout` | 3.2초 후 콜백 호출 |
| `return () => clearTimeout` | 타이머 취소 (메모리 관리) |
| `if (!visible) return null` | 렌더링 방지 |

### 보호 메커니즘

- **메모리 누수 방지**: 클린업 함수로 타이머 정리
- **조건부 실행**: `visible` 상태에 따라 동작 제어
- **안전한 호출**: 옵셔널 체이닝으로 에러 방지

---

## 관련 파일

- `src/components/FixAnimation.jsx`: 인트로 애니메이션 컴포넌트
- `src/App.jsx`: 메인 앱 컴포넌트 (상태 관리)

---

**작성일**: 2024  
**프로젝트**: 나스미디어 React 웹사이트

