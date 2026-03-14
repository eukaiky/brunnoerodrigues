import React from 'react';

const PortfolioSection = () => {
  // Seu link do Google Drive
  const driveLink = "https://drive.google.com/drive/folders/1iv1PRA51wypq7xWry428o8fovx407_L0";

  return (
    <section id="portfolio" className="relative bg-[#050505] py-20 md:py-24 px-6 overflow-hidden border-t border-white/5">
      <div className="container relative z-10 mx-auto max-w-2xl text-center">
        
        <h2 className="text-sm md:text-base font-bold text-white/40 mb-8 tracking-[0.4em] uppercase">
          Material para Contratantes
        </h2>

        <div className="max-w-sm mx-auto">
          <a
            href={driveLink}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-1"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white to-transparent transition-opacity duration-500"></div>
            
            {/* ÍCONE DE PASTA/ARQUIVOS (Garantido que não corta) */}
            <span className="text-white transition-transform duration-500 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10V7a2 2 0 0 0-2-2H9l-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V10Z"/>
                <path d="M12 11v5"/>
                <path d="m9 13 3 3 3-3"/>
              </svg>
            </span>
            
            <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
              Acesse nosso Material
            </span>

            {/* Seta de link externo */}
            <div className="absolute right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
          
          <p className="mt-6 text-white/20 text-[10px] uppercase tracking-widest">
            Fotos, Vídeos e Documentos
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;