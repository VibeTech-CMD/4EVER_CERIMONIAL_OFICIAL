import { DIFFERENTIALS, FOUNDERS, SITE_ASSETS } from '../data/siteData';

export function AboutAndFounders() {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-gradient-to-b from-warm-white via-ivory to-warm-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Bloco História & Propósito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 reveal">
          {/* Imagem em Formato de Arco / Altar com Flutuação Suave */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              <div className="arch-frame overflow-hidden shadow-2xl border-4 border-warm-white aspect-[4/5]">
                <img
                  src={SITE_ASSETS.aboutArchImage}
                  alt="Cerimônia de casamento elegante ao ar livre"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Selo Delicado */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-warm-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-champagne/40 whitespace-nowrap">
                <span className="text-[11px] uppercase tracking-[0.22em] text-espresso font-semibold">
                  Sofisticação &bull; Acolhimento &bull; Precisão
                </span>
              </div>
            </div>
          </div>

          {/* Texto Sobre a Empresa */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Nossa Essência
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-tight">
              Um olhar atento a cada detalhe da sua história.
            </h2>
            <p className="text-graphite/85 leading-relaxed font-light text-base">
              A{' '}
              <strong className="font-semibold text-espresso">
                <span className="brand-4ever">4EVER</span> Cerimonial
              </strong>{' '}
              nasceu da união de quatro profissionais apaixonados pela arte de celebrar. Atuando em
              Macaé e região, dedicamos nossa experiência especialmente à realização de{' '}
              <strong>casamentos</strong>, conduzindo cada etapa com transparência, escuta ativa e
              organização impecável.
            </p>
            <p className="text-graphite/85 leading-relaxed font-light text-base">
              Acreditamos que o luxo verdadeiro está na tranquilidade dos noivos e das famílias. Por
              isso, estruturamos um atendimento próximo e humano — do alinhamento inicial de
              fornecedores à coordenação minuciosa de cada protocolo no grande dia.
            </p>

            {/* Diferenciais */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DIFFERENTIALS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-3xl bg-warm-white/90 border border-champagne/25 shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-botanical mt-2 shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-espresso">{item.title}</h3>
                    <p className="text-xs text-graphite/75 mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Os Quatro Fundadores */}
        <div className="pt-8 border-t border-champagne/25 reveal">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Quem Faz Acontecer
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2 mb-4">
              Os Quatro Fundadores
            </h2>
            <p className="text-sm text-graphite/80 font-light leading-relaxed">
              Nossa equipe é formada integralmente pelos quatro sócios fundadores. Você sabe
              exatamente quem estará ao seu lado em cada reunião e no dia da sua celebração.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-warm-white rounded-[2rem] p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-champagne/25 flex flex-col items-center"
              >
                <div className="w-36 h-44 arch-frame overflow-hidden mb-5 border-2 border-champagne/40 bg-ivory relative group">
                  <img
                    src={founder.image}
                    alt={founder.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {founder.isProvisional && (
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-espresso/85 text-warm-white text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      Foto Provisória
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-2xl text-espresso font-semibold">{founder.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-botanical font-semibold mt-1 mb-3">
                  {founder.role}
                </p>
                <p className="text-xs text-graphite/80 font-light leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
