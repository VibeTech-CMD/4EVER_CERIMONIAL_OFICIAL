import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutAndFounders } from './components/AboutAndFounders';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SectionConnector } from './components/SectionConnector';
import { PortfolioItem } from './data/siteData';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    items: PortfolioItem[];
    index: number;
  } | null>(null);

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('.reveal'));

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('active'));
      return;
    }

    const revealAboveOrInView = () => {
      const viewportBottom = window.scrollY + window.innerHeight + 80;
      revealElements.forEach((el) => {
        if (el.classList.contains('active')) return;
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + window.scrollY;
        if (elTop <= viewportBottom) {
          el.classList.add('active');
        }
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px 40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    revealAboveOrInView();

    const onHashChange = () => {
      window.setTimeout(revealAboveOrInView, 120);
      window.setTimeout(revealAboveOrInView, 500);
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionConnector bgClassName="bg-warm-white" className="pt-8 pb-2 reveal" />
        <AboutAndFounders />
        <SectionConnector bgClassName="bg-warm-white" className="py-2 reveal" />
        <WhyChooseSection />
        <SectionConnector bgClassName="bg-warm-white" className="py-2 reveal" />
        <ServicesSection />
        <SectionConnector bgClassName="bg-warm-white" className="py-2 reveal" />
        <PortfolioSection
          onOpenLightbox={(items, startIndex) =>
            setLightboxState({ items, index: startIndex })
          }
        />
        <SectionConnector bgClassName="bg-warm-white" className="py-2 reveal" />
        <TestimonialsSection />
        <SectionConnector bgClassName="bg-warm-white" className="py-2 reveal" />
        <ContactSection />
      </main>
      <Footer />
      <LightboxModal
        items={lightboxState?.items ?? []}
        currentIndex={lightboxState?.index ?? null}
        onClose={() => setLightboxState(null)}
        onNavigate={(newIndex) =>
          setLightboxState((prev) => (prev ? { ...prev, index: newIndex } : null))
        }
      />
      <FloatingWhatsApp />
    </>
  );
}
