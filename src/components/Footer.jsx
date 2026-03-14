import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center flex flex-col items-center gap-6">
        
        {/* Logo e Bordão alinhados sem filtros */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <img 
            src="/logo-branca.png" 
            alt="Brunno & Rodrigues" 
            /* Removido opacity-80 */
            className="h-10 transition-all duration-300 object-contain" 
          />
          <img 
            src="/bordao-brancoc.png" 
            alt="Bordão" 
            /* Removido opacity-70 e mantido apenas o ajuste de altura */
            className="h-8 transition-all duration-300 object-contain transform translate-y-[-2px]" 
          />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Brunno & Rodrigues. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 mt-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-gray-500 text-[10px] uppercase tracking-widest">Desenvolvido por</span>
            <a 
              href="https://www.instagram.com/kaikyrg/" 
              target="_blank" 
              rel="noreferrer"
              className="transition-transform hover:scale-110 active:scale-95"
            >
              <img src="/K.png" alt="Kaiky Rodrigues" className="h-4 w-auto" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;