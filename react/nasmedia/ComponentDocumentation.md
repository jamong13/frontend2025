# 나스미디어 React 컴포넌트 문서

이 문서는 나스미디어 웹사이트의 각 React 컴포넌트가 담당하는 역할과 기능을 설명합니다.

---

## 📁 파일 구조

```
src/
├── main.jsx              # 애플리케이션 진입점
├── App.jsx               # 메인 앱 컴포넌트 (전체 상태 관리)
└── components/
    ├── Header.jsx        # 상단 헤더 (로고, 메뉴)
    ├── NavigationDots.jsx # 오른쪽 섹션 네비게이션 도트
    ├── OverlayMenu.jsx   # 전체 화면 오버레이 메뉴
    ├── FixAnimation.jsx  # 초기 로딩 애니메이션
    ├── FloatingAd.jsx    # 우측 하단 고정 광고 버튼
    ├── SectionOne.jsx    # 섹션 1: 메인 히어로
    ├── SectionTwo.jsx    # 섹션 2: 회사 가치 소개
    ├── SectionThree.jsx  # 섹션 3: 사업 영역
    ├── SectionFour.jsx   # 섹션 4: 나스리포트
    ├── SectionFive.jsx   # 섹션 5: 연락처/채용
    ├── SectionSix.jsx    # 섹션 6: 하단 정보
    └── Footer.jsx        # 푸터 (저작권, 패밀리 사이트)
```

---

## 🚀 진입점 컴포넌트

### `main.jsx`
**역할**: React 애플리케이션의 진입점

**기능**:
- React 18의 `createRoot` API를 사용하여 앱을 DOM에 마운트
- 글로벌 CSS 스타일시트 임포트 (`style.css`, `fullpage.css`)
- `React.StrictMode`로 개발 모드 검증 활성화

**의존성**:
- `App.jsx` 컴포넌트

---

## 🎯 메인 앱 컴포넌트

### `App.jsx`
**역할**: 전체 애플리케이션의 상태 관리 및 섹션 전환 로직 담당

**주요 상태**:
- `isMenuOpen`: 오버레이 메뉴 열림/닫힘 상태
- `activeSection`: 현재 활성화된 섹션 인덱스 (0-5)
- `showIntro`: 초기 로딩 애니메이션 표시 여부
- `isTopVisible`: 상단 이동 버튼 표시 여부

**주요 기능**:
1. **섹션 전환 로직**
   - 마우스 휠 이벤트 처리 (`handleWheel`)
   - 터치 스와이프 이벤트 처리 (`handleTouchStart`, `handleTouchMove`, `handleTouchEnd`)
   - 1초 쿨다운으로 빠른 연속 스크롤 방지

2. **전체 화면 슬라이드 효과**
   - `full_cover` 컨테이너의 `translateY`를 조정하여 섹션 전환
   - CSS transition으로 부드러운 애니메이션

3. **섹션 설정 관리**
   - `SECTION_CONFIG`: 6개 섹션의 ID, 라벨, 테마 정보
   - 각 섹션의 배경 테마(밝음/어두움)에 따라 헤더 스타일 자동 변경

**Props 전달**:
- `Header`: `isMenuOpen`, `onToggleMenu`, `isLightBackground`
- `NavigationDots`: `sections`, `activeIndex`, `onSelect`
- `OverlayMenu`: `isOpen`, `onClose`
- `FixAnimation`: `visible`, `onFinished`

---

## 🧩 UI 컴포넌트

### `Header.jsx`
**역할**: 상단 고정 헤더 (로고, 언어 선택, 메뉴 버튼, 네비게이션)

**Props**:
- `isMenuOpen` (boolean): 메뉴 열림 상태
- `onToggleMenu` (function): 메뉴 토글 핸들러
- `isLightBackground` (boolean): 밝은 배경 섹션 여부

**주요 기능**:
1. **로고 전환**
   - 밝은 배경 섹션(2, 4): 컬러 로고 (`logo.svg`) 표시
   - 어두운 배경 섹션(1, 3, 5, 6): 흰색 로고 (`logo-invert.svg`) 표시

2. **언어 선택**
   - KOR/ENG 토글 버튼 (현재 KOR 활성화)

3. **햄버거 메뉴 버튼**
   - 클릭 시 오버레이 메뉴 열기/닫기
   - 메뉴 열림 시 X자 모양으로 변환

4. **주요 네비게이션 링크**
   - 회사소개, 사업영역, 나스리포트, 광고문의

**스타일 클래스**:
- `site-header`: 기본 헤더 스타일
- `is-open`: 메뉴 열림 상태
- `light`: 밝은 배경 섹션용 스타일

---

### `NavigationDots.jsx`
**역할**: 오른쪽 고정 섹션 네비게이션 도트

**Props**:
- `sections` (array): 섹션 정보 배열
- `activeIndex` (number): 현재 활성 섹션 인덱스
- `onSelect` (function): 섹션 선택 핸들러

**기능**:
- 6개의 도트 버튼을 세로로 배치
- 각 도트에 호버 시 섹션 라벨 툴팁 표시
- 활성 섹션 도트는 빨간색으로 강조
- 클릭 시 해당 섹션으로 즉시 이동

