import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import HowToOrder from "./pages/HowToOrder";
import News from "./pages/News";
import Franchise from "./pages/Franchise";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";

export default function App() {
  return (
    <div className="app-shell">
      <SiteNav />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/how-to-order" element={<HowToOrder />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/franchise" element={<Franchise />}></Route>
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
