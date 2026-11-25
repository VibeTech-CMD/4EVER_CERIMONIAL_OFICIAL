import { useEffect, useState } from 'react';
import { buildWhatsAppUrl } from '../data/siteData';

const FLOATING_WA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar um orçamento.'
);

export function FloatingWhatsApp() {
  const [hideNearFooter, setHideNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHideNearFooter(Boolean(entries[0]?.isIntersecting));
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={FLOATING_WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp da 4EVER Cerimonial"
      aria-hidden={hideNearFooter}
      tabIndex={hideNearFooter ? -1 : 0}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 bg-botanical text-warm-white px-4 sm:px-5 py-3.5 rounded-full shadow-lg hover:bg-botanical-dark transition-all duration-300 border border-champagne/40 ${
        hideNearFooter
          ? 'opacity-0 translate-y-4 pointer-events-none'
          : 'opacity-100 translate-y-0'
      }`}
    >
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
      </svg>
      <span className="text-xs uppercase tracking-[0.15em] font-medium hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