**접근성**:
- `aria-label`: 섹션 네비게이션
- `aria-current`: 현재 활성 섹션 표시

---

### `OverlayMenu.jsx`
**역할**: 전체 화면 오버레이 메뉴 (햄버거 메뉴 클릭 시 표시)

**Props**:
- `isOpen` (boolean): 메뉴 열림 상태
- `onClose` (function): 메뉴 닫기 핸들러

**메뉴 구조**:
1. **회사소개**: 나스미디어 소개, 윤리경영, 보도자료, CI 소개, 오시는 길
2. **사업영역**: AD Service, AD Platform, AD Tech, AD Study
3. **나스리포트**: 나정기보고서, NPR, 나스리포트 신청
4. **투자정보**: 전자공고, 재무정보, 공시정보, 주가정보, IR자료실
5. **인재채용**: 인사제도, 채용공고

**기능**:
- 배경 클릭 시 메뉴 닫기
- 각 링크 클릭 시 메뉴 자동 닫기
- 배경 이미지: `nasmedia_gnb_video_thumbnail.png`

**접근성**:
- `aria-hidden`: 숨김 상태 관리
- `role="dialog"`: 모달 다이얼로그 역할
- `aria-modal="true"`: 모달 다이얼로그 표시

---

### `FixAnimation.jsx`
**역할**: 페이지 최초 로드 시 표시되는 인트로 애니메이션

**Props**:
- `visible` (boolean): 애니메이션 표시 여부
- `onFinished` (function): 애니메이션 완료 콜백

**애니메이션 요소**:
- 텍스트: "more than expected!"
- 텍스트 블라인드 효과 (좌우에서 중앙으로)
- 4개의 원형 애니메이션 (확장 및 병합 효과)

**동작**:
- 페이지 로드 시 3.2초 동안 표시
- 애니메이션 완료 후 자동으로 사라지고 콜백 호출
- `visible`이 false일 경우 렌더링하지 않음

---

### `FloatingAd.jsx`
**역할**: 우측 하단 고정 광고 문의 버튼

**기능**:
- 원형 버튼 (기본 70px)
- 호버 시 가로로 확장되어 "광고문의" 텍스트 표시
- TV 아이콘 포함

**스타일**:
- `position: fixed`
- `bottom: 80px`, `right: 80px`
- 빨간색 배경 (`#f52f23`)

---

## 📄 섹션 컴포넌트

### `SectionOne.jsx`
**역할**: 메인 히어로 섹션 (첫 화면)

**내용**:
- 슬로건: "MORE THAN EXPECTED!"
- 메인 타이틀: "No.1 Digital Media Rep."

**스타일**:
- 검은색 배경
- 왼쪽 정렬 텍스트
- 큰 타이포그래피

---

### `SectionTwo.jsx`
**역할**: 회사 가치, 목표, 비전 소개 섹션

**구조**:
- **왼쪽**: 제목 "Our Value, Goal and Vision" + 회사소개 바로가기 버튼
- **오른쪽**: 3개의 가치 카드
  1. **Identity**: 국내 최대 디지털 미디어 렙, 통합 마케팅 역량
  2. **Strength**: 데이터 기반 오디언스 플래닝, 애드테크 활용
  3. **Challenge**: FULL STACK AD-PLATFORM 구현, 원스톱 데이터 마케팅

**애니메이션**:
- 하단에 3개의 붉은 원형 요소가 좌우로 이동하는 애니메이션

**스타일**:
- 밝은 배경 (흰색)
- 헤더 로고가 자동으로 어두운 색으로 변경됨

---

### `SectionThree.jsx`
**역할**: 사업 영역 소개 섹션 ("What we do")

**구조**:
1. **상단**: 제목 "What we do"
2. **중간**: 4개의 애니메이션 아이콘
   - 작은 공 3개 (움직이는 애니메이션)
   - 중간 공 2개 (좌우 이동)
   - 회전하는 원형 공
   - 작은 공 3개 (다양한 패턴)
3. **하단**: 4개 서비스 라벨
   - AD Service
   - AD Platform
   - AD Tech
   - AD Study
4. **메뉴**: 각 서비스별 상세 링크
   - **AD Service**: 온.모바일 광고, 디지털 방송광고, 디지털 옥외광고, 글로벌 마케팅
   - **AD Platform**: Nswitch, Adpacker, Admixer, Nposting
   - **AD Tech**: All, Planning, Programmatic Buying, Reporting & Analytics, Data Management
   - **AD Study**: Research, Consulting

**스타일**:
- 검은색 배경
- 흰색 텍스트

---

### `SectionFour.jsx`
**역할**: 나스리포트 소개 섹션

**구조**:
- **왼쪽**: 인사이트 이미지 (`insights.jpg`)
- **오른쪽**: 
  - 소제목: "Insights for Inspires"
  - 본문: "디지털 마케팅 트렌드 분석을 통한 인사이트 제시"
  - 버튼 2개:
    - 나스리포트 바로가기 →
    - 나스리포트 신청하기 →

