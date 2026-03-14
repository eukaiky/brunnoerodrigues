import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="relative w-full py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <div className="mb-16">
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] block mb-4">
            A História
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter italic">
            Brunno <span className="font-black not-italic">&</span> Rodrigues
          </h2>
        </div>

        <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          <p>
            A dupla mocoquense de pai e filho surgiu em <span className="text-white">abril de 2025</span>. O pai, Bruno Valente, começou na música aos 19 anos, aprendendo a tocar num violão velho durante os intervalos de almoço.
          </p>
          
          <p>
            Após 15 anos como líder de louvor, a paixão encontrou um novo caminho ao lado do filho, <span className="text-white">Kawan Valente</span>. Kawan, que cresceu a ver o pai tocar, venceu a timidez para transformar a herança familiar em arte.
          </p>
          
          <p>
            Hoje, realizam mais de <span className="text-white font-medium underline underline-offset-8 decoration-white/20">15 shows por mês</span> em toda a região, levando alegria e música boa a cada evento.
          </p>

          <div className="pt-12 mt-12 border-t border-white/5">
            <p className="text-sm text-white/20 leading-relaxed italic">
              Curiosidade: Anteriormente conhecidos como Brunno & Christiano, a mudança para Rodrigues visou uma melhor sonoridade e fácil memorização.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;