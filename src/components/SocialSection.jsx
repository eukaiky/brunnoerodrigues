import React from 'react';

const SocialSection = () => {
  const links = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/brunnoerodrigues/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      ),
      color: 'hover:bg-[#E1306C]'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@brunnoerodrigues',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
      ),
      color: 'hover:bg-[#FF0000]'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@brunnoerodrigues',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path></svg>
      ),
      color: 'hover:bg-[#000000] hover:border-white/40'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/brunnoerodrigues',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      ),
      color: 'hover:bg-[#1877F2]'
    }
  ];

  return (
    <section id="redes" className="relative bg-[#050505] py-24 md:py-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-sm md:text-base font-bold text-white/40 mb-12 tracking-[0.4em] uppercase">
          Acompanhe a Dupla
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex items-center justify-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 overflow-hidden ${link.color} hover:scale-[1.02] hover:-translate-y-1`}
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-white to-transparent transition-opacity duration-500"></div>
              
              <span className="text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {link.icon}
              </span>
              
              <span className="text-white font-bold tracking-widest uppercase text-sm md:text-base">
                {link.name}
              </span>

              <div className="absolute right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;