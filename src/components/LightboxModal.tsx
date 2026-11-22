import { useEffect } from 'react';
import { PortfolioItem } from '../data/siteData';

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function LightboxModal({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = currentIndex !== null && items[currentIndex] !== undefined;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen || currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && items.length > 1) {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft' && items.length > 1) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !currentItem || currentIndex === null) return null;

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div
      id="lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da imagem"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95 backdrop-blur-md p-4"
    >
      {/* Fechar */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-warm-white/15 border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-botanical transition-colors cursor-pointer z-20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Anterior */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Imagem anterior"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-warm-white/15 border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-botanical transition-colors cursor-pointer z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Conteúdo */}
      <div className="max-w-4xl w-full text-center px-10 sm:px-14">
        <img
          id="lightbox-img"
          src={currentItem.full}
          alt={currentItem.caption}
          className="max-h-[76vh] mx-auto rounded-3xl shadow-2xl border border-champagne/40 object-contain"
        />
        <p className="font-serif italic text-xl text-warm-white mt-4">{currentItem.title}</p>
        <p
          id="lightbox-caption"
          className="text-xs uppercase tracking-[0.2em] text-champagne-light mt-1.5"
        >
          {currentItem.caption}
        </p>
        {items.length > 1 && (
          <p className="text-[11px] tracking-[0.22em] text-ivory/55 mt-2">
            {currentIndex + 1} / {items.length}
          </p>
        )}
      </div>

      {/* Próxima */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima imagem"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-warm-white/15 border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-botanical transition-colors cursor-pointer z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
