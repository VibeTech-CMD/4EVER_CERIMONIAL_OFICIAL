import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutAndFounders } from './components/AboutAndFounders';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

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
        <AboutAndFounders />
        <ServicesSection />
        <PortfolioSection
          onOpenLightbox={(src, caption) => setLightboxImage({ src, caption })}
        />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />
      <FloatingWhatsApp />
    </>
  );
}
