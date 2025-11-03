# Tailwind CSS 예제 모음

React와 Tailwind CSS를 활용한 다양한 UI 컴포넌트 예제 프로젝트입니다.

## 🚀 시작하기

### 필수 요구사항
- Node.js (v16 이상)
- npm 또는 yarn

### 설치 및 실행

1. **패키지 설치**
```bash
npm install
```

2. **개발 서버 실행**
```bash
npm run dev
```

3. **브라우저에서 확인**
- 개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속합니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 📚 프로젝트 구조

```
tailwind-examples/
├── src/
│   ├── components/          # 컴포넌트 폴더
│   │   ├── ButtonExamples.jsx      # 버튼 예제
│   │   ├── CardExamples.jsx        # 카드 예제
│   │   ├── FormExamples.jsx        # 폼 예제
│   │   ├── LayoutExamples.jsx      # 레이아웃 예제
│   │   └── NavigationExamples.jsx  # 네비게이션 예제
│   ├── App.jsx              # 메인 App 컴포넌트
│   ├── main.jsx            # 엔트리 포인트
│   └── index.css           # Tailwind 설정
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind 설정 파일
├── postcss.config.js       # PostCSS 설정
└── vite.config.js          # Vite 설정
```

## 🎨 포함된 예제

### 1. 버튼 (ButtonExamples)
- **기본 버튼**: Primary, Secondary, Success, Danger 스타일
- **아웃라인 버튼**: 테두리만 있는 버튼
- **다양한 크기**: Small, Medium, Large
- **그라디언트 버튼**: 화려한 그라디언트 효과
- **아이콘 버튼**: 아이콘이 포함된 버튼
- **로딩 & 비활성화**: 상태를 나타내는 버튼

#### 주요 Tailwind 클래스
```jsx
// 기본 버튼
className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"

// 그라디언트 버튼
className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
```

### 2. 카드 (CardExamples)
- **기본 카드**: 심플한 카드 디자인
- **이미지 카드**: 이미지가 포함된 제품 카드
- **프로필 카드**: 사용자 프로필 카드
- **통계 카드**: 데이터를 표시하는 대시보드 카드

#### 주요 Tailwind 클래스
```jsx
// 기본 카드
className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"

// 통계 카드
className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white shadow-lg"
```

### 3. 폼 (FormExamples)
- **기본 입력 필드**: Text, Email, Password
- **Select & Textarea**: 드롭다운과 텍스트 영역
- **체크박스 & 라디오**: 선택 입력 요소
- **로그인 폼**: 완성된 로그인 폼 예제

#### 주요 Tailwind 클래스
```jsx
// 입력 필드
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"

// 체크박스
className="w-4 h-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-500"
```

### 4. 레이아웃 (LayoutExamples)
- **Flexbox 레이아웃**: 유연한 박스 레이아웃
- **Grid 레이아웃**: 그리드 시스템
- **반응형 레이아웃**: 화면 크기에 따라 변하는 레이아웃
- **센터 정렬**: 완벽한 수직/수평 정렬
- **사이드바 레이아웃**: 고정 사이드바
- **Holy Grail 레이아웃**: 헤더, 사이드바, 풋터가 있는 전통적 레이아웃

#### 주요 Tailwind 클래스
```jsx
// Flexbox
className="flex gap-4"
className="flex-1"

// Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"

// 센터 정렬
className="flex items-center justify-center"

// 반응형
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
```

### 5. 네비게이션 (NavigationExamples)
- **기본 네비게이션 바**: 심플한 헤더
- **그라디언트 네비게이션**: 화려한 그라디언트 헤더
- **모바일 반응형 메뉴**: 햄버거 메뉴
- **탭 네비게이션**: 탭 스타일 메뉴
- **Breadcrumb**: 경로 표시
- **수직 사이드바**: 대시보드 스타일 사이드바
- **Pill 네비게이션**: 알약 모양 메뉴

