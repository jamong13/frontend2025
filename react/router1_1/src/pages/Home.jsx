import './PageStyle.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>React Router 완벽 가이드</h1>
        <p className="subtitle">
          React Router를 활용한 단일 페이지 애플리케이션(SPA) 개발을 마스터하세요
        </p>
      </div>

      <div className="content-section">
        <h2>이 가이드에서 배우는 내용</h2>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>📚 기초 개념</h3>
            <ul>
              <li>React Router란?</li>
              <li>설치 및 기본 설정</li>
              <li>BrowserRouter와 Routes</li>
              <li>Link와 NavLink 사용법</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>🎯 중급 기술</h3>
            <ul>
              <li>URL 파라미터와 쿼리 스트링</li>
              <li>중첩 라우팅 (Nested Routes)</li>
              <li>프로그래밍 방식 네비게이션</li>
              <li>리다이렉트 및 네비게이션 가드</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>🚀 고급 기법</h3>
            <ul>
              <li>Lazy Loading & Code Splitting</li>
              <li>커스텀 훅 활용</li>
              <li>라우트 기반 권한 관리</li>
              <li>SEO 최적화 전략</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>💡 실전 예제</h3>
            <ul>
              <li>인증 시스템 연동</li>
              <li>다국어 지원</li>
              <li>애니메이션 전환</li>
              <li>에러 핸들링</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <h2>왜 React Router를 사용해야 할까요?</h2>
          <p>
            React Router는 React 애플리케이션에서 라우팅을 구현하기 위한 강력한 라이브러리입니다. 
            전통적인 멀티 페이지 웹사이트처럼 URL을 변경하여 콘텐츠를 표시하지만, 페이지 전체를 
            다시 로드하지 않고 필요한 부분만 업데이트합니다. 이를 통해 빠르고 부드러운 사용자 
            경험을 제공할 수 있습니다.
          </p>
        </div>

        <div className="quick-start">
          <h2>빠른 시작</h2>
          <pre><code>{`npm install react-router-dom

// 또는 yarn 사용시
yarn add react-router-dom`}</code></pre>
        </div>
      </div>
    </div>
  );
};

export default Home;

