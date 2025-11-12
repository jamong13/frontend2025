export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>SUBWAY® Korea</strong>
          <p>서울시 서초구 강남대로 535 프린스빌딩 15층 · 02-797-5036</p>
        </div>
        <div className="footer-links">
          <a href="https://www.subway.co.kr/" target="_blank" rel="noreferrer">
            공식 홈페이지
          </a>
          <a
            href="https://www.subway.co.kr/menuView"
            target="_blank"
            rel="noreferrer"
          >
            온라인 주문
          </a>
          <a
            href="https://www.subway.co.kr/franchise"
            target="_blank"
            rel="noreferrer"
          >
            가맹 문의
          </a>
        </div>
      </div>
    </footer>
  );
}
