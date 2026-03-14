import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full flex h-16 md:h-20 items-center justify-between px-3 md:px-6">
        
        <div className="flex items-center h-full">
          <a href="#inicio" className="flex items-center gap-2 md:gap-4 transition-transform active:scale-95">
            {/* Logo principal */}
            <img 
              src="/logo-branca.png" 
              alt="Logo Brunno & Rodrigues" 
              className="h-8 md:h-16 w-auto object-contain brightness-0 invert" 
            />
            
            {/* Bordão - Centralizado verticalmente retirando as margens inferiores extras */}
            <img 
              src="/bordao-brancoc.png" 
              alt="Bordão" 
              className="h-7 md:h-14 w-auto object-contain brightness-0 invert opacity-90" 
            />
          </a>
        </div>
        
        {/* Nav com h-full e flex items-center para garantir centralização vertical do botão */}
        <nav className="flex items-center h-full">
          <a 
            href="#contato" 
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-sm font-bold text-black uppercase tracking-tight hover:bg-gray-200 transition-colors leading-none"
          >
            Contrate-nos
          </a>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;