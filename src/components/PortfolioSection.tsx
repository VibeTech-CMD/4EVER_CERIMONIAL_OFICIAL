import { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/siteData';

type PortfolioCategory = 'Todas' | 'Cerimônia' | 'Recepção' | 'Detalhes';
const CATEGORIES: PortfolioCategory[] = ['Todas', 'Cerimônia', 'Recepção', 'Detalhes'];
const INITIAL_VISIBLE_COUNT = 5;

interface PortfolioSectionProps {
  onOpenLightbox: (items: PortfolioItem[], startIndex: number) => void;
}

export function PortfolioSection({ onOpenLightbox }: PortfolioSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('Todas');

  const filteredItems =
    activeCategory === 'Todas'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const visibleItems = isExpanded ? filteredItems : PORTFOLIO_ITEMS.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = Math.max(PORTFOLIO_ITEMS.length - INITIAL_VISIBLE_COUNT, 0);

  const getItemSpanClass = (item: PortfolioItem, idx: number, count: number): string => {
    if (activeCategory === 'Todas') return item.colSpanClass;
    if (count === 2 || count === 4) return 'md:col-span-6';
    if (count === 5) return idx < 2 ? 'md:col-span-6' : 'md:col-span-4';
    return 'md:col-span-4';
  };

  return (
    <section
      id="portfolio"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white via-ivory to-warm-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Registros Reais &amp; Atmosfera
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2">
              Portfólio Editorial
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-graphite/75 font-light max-w-md mt-3 md:mt-0">
            Momentos reais de celebrações conduzidas pela{' '}
            <span className="brand-4ever">4EVER</span>. Clique em qualquer fotografia para ampliar e
            navegar pela galeria completa.
          </p>
        </div>

        {/* Filtros discretos exibidos quando a galeria está expandida */}
        {isExpanded && (
          <div className="flex flex-wrap items-center gap-2.5 mb-8">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-botanical text-warm-white shadow-sm'
                      : 'bg-warm-white text-graphite/80 border border-champagne/35 hover:border-botanical hover:text-botanical'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Grade Assimétrica Suave com Bordas Arredondadas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal">
          {visibleItems.map((item, idx) => {
            const spanClass = getItemSpanClass(item, idx, visibleItems.length);
            const heightClass =
              activeCategory === 'Todas' ? item.heightClass : 'h-80 sm:h-96';

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenLightbox(filteredItems, idx)}
                className={`${spanClass} ${heightClass} rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-sm bg-ivory text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical`}
              >
                <img
                  src={item.thumb}
                  alt={item.alt}
                  className={`w-full h-full object-cover ${
                    item.objectPositionClass ?? 'object-center'
                  } group-hover:scale-105 transition-transform duration-700`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end ${item.paddingClass}`}
                >
                  <span className="text-[10px] uppercase tracking-[0.22em] text-champagne-light mb-1">
                    {item.category}
                  </span>
                  <span className={`text-warm-white font-serif italic ${item.titleSizeClass}`}>
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Botão Expansível (+) para ver todas as fotos sem poluir a primeira visualização */}
        {hiddenCount > 0 && (
          <div className="mt-12 text-center reveal">
            <button
              type="button"
              onClick={() => {
                if (isExpanded) {
                  setIsExpanded(false);
                  setActiveCategory('Todas');
                } else {
                  setIsExpanded(true);
                }
              }}
              aria-expanded={isExpanded}
              className="group inline-flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-warm-white border border-champagne/50 text-espresso hover:border-botanical hover:bg-botanical hover:text-warm-white transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="w-7 h-7 rounded-full bg-botanical/10 text-botanical group-hover:bg-warm-white/15 group-hover:text-champagne-light flex items-center justify-center transition-colors">
                {isExpanded ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                {isExpanded
                  ? 'Recolher galeria'
                  : `Ver mais fotos (+${hiddenCount} momentos)`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
