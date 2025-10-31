# React Router 완벽 가이드

React Router를 활용한 단일 페이지 애플리케이션(SPA) 개발을 위한 종합 가이드입니다.

## 목차

1. [React Router란?](#react-router란)
2. [기초 개념](#기초-개념)
3. [중급 기술](#중급-기술)
4. [고급 기법](#고급-기법)
5. [실전 예제](#실전-예제)

---

## React Router란?

React Router는 React 애플리케이션에서 라우팅을 구현하기 위한 강력한 라이브러리입니다. 전통적인 멀티 페이지 웹사이트처럼 URL을 변경하여 콘텐츠를 표시하지만, 페이지 전체를 다시 로드하지 않고 필요한 부분만 업데이트합니다.

### 주요 특징

- **클라이언트 사이드 라우팅**: 페이지 새로고침 없이 콘텐츠 전환
- **동적 라우팅**: URL 파라미터를 통한 동적 콘텐츠 렌더링
- **히스토리 API 활용**: 브라우저의 뒤로/앞으로 버튼 지원

### 설치

```bash
npm install react-router-dom
```

---

## 기초 개념

### 1. BrowserRouter

`BrowserRouter`는 React Router의 핵심 컴포넌트로, HTML5 History API를 사용하여 URL을 동기화합니다.

```jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* 앱 내용 */}
    </BrowserRouter>
  );
}
```

### 2. Routes와 Route

`Routes`는 여러 개의 `Route`를 포함하는 컨테이너입니다.

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
</Routes>
```

- `path`: URL 경로를 정의
- `element`: 해당 경로에서 렌더링할 컴포넌트

### 3. Link와 NavLink

**Link 컴포넌트**는 페이지 새로고침 없이 다른 페이지로 이동하는 링크를 생성합니다.

```jsx
import { Link } from 'react-router-dom';

<Link to="/">홈</Link>
<Link to="/about">소개</Link>
```

**NavLink 컴포넌트**는 현재 활성화된 링크에 특별한 스타일을 적용할 수 있습니다.

```jsx
import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? 'active-link' : ''}
>
  소개
</NavLink>
```

---

## 중급 기술

### 1. URL 파라미터 (useParams)

동적인 값을 URL에 포함시켜 사용할 수 있습니다.

```jsx
// 라우트 정의
<Route path="/user/:id" element={<UserProfile />} />

// 컴포넌트에서 사용
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>사용자 ID: {id}</div>;
}
```

### 2. 쿼리 스트링 (useSearchParams)

URL의 쿼리 스트링을 읽고 변경할 수 있습니다.

```jsx
import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');
  
  const updateFilter = () => {
    setSearchParams({ filter: 'active', sort: 'name' });
  };
  
  return (
    <div>
      <p>필터: {filter}</p>
      <button onClick={updateFilter}>필터 업데이트</button>
    </div>
  );
}
```

### 3. 프로그래밍 방식 네비게이션 (useNavigate)

버튼 클릭, 폼 제출 등 특정 조건에서 프로그래밍 방식으로 페이지를 이동할 수 있습니다.

```jsx
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveProduct(productData);
    
    // 홈으로 이동
    navigate('/');
    
    // 히스토리 교체 (뒤로가기 불가)
    navigate('/dashboard', { replace: true });
    
    // 데이터 전달
    navigate('/products', { 
      state: { message: '저장되었습니다' }
    });
  };
  
  // 뒤로 가기
  navigate(-1);
  
  // 앞으로 가기
  navigate(1);
}
```

### 4. useLocation 훅

현재 위치 정보를 얻을 수 있습니다.

```jsx
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  
  const message = location.state?.message;
  
  console.log(location.pathname);  // '/products/123'
  console.log(location.search);    // '?tab=reviews'
  console.log(location.hash);      // '#comments'
  
  return <div>{message && <p>{message}</p>}</div>;
}
```

### 5. 중첩 라우팅 (Nested Routes)

라우트 내부에 또 다른 라우트를 구성하여 계층적 구조를 만들 수 있습니다.

```jsx
// App.js
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<DashboardHome />} />
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

