import { SITE_ASSETS, buildWhatsAppUrl } from '../data/siteData';

const HERO_CTA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de planejar meu casamento com vocês.'
);

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[86vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-espresso"
    >
      {/* Imagem Oficial de Fundo — Votos e Alianças com tratamento editorial quente e nítido */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_ASSETS.heroImage}
          alt="Cadernos de votos de casamento e alianças sobre superfície de madeira"
          className="w-full h-full object-cover object-center scale-[1.02] sepia-[0.14] contrast-[1.06] brightness-[0.88]"
        />
        {/* Véu editorial homogêneo em Café Expresso e Champagne para leitura cristalina */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/62 to-espresso/88" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,27,23,0.22)_0%,rgba(26,39,28,0.52)_100%)]"
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center text-warm-white py-20">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.34em] text-champagne-light font-medium mb-4 drop-shadow-xs">
          Assessoria &amp; Cerimonial em Macaé e Região
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
          Seu sonho precisa ser vivido em cada detalhe e nós cuidamos de tudo.
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-ivory/95 font-light leading-relaxed mb-10 drop-shadow-[0_1px_10px_rgba(0,0,0,0.35)]">
          Na{' '}
          <strong className="font-medium text-warm-white">
            <span className="brand-4ever">4EVER</span> Cerimonial
          </strong>
          , unimos organização, sensibilidade e acolhimento para transformar o planejamento do seu
          casamento em uma jornada leve, segura e inesquecível.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={HERO_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-botanical text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical-dark transition-all duration-300 shadow-lg border border-champagne/35"
          >
            Vamos planejar seu casamento
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-warm-white/70 bg-warm-white/10 backdrop-blur-sm text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-warm-white hover:text-espresso transition-all duration-300"
          >
            Conheça nosso trabalho
          </a>
        </div>
      </div>
    </section>
  );
}
