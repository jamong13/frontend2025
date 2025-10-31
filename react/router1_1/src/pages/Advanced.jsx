import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import './PageStyle.css';

// Lazy loading 예시
const LazyComponent = lazy(() => import('../components/LazyComponent'));

const Advanced = () => {
  return (
    <div className="page-container">
      <h1>React Router 고급</h1>

      <section className="content-section">
        <h2>1. Lazy Loading & Code Splitting</h2>
        <p>
          큰 애플리케이션에서는 모든 컴포넌트를 한 번에 로드하지 않고, 
          필요한 시점에 동적으로 로드하여 초기 로딩 시간을 줄일 수 있습니다.
        </p>
        <pre><code>{`import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트를 동적으로 import
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`}</code></pre>

        <div className="code-box">
          <strong>장점:</strong>
          <ul>
            <li>초기 번들 크기 감소</li>
            <li>빠른 초기 로딩</li>
            <li>필요한 리소스만 로드</li>
          </ul>
        </div>

        <h3>Suspense를 이용한 로딩 상태</h3>
        <pre><code>{`function CustomLoadingFallback() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>페이지를 불러오는 중...</p>
    </div>
  );
}

<Suspense fallback={<CustomLoadingFallback />}>
  <Routes>
    {/* 라우트들 */}
  </Routes>
</Suspense>`}</code></pre>
      </section>

      <section className="content-section">
        <h2>2. Protected Routes (보호된 라우트)</h2>
        <p>
          인증이 필요한 페이지를 보호하고, 인증되지 않은 사용자는 로그인 페이지로 리다이렉트합니다.
        </p>
        <pre><code>{`// ProtectedRoute.js
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// App.js에서 사용
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}`}</code></pre>

        <h3>조건부 리다이렉트 예시</h3>
        <pre><code>{`function Dashboard() {
  const user = useSelector(state => state.auth.user);
  
  if (!user) {
    return <Navigate to="/login" state={{ from: '/dashboard' }} />;
  }
  
  // 사용자 역할에 따른 리다이렉트
  if (user.role === 'admin') {
    return <Navigate to="/admin" replace />;
  }
  
  return <div>대시보드</div>;
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>3. 커스텀 훅 만들기</h2>
        <p>
          자주 사용하는 라우터 로직을 재사용 가능한 커스텀 훅으로 만들 수 있습니다.
        </p>
        <pre><code>{`// useAuthRedirect.js
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

// 사용 예시
function Profile() {
  const { isAuthenticated } = useAuth();
  
  useAuthRedirect(isAuthenticated);
  
  return <div>프로필 페이지</div>;
}`}</code></pre>

        <h3>쿼리 파라미터 관리 훅</h3>
        <pre><code>{`// useQueryParams.js
import { useSearchParams } from 'react-router-dom';

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const getParam = (key) => searchParams.get(key);
  
  const setParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };
  
  return { getParam, setParam };
}

// 사용 예시
function Products() {
  const { getParam, setParam } = useQueryParams();
  
  const filter = getParam('filter') || 'all';
  
  return (
    <div>
      <button onClick={() => setParam('filter', 'active')}>
        활성 상품만 보기
      </button>
    </div>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>4. 동적 라우트 생성 (useRoutes)</h2>
        <p>
          JavaScript 객체를 사용하여 라우트를 선언적으로 구성할 수 있습니다.
        </p>
        <pre><code>{`import { useRoutes } from 'react-router-dom';

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
        { path: 'settings', element: <Settings /> },
      ],
    },
    {
      path: '/products',
      element: <Products />,
      children: [
        { index: true, element: <ProductList /> },
        { path: ':id', element: <ProductDetail /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  
  return routes;
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>5. 에러 경계 (Error Boundary)</h2>
        <p>
          라우트 레벨에서 에러를 처리하여 사용자에게 우아한 에러 메시지를 제공합니다.
        </p>
        <pre><code>{`import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-container">
      <h2>문제가 발생했습니다</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Routes>
          {/* 라우트들 */}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>6. SEO 최적화</h2>
        <p>
          React Router를 사용하는 SPA도 SEO에 최적화할 수 있습니다.
        </p>
        <pre><code>{`// MetaTags 컴포넌트
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MetaTags({ title, description, keywords }) {
  const location = useLocation();
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://example.com{location.pathname}" />
    </Helmet>
  );
}

// 사용 예시
function ProductDetail() {
  const { id } = useParams();
  const product = useProduct(id);
  
  return (
    <>
      <MetaTags
        title="[상품명] - 쇼핑몰"
        description={product.description}
        keywords={product.tags.join(', ')}
      />
      <div>{/* 상품 내용 */}</div>
    </>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>7. 스크롤 위치 복원</h2>
        <p>
          페이지 이동 시 스크롤을 상단으로 자동 이동시킵니다.
        </p>
        <pre><code>{`// ScrollToTop.js
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
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* 라우트들 */}
      </Routes>
    </BrowserRouter>
  );
}`}</code></pre>
      </section>

      <section className="info-box">
        <h2>💡 고급 핵심 포인트</h2>
        <ul>
          <li><strong>Lazy Loading:</strong> 번들 크기 최적화 및 성능 향상</li>
          <li><strong>Protected Routes:</strong> 인증 및 권한 기반 라우팅</li>
          <li><strong>커스텀 훅:</strong> 재사용 가능한 라우터 로직 분리</li>
          <li><strong>useRoutes:</strong> 객체 기반 라우트 구성</li>
          <li><strong>Error Boundary:</strong> 라우트 레벨 에러 처리</li>
          <li><strong>SEO:</strong> 메타 태그 관리 및 최적화</li>
        </ul>
      </section>
    </div>
  );
};

export default Advanced;

