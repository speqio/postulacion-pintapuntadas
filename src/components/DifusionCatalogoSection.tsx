import React from 'react';
import { Megaphone, BookOpen, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { NeedleThreadIcon } from './NeedleThreadIcon';

import portadaImg from '../../imagenes/quirilluca/quirilluca1.jpg';
import spreadImg from '../../imagenes/colchagua/colchagua1.jpg';
import social1Img from '../../imagenes/conguillio/conguillio1.jpg';
import social2aImg from '../../imagenes/atacama/atacama1.jpg';
import social2bImg from '../../imagenes/paine/paine1.jpg';
import social2cImg from '../../imagenes/quirilluca/quirillucaproceso1.jpg';

export const DifusionCatalogoSection: React.FC = () => {
  return (
    <section id="difusion" className="py-16 lg:py-24 bg-panel border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Megaphone className="w-3.5 h-3.5" />
              Maquetado de Difusión y Catálogo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Del Taller a la Comunidad: Registro y Difusión
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Maquetas del catálogo físico/digital y de las piezas gráficas que acompañarán la convocatoria y la exposición itinerante.
            </p>
          </div>
        </ScrollReveal>

        {/* (a) Catálogo Físico/Digital: portada + doble página */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-5">
            <h3 className="font-serif text-xl text-charcoal font-light flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent-muted" />
              Catálogo Físico / Digital — Portada y Doble Página Interior
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Portada */}
              <div className="group bg-charcoal aspect-3/4 relative overflow-hidden arch-frame border border-[#333333]">
                <div className="absolute inset-4 border border-accent-muted opacity-30 z-10 pointer-events-none" />
                <img src={portadaImg} alt="Portada del catálogo" className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/40 to-transparent z-20" />
                <div className="absolute inset-x-0 top-8 text-center px-6 z-30">
                  <span className="text-[9px] uppercase tracking-[0.35em] text-accent-muted font-sans flex items-center justify-center gap-2">
                    <NeedleThreadIcon className="w-3.5 h-3.5" />
                    Pintapuntadas
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-8 text-center px-6 z-30 space-y-2">
                  <h4 className="font-serif text-2xl sm:text-3xl text-canvas font-light leading-tight">
                    Catálogo de Talleres de<br />Bordado Patrimonial
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-border-dark font-sans">
                    Needle Painting & Mediación Patrimonial · Región de Valparaíso
                  </p>
                </div>
              </div>

              {/* Doble página interior */}
              <div className="grid grid-cols-2 bg-canvas border border-border-subtle aspect-3/4 overflow-hidden">
                {/* Página izquierda: foto a sangre */}
                <div className="group relative overflow-hidden bg-panel">
                  <img src={spreadImg} alt="Página interior del catálogo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                {/* Página derecha: ficha técnica */}
                <div className="p-4 sm:p-5 flex flex-col justify-center space-y-3 border-l border-border-subtle">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-accent-muted font-sans">
                    Ficha Técnica
                  </span>
                  <h5 className="font-serif italic text-base text-charcoal font-light leading-snug">
                    Valle de Colchagua y Viñedos
                  </h5>
                  <p className="text-[11px] text-body font-sans leading-relaxed">
                    Paisaje patrimonial reinterpretado en needle painting durante el taller, con acompañamiento de mediación territorial.
                  </p>
                  <div className="space-y-1 text-[10px] font-sans text-muted pt-2 border-t border-border-subtle">
                    <p><strong className="text-charcoal font-medium">Técnica:</strong> Needle Painting</p>
                    <p><strong className="text-charcoal font-medium">Duración:</strong> 4 sesiones</p>
                    <p><strong className="text-charcoal font-medium">Hilos:</strong> DMC mouliné matizado</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* (b) Plantillas de Redes Sociales */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-5">
            <h3 className="font-serif text-xl text-charcoal font-light flex items-center gap-2">
              <Instagram className="w-4 h-4 text-accent-muted" />
              Plantillas de Redes Sociales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Template A: Convocatoria a talleres */}
              <div className="group aspect-square relative overflow-hidden bg-charcoal border border-[#333333] flex flex-col justify-between p-6 sm:p-8">
                <div className="absolute inset-0">
                  <img src={social1Img} alt="" className="w-full h-full object-cover opacity-35 transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/60" />
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-accent-muted font-sans flex items-center gap-2">
                    <NeedleThreadIcon className="w-3.5 h-3.5" />
                    Pintapuntadas
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-canvas font-sans px-2.5 py-1 border border-canvas/40">
                    Cupos Limitados
                  </span>
                </div>
                <div className="relative z-10 space-y-3">
                  <h4 className="font-serif text-2xl sm:text-3xl text-canvas font-light leading-tight">
                    Inscripciones Abiertas:<br />Taller de Needle Painting<br />y Mediación Patrimonial
                  </h4>
                  <p className="text-xs text-border-dark font-sans">
                    4 sesiones · Región de Valparaíso · Cupos comunitarios
                  </p>
                  <button className="inline-flex px-5 py-2.5 text-[10px] font-sans uppercase tracking-[0.25em] bg-canvas text-charcoal">
                    Postula Aquí
                  </button>
                </div>
              </div>

              {/* Template B: Difusión Exposición Itinerante */}
              <div className="aspect-square relative overflow-hidden bg-panel-alt border border-border-subtle p-6 sm:p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-accent-muted font-sans flex items-center gap-2">
                    <NeedleThreadIcon className="w-3.5 h-3.5 text-charcoal" />
                    Pintapuntadas
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal font-sans px-2.5 py-1 border border-charcoal/30">
                    Exposición Itinerante
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 h-2/5">
                  <div className="group overflow-hidden"><img src={social2aImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="group overflow-hidden"><img src={social2bImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                  <div className="group overflow-hidden"><img src={social2cImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-light leading-tight">
                    Paisajes Patrimoniales en Hilos
                  </h4>
                  <p className="text-xs text-body font-sans">
                    Obras del taller recorrerán espacios comunitarios de la región. Fechas y comunas, próximamente.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
