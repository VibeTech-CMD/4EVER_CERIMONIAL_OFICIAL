import { DIFFERENTIALS, FOUNDERS, SITE_ASSETS } from '../data/siteData';
import { SectionConnector } from './SectionConnector';

export function AboutAndFounders() {
  return (
    <section
      id="sobre"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white via-ivory to-warm-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Bloco História & Propósito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal">
          {/* Foto Oficial da Equipe na Ponte em Formato de Arco */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              <div className="arch-frame overflow-hidden shadow-2xl border-4 border-warm-white aspect-[4/5] bg-ivory">
                <img
                  src={SITE_ASSETS.aboutArchImage}
                  alt="Os quatro sócios fundadores da 4EVER Cerimonial na ponte"
                  className="w-full h-full object-cover object-[50%_22%] contrast-[1.03] saturate-[0.94]"
                />
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
              nasceu da união de quatro profissionais apaixonados pela arte de unir casais. Atuando
              em Macaé e região, dedicamos nossa experiência especialmente à realização de{' '}
              <strong>casamentos</strong>, conduzindo cada etapa com profissionalismo,
              transparência, escuta ativa e organização impecável.
            </p>
            <p className="text-graphite/85 leading-relaxed font-light text-base">
              Acreditamos que esse evento merece ser vivido com tranquilidade, permitindo aos noivos
              e familiares desfrutarem ao máximo da cerimônia. Por isso, estruturamos um atendimento
              personalizado a cada cliente.
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

        {/* Conector vertical delicado unindo Nossa Essência aos Fundadores */}
        <SectionConnector bgClassName="bg-transparent" className="my-12 reveal" />

        {/* Os Quatro Fundadores */}
        <div id="fundadores" className="scroll-mt-28 reveal">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Quem Faz Acontecer
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2 mb-4">
              Os Quatro Fundadores
            </h2>
            <p className="text-sm text-graphite/80 font-light leading-relaxed">
              Nossa equipe é formada integralmente pelos quatro sócios fundadores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="bg-warm-white rounded-[2rem] p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-champagne/25 flex flex-col items-center"
              >
                <div className="w-36 h-44 arch-frame overflow-hidden mb-5 border-2 border-champagne/40 bg-ivory relative group shadow-xs">
                  <img
                    src={founder.image}
                    alt={founder.alt}
                    className={`w-full h-full object-cover ${
                      founder.objectPositionClass ?? 'object-top'
                    } group-hover:scale-105 transition-transform duration-500`}
                  />
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
