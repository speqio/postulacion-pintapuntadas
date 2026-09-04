import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import pamelaFoto from '../../imagenes/IMG_1618.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Main Grid Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Arch Photography Layout */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="group arch-frame overflow-hidden bg-panel border border-border-subtle aspect-3/4 relative">
                <div className="absolute inset-3 border border-accent-muted opacity-20 z-10 pointer-events-none" />
                <img
                  src={pamelaFoto}
                  alt="Pamela Rojas Botto, artista de Pintapuntadas"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-transparent to-transparent z-20" />
                <div className="absolute bottom-6 left-6 right-6 text-canvas space-y-1.5 z-30">
                  <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-accent-muted block">
                    Pamela Rojas Botto • Limache
                  </span>
                  <p className="font-serif italic text-base">
                    "Aprender a bordar es también aprender a mirar el territorio que habitamos."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal block">
                Sobre la Artista & Taller
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light leading-tight mt-1">
                Pamela Rojas Botto • Bordados de Autor en Limache
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="font-sans text-base sm:text-lg text-body leading-relaxed font-normal">
                Nacida en <strong className="text-charcoal font-medium">Limache (Región de Valparaíso)</strong> de la admiración por la biodiversidad y los paisajes patrimoniales de Chile, la artista textil <strong className="text-charcoal font-medium">Pamela Rojas Botto</strong> transforma fotografías, recuerdos y botánica en obras de bordado terminadas a mano bajo el sello <strong className="text-charcoal font-medium">Pintapuntadas</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-sans text-base sm:text-lg text-body leading-relaxed font-normal">
                Con formación en <strong className="text-charcoal font-medium">arteterapia y patrimonio material e inmaterial</strong>, y certificación en bordado <strong className="text-charcoal font-medium">ChileValora</strong>, Pamela dicta talleres de needle painting donde cada pieza nace de un proceso de mediación patrimonial: conocer el territorio antes de bordarlo. Cada obra requiere entre 20 y 40 horas de minucioso bordado con hilos de algodón sobre lino natural.
              </p>
            </ScrollReveal>

            {/* 3 Step Process Breakdown */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-6 border-t border-border-subtle space-y-4">
                <h3 className="font-serif text-xl text-charcoal font-light">
                  Proceso de Creación de cada Obra
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-panel border border-border-subtle space-y-2">
                    <div className="w-6 h-6 rounded-full bg-charcoal text-canvas text-xs font-bold flex items-center justify-center font-sans">
                      1
                    </div>
                    <h4 className="font-serif italic text-base text-charcoal font-light">
                      Fotografía & Boceto
                    </h4>
                    <p className="text-sm text-muted font-normal">
                      Composición botánica o paisaje trazado sobre lino natural.
                    </p>
                  </div>

                  <div className="p-4 bg-panel border border-border-subtle space-y-2">
                    <div className="w-6 h-6 rounded-full bg-accent-muted text-canvas text-xs font-bold flex items-center justify-center font-sans">
                      2
                    </div>
                    <h4 className="font-serif italic text-base text-charcoal font-light">
                      Bordado Minucioso
                    </h4>
                    <p className="text-sm text-muted font-normal">
                      Decenas de horas de puntadas y matices de color a mano.
                    </p>
                  </div>

                  <div className="p-4 bg-panel border border-border-subtle space-y-2">
                    <div className="w-6 h-6 rounded-full bg-body text-canvas text-xs font-bold flex items-center justify-center font-sans">
                      3
                    </div>
                    <h4 className="font-serif italic text-base text-charcoal font-light">
                      Montaje & Entrega
                    </h4>
                    <p className="text-sm text-muted font-normal">
                      Fijación posterior en bastidor de madera listo para colgar.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-6 grid grid-cols-3 gap-4 text-center border-t border-border-subtle">
                <div>
                  <span className="font-serif text-3xl font-light text-charcoal block">100%</span>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-muted">Hecho en Limache</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-light text-charcoal block">+200</span>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-muted">Obras Entregadas</span>
                </div>
                <div>
                  <span className="font-serif text-3xl font-light text-charcoal block">100%</span>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-muted">Lino & Fibras Naturales</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
