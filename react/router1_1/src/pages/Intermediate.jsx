import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import './PageStyle.css';

const Intermediate = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSearchParams = () => {
    setSearchParams({ filter: 'active', sort: 'name' });
  };

  return (
    <div className="page-container">
      <h1>React Router 중급</h1>

      <section className="content-section">
        <h2>1. URL 파라미터 (useParams)</h2>
        <p>
          동적인 값을 URL에 포함시켜 사용할 수 있습니다. 예: <code>/user/:id</code>
        </p>
        <pre><code>{`// 라우트 정의
<Route path="/user/:id" element={<UserProfile />} />
<Route path="/product/:category/:itemId" element={<ProductDetail />} />

// 컴포넌트에서 사용
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>사용자 ID: {id}</div>;
}

function ProductDetail() {
  const { category, itemId } = useParams();
  return (
    <div>
      카테고리: {category}, 상품 ID: {itemId}
    </div>
  );
}`}</code></pre>

        <div className="demo-box">
          <h4>실제 예시:</h4>
          <button 
            onClick={() => handleNavigate('/user/123')}
            className="demo-button"
          >
            사용자 123 프로필 보기
          </button>
          <button 
            onClick={() => handleNavigate('/user/456')}
            className="demo-button"
          >
            사용자 456 프로필 보기
          </button>
        </div>

        <div className="info-box">
          <strong>💡 팁:</strong> 여러 파라미터를 동시에 사용할 수 있고, 
          파라미터명은 <code>useParams</code>에서 객체 구조 분해로 받습니다.
        </div>
      </section>

      <section className="content-section">
        <h2>2. 쿼리 스트링 (useSearchParams)</h2>
        <p>
          URL의 쿼리 스트링을 읽고 변경할 수 있습니다. 예: <code>/products?filter=active&sort=name</code>
        </p>
        <pre><code>{`import { useSearchParams } from 'react-router-dom';

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 쿼리 파라미터 읽기
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');
  
  // 쿼리 파라미터 설정
  const updateFilter = () => {
    setSearchParams({ filter: 'active', sort: 'name' });
  };
  
  return (
    <div>
      <p>필터: {filter}</p>
      <p>정렬: {sort}</p>
      <button onClick={updateFilter}>필터 업데이트</button>
    </div>
  );
}`}</code></pre>

        <div className="demo-box">
          <h4>실제 예시:</h4>
          <p>현재 쿼리 파라미터: {location.search || '(없음)'}</p>
          <button onClick={handleSearchParams} className="demo-button">
            쿼리 파라미터 추가하기
          </button>
          <button onClick={() => setSearchParams({})} className="demo-button">
            쿼리 파라미터 초기화
          </button>
        </div>
      </section>

      <section className="content-section">
        <h2>3. 프로그래밍 방식 네비게이션 (useNavigate)</h2>
        <p>
          버튼 클릭, 폼 제출 등 특정 조건에서 프로그래밍 방식으로 페이지를 이동할 수 있습니다.
        </p>
        <pre><code>{`import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await saveProduct(productData);
      // 성공 시 상품 목록으로 이동
      navigate('/products');
      
      // 또는 선택적 옵션과 함께
      navigate('/products', { 
        replace: true,  // 히스토리에 추가하지 않음
        state: { message: '상품이 저장되었습니다' }  // 전달할 데이터
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 내용 */}
    </form>
  );
}`}</code></pre>

        <div className="demo-box">
          <h4>네비게이션 옵션:</h4>
          <button 
            onClick={() => navigate('/')}
            className="demo-button"
          >
            홈으로 이동 (뒤로가기 가능)
          </button>
          <button 
            onClick={() => navigate('/basics', { replace: true })}
            className="demo-button"
          >
            기초 페이지로 이동 (히스토리 교체)
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="demo-button"
          >
            뒤로 가기
          </button>
          <button 
            onClick={() => navigate(1)}
            className="demo-button"
          >
            앞으로 가기
          </button>
        </div>
      </section>

      <section className="content-section">
        <h2>4. useLocation 훅</h2>
        <p>
          현재 위치 정보를 얻을 수 있습니다. state, search 등의 정보를 포함합니다.
        </p>
        <pre><code>{`import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const location = useLocation();
  
  // navigate로 전달된 state 접근
  const message = location.state?.message;
  
  // 경로 정보
  console.log(location.pathname);  // '/products/123'
  console.log(location.search);    // '?tab=reviews'
  console.log(location.hash);      // '#comments'
  
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}`}</code></pre>

        <div className="info-box">
          <p><strong>현재 위치 정보:</strong></p>
          <ul>
            <li>경로: {location.pathname}</li>
            <li>쿼리: {location.search || '(없음)'}</li>
            <li>해시: {location.hash || '(없음)'}</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h2>5. 중첩 라우팅 (Nested Routes)</h2>
        <p>
          라우트 내부에 또 다른 라우트를 구성하여 계층적 구조를 만들 수 있습니다.
        </p>
        <pre><code>{`// App.js
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
        <Link to="/dashboard/settings">설정</Link>
      </nav>
      <Outlet /> {/* 중첩 라우트가 여기에 렌더링됩니다 */}
    </div>
  );
}`}</code></pre>

        <div className="code-box">
          <strong>Outlet</strong>은 중첩 라우트를 렌더링하는 자리 표시자입니다.
        </div>
      </section>

      <section className="content-section">
        <h2>6. 인덱스 라우트</h2>
        <p>
          부모 경로와 동일한 경로에 기본적으로 보여줄 컴포넌트를 지정합니다.
        </p>
        <pre><code>{`<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route index element={<DashboardHome />} />
    {/* /dashboard 경로에서 DashboardHome이 렌더링됨 */}
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>`}</code></pre>
      </section>

      <section className="info-box">
        <h2>💡 중급 핵심 포인트</h2>
        <ul>
          <li><strong>useParams:</strong> URL 파라미터 추출</li>
          <li><strong>useSearchParams:</strong> 쿼리 스트링 관리</li>
          <li><strong>useNavigate:</strong> 프로그래밍 방식 네비게이션</li>
          <li><strong>useLocation:</strong> 현재 위치 정보 조회</li>
          <li><strong>Outlet:</strong> 중첩 라우트 렌더링</li>
          <li><strong>index:</strong> 부모 경로의 기본 컴포넌트</li>
        </ul>
      </section>
    </div>
  );
};

export default Intermediate;

