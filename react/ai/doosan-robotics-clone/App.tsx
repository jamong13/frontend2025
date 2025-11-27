import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./src/components/Hero";
import UseCases from "./components/UseCases";
import Clients from "./components/Clients";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import News from "./components/News";
import Support from "./components/Support";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-doosan-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <UseCases />
        <Clients />
        <Solutions />
        <Products />
        <News />
        <Support />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded shadow-lg hover:bg-doosan-blue transition-colors z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;
