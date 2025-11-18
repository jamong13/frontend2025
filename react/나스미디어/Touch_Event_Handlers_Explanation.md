# 터치 이벤트 핸들러 설명 (App.jsx 75-100 라인)

## 개요

이 문서는 `App.jsx`의 75-100 라인에 있는 터치 이벤트 핸들러들에 대한 상세한 설명입니다. 이 핸들러들은 모바일 디바이스에서 사용자가 화면을 스와이프하여 섹션을 이동할 수 있도록 구현되었습니다.

---

## 코드 전체 구조

```jsx
const handleTouchStart = useCallback((event) => {
  if (isMenuOpen || showIntro) return;
  touchStartY.current = event.touches[0].clientY;
}, [isMenuOpen, showIntro]);

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

const handleTouchEnd = useCallback(() => {
  touchStartY.current = null;
}, []);
```

---

## 1. handleTouchStart (75-78 라인)

### 역할

터치가 시작될 때 초기 터치 위치를 저장합니다.

### 코드 분석

```jsx
const handleTouchStart = useCallback((event) => {
  if (isMenuOpen || showIntro) return;
  touchStartY.current = event.touches[0].clientY;
}, [isMenuOpen, showIntro]);
```

### 상세 설명

#### 1. 조건 체크

```jsx
if (isMenuOpen || showIntro) return;
```

| 조건 | 의미 | 이유 |
|------|------|------|
| `isMenuOpen` | 메뉴가 열려있는지 확인 | 메뉴가 열려있으면 섹션 이동 비활성화 |
| `showIntro` | 인트로 애니메이션이 진행 중인지 확인 | 인트로 중에는 섹션 이동 비활성화 |

**동작:**
- 메뉴가 열려있거나 인트로가 진행 중이면 → 함수 종료
- 그렇지 않으면 → 터치 위치 저장

#### 2. 터치 위치 저장

```jsx
touchStartY.current = event.touches[0].clientY;
```

| 요소 | 설명 |
|------|------|
| `event.touches` | 터치 이벤트의 모든 터치 포인트 배열 |
| `event.touches[0]` | 첫 번째 터치 포인트 (멀티터치 지원) |
| `clientY` | 뷰포트 기준 Y 좌표 (픽셀 단위) |
| `touchStartY.current` | `useRef`로 저장된 시작 Y 좌표 |

**예시:**
```
사용자가 화면 중앙(500px)을 터치
→ touchStartY.current = 500
```

### useCallback 의존성

```jsx
}, [isMenuOpen, showIntro]);
```

- `isMenuOpen`, `showIntro`가 변경되면 함수 재생성
- 불필요한 재렌더링 방지

---

## 2. handleTouchMove (80-96 라인)

### 역할

터치가 이동하는 동안 스와이프 방향과 거리를 계산하여 섹션을 변경합니다.

### 코드 분석

```jsx
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
```

### 상세 설명

#### 1. 조건 체크 (82 라인)

```jsx
if (touchStartY.current == null || wheelLock.current || isMenuOpen || showIntro) return;
```

| 조건 | 의미 | 이유 |
|------|------|------|
| `touchStartY.current == null` | 시작 위치가 저장되지 않았는지 확인 | `handleTouchStart`가 실행되지 않았거나 이미 초기화됨 |
| `wheelLock.current` | 휠/터치 이벤트가 잠겨있는지 확인 | 연속 이벤트 방지 |
| `isMenuOpen` | 메뉴가 열려있는지 확인 | 메뉴 열림 중 섹션 이동 비활성화 |
| `showIntro` | 인트로가 진행 중인지 확인 | 인트로 중 섹션 이동 비활성화 |

**동작:**
- 하나라도 `true`이면 → 함수 종료
- 모두 `false`이면 → 스와이프 계산 진행

#### 2. 현재 터치 위치 가져오기 (83 라인)

```jsx
const currentY = event.touches[0].clientY;
```

| 요소 | 설명 |
|------|------|
| `event.touches[0]` | 첫 번째 터치 포인트 |
| `clientY` | 현재 터치 위치의 Y 좌표 |

**예시:**
```
시작 위치: touchStartY.current = 500px
현재 위치: currentY = 300px
```

#### 3. 이동 거리 계산 (84 라인)

```jsx
const delta = touchStartY.current - currentY;
```

| 값 | 의미 | 방향 |
|------|------|------|
| **양수** | 위로 스와이프 | 다음 섹션으로 이동 |
| **음수** | 아래로 스와이프 | 이전 섹션으로 이동 |
| **0** | 이동 없음 | 섹션 변경 없음 |

**계산 예시:**

**위로 스와이프 (다음 섹션):**
```
touchStartY.current = 500px
currentY = 300px
delta = 500 - 300 = 200 (양수)
→ 다음 섹션으로 이동
```

