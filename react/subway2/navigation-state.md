# 네비게이션 State 상세 설명

이 문서는 `SiteNav` 컴포넌트에서 사용되는 모든 state와 그 동작 방식을 설명합니다.

## 📋 State 목록

`SiteNav` 컴포넌트는 총 **3개의 state**를 사용하여 데스크톱 메가메뉴와 모바일 아코디언 메뉴를 제어합니다.

1. `hoveredItem` - 데스크톱 메가메뉴 제어
2. `isMobileNavOpen` - 모바일 메뉴 열림/닫힘 제어
3. `expandedMobileItem` - 모바일 아코디언 서브메뉴 제어

---

## 1. hoveredItem State

### 📌 기본 정보

```typescript
const [hoveredItem, setHoveredItem] = useState<string | null>(null)
```

- **타입**: `string | null`
- **초기값**: `null`
- **용도**: 데스크톱 화면에서 현재 호버(또는 포커스)된 메뉴 항목을 추적

### 🎯 동작 방식

#### State 값의 의미
- `null`: 어떤 메뉴도 호버되지 않음 → 메가메뉴 숨김
- `"홈"`, `"메뉴소개"`, `"이용방법"` 등: 해당 메뉴 항목의 라벨 문자열 → 메가메뉴 표시

#### State 업데이트 시점

**1. 메뉴 항목에 마우스 진입**
```typescript
onMouseEnter={() => setHoveredItem(item.label)}
```
- 데스크톱 네비게이션의 각 `<li>` 항목에 마우스를 올리면 해당 항목의 `label`로 설정
- 예: "홈" 메뉴에 마우스를 올리면 `hoveredItem = "홈"`

**2. 메뉴 항목에 키보드 포커스**
```typescript
onFocus={() => setHoveredItem(item.label)}
```
- 키보드로 네비게이션을 탐색할 때 Tab 키로 포커스가 이동하면 해당 항목의 `label`로 설정
- 접근성을 위한 기능

**3. 메가메뉴 영역 내부 호버**
```typescript
onMouseEnter={() => setHoveredItem(item.label)}
```
- 메가메뉴가 열린 상태에서 메가메뉴 내부의 컬럼에 마우스를 올리면 해당 항목으로 유지
- 메뉴가 갑자기 닫히는 것을 방지

**4. 메뉴 영역에서 마우스가 벗어남**
```typescript
onMouseLeave={() => setHoveredItem(null)}
```
- `header-nav` 영역에서 마우스가 완전히 벗어나면 `null`로 초기화
- 메가메뉴가 닫힘

**5. 포커스가 메뉴 영역 밖으로 이동**
```typescript
onBlur={(event: FocusEvent<HTMLDivElement>) => {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    setHoveredItem(null)
  }
}}
```
- 키보드 탐색 중 포커스가 `header-nav` 영역 밖의 다른 요소로 이동하면 `null`로 초기화
- `event.relatedTarget`이 현재 요소의 자식이 아닌 경우에만 초기화 (내부 포커스 이동은 무시)

### 🔗 사용되는 곳

**1. 메가메뉴 표시 제어**
```typescript
<div className="mega-menu" data-open={hoveredItem ? 'true' : 'false'}>
```
- `hoveredItem`이 `null`이 아니면 메가메뉴가 표시됨
- CSS에서 `[data-open="true"]`일 때 메뉴가 보이도록 설정

**2. 활성 컬럼 표시**
```typescript
className={`mega-column${hoveredItem === item.label ? ' mega-column-active' : ''}`}
```
- 현재 호버된 항목과 일치하는 메가메뉴 컬럼에 `mega-column-active` 클래스 추가
- 활성 컬럼은 시각적으로 강조됨 (위로 살짝 이동, 색상 변경 등)

### 📊 State 흐름도

```
초기 상태: hoveredItem = null
    ↓
마우스를 "홈" 메뉴에 올림
    ↓
hoveredItem = "홈" → 메가메뉴 표시
    ↓
마우스를 메뉴 영역 밖으로 이동
    ↓
hoveredItem = null → 메가메뉴 숨김
```

---

## 2. isMobileNavOpen State

### 📌 기본 정보

```typescript
const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
```

- **타입**: `boolean`
- **초기값**: `false` (메뉴 닫힘 상태)
- **용도**: 모바일 화면에서 햄버거 메뉴의 열림/닫힘 상태를 제어

### 🎯 동작 방식

#### State 값의 의미
- `false`: 모바일 메뉴가 닫혀 있음 → 메뉴 숨김
- `true`: 모바일 메뉴가 열려 있음 → 메뉴 표시

#### State 업데이트 시점

**1. 햄버거 버튼 클릭**
```typescript
const toggleMobileNav = () => {
  setIsMobileNavOpen((prev) => !prev)
  setExpandedMobileItem(null)  // 서브메뉴도 모두 닫음
}
```
- 햄버거 메뉴 버튼을 클릭하면 이전 값의 반대로 토글
- 메뉴를 열 때는 모든 서브메뉴를 닫은 상태로 시작 (`expandedMobileItem = null`)

