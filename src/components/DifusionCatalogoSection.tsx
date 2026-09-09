import React from 'react';
import { Megaphone, Instagram, BookImage } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CatalogoDiptico } from './CatalogoDiptico';
import { RedesSocialesKit } from './RedesSocialesKit';

export const DifusionCatalogoSection: React.FC = () => {
  return (
    <section id="difusion" className="py-10 lg:py-14 bg-panel border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Megaphone className="w-3.5 h-3.5" />
              Maquetado de Difusión y Catálogo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Registro y Difusión
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Maquetas del catálogo físico/digital y de las piezas gráficas que acompañarán la convocatoria y la exposición itinerante.
            </p>
          </div>
        </ScrollReveal>

        {/* (a) Catálogo Físico - Díptico */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-5">
            <h3 className="font-serif text-xl text-charcoal font-light flex items-center gap-2">
              <BookImage className="w-4 h-4 text-accent-muted" />
              Catálogo Físico - Díptico
            </h3>
            <CatalogoDiptico />
          </div>
        </ScrollReveal>

        {/* (b) Plantillas de Redes Sociales */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-5">
            <h3 className="font-serif text-xl text-charcoal font-light flex items-center gap-2">
              <Instagram className="w-4 h-4 text-accent-muted" />
              Plantillas de Redes Sociales
            </h3>
            <RedesSocialesKit />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
