import { Link, NavLink } from 'react-router-dom';
import './PageStyle.css';

const Basics = () => {
  return (
    <div className="page-container">
      <h1>React Router 기초</h1>

      <section className="content-section">
        <h2>1. React Router란?</h2>
        <p>
          React Router는 React 애플리케이션의 네비게이션을 관리하는 라이브러리입니다. 
          브라우저의 URL과 React 컴포넌트를 동기화하여 사용자가 직관적으로 페이지를 이동할 수 있도록 합니다.
        </p>
        <ul>
          <li><strong>클라이언트 사이드 라우팅:</strong> 페이지 새로고침 없이 콘텐츠 전환</li>
          <li><strong>동적 라우팅:</strong> URL 파라미터를 통한 동적 콘텐츠 렌더링</li>
          <li><strong>히스토리 API 활용:</strong> 브라우저의 뒤로/앞으로 버튼 지원</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>2. 설치 및 기본 설정</h2>
        <h3>설치</h3>
        <pre><code>{`npm install react-router-dom`}</code></pre>

        <h3>기본 구조</h3>
        <pre><code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code></pre>
      </section>

      <section className="content-section">
        <h2>3. BrowserRouter</h2>
        <p>
          <strong>BrowserRouter</strong>는 React Router의 핵심 컴포넌트로, HTML5 History API를 사용하여 
          URL을 동기화합니다. 앱의 최상위 레벨에서 전체 애플리케이션을 감싸줍니다.
        </p>
        <div className="code-box">
          <code>&lt;BrowserRouter&gt;</code> - HTML5 History API 사용 (권장)<br/>
          <code>&lt;HashRouter&gt;</code> - URL에 # 기호 사용<br/>
          <code>&lt;MemoryRouter&gt;</code> - 메모리에 히스토리 저장 (테스트용)
        </div>
      </section>

      <section className="content-section">
        <h2>4. Routes와 Route</h2>
        <p>
          <strong>Routes</strong>는 여러 개의 <strong>Route</strong>를 포함하는 컨테이너입니다. 
          현재 URL과 일치하는 첫 번째 Route의 element가 렌더링됩니다.
        </p>
        <pre><code>{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
</Routes>`}</code></pre>
        <p><strong>path:</strong> URL 경로를 정의합니다.</p>
        <p><strong>element:</strong> 해당 경로에서 렌더링할 컴포넌트를 지정합니다.</p>
      </section>

      <section className="content-section">
        <h2>5. Link와 NavLink</h2>
        
        <h3>Link 컴포넌트</h3>
        <p>다른 페이지로 이동하는 링크를 생성합니다.</p>
        <pre><code>{`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/contact">연락처</Link>
    </nav>
  );
}`}</code></pre>
        
        <div className="demo-box">
          <h4>실제 동작 예시:</h4>
          <Link to="/" className="demo-link">홈으로 이동</Link>
          <Link to="/intermediate" className="demo-link">중급 페이지로 이동</Link>
        </div>

        <h3>NavLink 컴포넌트</h3>
        <p>현재 활성화된 링크에 특별한 스타일을 적용할 수 있습니다.</p>
        <pre><code>{`import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? 'active-link' : ''}
>
  소개
</NavLink>`}</code></pre>

        <div className="demo-box">
          <h4>실제 동작 예시:</h4>
          <NavLink to="/" end className="demo-link">
            {({ isActive }) => isActive ? '✓ 홈 (활성화됨)' : '홈'}
          </NavLink>
          <NavLink to="/intermediate" className="demo-link">
            {({ isActive }) => isActive ? '✓ 중급 (활성화됨)' : '중급'}
          </NavLink>
        </div>
      </section>

      <section className="content-section">
        <h2>6. 기본적인 라우팅 패턴</h2>
        <pre><code>{`// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navi from './components/Navi';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}`}</code></pre>
      </section>

      <section className="info-box">
        <h2>💡 핵심 포인트</h2>
        <ul>
          <li>BrowserRouter는 앱의 최상위에 위치해야 합니다</li>
          <li>Routes 내부에 모든 Route를 정의합니다</li>
          <li>Link를 사용하여 페이지 새로고침 없이 이동합니다</li>
          <li>NavLink는 활성 상태 표시에 유용합니다</li>
          <li>path="*"로 404 페이지를 처리할 수 있습니다</li>
        </ul>
      </section>
    </div>
  );
};

export default Basics;