// Dashboard.js
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>대시보드</h2>
      <nav>
        <Link to="/dashboard">홈</Link>
        <Link to="/dashboard/profile">프로필</Link>
      </nav>
      <Outlet /> {/* 중첩 라우트가 여기에 렌더링 */}
    </div>
  );
}
```

---

## 고급 기법

### 1. Lazy Loading & Code Splitting

초기 로딩 시간을 줄이기 위해 필요한 시점에 동적으로 컴포넌트를 로드합니다.

```jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### 2. Protected Routes (보호된 라우트)

인증이 필요한 페이지를 보호하고, 인증되지 않은 사용자는 로그인 페이지로 리다이렉트합니다.

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// 사용
<Route path="/dashboard" element={
  <ProtectedRoute isAuthenticated={isAuthenticated}>
    <Dashboard />
  </ProtectedRoute>
} />
```

### 3. 커스텀 훅 만들기

자주 사용하는 라우터 로직을 재사용 가능한 커스텀 훅으로 만들 수 있습니다.

```jsx
// useAuthRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuthRedirect(isAuthenticated, redirectTo = '/login') {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);
}

// 사용
function Profile() {
  const { isAuthenticated } = useAuth();
  useAuthRedirect(isAuthenticated);
  
  return <div>프로필 페이지</div>;
}
```

### 4. 동적 라우트 생성 (useRoutes)

JavaScript 객체를 사용하여 라우트를 선언적으로 구성할 수 있습니다.

```jsx
import { useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      children: [
        { index: true, element: <DashboardHome /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  
  return routes;
}
```

### 5. 스크롤 위치 복원

페이지 이동 시 스크롤을 상단으로 자동 이동시킵니다.

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// App.js
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    {/* 라우트들 */}
  </Routes>
</BrowserRouter>
```

---

## 실전 예제

### 1. 인증 시스템

```jsx
function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };
  
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <button onClick={handleLogin}>로그인</button>
      )}
    </div>
  );
}
```

### 2. 상품 카탈로그

```jsx
// 상품 목록
function ProductList() {
  const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '스마트폰', price: 1000000 },
  ];
  
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₩{product.price.toLocaleString()}</p>
          <Link to={`/product/${product.id}`}>상세보기</Link>
        </div>
      ))}
    </div>
  );
}

// 상품 상세
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = useProduct(id);
  
  const handleAddToCart = () => {
    alert('장바구니에 추가되었습니다!');
    navigate('/cart');
  };
  
  return (
    <div>
      <h2>{product.name}</h2>
      <p>가격: ₩{product.price.toLocaleString()}</p>
      <button onClick={handleAddToCart}>장바구니에 추가</button>
    </div>
  );
}
```

### 3. 검색 기능

```jsx
function SearchDemo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get('search');
    
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input name="search" type="text" />
        <button type="submit">검색</button>
      </form>
      
      {query && (
        <div>
          <h3>검색 결과: "{query}"</h3>
        </div>
      )}
    </div>
  );
}
```

---

## 핵심 포인트 정리

### 기초
- BrowserRouter는 앱의 최상위에 위치
- Routes 내부에 모든 Route 정의
- Link로 페이지 새로고침 없이 이동

### 중급
- useParams: URL 파라미터 추출
- useSearchParams: 쿼리 스트링 관리
- useNavigate: 프로그래밍 방식 네비게이션
- useLocation: 현재 위치 정보 조회
- Outlet: 중첩 라우트 렌더링

### 고급
- Lazy Loading: 번들 크기 최적화
- Protected Routes: 인증 및 권한 관리
- 커스텀 훅: 재사용 가능한 로직 분리
- useRoutes: 객체 기반 라우트 구성
- SEO: 메타 태그 관리 및 최적화

---

## 프로젝트 구조

```
src/
├── components/
│   ├── Navi.jsx          # 네비게이션
│   └── LazyComponent.jsx # 지연 로딩 예제
├── pages/
│   ├── Home.jsx          # 홈
│   ├── Basics.jsx        # 기초 설명
│   ├── Intermediate.jsx  # 중급 설명
│   ├── Advanced.jsx      # 고급 설명
│   ├── Examples.jsx      # 실전 예제
│   └── ProductDetail.jsx # 상품 상세
├── App.jsx
└── main.jsx
```

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm run build
```

브라우저에서 http://localhost:5173 접속

---

## 추가 학습 자료

- [React Router 공식 문서](https://reactrouter.com/)
- [React 공식 문서](https://react.dev/)
- [JavaScript MDN](https://developer.mozilla.org/)

---

**작성일**: 2024년  
**버전**: React Router v6.20.0

