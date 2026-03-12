import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        
        <div className="flex items-center">
          <a href="#inicio" className="transition-transform active:scale-95">
            <img src="/logo-branca.png" alt="Logo" className="h-8 md:h-12 w-auto object-contain" />
          </a>
        </div>
        
        <nav>
          <a 
            href="#contato" 
            className="rounded-full bg-white px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-sm font-bold text-black uppercase tracking-tight"
          >
            Contratar
          </a>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;