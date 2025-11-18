const SECTION_LINKS = [
  {
    label: '회사소개',
    items: ['나스미디어 소개', '윤리경영', '보도자료', 'CI 소개', '오시는 길'],
  },
  {
    label: '사업영역',
    items: ['AD Service', 'AD Platform', 'AD Tech', 'AD Study'],
  },
  {
    label: '나스리포트',
    items: ['정기보고서', 'NPR', '나스리포드 신청'],
  },
  {
    label: '투자정보',
    items: ['전자공고', '재무정보', '공시정보', '주가정보', 'IR자료실'],
  },
  {
    label: '인재채용',
    items: ['인사제도', '채용공고'],
  },
];

function SectionSix() {
  return (
    <section id="section6" className="section">
      <div className="section6-cover">
        <nav className="section6-nav" aria-label="하단 메뉴">
          <ul>
            {SECTION_LINKS.map((group) => (
              <li key={group.label}>
                <a href="#">{group.label}</a>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contact">
          <div className="address">
            <div className="sub-ad">Address</div>
            <span>서울특별시 강남구 도곡로1길 14 삼일프라자 3,4,5층</span>
          </div>
          <div className="sub-ad">Contact</div>
          <span>T. +82 (0)2 2188 7300</span>

          <div className="com-btn">
            <a href="#">회사소개서 다운로드</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;



