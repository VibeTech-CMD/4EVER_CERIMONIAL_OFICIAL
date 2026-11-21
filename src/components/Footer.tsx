import { CONTACT_INFO, SITE_ASSETS, buildWhatsAppUrl } from '../data/siteData';

const FOOTER_CTA_WA = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar um orçamento.'
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory/85 border-t border-champagne/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-warm-white/10">
          {/* Logomarca Oficial do Rodapé */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#inicio"
              className="inline-flex items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-lg"
              aria-label="4EVER Cerimonial"
            >
              <img
                id="footer-logo"
                src={SITE_ASSETS.footerLogo}
                alt="4EVER Cerimonial - Assessoria e Cerimonial"
                className="h-16 sm:h-[74px] w-auto object-contain logo-footer-img"
              />
            </a>
            <p className="text-xs text-ivory/75 font-light leading-relaxed max-w-sm">
              Assessoria e cerimonial para casamentos, debutantes, eventos corporativos e
              celebrações especiais em Macaé e região.
            </p>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-champagne-light font-semibold">
              Navegação
            </p>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#inicio" className="hover:text-champagne-light transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-champagne-light transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-champagne-light transition-colors">
                  Serviços e Pacotes
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-champagne-light transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href={FOOTER_CTA_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne-light transition-colors"
                >
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contato & Redes */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-champagne-light font-semibold">
              Contato &amp; Redes
            </p>
            <ul className="space-y-2.5 text-xs font-light">
              <li>{CONTACT_INFO.location}</li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne-light transition-colors"
                >
                  WhatsApp: {CONTACT_INFO.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-champagne-light transition-colors break-all"
                >
                  E-mail: {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne-light transition-colors"
                >
                  Instagram: {CONTACT_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center text-xs text-ivory/65 font-light gap-4 text-center sm:text-left">
          <p>
            &copy; <span id="year">{currentYear}</span>{' '}
            <span className="brand-4ever text-warm-white">4EVER</span> Cerimonial. Todos os direitos
            reservados.
          </p>
          <p>Macaé &bull; Rio de Janeiro</p>
        </div>
      </div>

      {/* Rodapé do Rodapé: Desenvolvido por VibeTech|CMD */}
      <div className="bg-[#18110E] border-t border-warm-white/10 py-3.5 px-5 text-center">
        <p className="text-[11px] tracking-[0.16em] text-ivory/75">
          Desenvolvido por{' '}
          <a
            href={CONTACT_INFO.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-champagne-light hover:text-warm-white underline decoration-champagne/50 hover:decoration-warm-white underline-offset-4 transition-colors tracking-[0.18em]"
          >
            {CONTACT_INFO.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
}
