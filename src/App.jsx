import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialSection from './components/SocialSection'; // <- Importámos aqui!
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const link = e.target.closest('a');
      if (!link || !link.href) return;
      if (link.href.includes('#') && !link.href.endsWith('#')) {
        e.preventDefault();
        const id = link.hash;
        const targetElement = document.querySelector(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => { document.removeEventListener('click', handleSmoothScroll); };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#050505] font-sans text-gray-300 antialiased selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <SocialSection /> {/* <- Colocámos aqui, logo após a foto inicial */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}