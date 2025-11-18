# React 리뉴얼 구조 설명

## 개요
기존 정적 HTML 사이트를 React + Vite 환경으로 마이그레이션했습니다. `src/main.jsx`가 엔트리 포인트이며, 글로벌 스타일(`styles/style.css`, `styles/fullpage.css`)을 로드한 뒤 `App` 컴포넌트를 렌더링합니다.

## App 컴포넌트(`src/App.jsx`)
- `SECTION_CONFIG`로 6개 섹션 정보(id, label, theme)를 정의하고, 이를 기반으로 전체 UI를 구성합니다.
- 주요 상태
  - `activeSection`: 현재 표시 중인 섹션 인덱스
  - `isMenuOpen`: 오버레이 메뉴 열림 여부
  - `showIntro`: 인트로 애니메이션 노출 여부
  - `isTopVisible`: 상단 이동 버튼 표시 여부
- 휠/터치 이벤트를 활용해 섹션 이동(translateY 애니메이션)과 도트 네비게이션을 동기화합니다.
- 마지막 섹션 뒤에 `Footer`, 전역적으로 `FloatingAd`(광고문의 버튼)을 배치합니다.

## 공통 컴포넌트
| 컴포넌트 | 역할 |
| --- | --- |
| `Header` | 현재 섹션 테마에 따라 로고/텍스트 색 변경, 언어/상단 메뉴 표시 |
| `NavigationDots` | 섹션별 도트 네비게이션(6개) |
| `OverlayMenu` | 전체 메뉴 오버레이(섹션별 세부 링크) |
| `FixAnimation` | 초기 진입 인트로 애니메이션 |
| `FloatingAd` | 우측 하단 고정 CTA |
| `Footer` | 저작권, 약관, 패밀리 사이트 토글 |

## 섹션별 컴포넌트
1. `SectionOne`: 메인 슬로건 영역.
2. `SectionTwo`: Our Value 카드 + 버튼 + 배경 애니메이션.
3. `SectionThree`: What we do 소개, 서비스별 애니메이션 아이콘과 링크 목록.
4. `SectionFour`: 흰 배경 이미지 + 두 개의 CTA 버튼.
5. `SectionFive`: 붉은 배경 CTA(광고문의 / 채용공고).
6. `SectionSix`: 하단 네비게이션 및 연락처 안내.

## 스타일
대부분의 레이아웃과 애니메이션은 `styles/style.css`에 정의되어 있습니다. 메뉴 오버레이, 도트 네비게이션, 인트로 효과, 섹션별 테마 전환 등의 UI 요소를 CSS 전환/키프레임으로 구현했습니다.



