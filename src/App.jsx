import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import PortfolioSection from './components/PortfolioSection'; // Novo import
import Footer from './components/Footer';

function App() {
  
  // Adicionamos esse bloco para lidar com o redirecionamento
  useEffect(() => {
    // Verifica se a URL tem a âncora #material
    if (window.location.hash === '#material') {
      // Procura a seção pelo ID original que está lá no seu PortfolioSection
      const element = document.getElementById('portfolio');
      
      if (element) {
        // Um pequeno atraso de 100ms para garantir que tudo já foi renderizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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