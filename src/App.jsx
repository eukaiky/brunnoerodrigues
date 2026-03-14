import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection'; // Novo import
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      <main>
        <Hero />
        <AboutSection /> {/* A história entra aqui */}
        <ContactSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;