const SERVICE_LABELS = ['AD Service', 'AD Platform', 'AD Tech', 'AD Study'];

const SERVICE_DETAILS = [
  ['온.모바일 광고', '디지털 방송광고', '디지털 옥외광고', '글로벌 마케팅'],
  ['Nswitch', 'Adpacker', 'Admixer', 'Nposting'],
  ['All', 'Planning', 'Programmatic Buying', 'Reporting & Analytics', 'Data Management'],
  ['Research', 'Consulting'],
];

function SectionThree() {
  return (
    <section id="section3" className="section">
      <div className="section3-cover">
        <h1 className="section3-txt">What we do</h1>

        <div className="section3-icon">
          <ul className="cf">
            <li>
              <div className="icon1 s-ball1" />
              <div className="icon1 s-ball2" />
              <div className="icon1 s-ball3" />
            </li>
            <li>
              <div className="m-ball mball1" />
              <div className="m-ball mball2" />
            </li>
            <li>
              <div className="circleball c-ball1">
                <div className="circleball c-ball2" />
              </div>
            </li>
            <li>
              <div className="icon1 s-ball4" />
              <div className="icon1 s-ball5" />
              <div className="icon1 s-ball6" />
            </li>
          </ul>
        </div>

        <div className="section3-txt">
          <ul className="cf">
            {SERVICE_LABELS.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>

        <div className="section3-menu">
          <ul className="cf">
            {SERVICE_DETAILS.map((group, index) => (
              <li key={SERVICE_LABELS[index]}>
                <ul>
                  {group.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;



