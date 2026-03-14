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
          Garanta a energia e o talento de Brunno & Rodrigues. Entre em contato para orçamentos, datas e condições especiais.
        </p>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank" 
          rel="noreferrer"
          className="group relative inline-flex items-center justify-center bg-white text-black text-sm md:text-base font-black uppercase tracking-widest px-12 py-6 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        >
          {/* Efeito de brilho (shimmer) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
          
          <span className="relative flex items-center gap-3">
            {/* Ícone oficial do WhatsApp */}
            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Contrate Agora
          </span>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
};

export default ContactSection;