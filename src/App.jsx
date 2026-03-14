import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import PortfolioSection from './components/PortfolioSection'; // Novo import
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ContactSection />
        <SocialSection />
        <PortfolioSection /> {/* <- Seção no final da página */}
      </main>
      <Footer />
    </div>
  );
}

export default App;