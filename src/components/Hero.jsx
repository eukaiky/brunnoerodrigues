import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]" id="inicio">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/cantores.jpeg" 
          alt="" 
          className="w-full h-full object-cover object-[49%_15%] md:object-[10%_15%] opacity-50 md:opacity-60" 
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#050505]"></div>
      </div>

      {/* Subi a logo (mt-52) e aumentei o tamanho (w-80 / md:w-[350px]) */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-52 md:mt-64 px-4 w-full text-center">
        <h1 className="sr-only">Brunno & Rodrigues</h1>
        
        <img 
          src="/logo-branca.png" 
          alt="Brunno & Rodrigues" 
          className="w-80 sm:w-96 md:w-[350px] lg:w-[400px] h-auto drop-shadow-2xl"
          />
        
      </div>

      {/* Seta mais para cima (bottom-24) e maior (width/height 28) */}
      <a href="#contato" className="absolute bottom-24 md:bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 z-20 opacity-60 hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-bounce">
          <path d="M12 5v14"></path>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>

    </section>
  );
};

export default Hero;