export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="py-16 md:py-24 bg-gradient-to-r from-ivory via-warm-white to-ivory border-y border-champagne/25"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center reveal">
        <span className="text-xs uppercase tracking-[0.28em] text-champagne font-semibold">
          Histórias Reais
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-espresso mt-2 mb-6">
          Palavras de Quem Celebrou Conosco
        </h2>

        <div className="rounded-[2.25rem] bg-warm-white/90 p-8 sm:p-12 border border-champagne/35 shadow-sm max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-champagne/20 text-champagne flex items-center justify-center mx-auto mb-5 font-serif text-3xl">
            &ldquo;
          </div>
          <p className="font-serif italic text-xl sm:text-2xl text-graphite/85 leading-relaxed mb-4">
            Em breve, compartilharemos aqui os relatos reais dos noivos e famílias que confiaram
            seus momentos mais especiais à{' '}
            <span className="brand-4ever not-italic text-espresso">4EVER</span> Cerimonial.
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-botanical font-semibold">
            Seção reservada para depoimentos oficiais
          </p>
        </div>
      </div>
    </section>
  );
}
