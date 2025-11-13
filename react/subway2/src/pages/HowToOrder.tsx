const steps = [
  {
    number: "01",
    title: "빵 & 사이즈 선택",
    description:
      "6인치 또는 12인치 중 사이즈를 정하고 갓 구워낸 6가지 빵 중 하나를 고릅니다.",
  },
  {
    number: "02",
    title: "치즈 & 야채 추가",
    description:
      "기본 7가지 야채에 치즈, 에그, 베이컨 등 원하는 토핑을 자유롭게 더합니다.",
  },
  {
    number: "03",
    title: "소스 & 시즈닝",
    description:
      "스위트어니언, 허니머스타드, 핫칠리 등 13가지 소스와 시즈닝으로 마무리합니다.",
  },
  {
    number: "04",
    title: "세트 업그레이드",
    description:
      "쿠키, 수프, 음료를 더해 풍성한 한 끼를 완성하거나 샐러드로 가볍게 즐겨보세요.",
  },
];

export default function HowToOrder() {
  return (
    <div className="page how-to-order-page">
      <section className="page-hero">
        <div className="container">
          <h1>써브웨이 이용방법</h1>
          <p>
            간단한 4단계로 완성하는 나만의 샌드위치. 매장에서도, 온라인에서도
            동일하게 즐길 수 있습니다.
          </p>
        </div>
      </section>
      <section className="steps-section">
        <div className="container step-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="online-order">
        <div className="container online-inner">
          <div>
            <h3>온라인 주문으로 더 빠르게</h3>
            <p>
              앱 또는 웹에서 미리 주문하고 픽업하면 대기 없이 편리하게 즐길 수
              있습니다.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.subway.co.kr/app"
            target="_blank"
            rel="noreferrer"
          >
            앱 주문 안내
          </a>
        </div>
      </section>
    </div>
  );
}
