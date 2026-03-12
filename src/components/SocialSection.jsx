import React from 'react';
import { CtaButton } from '../ui/CtaButton';

const SocialSection = () => {
  return (
    <section id="redes" className="relative bg-[#050505] py-20 md:py-32 px-4 border-t border-white/5">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm h-[300px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto flex flex-col items-center max-w-sm md:max-w-md text-center">
        
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-widest uppercase">
          Redes Sociais
        </h2>
        <div className="w-10 h-1 bg-white/10 rounded-full mb-10"></div>
        
        <div className="flex flex-col w-full gap-4">
          
          {/* INSTAGRAM */}
          <CtaButton 
            href="https://www.instagram.com/brunnoerodrigues/" 
            variant="instagram" 
            className="w-full gap-4 text-base md:text-lg py-4 md:py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </CtaButton>

          {/* YOUTUBE */}
          <CtaButton 
            href="https://www.youtube.com/@brunnoerodrigues" 
            variant="youtube" 
            className="w-full gap-4 text-base md:text-lg py-4 md:py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
            YouTube
          </CtaButton>

          {/* FACEBOOK */}
          <CtaButton 
            href="https://www.facebook.com/brunnoerodrigues" 
            variant="facebook" 
            className="w-full gap-4 text-base md:text-lg py-4 md:py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            Facebook
          </CtaButton>

          {/* TIKTOK */}
          <CtaButton 
            href="https://www.tiktok.com/@brunnoerodrigues" 
            variant="tiktok" 
            className="w-full gap-4 text-base md:text-lg py-4 md:py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
            </svg>
            TikTok
          </CtaButton>

        </div>
      </div>
    </section>
  );
};

export default SocialSection;