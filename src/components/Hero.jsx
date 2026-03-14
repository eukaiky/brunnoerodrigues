import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-end lg:items-center border-b border-white/5">
      
      {/* 1. IMAGEM DE FUNDO - Configurações de PC preservadas */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] z-0">
        <img 
          src="/cantores.jpeg" 
          alt="Brunno & Rodrigues" 
          className="w-full h-full object-cover object-[50%_15%] lg:object-[10%_15%] opacity-100 lg:opacity-80 transition-all duration-700" 
        />
        
        {/* Contraste Mobile Reforçado na Base */}
        <div className="absolute inset-0 bg-black/40 lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:hidden"></div>
        
        {/* Gradiente Desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent"></div>
      </div>

      {/* 2. CONTEÚDO - Logo e Texto colados na base no Mobile */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full pb-20 lg:pb-0 lg:h-full lg:flex lg:flex-col lg:justify-start lg:pt-32">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <h1 className="sr-only">Brunno & Rodrigues</h1>
          
          {/* Logo: Gigante e colada na base no mobile */}
          <img 
            src="/logo-branca.png" 
            alt="Logo Brunno & Rodrigues" 
            className="h-44 sm:h-52 md:h-60 lg:h-[320px] w-auto object-contain drop-shadow-[0_10px_50px_rgba(0,0,0,1)]" 
          />
          
          {/* Texto de Apoio - Corrigido para não vazar e pontos alinhados */}
          <div className="mt-2 max-w-[280px] md:max-w-none opacity-40">
            <p className="text-[9px] md:text-xs text-white font-bold uppercase tracking-[0.25em] leading-relaxed">
              Bares • Restaurantes • Festas • Casamentos • Eventos Corporativos
            </p>
          </div>

        </div>
      </div>

      {/* 3. SETA (Double Chevron Minimalista) */}
      <a href="#contato" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-30 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-center -space-y-2 animate-bounce">
          <svg width="20" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 10L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="20" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 10L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>

    </section>
  );
};

export default Hero;