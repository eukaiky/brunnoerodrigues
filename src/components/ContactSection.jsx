import React from 'react';

const ContactSection = () => {
  const whatsappNumber = "5519994335140"; 
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre como contratar o show da dupla Brunno & Rodrigues para o meu evento.");

  return (
    <section id="contato" className="relative w-full py-24 bg-[#050505] overflow-hidden">
      {/* Luz de fundo para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
          Disponibilidade para todo o Brasil
        </span>
        
        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Leve o Show para o seu Evento
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Garanta a energia e o talento de Brunno & Rodrigues. Entre em contacto para orçamentos, datas e condições especiais.
        </p>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank" 
          rel="noreferrer"
          className="group relative inline-flex items-center justify-center bg-white text-black text-sm md:text-base font-black uppercase tracking-widest px-12 py-6 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          {/* Brilho interno no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          
          <span className="relative flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Contrate Agora
          </span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;