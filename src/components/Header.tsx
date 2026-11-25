import { useEffect, useState } from 'react';
import { NAV_LINKS, SITE_ASSETS, buildWhatsAppUrl } from '../data/siteData';

const HEADER_CTA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar um orçamento para o meu evento.'
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#inicio');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? 'border-champagne/35 shadow-sm'
          : 'border-champagne/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center gap-3 xl:gap-6 transition-all duration-300 ${
            isScrolled ? 'py-2 lg:py-2' : 'py-2.5 lg:py-3'
          }`}
        >
          {/* Logomarca Oficial Superior */}
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical rounded-lg"
            aria-label="4EVER Cerimonial - Início"
          >
            <img
              id="header-logo"
              src={SITE_ASSETS.headerLogo}
              alt="4EVER Cerimonial - Assessoria e Cerimonial"
              decoding="async"
              className={`w-auto object-contain logo-header-img transition-all duration-300 group-hover:scale-[1.03] ${
                isScrolled
                  ? 'h-10 sm:h-11 lg:h-12'
                  : 'h-11 sm:h-13 lg:h-14 xl:h-[60px]'
              }`}
            />
          </a>

          {/* Menu Desktop */}
          <nav
            aria-label="Menu principal"
            className="hidden lg:flex items-center gap-4 xl:gap-7 text-[11px] xl:text-xs uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium text-graphite"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1.5 whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-botanical font-semibold after:scale-x-100'
                      : 'hover:text-botanical after:scale-x-0 hover:after:scale-x-100'
                  } after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-[1.5px] after:bg-champagne after:origin-center after:transition-transform after:duration-300`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block shrink-0">
            <a
              href={HEADER_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 xl:px-6 py-2.5 xl:py-3 rounded-full bg-botanical text-warm-white text-[11px] xl:text-xs uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium hover:bg-botanical-dark transition-all duration-300 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne whitespace-nowrap"
            >
              Solicitar orçamento
            </a>
          </div>

          {/* Botão Menu Mobile / Tablet */}
          <button
            id="mobile-menu-btn"
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-full text-graphite hover:bg-ivory transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile / Tablet Dropdown + Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-[64px] bg-espresso/30 backdrop-blur-[2px] z-40"
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="lg:hidden relative z-50 bg-warm-white border-t border-champagne/25 px-5 sm:px-6 py-5 space-y-4 shadow-xl"
          >
            <nav
              aria-label="Menu mobile"
              className="flex flex-col space-y-1.5 text-xs uppercase tracking-[0.18em] font-medium text-graphite"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-link py-2.5 px-4 rounded-full transition-colors ${
                      isActive
                        ? 'bg-ivory text-botanical font-semibold'
                        : 'hover:bg-ivory hover:text-botanical'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <div className="pt-2">
              <a
                href={HEADER_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link block w-full text-center py-3.5 px-6 rounded-full bg-botanical text-warm-white text-xs uppercase tracking-[0.16em] font-medium hover:bg-botanical-dark transition-colors"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