**스타일**:
- 밝은 배경 (흰색)
- 헤더 로고가 자동으로 어두운 색으로 변경됨

---

### `SectionFive.jsx`
**역할**: 연락처 및 채용 정보 섹션 ("Let's be Together")

**구조**:
- 제목: "Let's be Together"
- **왼쪽 카드 (Contact)**:
  - 소제목: "Contact"
  - 제목: "최고의 켐페인을 위한 첫 단추"
  - 버튼: "광고문의 바로가기 →"
- **오른쪽 카드 (Careers)**:
  - 소제목: "Careers"
  - 제목: "나스미디어와 함께하는 No.1 인재채용"
  - 버튼: "채용공고 바로가기 →"

**스타일**:
- 빨간색 배경 (`#F52F23`)
- 흰색 텍스트
- 버튼 호버 시 애니메이션 효과

---

### `SectionSix.jsx`
**역할**: 하단 정보 및 연락처 섹션

**구조**:
- **왼쪽**: 네비게이션 메뉴 트리
  - 회사소개 (5개 하위 메뉴)
  - 사업영역 (4개 하위 메뉴)
  - 나스리포트 (3개 하위 메뉴)
  - 투자정보 (5개 하위 메뉴)
  - 인재채용 (2개 하위 메뉴)
- **오른쪽**: 연락처 정보
  - 주소: 서울특별시 강남구 도곡로1길 14 삼일프라자 3,4,5층
  - 전화: T. +82 (0)2 2188 7300
  - 버튼: 회사소개서 다운로드

**스타일**:
- 검은색 배경
- 흰색 텍스트
- 호버 시 서브메뉴 표시

---

### `Footer.jsx`
**역할**: 최하단 푸터 (저작권, 약관, 패밀리 사이트)

**Props**: 없음 (자체 상태 관리)

**구조**:
- **왼쪽**:
  - 주요 링크: 개인정보처리방침, 영상정보처리방침, 이메일무단수집거부, 광고문의, 윤리위반신고
  - 회사 정보: 대표자, 사업자등록번호
  - 저작권: Copyright ⓒ NASMEDIA Co., LTD. All Rights Reserved.
- **오른쪽**:
  - 패밀리 사이트 드롭다운 버튼
  - 22개의 패밀리 사이트 링크 목록

**상태 관리**:
- `isFamilyOpen`: 패밀리 사이트 목록 열림/닫힘 상태
- 클릭 시 목록 토글

**패밀리 사이트 카테고리**:
- 미디어/컨텐츠: kt skylife, kth, 지니뮤직, sktLifeTV, kt mhows
- ICT: kt telecop, kt is, kt cs, kt m&s, kt powertel, kt linkus, kt submarine, kt ds, INITECH
- 금융/Rental: BC Card, Smartro, H&C Network, Rental
- 부동산: kt estate
- Start-up/기타: kt commerce, kt sports, kt NexR

**스타일**:
- 검은색 배경
- 회색/흰색 텍스트
- 패밀리 사이트 목록은 스크롤 가능한 박스 형태

---

## 🔄 컴포넌트 간 상호작용

### 상태 흐름
```
App.jsx (상태 관리)
  ├── Header (로고 전환, 메뉴 버튼)
  ├── NavigationDots (섹션 이동)
  ├── OverlayMenu (전체 메뉴)
  ├── FixAnimation (초기 애니메이션)
  ├── FloatingAd (고정 버튼)
  └── Sections (1-6) + Footer
```

### 이벤트 흐름
1. **섹션 전환**: 휠/터치 → `App.handleWheel/Touch` → `changeSection` → `activeSection` 업데이트 → `full_cover` 스타일 변경
2. **메뉴 열기**: 헤더 메뉴 버튼 클릭 → `isMenuOpen` true → `OverlayMenu` 표시
3. **로고 전환**: `activeSection` 변경 → `App`에서 테마 계산 → `Header`에 `isLightBackground` 전달 → 로고 이미지 전환

---

## 📝 주요 특징

1. **전체 화면 슬라이드**: 각 섹션이 100vh 높이로, 수직 스크롤 대신 섹션 단위 전환
2. **반응형 테마**: 섹션 배경에 따라 헤더 로고와 텍스트 색상 자동 변경
3. **접근성**: ARIA 속성으로 스크린 리더 지원
4. **성능 최적화**: `useMemo`, `useCallback`으로 불필요한 리렌더링 방지
5. **애니메이션**: CSS transition과 keyframe으로 부드러운 전환 효과

---

## 🛠️ 기술 스택

- **React 18.3.1**: 함수형 컴포넌트, Hooks
- **Vite 5.4.0**: 빌드 도구
- **CSS3**: 스타일링 및 애니메이션
- **Font Awesome**: 아이콘 (CDN)

---

## 📌 참고사항

- 모든 섹션은 `id="section{N}"` 형식으로 명명
- 섹션 높이는 `100vh`로 고정
- 섹션 전환 시 1초 쿨다운으로 빠른 연속 스크롤 방지
- 메뉴 열림 시 본문 스크롤 비활성화 (`overflow: hidden`)

