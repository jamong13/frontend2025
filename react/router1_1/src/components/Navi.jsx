import { Link, useLocation } from "react-router-dom";
import "./Navi.css";

const Navi = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navi-container">
      <div className="navi-brand">
        <Link to="/">
          <h2>React Router 가이드</h2>
        </Link>
      </div>
      <ul className="navi-menu">
        <li>
          <Link to="/" className={isActive("/")}>
            홈
          </Link>
        </li>
        <li>
          <Link to="/basics" className={isActive("/basics")}>
            기초
          </Link>
        </li>
        <li>
          <Link to="/intermediate" className={isActive("/intermediate")}>
            중급
          </Link>
        </li>
        <li>
          <Link to="/advanced" className={isActive("/advanced")}>
            고급
          </Link>
        </li>
        <li>
          <Link to="/examples" className={isActive("/examples")}>
            실전 예제
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
