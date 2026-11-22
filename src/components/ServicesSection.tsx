import { OTHER_SEGMENTS, WEDDING_PACKAGES, buildWhatsAppUrl } from '../data/siteData';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white via-ivory/70 to-warm-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
            Nossa Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2 mb-4">
            Casamentos &amp; Celebrações
          </h2>
          <p className="text-sm sm:text-base text-graphite/80 font-light leading-relaxed">
            Com foco principal em casamentos, estruturamos formatos completos e flexíveis para
            atender cada casal com excelência, além de celebrações especiais em Macaé e região.
          </p>
        </div>

        {/* Pacotes Reais de Casamento (baseados na proposta oficial 4EVER) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 reveal items-stretch">
          {WEDDING_PACKAGES.map((pkg) => {
            const ctaHref = buildWhatsAppUrl(pkg.whatsappMessage);

            if (pkg.featured) {
              return (
                <div
                  key={pkg.name}
                  className="rounded-[2.25rem] bg-gradient-to-b from-botanical to-botanical-dark text-warm-white p-8 sm:p-10 shadow-xl border-2 border-champagne relative flex flex-col justify-between"
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-champagne text-espresso text-[10px] uppercase tracking-[0.25em] font-bold px-4 py-1 rounded-full shadow-sm whitespace-nowrap">
                      {pkg.badge}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <span className="text-xs uppercase tracking-[0.22em] text-champagne-light font-semibold">
                        {pkg.kicker}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-warm-white/15 text-champagne-light flex items-center justify-center font-serif italic text-lg">
                        {pkg.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-warm-white mb-4">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-ivory/90 font-light leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Base do Pacote Love inclusa */}
                    {pkg.includesPreviousLabel && (
                      <div className="rounded-2xl bg-warm-white/8 border border-champagne/30 p-4 mb-5">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-champagne-light font-semibold mb-2.5">
                          {pkg.includesPreviousLabel}
                        </p>
                        <ul className="space-y-1.5 text-xs text-ivory/85">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="text-champagne-light font-bold mt-0.5">&#10003;</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Diferenciais exclusivos do Pacote Forever */}
                    {pkg.extraFeatures && (
                      <div className="mb-8">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-champagne-light font-semibold mb-3">
                          Diferenciais exclusivos Forever:
                        </p>
                        <ul className="space-y-2.5 text-xs text-ivory/95">
                          {pkg.extraFeatures.map((extra) => (
                            <li key={extra} className="flex items-start gap-2.5">
                              <span className="text-champagne-light font-bold mt-0.5">+</span>
                              <span className="font-medium">{extra}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 px-6 rounded-full bg-champagne text-espresso text-xs uppercase tracking-[0.2em] font-bold hover:bg-champagne-light transition-colors shadow-md"
                  >
                    {pkg.ctaLabel}
                  </a>
                </div>
              );
            }

            return (
              <div
                key={pkg.name}
                className="rounded-[2.25rem] bg-gradient-to-b from-ivory to-warm-white p-8 sm:p-10 border border-champagne/35 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.22em] text-botanical font-semibold">
                      {pkg.kicker}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-champagne/20 text-champagne flex items-center justify-center font-serif italic text-lg">
                      {pkg.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-espresso mb-4">{pkg.name}</h3>
                  <p className="text-sm text-graphite/80 font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 text-xs text-graphite/85 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="text-botanical font-bold mt-0.5">&#10003;</span>
                        <span>
                          {feature.includes('4EVER') ? (
                            <>
                              {feature.split('4EVER')[0]}
                              <span className="brand-4ever">4EVER</span>
                              {feature.split('4EVER')[1]}
                            </>
                          ) : (
                            feature
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 px-6 rounded-full border border-botanical text-botanical text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical hover:text-warm-white transition-colors"
                >
                  {pkg.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>

        {/* Outros Segmentos Atendidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {OTHER_SEGMENTS.map((segment) => (
            <div
              key={segment.title}
              className="group rounded-[2rem] overflow-hidden bg-ivory/70 border border-champagne/25 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="h-56 overflow-hidden bg-ivory">
                <img
                  src={segment.image}
                  alt={segment.alt}
                  className={`w-full h-full object-cover ${
                    segment.objectPositionClass ?? 'object-center'
                  } group-hover:scale-105 transition-transform duration-700`}
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-botanical font-semibold">
                    {segment.kicker}
                  </span>
                  <h3 className="font-serif text-2xl text-espresso mt-1 mb-2">{segment.title}</h3>
                  <p className="text-xs text-graphite/80 font-light leading-relaxed mb-5">
                    {segment.description}
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl(segment.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-espresso font-semibold hover:text-botanical transition-colors"
                >
                  Solicitar atendimento &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