**아래로 스와이프 (이전 섹션):**
```
touchStartY.current = 300px
currentY = 500px
delta = 300 - 500 = -200 (음수)
→ 이전 섹션으로 이동
```

#### 4. 최소 이동 거리 체크 (85-87 라인)

```jsx
if (Math.abs(delta) < 50) {
  return;
}
```

| 요소 | 설명 |
|------|------|
| `Math.abs(delta)` | 이동 거리의 절댓값 |
| `50` | 최소 이동 거리 (픽셀) |

**이유:**
- 작은 움직임(실수, 떨림) 무시
- 의도적인 스와이프만 인식

**동작:**
```
delta = 30px → Math.abs(30) = 30 < 50 → 함수 종료 (섹션 변경 없음)
delta = 100px → Math.abs(100) = 100 >= 50 → 섹션 변경 진행
```

#### 5. 이벤트 잠금 설정 (88 라인)

```jsx
wheelLock.current = true;
```

**목적:**
- 연속 터치 이벤트 방지
- 섹션 변경 중 추가 이벤트 무시

#### 6. 섹션 변경 (89 라인)

```jsx
changeSection((prev) => (delta > 0 ? prev + 1 : prev - 1));
```

| 조건 | delta 값 | 동작 | 결과 |
|------|----------|------|------|
| 위로 스와이프 | 양수 | `prev + 1` | 다음 섹션 |
| 아래로 스와이프 | 음수 | `prev - 1` | 이전 섹션 |

**예시:**

**현재 섹션 2에서 위로 스와이프:**
```
delta = 200 (양수)
changeSection((prev) => prev + 1)
→ activeSection: 2 → 3
```

**현재 섹션 2에서 아래로 스와이프:**
```
delta = -200 (음수)
changeSection((prev) => prev - 1)
→ activeSection: 2 → 1
```

#### 7. 잠금 해제 타이머 (90-92 라인)

```jsx
window.setTimeout(() => {
  wheelLock.current = false;
}, 1000);
```

| 요소 | 설명 |
|------|------|
| `1000` | 1초 (밀리초) |
| `wheelLock.current = false` | 잠금 해제 |

**목적:**
- 1초 후 다음 이벤트 허용
- 섹션 전환 애니메이션 완료 대기

**타이밍:**
```
0ms: 터치 이벤트 발생, wheelLock = true
0ms: 섹션 변경 시작 (CSS transition 1s)
1000ms: 섹션 변경 완료
1000ms: wheelLock = false (다음 이벤트 허용)
```

#### 8. 시작 위치 초기화 (93 라인)

```jsx
touchStartY.current = null;
```

**목적:**
- 터치 이벤트 완료 표시
- 다음 터치를 위한 초기화

### useCallback 의존성

```jsx
}, [changeSection, isMenuOpen, showIntro]);
```

- `changeSection`, `isMenuOpen`, `showIntro` 변경 시 함수 재생성
- 최신 상태/함수 참조 유지

---

## 3. handleTouchEnd (98-100 라인)

### 역할

터치가 끝날 때 시작 위치를 초기화합니다.

### 코드 분석

```jsx
const handleTouchEnd = useCallback(() => {
  touchStartY.current = null;
}, []);
```

### 상세 설명

#### 초기화

```jsx
touchStartY.current = null;
```

**목적:**
- 터치 이벤트 종료 표시
- 다음 터치를 위한 준비

**시나리오:**

**정상적인 스와이프:**
```
1. handleTouchStart: touchStartY = 500
2. handleTouchMove: 섹션 변경, touchStartY = null
3. handleTouchEnd: touchStartY = null (이미 null이지만 안전장치)
```

**스와이프 취소 (50px 미만):**
```
1. handleTouchStart: touchStartY = 500
2. handleTouchMove: delta < 50, 함수 종료 (touchStartY 유지)
3. handleTouchEnd: touchStartY = null (초기화)
```

### useCallback 의존성

```jsx
}, []);
```

- 의존성 없음 → 함수는 한 번만 생성
- 항상 동일한 함수 참조

---

## 전체 터치 이벤트 흐름

### 정상적인 스와이프 시나리오

```
1. 사용자가 화면을 터치
   ↓
2. handleTouchStart 실행
   - touchStartY.current = 500 (시작 위치 저장)
   ↓
3. 사용자가 손가락을 위로 이동
   ↓
4. handleTouchMove 실행 (여러 번 호출)
   - currentY = 300
   - delta = 500 - 300 = 200 (양수)
   - Math.abs(200) = 200 >= 50 ✓
   - wheelLock.current = true
   - changeSection(prev => prev + 1) → 다음 섹션으로 이동
   - 1초 후 wheelLock 해제 예약
   - touchStartY.current = null
   ↓
5. 사용자가 손가락을 떼면
   ↓
6. handleTouchEnd 실행
   - touchStartY.current = null (이미 null이지만 안전장치)
```

### 스와이프 취소 시나리오 (50px 미만)

