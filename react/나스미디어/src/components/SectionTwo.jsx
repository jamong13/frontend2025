const VALUE_ITEMS = [
  {
    title: 'Identity',
    points: ['국내 최대 디지털 미디어 렙', '디지털 미디어 통합 마케팅 역량 보유'],
  },
  {
    title: 'Strength',
    points: ['데이터 기반의 오디언스 플래닝', '전문적인 애드테크 활용 및 데이터 매니지먼트'],
  },
  {
    title: 'Challenge',
    points: ['FULL STACK AD-PLARFORM 구현', '켐페인 퍼포먼스를 극대화하는 원스톱 데이터 마케팅'],
  },
];

function SectionTwo() {
  return (
    <section id="section2" className="section">
      <div className="value-cover cf">
        <div className="left-value">
          <h1 className="value-txt">
            Our Value,
            <br />
            Goal and Vision
          </h1>
          <a href="#">
            회사소개 바로가기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→
            <span className="value-btn" />
          </a>
        </div>
        <div className="right-value cf">
          {VALUE_ITEMS.map((item) => (
            <div className="valuebox" key={item.title}>
              <div className="color-txt">{item.title}</div>
              <ul className="value-subtxt">
                {item.points.map((point) => (
                  <li key={point} className={point === item.points[0] ? 'val-bold' : ''}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="ball-ani ani1" />
      <div className="ball-ani ani2" />
      <div className="ball-ani ani3" />
    </section>
  );
}

export default SectionTwo;



