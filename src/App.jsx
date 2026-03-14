import React, { useState, useEffect } from 'react';
// IMPORTAÇÕES FALTANTES ABAIXO:
import Header from './components/Header';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      <Header />
      
      <main>
        <Hero />
        
        
        <ContactSection />
        
        <SocialSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;