# React + SCSS 예제 파일

이 폴더에는 React에서 SCSS를 사용하는 실제 예제 컴포넌트들이 포함되어 있습니다.

## 📁 파일 구조

```
examples/
├── Button.jsx              # 버튼 컴포넌트
├── Button.scss             # 버튼 스타일 (일반 SCSS)
├── Card.jsx                # 카드 컴포넌트
├── Card.module.scss        # 카드 스타일 (CSS Modules)
├── TodoApp.jsx             # Todo 앱 컴포넌트
├── TodoApp.module.scss     # Todo 앱 스타일 (CSS Modules)
├── ExampleApp.jsx          # 모든 예제를 보여주는 메인 앱
├── ExampleApp.scss         # 메인 앱 스타일
└── README.md               # 이 파일
```

## 🚀 사용 방법

### 1. React 프로젝트 생성 및 SCSS 설치

```bash
# Vite 사용 (권장)
npm create vite@latest my-scss-app -- --template react
cd my-scss-app
npm install
npm install -D sass

# 또는 Create React App 사용
npx create-react-app my-scss-app
cd my-scss-app
npm install sass
```

### 2. 예제 파일 복사

이 폴더의 모든 파일을 React 프로젝트의 `src/` 폴더에 복사합니다.

### 3. App.jsx 수정

`src/App.jsx` 파일을 다음과 같이 수정합니다:

```jsx
import ExampleApp from './ExampleApp';

function App() {
  return <ExampleApp />;
}

export default App;
```

### 4. 개발 서버 실행

```bash
npm run dev  # Vite
# 또는
npm start    # Create React App
```

## 📚 컴포넌트 설명

### Button 컴포넌트
- **파일**: `Button.jsx`, `Button.scss`
- **특징**: 일반 SCSS 파일 사용
- **Props**:
  - `variant`: 'primary', 'success', 'danger', 'warning', 'secondary'
  - `size`: 'small', 'medium', 'large'
  - `onClick`: 클릭 이벤트 핸들러
  - `disabled`: 비활성화 상태

**사용 예시**:
```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  클릭하세요
</Button>
```

### Card 컴포넌트
- **파일**: `Card.jsx`, `Card.module.scss`
- **특징**: CSS Modules 사용 (로컬 스코프)
- **Props**:
  - `title`: 카드 제목
  - `description`: 카드 설명
  - `imageUrl`: 이미지 URL (선택)
  - `tags`: 태그 배열 (선택)
  - `footer`: 푸터 내용 (선택)

**사용 예시**:
```jsx
<Card
  title="제목"
  description="설명 내용"
  tags={['React', 'SCSS']}
  footer={<button>더보기</button>}
/>
```

### TodoApp 컴포넌트
- **파일**: `TodoApp.jsx`, `TodoApp.module.scss`
- **특징**: 
  - 완전한 Todo 애플리케이션
  - CSS Modules 사용
  - 상태 관리 (useState)
  - 필터링 기능 (전체/진행중/완료)
  - 반응형 디자인

**사용 예시**:
```jsx
<TodoApp />
```

## 🎨 SCSS 기능 활용

### 1. 변수 사용
```scss
$primary-color: #3498db;
$btn-padding: 10px 20px;
```

### 2. 중첩 (Nesting)
```scss
.btn {
  padding: 10px;
  
  &:hover {
    background: blue;
  }
  
  &--primary {
    color: white;
  }
}
```

### 3. 믹스인 (Mixins)
```scss
@mixin btn-size($padding-y, $padding-x) {
  padding: $padding-y $padding-x;
}

.btn-small {
  @include btn-size(6px, 12px);
}
```

### 4. 색상 함수
```scss
.btn {
  background: $primary-color;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}
```

### 5. CSS Modules
```scss
// Card.module.scss
.card {
  padding: 20px;
}

.cardTitle {
  font-size: 1.5rem;
}
```

```jsx
// Card.jsx
import styles from './Card.module.scss';

<div className={styles.card}>
  <h3 className={styles.cardTitle}>Title</h3>
</div>
```

## 💡 팁

1. **일반 SCSS vs CSS Modules**
   - 일반 SCSS: 전역 스타일, 공통 컴포넌트
   - CSS Modules: 컴포넌트별 스타일, 클래스명 충돌 방지

2. **BEM 네이밍 규칙**
   - Block: `.btn`
   - Element: `.btn__icon`
   - Modifier: `.btn--primary`

3. **반응형 디자인**
   ```scss
   @media (max-width: 768px) {
     .container {
       padding: 16px;
     }
   }
   ```

4. **성능 최적화**
   - 믹스인 남용 주의
   - 중첩 깊이 3-4단계로 제한
   - 필요한 곳에만 `@extend` 사용

## 🔗 참고 자료

- [SCSS 공식 문서](https://sass-lang.com/)
- [React 공식 문서](https://react.dev/)
- [CSS Modules 가이드](https://github.com/css-modules/css-modules)

즐거운 코딩 되세요! 🚀

