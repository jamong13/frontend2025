# CSS3 Animations 완벽 가이드 📚

## CSS3 Animations이란?

CSS3 Animations은 **JavaScript 없이 CSS만으로 애니메이션을 만들 수 있는 기능**입니다. 요소가 시간에 따라 스타일이 변경되는 것을 표현합니다.

---

## 기본 구조

### 1. **@keyframes** - 애니메이션 정의

애니메이션의 시작과 끝 상태를 정의합니다.

```css
@keyframes 애니메이션-이름 {
  from {
    /* 시작 상태 */
  }
  to {
    /* 끝 상태 */
  }
}
```

또는 퍼센트를 사용:

```css
@keyframes 애니메이션-이름 {
  0% {
    /* 0% 지점 */
  }
  50% {
    /* 50% 지점 */
  }
  100% {
    /* 100% 지점 */
  }
}
```

### 2. **animation** - 애니메이션 적용

만든 애니메이션을 요소에 적용합니다.

```css
.element {
  animation: 애니메이션-이름 지속시간 타이밍-함수;
}
```

---

## 이 프로젝트에서 사용된 애니메이션

### 1️⃣ Fade In (페이드 인)

```css
@keyframes fadeIn {
  from {
    opacity: 0;     /* 투명 */
  }
  to {
    opacity: 1;      /* 불투명 */
  }
}
```

**사용 위치**:
```css
.fade-in {
  animation: fadeIn 1s ease-in-out;
}
```

**동작**: 요소가 서서히 나타납니다.

---

### 2️⃣ Slide In Left (왼쪽에서 슬라이드)

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);  /* 왼쪽으로 50px 이동된 상태에서 */
  }
  to {
    opacity: 1;
    transform: translateX(0);       /* 원래 위치로 */
  }
}
```

**사용 위치**:
```css
.slide-in-left {
  animation: slideInLeft 1s ease-out;
}
```

**동작**: 왼쪽에서 슬라이드하면서 나타납니다.

**예시**: About 섹션

---

### 3️⃣ Slide In Right (오른쪽에서 슬라이드)

```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);  /* 오른쪽으로 50px 이동된 상태에서 */
  }
  to {
    opacity: 1;
    transform: translateX(0);     /* 원래 위치로 */
  }
}
```

**사용 위치**:
```css
.slide-in-right {
  animation: slideInRight 1s ease-out;
}
```

**동작**: 오른쪽에서 슬라이드하면서 나타납니다.

**예시**: Services 섹션

---

### 4️⃣ Zoom In (확대)

```css
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);  /* 80% 크기에서 */
  }
  to {
    opacity: 1;
    transform: scale(1);    /* 100% 크기로 */
  }
}
```

**사용 위치**:
```css
.zoom-in {
  animation: zoomIn 1s ease-out;
}
```

**동작**: 작은 크기에서 확대되면서 나타납니다.

**예시**: Contact 섹션

---

## Animation 속성 상세 설명

### animation 속성의 구성 요소

```css
animation: name duration timing-function delay iteration-count direction;
```

| 속성 | 설명 | 예시 |
|------|------|------|
| **name** | 애니메이션 이름 | `fadeIn` |
| **duration** | 지속 시간 | `1s`, `2.5s` |
| **timing-function** | 속도 곡선 | `ease`, `ease-in`, `ease-out`, `linear` |
| **delay** | 지연 시간 | `0.5s` |
| **iteration-count** | 반복 횟수 | `1`, `infinite` |
| **direction** | 방향 | `normal`, `reverse`, `alternate` |
| **fill-mode** | 시작/끝 상태 | `both`, `forwards`, `backwards` |

### Timing Functions (속도 곡선)

```css
linear          /* 일정한 속도 */
ease            /* 느리게 → 빠르게 → 느리게 (기본값) */
ease-in         /* 느리게 → 빠르게 */
ease-out        /* 빠르게 → 느리게 */
ease-in-out     /* 느리게 → 빠르게 → 느리게 */
```

**시각적 표현**:

```
linear:     ────
ease:       ╰─╮
ease-in:    ╭─╮
ease-out:   ╯─╰
```

---

## 프로젝트에서 사용된 예시

### 예시 1: 지연된 애니메이션

```css
.fade-in-delay {
  animation: fadeIn 1s ease-in-out 0.3s both;
}
```

- `fadeIn`: 애니메이션 이름
- `1s`: 1초 동안
- `ease-in-out`: 부드러운 곡선
- `0.3s`: 0.3초 지연
- `both`: 시작 전과 끝난 후 상태 유지

---

### 예시 2: 호버 효과

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);  /* 호버 시 위로 이동 */
}
```

