import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Fresh Since 1965</p>
            <h1>
              신선함이 살아있는{" "}
              <span className="highlight">써브웨이 스타일</span>
            </h1>
            <p className="lead">
              주문 즉시 구워낸 빵과 7가지 야채, 프리미엄 토핑으로 완성되는
              맞춤형 샌드위치. 오늘은 어떤 조합으로 즐겨볼까요?
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">
                인기 메뉴 보기
              </Link>
              <Link to="/how-to-order" className="btn btn-outline">
                이용방법 알아보기
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="fresh-card">
              <p>Today&apos;s Soup</p>
              <strong>토시 비프</strong>
              <span>따끈하게 즐기는 데일리 스페셜</span>
            </div>
          </div>
        </div>
      </section>

      <section className="hightlights">
        <div className="container highlight-grid">
          <article className="highlight-card">
            <h3>메뉴소개</h3>
            <p>
              클래식부터 프리미엄까지, 취향대로 골라 담는 써브웨이 샌드위치
              라인업.
            </p>
            <Link to="/menu" className="text-link">
              샌드위치 보러가기 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>이용방법</h3>
            <p>
              빵 선택에서 토핑, 소스까지. 단계별 가이드를 따라 손쉽게 주문해
              보세요.
            </p>
            <Link to="/how-to-order" className="text-link">
              주문 가이드 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>새소식</h3>
            <p>프로모션과 방송 PPL, 브랜드 소식을 가장 빠르게 만나보세요.</p>
            <Link to="/news" className="text-link">
              최신 소식 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>가맹점</h3>
            <p>
              No.1 프랜차이즈 써브웨이의 가맹 절차와 투자 정보를 확인하세요.
            </p>
            <Link to="/franchise" className="text-link">
              가맹 안내 →
            </Link>
          </article>
        </div>
      </section>
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>써브웨이를 제대로 즐기는 가장 쉬운 방법</h2>
            <p>온라인 주문으로 빠르게 픽업하고 썹 포인트도 챙기세요.</p>
          </div>
          <a
            className="btn btn-secondary"
            href="https://www.subway.co.kr/"
            target="_blank"
            rel="noreferrer"
            // 외부사이트로 이동하면 브라우저는 자동으로 어디서 왔는지(referrer)
            // 전송 -> rel="noreferrer" 적어 놓으면 헤더를 보내지 않음
            // 보안(안 하면 역으로 들어올 수 있는 해킹 기술 있어서 필요)
          >
            온라인 주문하기
          </a>
        </div>
      </section>
    </div>
  );
}