**2. 모바일 메뉴 내 링크 클릭**
```typescript
const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const target = event.currentTarget
  if (target.closest('.mobile-nav')) {
    setIsMobileNavOpen(false)  // 메뉴 닫기
    setExpandedMobileItem(null)  // 서브메뉴도 닫기
  }
}
```
- 모바일 메뉴 내의 어떤 링크를 클릭해도 메뉴가 자동으로 닫힘
- 사용자가 페이지를 이동했으므로 메뉴를 닫아야 함

### 🔗 사용되는 곳

**1. 햄버거 버튼의 접근성 속성**
```typescript
<button
  type="button"
  className="mobile-nav-toggle"
  aria-expanded={isMobileNavOpen}
  onClick={toggleMobileNav}
>
```
- `aria-expanded` 속성으로 스크린 리더에 메뉴 상태를 알림
- `true`: 메뉴가 열려 있음, `false`: 메뉴가 닫혀 있음

**2. 모바일 네비게이션 표시 제어**
```typescript
<nav className="mobile-nav" data-open={isMobileNavOpen ? 'true' : 'false'}>
```
- `data-open` 속성으로 CSS에서 메뉴 표시 여부를 제어
- CSS에서 `[data-open="true"]`일 때 `max-height: 640px`로 설정되어 메뉴가 보임

### 📊 State 흐름도

```
초기 상태: isMobileNavOpen = false (메뉴 닫힘)
    ↓
햄버거 버튼 클릭
    ↓
isMobileNavOpen = true → 모바일 메뉴 표시
    ↓
메뉴 내 링크 클릭 또는 다시 햄버거 버튼 클릭
    ↓
isMobileNavOpen = false → 모바일 메뉴 숨김
```

### 💡 특징

- **자동 닫힘**: 링크 클릭 시 자동으로 메뉴가 닫힘 (사용자 경험 개선)
- **서브메뉴 초기화**: 메뉴를 열 때마다 모든 서브메뉴가 접힌 상태로 시작

---

## 3. expandedMobileItem State

### 📌 기본 정보

```typescript
const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
```

- **타입**: `string | null`
- **초기값**: `null`
- **용도**: 모바일 화면에서 현재 펼쳐진(확장된) 아코디언 서브메뉴 항목을 추적

### 🎯 동작 방식

#### State 값의 의미
- `null`: 어떤 서브메뉴도 펼쳐지지 않음 → 모든 서브메뉴 접힘
- `"홈"`, `"메뉴소개"` 등: 해당 메뉴 항목의 라벨 문자열 → 해당 서브메뉴만 펼쳐짐

#### State 업데이트 시점

**1. 아코디언 버튼 클릭**
```typescript
const handleMobileItemToggle = (label: string) => {
  setExpandedMobileItem((prev) => (prev === label ? null : label))
}
```
- 아코디언 토글 버튼을 클릭하면:
  - **현재 펼쳐진 항목을 다시 클릭**: `null`로 설정 (접힘)
  - **다른 항목 클릭**: 해당 항목의 `label`로 설정 (펼침)
- 한 번에 하나의 서브메뉴만 열릴 수 있음 (아코디언 방식)

**2. 햄버거 메뉴 열 때**
```typescript
const toggleMobileNav = () => {
  setIsMobileNavOpen((prev) => !prev)
  setExpandedMobileItem(null)  // 모든 서브메뉴 닫기
}
```
- 햄버거 메뉴를 열 때마다 모든 서브메뉴를 닫은 상태로 시작

**3. 모바일 메뉴 내 링크 클릭 시**
```typescript
const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const target = event.currentTarget
  if (target.closest('.mobile-nav')) {
    setIsMobileNavOpen(false)
    setExpandedMobileItem(null)  // 모든 서브메뉴 닫기
  }
}
```
- 메뉴가 닫힐 때 서브메뉴 상태도 초기화

### 🔗 사용되는 곳

**1. 서브메뉴 펼침 여부 계산**
```typescript
const isExpanded = expandedMobileItem === item.label
```
- 각 메뉴 항목마다 현재 항목이 펼쳐져 있는지 확인
- `expandedMobileItem`이 현재 항목의 `label`과 일치하면 `true`

**2. 아코디언 버튼의 접근성 속성**
```typescript
<button
  type="button"
  className="mobile-accordion-trigger"
  aria-expanded={isExpanded}
  aria-controls={panelId}
  onClick={() => handleMobileItemToggle(item.label)}
>
```
- `aria-expanded`: 스크린 리더에 펼침 상태 알림
- `aria-controls`: 이 버튼이 제어하는 서브메뉴의 ID 연결

**3. 서브메뉴 표시 제어**
```typescript
<ul
  id={panelId}
  className="mobile-sub-nav"
  data-open={isExpanded ? 'true' : 'false'}
>
```
- `data-open` 속성으로 CSS에서 서브메뉴 표시 여부 제어
- CSS에서 `[data-open="true"]`일 때 `max-height: 360px`로 설정되어 서브메뉴가 보임

