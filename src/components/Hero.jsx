import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505]" id="inicio">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/cantores.jpeg" 
          alt="" 
          className="w-full h-full object-cover object-top opacity-50 md:opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#050505]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center mt-10 px-4 w-full text-center">
        <h1 className="sr-only">Brunno & Rodrigues</h1>
        
        <img 
          src="/logo-branca.png" 
          alt="Brunno & Rodrigues" 
          className="w-48 sm:w-64 md:w-[380px] h-auto drop-shadow-2xl"
        />
        
        <img 
          src="/bordao-branco.png" 
          alt="Bordão Brunno & Rodrigues" 
          className="w-32 sm:w-40 md:w-[200px] h-auto opacity-90 mt-4 md:mt-6"
        />
      </div>

      <a href="#redes" className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 z-20 opacity-60">
        <span className="text-[9px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white">
          Deslize
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-bounce">
          <path d="M12 5v14"></path>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>

    </section>
  );
};

export default Hero;