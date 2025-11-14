const CTA_ITEMS = [
  {
    title: "Contact",
    subtitle: "최고의 켐페인을 위한 첫 단추",
    link: "광고문의 바로가기 →",
    className: "lr1",
  },
  {
    title: "Careers",
    subtitle: "나스미디어와 함께하는 No.1 인재채용",
    link: "채용공고 바로가기 →",
    className: "lr2",
  },
];

function SectionFive() {
  return (
    <section id="section5" className="section">
      <div className="section5-cover">
        <h1 className="section5-txt">Let&apos;s be Together</h1>

        {CTA_ITEMS.map((item) => (
          <div className={`section5-lr ${item.className}`} key={item.title}>
            <p className="small-txt">{item.title}</p>
            <h3>{item.subtitle}</h3>
            <div className="section5-btn">
              <a href="#">
                {item.link}
                <span />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionFive;