**4. 메뉴 항목의 확장 상태 표시**
```typescript
<li
  key={item.label}
  className="mobile-nav-item"
  data-expanded={isExpanded ? 'true' : 'false'}
>
```
- `data-expanded` 속성으로 CSS에서 아이콘 회전 등 시각적 피드백 제공
- 펼쳐진 항목의 아코디언 아이콘이 회전하여 상태를 표시

**5. 스크린 리더 텍스트**
```typescript
<span className="sr-only">
  {isExpanded
    ? `${item.label} 메뉴 닫기`
    : `${item.label} 메뉴 열기`}
</span>
```
- 접근성을 위해 현재 상태에 맞는 안내 텍스트 제공

### 📊 State 흐름도

```
초기 상태: expandedMobileItem = null (모든 서브메뉴 접힘)
    ↓
"홈" 메뉴의 아코디언 버튼 클릭
    ↓
expandedMobileItem = "홈" → "홈" 서브메뉴만 펼쳐짐
    ↓
"메뉴소개" 메뉴의 아코디언 버튼 클릭
    ↓
expandedMobileItem = "메뉴소개" → "메뉴소개" 서브메뉴 펼쳐지고 "홈"은 자동으로 접힘
    ↓
다시 "메뉴소개" 버튼 클릭
    ↓
expandedMobileItem = null → 모든 서브메뉴 접힘
```

### 💡 특징

- **단일 선택**: 한 번에 하나의 서브메뉴만 열릴 수 있음 (아코디언 방식)
- **자동 접힘**: 다른 항목을 열면 이전 항목이 자동으로 접힘
- **상태 초기화**: 메뉴가 닫히거나 열릴 때 항상 `null`로 초기화

---

## 🔄 State 간 상호작용

### 1. 모바일 메뉴 열 때
```typescript
const toggleMobileNav = () => {
  setIsMobileNavOpen((prev) => !prev)
  setExpandedMobileItem(null)  // 서브메뉴도 초기화
}
```
- `isMobileNavOpen`이 토글될 때 `expandedMobileItem`도 항상 `null`로 초기화
- 메뉴를 열 때마다 깨끗한 상태로 시작

### 2. 모바일 메뉴 링크 클릭 시
```typescript
const handleMobileLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const target = event.currentTarget
  if (target.closest('.mobile-nav')) {
    setIsMobileNavOpen(false)      // 메뉴 닫기
    setExpandedMobileItem(null)     // 서브메뉴도 닫기
  }
}
```
- 두 state가 동시에 초기화되어 완전히 닫힌 상태로 전환

### 3. 데스크톱과 모바일 State 분리
- `hoveredItem`은 데스크톱 전용
- `isMobileNavOpen`과 `expandedMobileItem`은 모바일 전용
- 서로 독립적으로 동작하여 충돌 없음

---

## 📱 반응형 동작

### 데스크톱 (화면 너비 > 768px)
- `hoveredItem`만 사용
- `isMobileNavOpen`, `expandedMobileItem`은 사용되지 않음 (CSS로 숨김)

### 모바일 (화면 너비 ≤ 768px)
- `isMobileNavOpen`, `expandedMobileItem` 사용
- `hoveredItem`은 사용되지 않음 (메가메뉴가 CSS로 숨김)

---

## 🎨 CSS 연동

각 state는 CSS의 `data-*` 속성과 연동되어 시각적 효과를 제공합니다:

| State | CSS 속성 | 효과 |
|-------|----------|------|
| `hoveredItem` | `mega-menu[data-open="true"]` | 메가메뉴 표시/숨김 |
| `isMobileNavOpen` | `mobile-nav[data-open="true"]` | 모바일 메뉴 표시/숨김 |
| `expandedMobileItem` | `mobile-sub-nav[data-open="true"]` | 서브메뉴 표시/숨김 |
| `expandedMobileItem` | `mobile-nav-item[data-expanded="true"]` | 아코디언 아이콘 회전 |

---

## 🔍 디버깅 팁

### 개발 중 State 확인하기

**1. 모바일 메뉴 항상 보이기**
```typescript
const [isMobileNavOpen, setIsMobileNavOpen] = useState(true)  // 개발용
```

**2. 특정 서브메뉴 항상 펼치기**
```typescript
const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>('홈')  // 개발용
```

**3. React DevTools 사용**
- React DevTools에서 컴포넌트를 선택하면 현재 state 값을 확인할 수 있음

---

## 📝 요약

| State | 타입 | 초기값 | 용도 | 업데이트 트리거 |
|-------|------|-------|------|----------------|
| `hoveredItem` | `string \| null` | `null` | 데스크톱 메가메뉴 제어 | 마우스 호버, 키보드 포커스 |
| `isMobileNavOpen` | `boolean` | `false` | 모바일 메뉴 열림/닫힘 | 햄버거 버튼 클릭, 링크 클릭 |
| `expandedMobileItem` | `string \| null` | `null` | 모바일 아코디언 서브메뉴 제어 | 아코디언 버튼 클릭 |

이 세 가지 state가 협력하여 데스크톱과 모바일에서 모두 완벽하게 작동하는 네비게이션을 구현합니다.

