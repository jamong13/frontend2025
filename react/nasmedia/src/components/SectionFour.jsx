import insightsImg from "../assets/img/insights.jpg";

export default function SectionFour() {
  return (
    <section id="section4" className="section">
      <div className="section4-cover">
        <div className="section4-left">
          <img src={insightsImg} alt="Insights" />
        </div>
        <div className="section4-right">
          <div className="small-txt">Insights for Inspires</div>
          <div className="big-txt">
            디지털 마케팅 트렌드 분석을 통한
            <br />
            인사이트 제시
          </div>

          <div className="equally-btn">
            <ul className="cf">
              <li>
                <a href="#">나스리포트 바로가기 →</a>
              </li>
              <li>
                <a href="#">나스리포트 신청하기 →</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
