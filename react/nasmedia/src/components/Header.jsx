import logoInvert from "../assets/img/logo-invert.svg";
import logo from "../assets/img/logo.svg";

const LANGUAGES = [
  { label: "KOR", active: true },
  { label: "ENG", active: false },
];

const NAV_ITEMS = ["회사소개", "사업영역", "나스리포트", "광고문의"];

function Header({ isMenuOpen, onToggleMenu, isLightBackground }) {
  const useDarkTheme = Boolean(isLightBackground);

  return (
    <header
      className={`site-header${isMenuOpen ? " is-open" : ""}${
        useDarkTheme ? " light" : ""
      }`}
    >
      <h1
        className="logo float"
        style={{ display: useDarkTheme ? "none" : "block" }}
      >
        <a href="#section1">
          <img src={logoInvert} alt="Nasmedia" />
        </a>
      </h1>
      <h1
        className="logo2 float"
        style={{ display: useDarkTheme ? "block" : "none" }}
      >
        <a href="#section1">
          <img src={logo} alt="Nasmedia" />
        </a>
      </h1>

      <nav className="left-nav float" aria-label="언어 선택">
        <ul className="cf">
          {LANGUAGES.map((lang) => (
            <li key={lang.label} className={lang.active ? "on1" : ""}>
              <a href="#">{lang.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="menu-bar float"
        aria-label="메뉴 열기"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <span className="stick1" />
        <span className="stick2" />
      </button>

      <nav className="right-nav float" aria-label="주요 메뉴">
        <ul className="cf">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
