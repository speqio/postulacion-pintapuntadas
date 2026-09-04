import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TallerMediacionSection } from './components/TallerMediacionSection';
import { ObraBordadoSection } from './components/ObraBordadoSection';
import { GallerySection } from './components/GallerySection';
import { DifusionCatalogoSection } from './components/DifusionCatalogoSection';
import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-charcoal font-sans antialiased flex flex-col">
      {/* Navigation Header */}
      <Header onLogoClick={() => scrollToSection('inicio')} onNavigate={scrollToSection} />

      {/* Main Page Layout */}
      <main className="flex-1 space-y-0">
        {/* Hero Section */}
        <div id="inicio">
          <Hero
            onExploreTaller={() => scrollToSection('taller')}
          />
        </div>

        {/* Página 1: Dispositivo de Mediación y Taller */}
        <TallerMediacionSection />

        {/* Página 2: Prototipo Artístico y Muestras de Bordado */}
        <ObraBordadoSection />

        {/* Galería fotográfica de proceso y obras */}
        <GallerySection />

        {/* Página 3: Maquetado de Difusión y Catálogo */}
        <DifusionCatalogoSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact & Postulation */}
        <ContactForm />

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-charcoal text-canvas border border-accent-muted/30 hover:border-accent-muted shadow-xl hover:bg-[#333333] transition-all duration-300 flex items-center justify-center group"
            aria-label="Volver arriba"
            title="Volver al inicio"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-accent-muted" />
          </button>
        )}
      </div>

    </div>
  );
}
