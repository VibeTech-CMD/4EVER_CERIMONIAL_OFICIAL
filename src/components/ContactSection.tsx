import { CONTACT_INFO, buildWhatsAppUrl } from '../data/siteData';

const CONTACT_SHORT_WA = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de solicitar um orçamento.'
);

const CONTACT_MAIN_WA = buildWhatsAppUrl(
  'Olá, equipe 4EVER Cerimonial! Gostaria de conversar sobre o meu evento e solicitar um orçamento.'
);

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Maca%C3%A9+RJ';

export function ContactSection() {
  return (
    <section
      id="contato"
      className="pt-10 pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-warm-white to-ivory scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="bg-warm-white rounded-[2.5rem] p-7 sm:p-10 md:p-14 shadow-md border border-champagne/35 reveal">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
              Atendimento Personalizado
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-espresso leading-tight mt-2 mb-4">
              Vamos conversar sobre o seu evento.
            </h2>
            <p className="text-sm sm:text-base text-graphite/80 font-light leading-relaxed">
              Entre em contato diretamente com a nossa equipe pelo WhatsApp ou pelos nossos canais
              oficiais para receber um atendimento próximo e personalizado.
            </p>
          </div>

          {/* Canais Oficiais em Grade Limpa — todos em linha única sem quebra */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-5 rounded-3xl bg-ivory/70 border border-champagne/25 hover:border-botanical transition-colors flex flex-col items-center text-center group"
            >
              <span className="w-11 h-11 rounded-full bg-botanical/10 text-botanical flex items-center justify-center mb-3 group-hover:bg-botanical group-hover:text-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-champagne font-semibold mb-1">
                Local de Atuação
              </p>
              <p className="text-[13px] font-medium text-espresso group-hover:text-botanical transition-colors whitespace-nowrap">
                {CONTACT_INFO.location}
              </p>
            </a>

            <a
              href={CONTACT_SHORT_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-5 rounded-3xl bg-ivory/70 border border-champagne/25 hover:border-botanical transition-colors flex flex-col items-center text-center group"
            >
              <span className="w-11 h-11 rounded-full bg-botanical/10 text-botanical flex items-center justify-center mb-3 group-hover:bg-botanical group-hover:text-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-champagne font-semibold mb-1">
                WhatsApp Oficial
              </p>
              <p className="text-[13px] font-medium text-espresso group-hover:text-botanical transition-colors whitespace-nowrap">
                {CONTACT_INFO.whatsappDisplay}
              </p>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-3.5 py-5 rounded-3xl bg-ivory/70 border border-champagne/25 hover:border-botanical transition-colors flex flex-col items-center text-center group"
            >
              <span className="w-11 h-11 rounded-full bg-botanical/10 text-botanical flex items-center justify-center mb-3 group-hover:bg-botanical group-hover:text-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-champagne font-semibold mb-1">
                E-mail
              </p>
              <p className="text-[12.5px] font-medium text-espresso group-hover:text-botanical transition-colors whitespace-nowrap">
                {CONTACT_INFO.email}
              </p>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-5 rounded-3xl bg-ivory/70 border border-champagne/25 hover:border-botanical transition-colors flex flex-col items-center text-center group"
            >
              <span className="w-11 h-11 rounded-full bg-botanical/10 text-botanical flex items-center justify-center mb-3 group-hover:bg-botanical group-hover:text-warm-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="1.8" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.8" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="2" />
                </svg>
              </span>
              <p className="text-[10px] uppercase tracking-widest text-champagne font-semibold mb-1">
                Instagram
              </p>
              <p className="text-[13px] font-medium text-espresso group-hover:text-botanical transition-colors whitespace-nowrap">
                {CONTACT_INFO.instagramHandle}
              </p>
            </a>
          </div>

          {/* Botão Principal Direto para o WhatsApp */}
          <div className="text-center">
            <a
              href={CONTACT_MAIN_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-botanical text-warm-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-botanical-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
              </svg>
              Iniciar conversa pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
