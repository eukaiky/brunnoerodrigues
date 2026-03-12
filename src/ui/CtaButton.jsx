import React from 'react';

export const CtaButton = ({ children, href, variant = 'secondary', className = '', ...props }) => {
  // Base do botão: arredondado, com transição suave e efeito de blur (vidro)
  const baseStyle = "inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 active:scale-[0.98] backdrop-blur-sm";
  
  // Estilos específicos para cada rede com as suas cores oficiais adaptadas ao modo escuro
  const variants = {
    instagram: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-1",
    youtube: "bg-[#FF0000]/90 text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 hover:bg-[#FF0000]",
    facebook: "bg-[#1877F2]/90 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:bg-[#1877F2]",
    tiktok: "bg-zinc-900 text-white border border-white/10 shadow-lg shadow-white/5 hover:shadow-white/10 hover:-translate-y-1 hover:bg-black hover:border-white/30",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:-translate-y-1",
  };

  return (
    <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
};