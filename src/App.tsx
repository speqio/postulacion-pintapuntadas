import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TallerMediacionSection } from './components/TallerMediacionSection';
import { ObraBordadoSection } from './components/ObraBordadoSection';
import { KitMaterialesSection } from './components/KitMaterialesSection';
import { DifusionCatalogoSection } from './components/DifusionCatalogoSection';
import { Footer } from './components/Footer';
import { MetodologiaPage } from './pages/MetodologiaPage';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [path, setPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

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

  const navigateTo = (targetPath: string) => {
    if (targetPath !== window.location.pathname) {
      window.history.pushState({}, '', targetPath);
    }
    setPath(targetPath);
    window.scrollTo({ top: 0 });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('/')) {
      navigateTo(sectionId);
      return;
    }
    if (path !== '/') {
      navigateTo('/');
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
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
        {path === '/metodologia' ? (
          <MetodologiaPage onNavigate={scrollToSection} />
        ) : (
          <>
            {/* Hero Section */}
            <div id="inicio">
              <Hero />
            </div>

            {/* Página 1: Dispositivo de Mediación y Taller */}
            <TallerMediacionSection />

            {/* Página 2: Prototipo Artístico y Muestras de Bordado */}
            <ObraBordadoSection />

            {/* Página 3: Kit de Materiales e Insumos del Taller */}
            <KitMaterialesSection />

            {/* Página 4: Maquetado de Difusión y Catálogo */}
            <DifusionCatalogoSection />
          </>
        )}
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
