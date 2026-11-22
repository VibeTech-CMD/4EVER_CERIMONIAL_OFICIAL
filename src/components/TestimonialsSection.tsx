import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TESTIMONIALS } from '../data/siteData';

const AUTOPLAY_DELAY_MS = 4200;

const DRIFT_CLASSES = ['animate-cloud-a', 'animate-cloud-b', 'animate-cloud-c'] as const;
const STAGGER_CLASSES = [
  'lg:-translate-y-4',
  'lg:translate-y-5',
  'lg:-translate-y-2',
] as const;

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? 44 : -44,
    scale: 0.96,
    filter: 'blur(5px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction >= 0 ? -44 : 44,
    scale: 0.96,
    filter: 'blur(5px)',
  }),
};

export function TestimonialsSection() {
  // Índice do primeiro depoimento visível (sempre avança em ordem 0 -> 1 -> 2 -> 3 -> 4 -> 0)
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [timerCycle, setTimerCycle] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  const touchStartX = useRef<number | null>(null);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setTimeout(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [isPaused, startIndex, timerCycle, total]);

  const navigateTo = (nextIndex: number, dir: 1 | -1) => {
    setDirection(dir);
    setStartIndex(((nextIndex % total) + total) % total);
    setTimerCycle((c) => c + 1);
  };

  const handleNext = () => {
    navigateTo(startIndex + 1, 1);
  };

  const handlePrev = () => {
    navigateTo(startIndex - 1, -1);
  };

  const handleSelectDot = (targetIndex: number) => {
    if (targetIndex === startIndex) return;
    const forwardDist = (targetIndex - startIndex + total) % total;
    const backwardDist = (startIndex - targetIndex + total) % total;
    navigateTo(targetIndex, forwardDist <= backwardDist ? 1 : -1);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // No desktop: 3 relatos em fila contínua (1 sai translúcido à esquerda, 2 deslizam, 1 novo entra à direita)
  // No mobile/tablet: 1 relato focado por vez com deslize horizontal fluido
  const visibleSlots = isDesktop ? [0, 1, 2] : [0];
  const visibleItems = visibleSlots.map((slot) => ({
    item: TESTIMONIALS[(startIndex + slot) % total],
    slot,
    isIncomingHighlight: isDesktop ? (direction >= 0 ? slot === 2 : slot === 0) : true,
  }));

  return (
    <section
      id="depoimentos"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white via-ivory/80 to-warm-white overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 reveal">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
            Histórias Reais
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-espresso mt-2 mb-3">
            Palavras de Quem Celebrou Conosco
          </h2>
          <p className="text-xs sm:text-sm text-graphite/75 font-light leading-relaxed">
            Memórias leves de casais que confiaram o grande dia à{' '}
            <span className="brand-4ever text-espresso">4EVER</span> Cerimonial.
          </p>
        </div>

        {/* Palco da Nuvem Flutuante com saída/entrada translúcida em gradiente, setas no desktop e swipe no celular */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-warm-white via-ivory/80 to-warm-white border border-champagne/30 shadow-sm px-5 py-10 sm:px-10 lg:px-16 lg:py-16 overflow-hidden select-none"
        >
          {/* Iluminação orgânica suave de fundo */}
          <div
            className="pointer-events-none absolute -top-20 -left-16 w-72 h-72 rounded-full bg-champagne/12 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-botanical/8 blur-3xl"
            aria-hidden="true"
          />

          {/* Véus translúcidos em gradiente nas bordas para suavizar entrada e saída dos depoimentos */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 lg:w-24 z-20 bg-gradient-to-r from-warm-white via-warm-white/65 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 lg:w-24 z-20 bg-gradient-to-l from-warm-white via-warm-white/65 to-transparent"
            aria-hidden="true"
          />

          {/* Setas Laterais para Navegação no Computador e Tablet */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Depoimento anterior"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-warm-white/95 border border-champagne/50 text-espresso shadow-md hover:bg-botanical hover:text-warm-white hover:border-botanical transition-all duration-300 items-center justify-center cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo depoimento"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-warm-white/95 border border-champagne/50 text-espresso shadow-md hover:bg-botanical hover:text-warm-white hover:border-botanical transition-all duration-300 items-center justify-center cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Fila fluida com AnimatePresence + layout: 1 sai translúcido, os outros deslizam e 1 novo casal entra */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch min-h-[260px] lg:min-h-[290px]">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {visibleItems.map(({ item, slot, isIncomingHighlight }) => (
                <motion.div
                  key={item.id}
                  layout="position"
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    layout: { duration: 1.15, ease: [0.25, 0.1, 0.25, 1] },
                    x: { duration: 1.15, ease: [0.25, 0.1, 0.25, 1] },
                    opacity: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
                    scale: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
                    filter: { duration: 0.95, ease: 'easeInOut' },
                  }}
                  className={`flex ${STAGGER_CLASSES[slot]}`}
                >
                  <article
                    className={`${DRIFT_CLASSES[slot]} w-full rounded-[2rem] bg-gradient-to-br from-warm-white/95 via-warm-white/90 to-ivory/90 backdrop-blur-md p-6 sm:p-7 border transition-colors duration-500 flex flex-col justify-between ${
                      isIncomingHighlight
                        ? 'border-champagne/65 shadow-[0_18px_40px_rgba(38,56,41,0.10)]'
                        : 'border-champagne/30 shadow-[0_12px_30px_rgba(36,27,23,0.06)]'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Espaço preparado para receber futuramente a foto do casal */}
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.couple}
                          className="w-10 h-10 rounded-full object-cover border border-champagne/50 shrink-0"
                        />
                      ) : (
                        <span
                          className="w-10 h-10 rounded-full bg-champagne/20 text-champagne flex items-center justify-center font-serif text-2xl shrink-0 leading-none pt-1.5"
                          aria-hidden="true"
                        >
                          &ldquo;
                        </span>
                      )}
                      <p className="font-serif italic text-lg xl:text-[1.18rem] text-espresso/90 leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 mt-5 border-t border-champagne/20">
                      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-espresso">
                        {item.couple}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-botanical font-medium">
                        {item.eventLabel}
                      </span>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Barra de controles e legenda limpa */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-botanical font-semibold">
            Relatos Reais
          </p>

          <div className="flex items-center gap-3">
            {/* Botões mobile compactos */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Voltar relato"
              className="md:hidden w-8 h-8 rounded-full border border-champagne/45 text-espresso flex items-center justify-center hover:border-botanical hover:text-botanical transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              className="flex items-center gap-1.5"
              role="tablist"
              aria-label="Navegação de relatos reais"
            >
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectDot(idx)}
                  aria-label={`Ver relato de ${item.couple}`}
                  aria-selected={startIndex === idx}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    startIndex === idx
                      ? 'w-7 bg-botanical'
                      : 'w-2 bg-champagne/45 hover:bg-champagne'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Avançar relato"
              className="md:hidden w-8 h-8 rounded-full border border-champagne/45 text-espresso flex items-center justify-center hover:border-botanical hover:text-botanical transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="px-3.5 py-1.5 rounded-full border border-champagne/40 text-[10px] uppercase tracking-[0.18em] font-semibold text-espresso hover:border-botanical hover:text-botanical transition-colors cursor-pointer"
            >
              {isPaused ? 'Retomar' : 'Pausar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