```
1. 사용자가 화면을 터치
   ↓
2. handleTouchStart 실행
   - touchStartY.current = 500
   ↓
3. 사용자가 손가락을 살짝만 이동 (30px)
   ↓
4. handleTouchMove 실행
   - currentY = 470
   - delta = 500 - 470 = 30
   - Math.abs(30) = 30 < 50 ✗
   - 함수 종료 (섹션 변경 없음)
   ↓
5. 사용자가 손가락을 떼면
   ↓
6. handleTouchEnd 실행
   - touchStartY.current = null (초기화)
```

---

## 주요 개념

### 1. 터치 이벤트의 3단계

| 단계 | 이벤트 | 핸들러 | 역할 |
|------|--------|--------|------|
| **시작** | `touchstart` | `handleTouchStart` | 시작 위치 저장 |
| **이동** | `touchmove` | `handleTouchMove` | 스와이프 계산 및 섹션 변경 |
| **종료** | `touchend` | `handleTouchEnd` | 초기화 |

### 2. delta 계산 공식

```jsx
delta = touchStartY.current - currentY
```

**방향 판단:**
- `delta > 0`: 위로 스와이프 → 다음 섹션
- `delta < 0`: 아래로 스와이프 → 이전 섹션

### 3. 최소 이동 거리 (50px)

**이유:**
- 실수로 인한 작은 움직임 무시
- 의도적인 스와이프만 인식

**조정 가능:**
```jsx
if (Math.abs(delta) < 50) {  // 50px → 원하는 값으로 변경 가능
  return;
}
```

### 4. 이벤트 잠금 (wheelLock)

**목적:**
- 연속 이벤트 방지
- 섹션 전환 애니메이션 보호

**타이밍:**
```
이벤트 발생 → wheelLock = true → 1초 대기 → wheelLock = false
```

### 5. useRef 사용

```jsx
const touchStartY = useRef(null);
```

**이유:**
- 리렌더링 없이 값 저장
- 이벤트 핸들러 간 상태 공유

---

## 마우스 휠 이벤트와의 비교

### 공통점

| 항목 | 마우스 휠 | 터치 이벤트 |
|------|-----------|------------|
| **방향 판단** | `deltaY > 0` (아래) / `< 0` (위) | `delta > 0` (위) / `< 0` (아래) |
| **잠금 메커니즘** | `wheelLock.current` | `wheelLock.current` |
| **조건 체크** | `isMenuOpen`, `showIntro` | `isMenuOpen`, `showIntro` |
| **타이밍** | 1초 잠금 | 1초 잠금 |

### 차이점

| 항목 | 마우스 휠 | 터치 이벤트 |
|------|-----------|------------|
| **이벤트** | `onWheel` | `onTouchStart`, `onTouchMove`, `onTouchEnd` |
| **값** | `event.deltaY` | `touchStartY - currentY` |
| **최소 거리** | 없음 | 50px |
| **3단계** | 단일 이벤트 | 3개 이벤트 (시작/이동/종료) |

---

## 주의사항

### 1. 멀티터치

현재 코드는 첫 번째 터치만 처리합니다:

```jsx
event.touches[0].clientY
```

**멀티터치 지원이 필요한 경우:**
```jsx
// 모든 터치 포인트 처리
event.touches.forEach((touch, index) => {
  // 각 터치 처리
});
```

### 2. 수평 스와이프

현재 코드는 수직 스와이프만 처리합니다. 수평 스와이프를 무시하려면:

```jsx
const deltaX = Math.abs(touchStartX.current - currentX);
const deltaY = Math.abs(touchStartY.current - currentY);

if (deltaX > deltaY) {
  return; // 수평 스와이프는 무시
}
```

### 3. 최소 이동 거리 조정

50px가 너무 크거나 작으면 조정 가능:

```jsx
if (Math.abs(delta) < 50) {  // 원하는 값으로 변경
  return;
}
```

---

## 요약

### 핵심 기능

1. **handleTouchStart**: 터치 시작 위치 저장
2. **handleTouchMove**: 스와이프 방향/거리 계산 및 섹션 변경
3. **handleTouchEnd**: 터치 종료 시 초기화

### 주요 특징

- **최소 이동 거리**: 50px 미만은 무시
- **이벤트 잠금**: 1초 동안 연속 이벤트 방지
- **조건 체크**: 메뉴 열림/인트로 중 비활성화
- **방향 판단**: `delta > 0` (위) → 다음 섹션, `delta < 0` (아래) → 이전 섹션

### 사용자 경험

- 모바일 디바이스에서 자연스러운 스와이프 제스처 지원
- 실수로 인한 작은 움직임 무시
- 섹션 전환 애니메이션 보호

---

## 참고 자료

- [MDN: Touch Events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [React: useCallback](https://react.dev/reference/react/useCallback)
- [React: useRef](https://react.dev/reference/react/useRef)