`transition`은 상태 변화 시 부드럽게 전환합니다.

---

## 실전 예제

### 1. 회전 애니메이션

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinning {
  animation: rotate 2s linear infinite;
}
```

**결과**: 무한 회전 🌀

---

### 2. 왔다갔다 애니메이션

```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bouncing {
  animation: bounce 1s ease-in-out infinite;
}
```

**결과**: 위아래로 튀는 효과 ⬆️⬇️

---

### 3. 펄스 효과

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.pulsing {
  animation: pulse 2s ease-in-out infinite;
}
```

**결과**: 크기가 커졌다 작아지는 효과 💫

---

### 4. 색상 변화

```css
@keyframes colorChange {
  0% {
    background-color: #667eea;
  }
  50% {
    background-color: #764ba2;
  }
  100% {
    background-color: #667eea;
  }
}

.color-changing {
  animation: colorChange 3s ease-in-out infinite;
}
```

**결과**: 배경색이 계속 변함 🌈

---

## 주의사항 ⚠️

### 1. 성능 최적화

애니메이션이 많은 요소를 사용할 때:

```css
/* 좋은 예 - GPU 가속 사용 */
transform: translateX(50px);
opacity: 0.5;

/* 나쁜 예 - 레이아웃 재계산 */
left: 50px;
```

**이유**: `transform`과 `opacity`는 GPU 가속을 사용하여 성능이 좋습니다.

---

### 2. will-change 사용

애니메이션이 끝나면 원래대로:

```css
.animated-element {
  will-change: transform;
  animation: slideIn 1s;
}

.animated-element:hover {
  will-change: auto;  /* 메모리 해제 */
}
```

---

### 3. 접근성 고려

약한 움직임을 선호하는 사용자를 위해:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 비교: CSS vs JavaScript

### CSS Animations

**장점**:
- ✅ JavaScript 없이 동작
- ✅ 브라우저가 최적화
- ✅ 간단한 코드

**단점**:
- ❌ 복잡한 로직 어려움
- ❌ 상호작용 제한적

### JavaScript Animations

**장점**:
- ✅ 복잡한 로직 가능
- ✅ 완전한 제어

**단점**:
- ❌ JavaScript 로직 필요
- ❌ 성능 이슈 가능

---

## 연습 문제

### 문제 1: 새로운 애니메이션 만들기

```css
@keyframes heartBeat {
  /* 여기에 코드 작성 */
}

/* 심장 박동 같은 효과를 만들어보세요! */
```

### 문제 2: 복합 애니메이션

```css
@keyframes combo {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
}
```

**결과**: 회전 + 확대 + 페이드

---

## 유용한 리소스

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Can I Use - Animations](https://caniuse.com/css-animation)
- [Animate.css](https://animate.style/) - 미리 만들어진 애니메이션 라이브러리

---

## 요약

| 개념 | 설명 |
|------|------|
| **@keyframes** | 애니메이션 정의 |
| **animation** | 애니메이션 적용 |
| **transform** | 변환 (이동, 회전, 크기) |
| **opacity** | 투명도 |
| **transition** | 상태 전환 |
| **timing-function** | 속도 곡선 |

---

**CSS3 Animations를 마스터하면 더 이상 JavaScript 없이도 멋진 웹사이트를 만들 수 있습니다! 🎉**

