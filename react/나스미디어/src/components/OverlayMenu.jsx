const MENU_SECTIONS = [
  {
    title: '회사소개',
    links: ['나스미디어 소개', '윤리경영', '보도자료', 'CI 소개', '오시는 길'],
  },
  {
    title: '사업영역',
    links: ['AD Service', 'AD Platform', 'AD Tech', 'AD Study'],
  },
  {
    title: '나스리포트',
    links: ['나정기보고서', 'NPR', '나스리포트 신청'],
  },
  {
    title: '투자정보',
    links: ['전자공고', '재무정보', '공시정보', '주가정보', 'IR자료실'],
  },
  {
    title: '인재채용',
    links: ['인사제도', '채용공고'],
  },
];

function OverlayMenu({ isOpen, onClose }) {
  return (
    <div
      id="menubar-fix"
      className={isOpen ? 'open' : ''}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <div
        className="menubar-cover"
        role="dialog"
        aria-label="메뉴"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <ul className="cf">
          {MENU_SECTIONS.map((section) => (
            <li key={section.title}>
              <div className="menu-group">
                <p className="title-bar">
                  <button
                    type="button"
                    onClick={() => {
                      onClose?.();
                    }}
                  >
                    {section.title}
                  </button>
                </p>
                <ul>
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault();
                          onClose?.();
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OverlayMenu;

