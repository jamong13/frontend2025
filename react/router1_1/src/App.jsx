import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Basics from "./pages/Basics";
import Intermediate from "./pages/Intermediate";
import Advanced from "./pages/Advanced";
import Examples from "./pages/Examples";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navi />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basics" element={<Basics />} />
            <Route path="/intermediate" element={<Intermediate />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
