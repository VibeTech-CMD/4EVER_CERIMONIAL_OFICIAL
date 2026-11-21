import { PORTFOLIO_ITEMS } from '../data/siteData';

interface PortfolioSectionProps {
  onOpenLightbox: (src: string, caption: string) => void;
}

export function PortfolioSection({ onOpenLightbox }: PortfolioSectionProps) {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-gradient-to-b from-warm-white via-ivory to-warm-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Inspirações &amp; Atmosfera
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2">
              Portfólio Editorial
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-graphite/75 font-light max-w-md mt-3 md:mt-0">
            Clique em qualquer fotografia para ampliar. Estrutura preparada para receber o acervo
            fotográfico oficial dos eventos realizados pela{' '}
            <span className="brand-4ever">4EVER</span>.
          </p>
        </div>

        {/* Grade Assimétrica Suave com Bordas Arredondadas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal">
          {PORTFOLIO_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenLightbox(item.full, item.caption)}
              className={`${item.colSpanClass} ${item.heightClass} rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical`}
            >
              <img
                src={item.thumb}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end ${item.paddingClass}`}
              >
                <span className={`text-warm-white font-serif italic ${item.titleSizeClass}`}>
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
