import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './PageStyle.css';

// 간단한 인증 시뮬레이션
let authState = { isAuthenticated: false, user: null };

const Examples = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(authState.isAuthenticated);
  const navigate = useNavigate();

  const handleLogin = () => {
    authState = { isAuthenticated: true, user: { name: 'John Doe' } };
    setIsAuthenticated(true);
    alert('로그인 성공!');
  };

  const handleLogout = () => {
    authState = { isAuthenticated: false, user: null };
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>실전 예제</h1>

      <section className="content-section">
        <h2>1. 인증 시스템 예제</h2>
        <p>로그인 상태에 따른 조건부 렌더링과 리다이렉트 예제입니다.</p>
        
        <div className="demo-box">
          <h4>현재 상태: {isAuthenticated ? '로그인됨 ✓' : '로그아웃됨'}</h4>
          {!isAuthenticated ? (
            <button onClick={handleLogin} className="demo-button">
              로그인
            </button>
          ) : (
            <button onClick={handleLogout} className="demo-button">
              로그아웃
            </button>
          )}
        </div>

        <pre><code>{`function LoginButton({ onLogin }) {
  return <button onClick={onLogin}>로그인</button>;
}

function LogoutButton({ onLogout }) {
  return <button onClick={onLogout}>로그아웃</button>;
}

function AuthExample() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // 실제로는 API 호출
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
        <LogoutButton onLogout={handleLogout} />
      ) : (
        <LoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>2. 상품 카탈로그 예제</h2>
        <p>동적 라우팅을 활용한 상품 목록 및 상세 페이지 예제입니다.</p>
        
        <div className="product-grid">
          <div className="product-card">
            <h3>노트북</h3>
            <p>고성능 노트북</p>
            <Link to="/product/1" className="product-link">상세보기</Link>
          </div>
          <div className="product-card">
            <h3>스마트폰</h3>
            <p>최신 스마트폰</p>
            <Link to="/product/2" className="product-link">상세보기</Link>
          </div>
          <div className="product-card">
            <h3>태블릿</h3>
            <p>프리미엄 태블릿</p>
            <Link to="/product/3" className="product-link">상세보기</Link>
          </div>
        </div>

        <pre><code>{`// 상품 목록 컴포넌트
function ProductList() {
  const products = [
    { id: 1, name: '노트북', price: 1500000 },
    { id: 2, name: '스마트폰', price: 1000000 },
    { id: 3, name: '태블릿', price: 800000 },
  ];
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>₩{product.price.toLocaleString()}</p>
          <Link to={'/product/' + product.id}>상세보기</Link>
        </div>
      ))}
    </div>
  );
}

// 상품 상세 컴포넌트
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 실제로는 API에서 상품 정보를 가져옴
  const product = useProduct(id);
  
  const handleAddToCart = () => {
    // 장바구니 추가 로직
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
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>3. 검색 기능 예제</h2>
        <p>쿼리 파라미터를 활용한 검색 기능 예제입니다.</p>
        
        <div className="demo-box">
          <h4>검색 예시</h4>
          <SearchDemo />
        </div>

        <pre><code>{`import { useSearchParams } from 'react-router-dom';

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
        <input 
          name="search" 
          type="text" 
          placeholder="검색어 입력..."
          defaultValue={query}
        />
        <button type="submit">검색</button>
      </form>
      
      {query && (
        <div className="search-results">
          <h3>검색 결과: "{query}"</h3>
          {/* 검색 결과 렌더링 */}
        </div>
      )}
    </div>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>4. 다국어 지원 예제</h2>
        <p>URL을 활용한 다국어 지원 예제입니다.</p>
        
        <pre><code>{`// 언어 선택기
function LanguageSwitcher() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const changeLanguage = (newLang) => {
    // 현재 경로에서 언어 코드 교체
    const pathWithoutLang = location.pathname.replace('/' + lang, '');
    navigate('/' + newLang + pathWithoutLang);
  };
  
  return (
    <div>
      <button onClick={() => changeLanguage('ko')}>한국어</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
    </div>
  );
}

// 라우트 구성
<Routes>
  <Route path="/:lang" element={<LanguageWrapper />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>`}</code></pre>
      </section>

      <section className="content-section">
        <h2>5. 모달 라우팅 예제</h2>
        <p>페이지 전환 없이 모달을 여는 예제입니다.</p>
        
        <pre><code>{`// 이미지 갤러리 예제
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // URL의 쿼리 파라미터 확인
    const imageId = new URLSearchParams(location.search).get('image');
    if (imageId) {
      // 이미지 모달 열기
      setSelectedImage(imageId);
    }
  }, [location]);
  
  const openModal = (imageId) => {
    // URL 업데이트 (모달 상태)
    navigate('?image=' + imageId, { replace: true });
    setSelectedImage(imageId);
  };
  
  const closeModal = () => {
    // URL 초기화
    navigate(location.pathname, { replace: true });
    setSelectedImage(null);
  };
  
  return (
    <div>
      <div className="gallery">
        {images.map(img => (
          <img 
            key={img.id}
            src={img.thumbnail}
            onClick={() => openModal(img.id)}
            alt={img.name}
          />
        ))}
      </div>
      
      {selectedImage && (
        <ImageModal 
          imageId={selectedImage}
          onClose={closeModal}
        />
      )}
    </div>
  );
}`}</code></pre>
      </section>

      <section className="info-box">
        <h2>💡 실전 예제 포인트</h2>
        <ul>
          <li>인증 상태 관리와 리다이렉트 패턴</li>
          <li>동적 라우팅을 활용한 CRUD 인터페이스</li>
          <li>쿼리 파라미터를 활용한 검색 및 필터링</li>
          <li>다국어 지원을 위한 URL 구조</li>
          <li>모달과 URL 동기화</li>
          <li>사용자 경험 최적화</li>
        </ul>
      </section>
    </div>
  );
};

// 검색 데모 컴포넌트
function SearchDemo() {
  const [searchParams, setSearchParams] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // 간단한 검색 시뮬레이션
    const mockResults = ['결과 1', '결과 2', '결과 3'];
    setResults(mockResults);
  };
  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
          type="text"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          placeholder="검색어 입력..."
          className="search-input"
        />
        <button type="submit" className="demo-button">검색</button>
      </form>
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result, idx) => (
            <div key={idx} className="result-item">{result}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Examples;

