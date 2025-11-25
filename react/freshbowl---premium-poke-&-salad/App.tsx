import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import FranchiseSection from './components/FranchiseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <FranchiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;