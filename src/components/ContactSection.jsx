import React from 'react';

const ContactSection = () => {
  const whatsappNumber = "5519994335140"; 
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre como contratar o show da dupla Brunno & Rodrigues para o meu evento.");

  return (
    <section id="contato" className="relative bg-[#050505] py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl text-center flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Contrate-nos
        </h2>
        
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          Garante a melhor música para o teu público. Clica no botão abaixo para conversar diretamente com a equipe no WhatsApp e pedir um orçamento.
        </p>

        <a 
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold text-black transition-all hover:bg-[#20bd5a] active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Falar no WhatsApp
        </a>
        
      </div>
    </section>
  );
};

export default ContactSection;