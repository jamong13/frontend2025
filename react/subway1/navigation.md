## 네비게이션 구조 요약

- **상단 헤더(`site-header`)**
  - 브랜드 영역: `Subway`와 `Fresh Choice` 텍스트를 노출
  - 네비게이션 래퍼(`header-nav`): 마우스/포커스 이벤트로 메가 메뉴 열림 상태를 제어

- **기본 메뉴(`top-nav`)**
  - `navItems` 배열을 기반으로 홈, 메뉴소개, 이용방법, 새소식, 가맹점 링크를 생성
  - 각 항목은 `NavLink`로 라우팅되고, 활성 경로에 `active` 클래스가 적용
  - 항목에 마우스를 올리거나 포커스하면 `hoveredItem` 상태가 업데이트되어 서브 메뉴 열림

- **메가 메뉴(`mega-menu`)**
  - `data-open` 속성으로 열림 여부(`hoveredItem` 존재 여부)를 표시
  - `navItems` 항목마다 하나의 열(`mega-column`)이 렌더링되며, 현재 호버된 항목은 `mega-column-active` 클래스를 가짐
  - 각 열은 `subItems` 배열을 기반으로 서브 링크 목록을 제공 (`Link` 컴포넌트 사용)
  - `onMouseEnter`와 `onFocus`로 열 상태 유지, 포인터 또는 키보드 탐색 시 안정적으로 작동

- **포커스 제어**
  - `header-nav`의 `onBlur` 핸들러가 전달받은 `FocusEvent`를 통해 포커스가 내부 요소를 벗어나면 `hoveredItem`을 `null`로 리셋
  - `onMouseLeave` 역시 동일하게 `hoveredItem`을 초기화해 메뉴가 닫히도록 처리


