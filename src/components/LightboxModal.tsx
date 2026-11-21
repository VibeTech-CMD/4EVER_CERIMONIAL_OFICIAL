import { useEffect } from 'react';

interface LightboxModalProps {
  image: { src: string; caption: string } | null;
  onClose: () => void;
}

export function LightboxModal({ image, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

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
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-warm-white/15 border border-warm-white/30 text-warm-white flex items-center justify-center hover:bg-botanical transition-colors cursor-pointer"
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
      <div className="max-w-4xl w-full text-center">
        <img
          id="lightbox-img"
          src={image.src}
          alt={image.caption}
          className="max-h-[80vh] mx-auto rounded-3xl shadow-2xl border border-champagne/40 object-contain"
        />
        <p id="lightbox-caption" className="text-xs uppercase tracking-[0.2em] text-champagne-light mt-4">
          {image.caption}
        </p>
      </div>
    </div>
  );
}