#### 주요 Tailwind 클래스
```jsx
// 네비게이션 바
className="bg-white border border-gray-200 rounded-lg shadow-sm"
className="px-6 py-4 flex items-center justify-between"

// 모바일 메뉴 토글
className="md:hidden text-white p-2 hover:bg-gray-700 rounded transition"

// 탭
className="px-6 py-3 border-b-2 border-blue-500 text-blue-600 font-semibold"
```

## 🎯 Tailwind CSS 핵심 개념

### 1. 유틸리티 클래스
Tailwind는 미리 정의된 유틸리티 클래스를 사용하여 스타일을 적용합니다.

```jsx
// 패딩과 마진
p-4    // padding: 1rem
px-6   // padding-left, padding-right: 1.5rem
py-2   // padding-top, padding-bottom: 0.5rem
m-4    // margin: 1rem

// 색상
bg-blue-500      // 배경색
text-white       // 글자색
border-gray-200  // 테두리색

// 크기
w-full    // width: 100%
h-64      // height: 16rem

// Flexbox
flex             // display: flex
flex-1           // flex: 1
items-center     // align-items: center
justify-between  // justify-content: space-between

// Grid
grid             // display: grid
grid-cols-3      // grid-template-columns: repeat(3, minmax(0, 1fr))
gap-4            // gap: 1rem
```

### 2. 반응형 디자인
Tailwind는 모바일 우선(mobile-first) 접근 방식을 사용합니다.

```jsx
// 브레이크포인트
sm:   // 640px 이상
md:   // 768px 이상
lg:   // 1024px 이상
xl:   // 1280px 이상
2xl:  // 1536px 이상

// 예제
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
// 모바일: 1열, 태블릿: 2열, 데스크톱: 4열
```

### 3. 상태 변형 (State Variants)
호버, 포커스 등의 상태에 따라 스타일을 변경합니다.

```jsx
hover:bg-blue-600    // 호버 시 배경색
focus:ring-2         // 포커스 시 링
active:scale-95      // 클릭 시 크기
disabled:opacity-50  // 비활성화 시 투명도
```

### 4. 그라디언트
아름다운 그라디언트 효과를 쉽게 만들 수 있습니다.

```jsx
bg-gradient-to-r        // 왼쪽에서 오른쪽
bg-gradient-to-br       // 좌상단에서 우하단
from-blue-500          // 시작 색상
to-purple-500          // 종료 색상
via-pink-500           // 중간 색상
```

### 5. 전환 효과 (Transitions)
부드러운 애니메이션을 추가합니다.

```jsx
transition              // 기본 전환 효과
transition-all         // 모든 속성 전환
duration-200           // 200ms 지속
ease-in-out            // 가속도 곡선

// 예제
className="transform hover:scale-105 transition duration-200"
```

### 6. 그림자 (Shadows)
깊이감을 주는 그림자 효과입니다.

```jsx
shadow-sm    // 작은 그림자
shadow       // 기본 그림자
shadow-md    // 중간 그림자
shadow-lg    // 큰 그림자
shadow-xl    // 매우 큰 그림자
shadow-2xl   // 가장 큰 그림자
```

## 🛠️ 커스터마이징

`tailwind.config.js` 파일에서 Tailwind를 커스터마이징할 수 있습니다:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        // 사용자 정의 색상 추가
      },
      spacing: {
        // 사용자 정의 간격 추가
      },
      // 기타 커스터마이징...
    },
  },
  plugins: [],
}
```

## 📖 학습 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [Tailwind CSS 플레이그라운드](https://play.tailwindcss.com/)
- [Tailwind UI 컴포넌트](https://tailwindui.com/)

## 💡 팁

1. **클래스 순서**: Tailwind는 클래스 순서에 영향을 받지 않습니다.
2. **@apply 지시어**: 반복되는 유틸리티를 CSS 파일에서 그룹화할 수 있습니다.
3. **JIT 모드**: Just-In-Time 컴파일러로 필요한 스타일만 생성합니다.
4. **다크 모드**: `dark:` 접두사로 다크 모드 스타일을 추가할 수 있습니다.

## 🤝 기여

이슈나 풀 리퀘스트는 언제든지 환영합니다!

## 📄 라이선스

MIT License

---

**즐거운 코딩 되세요! 🎉**


