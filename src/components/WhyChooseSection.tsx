import { WHY_4EVER_PILLARS, buildWhatsAppUrl } from '../data/siteData';

const WHY_CTA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Quero conversar sobre o meu casamento e conhecer melhor o trabalho de vocês.'
);

export function WhyChooseSection() {
  return (
    <section
      id="por-que-4ever"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white via-ivory/80 to-warm-white relative overflow-hidden scroll-mt-24"
    >
      {/* Ornamento sutil de fundo */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-champagne/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-botanical/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Carta Editorial Poética */}
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-semibold">
            Por que contratar a 4EVER?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-[1.15] mt-3 mb-7">
            O tempo passa depressa no dia mais esperado da sua vida.
          </h2>

          <div className="space-y-5 text-graphite/85 font-light text-base sm:text-[17px] leading-relaxed">
            <p>
              Um casamento dura poucas horas, mas carrega anos de espera, silêncios compartilhados e
              promessas feitas muito antes do altar. Há uma beleza quase frágil nisso: o instante em
              que a porta se abre, o olhar que encontra o outro no fim do corredor, o abraço
              demorado de quem sempre caminhou com vocês — momentos que não voltam para ser
              repetidos.
            </p>
            <p className="font-serif italic text-xl sm:text-2xl text-espresso/90 leading-relaxed py-2">
              Ninguém deveria atravessar o próprio casamento olhando para o relógio, resolvendo
              atrasos ou carregando o peso dos bastidores.
            </p>
            <p>
              Na{' '}
              <strong className="font-medium text-espresso">
                <span className="brand-4ever">4EVER</span> Cerimonial
              </strong>
              , não tratamos histórias de amor como eventos em série. Somos quatro olhares atentos
              protegendo cada segundo para que vocês sintam o perfume das flores, a calma antes do
              &ldquo;sim&rdquo; e a leveza de estar por inteiro — enquanto nós silenciosamente
              sustentamos todo o resto, até que reste apenas a saudade boa de um dia vivido de
              verdade.
            </p>
          </div>
        </div>

        {/* Três Pilares de Diferencial */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal">
          {WHY_4EVER_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] bg-warm-white/95 border border-champagne/30 p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif italic text-2xl text-champagne block mb-3">
                  0{idx + 1}.
                </span>
                <h3 className="font-serif text-2xl text-espresso font-medium leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-graphite/80 font-light leading-relaxed">
                  {pillar.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-champagne/20">
                <span className="text-[10px] uppercase tracking-[0.24em] text-botanical font-semibold">
                  Essência <span className="brand-4ever">4EVER</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada delicada */}
        <div className="text-center mt-12 reveal">
          <a
            href={WHY_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-botanical text-botanical text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical hover:text-warm-white transition-all duration-300"
          >
            <span>Conversar com a nossa equipe</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
