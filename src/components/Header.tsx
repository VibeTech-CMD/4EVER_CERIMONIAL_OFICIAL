import { useState } from 'react';
import { NAV_LINKS, SITE_ASSETS, buildWhatsAppUrl } from '../data/siteData';

const HEADER_CTA_URL = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar um orçamento para o meu evento.'
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="header"
      className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-champagne/25 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-3.5">
          {/* Logomarca Oficial Superior */}
          <a
            href="#inicio"
            className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical rounded-lg"
            aria-label="4EVER Cerimonial - Início"
          >
            <img
              id="header-logo"
              src={SITE_ASSETS.headerLogo}
              alt="4EVER Cerimonial - Assessoria e Cerimonial"
              className="h-14 sm:h-16 md:h-[74px] w-auto object-contain logo-header-img transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Menu Desktop */}
          <nav
            aria-label="Menu principal"
            className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium text-graphite"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-botanical transition-colors py-1 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block">
            <a
              href={HEADER_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 xl:px-6 py-3 rounded-full bg-botanical text-warm-white text-[11px] xl:text-xs uppercase tracking-[0.18em] font-medium hover:bg-botanical-dark transition-all duration-300 shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne whitespace-nowrap"
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
            aria-label="Abrir menu de navegação"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-full text-graphite hover:bg-ivory transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-botanical cursor-pointer"
          >
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
          </button>
        </div>
      </div>

      {/* Menu Mobile / Tablet Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-warm-white border-t border-champagne/25 px-6 py-6 space-y-4 shadow-xl"
        >
          <nav
            aria-label="Menu mobile"
            className="flex flex-col space-y-3 text-xs uppercase tracking-[0.2em] font-medium text-graphite"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-link py-2.5 px-3 rounded-full hover:bg-ivory hover:text-botanical transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href={HEADER_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link block w-full text-center py-3.5 px-6 rounded-full bg-botanical text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical-dark transition-colors"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
