import { SITE_ASSETS, buildWhatsAppUrl } from '../data/siteData';

const HERO_CTA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de planejar meu casamento com vocês.'
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[86vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de Fundo Limpa e Editorial */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_ASSETS.heroImage}
          alt="Noiva segurando buquê floral delicado com fundo suave"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Camada de Contraste Café Expresso & Verde Botânico */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/65 to-espresso/90" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center text-warm-white py-20">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.34em] text-champagne-light font-medium mb-4">
          Assessoria &amp; Cerimonial em Macaé e Região
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight mb-6">
          Para que vocês vivam cada segundo, nós cuidamos de todo o resto.
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ivory/90 font-light leading-relaxed mb-10">
          Na{' '}
          <strong className="font-medium text-warm-white">
            <span className="brand-4ever">4EVER</span> Cerimonial
          </strong>
          , unimos organização rigorosa, sensibilidade e acolhimento humano para transformar o
          planejamento do seu casamento em uma jornada leve, segura e inesquecível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={HERO_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-botanical text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical-dark transition-all duration-300 shadow-lg border border-champagne/30"
          >
            Vamos planejar seu casamento
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-warm-white/65 bg-warm-white/10 backdrop-blur-sm text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-warm-white hover:text-espresso transition-all duration-300"
          >
            Conheça nosso trabalho
          </a>
        </div>
      </div>
    </section>
  );
}
