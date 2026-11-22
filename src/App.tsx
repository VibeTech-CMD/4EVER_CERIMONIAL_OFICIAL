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
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
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
