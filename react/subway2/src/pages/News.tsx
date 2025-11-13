const newsItems = [
  {
    title: "써브웨이와 함께하는 tvN 월화드라마 '얄미운 사랑'",
    tag: "드라마 PPL",
    summary:
      "따뜻한 감성과 함께 하는 써브웨이 PPL. 드라마 속 주인공과 같은 메뉴를 만나보세요.",
  },
  {
    title: "썹 카드 유효기간 및 연장 안내",
    tag: "공지사항",
    summary:
      "썹 카드 및 포인트 소멸 일정을 확인하고 기한 내 혜택을 이용하세요.",
  },
  {
    title: "써브웨이와 함께하는 JTBC 금요시리즈 '마이 유스'",
    tag: "브랜드 캠페인",
    summary: "트렌디한 청춘 드라마 속 써브웨이 매장을 만나보세요.",
  },
  {
    title: "써브웨이와 함께하는 SBS 금토드라마 '트라이'",
    tag: "프로모션",
    summary: "드라마 방영 기념 한정 이벤트와 함께하는 특별한 메뉴 조합.",
  },
];

export default function News() {
  return (
    <div className="page news-page">
      <section className="page-hero">
        <div className="container">
          <h1>새소식</h1>
          <p>
            써브웨이의 다양한 이벤트, 프로모션, 광고 소식을 가장 먼저
            확인하세요.
          </p>
        </div>
      </section>
      <section className="container news-list">
        {newsItems.map((item) => (
          <article key={item.title} className="news-card">
            <span className="news-tag">{item.tag}</span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <a
              className="text-link"
              href="https://www.subway.co.kr/board/news"
              target="_blank"
              rel="noreferrer"
            >
              자세히 보기 →
            </a>
          </article>
        ))}
      </section>
      <section className="media-banner">
        <div className="container">
          <h3>광고 영상 &amp; 캠페인</h3>
          <p>다양한 채널로 전해지는 써브웨이의 메시지를 만나보세요.</p>
        </div>
      </section>
    </div>
  );
}
