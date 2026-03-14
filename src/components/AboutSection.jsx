import React from 'react';

const AboutSection = () => {
  return (
    <section id="sobre" className="relative w-full py-24 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-3xl">
        
        {/* Cabeçalho Simples */}
        <div className="mb-16">
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.5em] block mb-4">
            A História
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter italic">
            Brunno <span className="font-black not-italic">&</span> Rodrigues
          </h2>
        </div>

        {/* Texto exatamente como solicitado */}
        <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          <p>
            A dupla mocoquense de pai e filho <span className="text-white">Brunno & Rodrigues</span> surgiu em abril de 2025. O pai, <span className="text-white">Bruno Valente</span>, começou sua trajetória na música aos 19 anos, quando encontrou um violão velho em seu serviço e decidiu aprender a tocar lendo revistas de música no intervalo de almoço.
          </p>
          
          <p>
            Após algum tempo, decidiu também começar a cantar. Quando surgiu a oportunidade de se apresentar em público pela primeira vez, em uma igreja evangélica, a paixão pela música se acendeu; por lá, tocou durante 15 anos, tornando-se líder do louvor.
          </p>
          
          <p>
            Já o filho, <span className="text-white">Kawan Valente</span>, desde cedo via o pai tocar na igreja e cresceu em contato com a música. Sempre foi apaixonado pela arte, mas era muito tímido para se apresentar em público. O tempo passou, a timidez foi sendo trabalhada e, hoje, os dois se apresentam por toda Mococa e região, fazendo mais de <span className="text-white font-medium">15 shows por mês</span>, levando alegria e música boa aos eventos que realizam.
          </p>

          {/* Curiosidade Discreta */}
          <div className="pt-12 mt-12 border-t border-white/5">
            <p className="text-sm text-white/20 leading-relaxed italic">
              Curiosidade: A dupla já se chamou Brunno & Christiano, mas decidiram mudar o nome para melhorar a sonoridade e facilitar a memorização.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;