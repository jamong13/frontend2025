const milestones = [
  {
    title: "가맹 상담",
    description: "지사 담당자와 1:1 상담을 통해 지역 및 조건을 확인합니다.",
  },
  {
    title: "사업 설명회",
    description:
      "브랜드 철학, 투자 비용, 교육 과정 등 가맹 성공 전략을 공유합니다.",
  },
  {
    title: "교육 & 오픈",
    description:
      "본사 직영 아카데미에서 조리 및 운영 교육 후 매장 오픈을 준비합니다.",
  },
];
export default function Franchise() {
  return (
    <div className="page franchise-page">
      <section className="page-hero">
        <div className="container">
          <h1>써브웨이 가맹점 안내</h1>
          <p>
            50년 역사의 No.1 프랜차이즈. 체계적인 지원과 탄탄한 브랜드 파워로
            안정적인 창업을 도와드립니다.
          </p>
        </div>
      </section>
      <section className="container milestone-grid">
        {milestones.map((milestone) => (
          <article key={milestone.title} className="milestone-card">
            <h2>{milestone.title}</h2>
            <p>{milestone.description}</p>
          </article>
        ))}
      </section>
      <section className="franchise-contact">
        <div className="container contact-inner">
          <div>
            <h3>가맹 신청 &amp; 문의</h3>
            <p>
              온라인으로 신청서를 작성하거나 가까운 지사에 문의하시면 상세한
              안내를 도와드립니다.
            </p>
            <ul>
              <li>대표전화: 02-797-5036</li>
              <li>지사 안내: 수도권 / 지방</li>
              <li>사업설명회: 정기 개최, 사전 예약 필수</li>
            </ul>
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-secondary"
              href="https://www.subway.co.kr/franchise"
              target="_blank"
              rel="noreferrer"
            >
              가맹 신청
            </a>
            <a
              className="btn btn-outline"
              href="https://www.subway.co.kr/support"
              target="_blank"
              rel="noreferrer"
            >
              지사 안내
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
