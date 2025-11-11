## 프로젝트 개요

- **사용 기술**: React 19, Vite, TypeScript 기반의 단일 페이지 애플리케이션
- **라우팅**: `react-router-dom`으로 주요 페이지(홈, 메뉴, 이용방법, 새소식, 가맹점)를 전환
- **스타일**: 전역 스타일은 `src/style.css`에서 로드

## 설치해야 할 패키지

npm을 사용하는 경우 아래 명령으로 의존성을 설치합니다.

```bash
npm install react react-dom react-router-dom
npm install --save-dev @types/react @types/react-dom typescript vite
```

## 진입 파일 구조

- `src/main.tsx`: `BrowserRouter` 안에서 `App` 컴포넌트를 렌더링하며 애플리케이션을 부트스트랩
- `src/App.tsx`: 공통 레이아웃을 담당하는 컴포넌트로, 헤더(메가 메뉴), 본문 라우트, 푸터를 포함

## 주요 페이지 요약

- **`src/pages/Home.tsx`**
  - 브랜드 메시지를 강조하는 히어로 섹션과 주요 페이지로 이동할 수 있는 하이라이트 카드 4개
  - 온라인 주문을 유도하는 CTA 배너

- **`src/pages/Menu.tsx`**
  - 클래식, 프리미엄, 프레쉬 & 라이트, 아침 메뉴 카테고리와 대표 메뉴 리스트
  - 빵, 야채, 소스 선택 팁을 제공하는 안내 섹션

- **`src/pages/HowToOrder.tsx`**
  - 샌드위치 주문 4단계(빵 선택 → 토핑 → 소스 → 세트 업그레이드)를 카드 형태로 소개
  - 앱 주문 안내 링크가 포함된 온라인 주문 섹션

- **`src/pages/News.tsx`**
  - PPL, 공지사항, 캠페인, 프로모션 등의 소식을 카드 형태로 나열
  - 공식 홈페이지로 이동하는 자세히 보기 링크와 광고/캠페인 배너

- **`src/pages/Franchise.tsx`**
  - 가맹 상담, 사업 설명회, 교육 & 오픈에 대한 마일스톤 카드
  - 가맹 신청, 지사 안내 등 외부 링크를 제공하는 문의 섹션

## 라우트 맵

- `/` → 홈
- `/menu` → 메뉴 소개
- `/how-to-order` → 이용 방법 안내
- `/news` → 새소식
- `/franchise` → 가맹점 안내


