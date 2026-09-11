import React from 'react';
import { Instagram, Sparkles, ListChecks, CalendarDays, Plus, Quote, Images } from 'lucide-react';
import { NeedleThreadIcon } from './NeedleThreadIcon';

import quirillucaImg from '../../imagenes/quirilluca/quirilluca1.jpg';
import conguillioImg from '../../imagenes/conguillio/conguillio1.jpg';
import guanacaguaImg from '../../imagenes/guañacagua/guañacagua1.jpg';
import tallerRegistro1 from '../../imagenes/taller-registro-1.jfif';
import tallerRegistro2 from '../../imagenes/taller-registro-2.jfif';
import paineProceso1 from '../../imagenes/paine/paineproceso1.jpg';
import colchaguaProceso1 from '../../imagenes/colchagua/colchaguaproceso1.jpg';
import quirillucaProceso1 from '../../imagenes/quirilluca/QP1.jfif';
import quirillucaProceso2 from '../../imagenes/quirilluca/QP2.jfif';
import quirillucaProceso3 from '../../imagenes/quirilluca/QP3.jfif';

const PASOS = [
  'Elige tu paisaje o patrimonio.',
  'Traza el boceto sobre el lino.',
  'Borda relleno y degradé.',
  'Remata y registra tu pieza.',
];

const KIT_ITEMS = ['Bastidor de madera', 'Tela de lino/algodón', 'Hilos DMC seleccionados', 'Agujas y tijeras'];

const SLIDES_PROGRESION = [
  { img: quirillucaProceso1, label: 'Boceto' },
  { img: quirillucaProceso2, label: 'Bordado' },
  { img: quirillucaProceso3, label: 'Terminado' },
];

/** Chip que identifica el formato/tamaño real de cada pieza (referencia de brand kit). */
const FormatTag: React.FC<{ label: string; tone?: 'light' | 'dark' }> = ({ label, tone = 'light' }) => (
  <span
    className={`inline-flex w-fit items-center gap-1.5 px-2 py-1 text-[8px] uppercase tracking-[0.2em] font-sans border ${
      tone === 'dark'
        ? 'border-canvas/30 text-canvas/80'
        : 'border-border-dark text-muted'
    }`}
  >
    {label}
  </span>
);

/** Trama de puntos, evoca la puntada de bordado como recurso gráfico decorativo. */
const DotGrid: React.FC<{ className?: string; dot?: string }> = ({ className = '', dot = 'bg-accent-muted/40' }) => (
  <div className={`grid grid-cols-4 gap-1.5 ${className}`} aria-hidden="true">
    {Array.from({ length: 12 }).map((_, i) => (
      <span key={i} className={`w-1 h-1 rounded-full ${dot}`} />
    ))}
  </div>
);

/** Grid tipo "brand kit" con plantillas para distintos formatos de Instagram, Facebook y TikTok. */
export const RedesSocialesKit: React.FC = () => {
  return (
    <div className="bg-canvas border border-border-subtle p-6 sm:p-8 space-y-8">

      {/* Encabezado del brand kit */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center shrink-0">
            <NeedleThreadIcon className="w-4 h-4 text-accent-muted" />
          </div>
          <div>
            <p className="font-serif text-2xl text-charcoal font-light leading-none">Bordando nuestro Patrimonio</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-sans mt-1">Brand Kit · Redes Sociales</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border-subtle text-[10px] uppercase tracking-[0.2em] text-accent-muted font-sans">
          <Instagram className="w-3.5 h-3.5" />
          10 Piezas · Instagram, Facebook y TikTok
        </span>
      </div>

      {/* Mosaico de plantillas en distintos formatos y diagramaciones (masonry) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:balance]">

        {/* 1. IG Post 1:1 — Obra destacada (foto a sangre + overlay) */}
        <div className="group relative mb-4 sm:mb-5 break-inside-avoid aspect-square overflow-hidden bg-panel border border-border-subtle">
          <img src={quirillucaImg} alt="Bordado del paisaje de Quirilluca" className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
          {/* Arco decorativo */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full border border-canvas/30" aria-hidden="true" />
          <div className="absolute top-4 inset-x-4 flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.3em] text-canvas/80 font-sans flex items-center gap-1.5">
              <NeedleThreadIcon className="w-3 h-3" />
              Bordando nuestro Patrimonio
            </span>
            <FormatTag label="IG Post · 1080×1080" tone="dark" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 space-y-1">
            <span className="text-[8px] uppercase tracking-[0.25em] text-accent-muted font-sans">Obra Destacada</span>
            <h5 className="font-serif text-lg sm:text-xl text-canvas font-light leading-snug">Quirilluca en Hilos</h5>
          </div>
        </div>

        {/* 2. IG Carrusel 3 Slides — Progresión de la obra */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-4/5 bg-canvas border border-border-subtle overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 pt-4">
            <span className="text-[8px] uppercase tracking-[0.25em] text-accent-muted font-sans flex items-center gap-1.5">
              <Images className="w-3 h-3" />
              Progresión de la Obra
            </span>
            <FormatTag label="IG Carrusel · 3 Slides" />
          </div>
          <div className="flex-1 grid grid-cols-3 gap-1 mt-3 px-4">
            {SLIDES_PROGRESION.map((slide) => (
              <div key={slide.label} className="relative overflow-hidden bg-panel">
                <img src={slide.img} alt={`Bordado de Quirilluca: etapa ${slide.label.toLowerCase()}`} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 inset-x-0 px-1 py-1 bg-charcoal/70 text-canvas text-[7px] uppercase tracking-[0.15em] text-center">
                  {slide.label}
                </span>
              </div>
            ))}
          </div>
          <p className="px-4 pt-3 text-xs font-sans text-body leading-relaxed">
            Del boceto a la pieza terminada: así avanza cada bordado durante las 4 sesiones del taller.
          </p>
          <div className="flex items-center justify-center gap-1.5 py-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-muted" />
            <span className="w-1.5 h-1.5 rounded-full border border-border-dark" />
            <span className="w-1.5 h-1.5 rounded-full border border-border-dark" />
          </div>
        </div>

        {/* 3. IG Story/Reel 9:16 — Convocatoria (foto a sangre + overlay) */}
        <div className="group relative mb-4 sm:mb-5 break-inside-avoid aspect-9/16 overflow-hidden bg-charcoal border border-[#333333] flex flex-col justify-between p-5">
          <div className="absolute inset-0">
            <img src={conguillioImg} alt="Bordado del paisaje de Conguillío" className="w-full h-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-b from-charcoal/40 via-charcoal/70 to-charcoal/90" />
          </div>
          {/* Semicírculo decorativo tipo arco de bastidor */}
          <div className="absolute left-1/2 -translate-x-1/2 top-16 w-40 h-40 rounded-full border border-accent-muted/40" aria-hidden="true" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-canvas font-sans px-2.5 py-1 border border-canvas/40">
              Cupos Limitados
            </span>
            <FormatTag label="IG Story/Reel · 1080×1920" tone="dark" />
          </div>
          <div className="relative z-10 space-y-3">
            <Plus className="w-4 h-4 text-accent-muted" aria-hidden="true" />
            <h5 className="font-serif text-2xl sm:text-3xl text-canvas font-light leading-tight">
              Inscripciones<br />Abiertas
            </h5>
            <p className="text-[11px] text-border-dark font-sans">
              Taller de Needle Painting y Mediación Patrimonial
            </p>
            <span className="inline-flex px-4 py-2 text-[9px] font-sans uppercase tracking-[0.25em] bg-canvas text-charcoal">
              Desliza para Postular
            </span>
          </div>
        </div>

        {/* 4. IG Post 1:1 — Tip rápido (banda de foto + texto) */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-square bg-panel-alt border border-border-subtle overflow-hidden flex flex-col">
          <div className="relative h-2/5 overflow-hidden">
            <img src={tallerRegistro1} alt="Mesa de trabajo con hilos y bastidores" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/15" />
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.25em] text-accent-muted font-sans flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Tip de Bordado
              </span>
              <FormatTag label="IG Post · 1080×1080" />
            </div>
            <h5 className="font-serif text-xl sm:text-2xl text-charcoal font-light leading-snug">
              Cómo Tensar tu Bastidor
            </h5>
            <span className="text-[10px] font-sans text-muted">#pintapuntadas</span>
          </div>
        </div>

        {/* 5. IG Post 4:5 — Conoce a la tallerista (foto superior + texto inferior) */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-4/5 bg-canvas border border-border-subtle overflow-hidden flex flex-col">
          <div className="relative h-1/2 overflow-hidden">
            <img src={paineProceso1} alt="Manos bordando durante el taller" className="w-full h-full object-cover" />
            <div className="absolute top-3 inset-x-3 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.25em] text-canvas font-sans bg-charcoal/60 px-2 py-1">
                Conoce al Equipo
              </span>
              <FormatTag label="IG Post · 1080×1350" tone="dark" />
            </div>
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <h5 className="font-serif text-lg text-charcoal font-light leading-snug">Pamela Rojas Botto</h5>
              <p className="text-xs font-sans text-body leading-relaxed">
                Artesana y mediadora textil, guía de cada sesión de needle painting.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-sans">Tallerista</span>
          </div>
        </div>

        {/* 6. TikTok 9:16 — 4 fases del taller (texto + iconografía) */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-9/16 bg-charcoal border border-[#333333] p-5 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border border-accent-muted/30" aria-hidden="true" />
          <div className="relative flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-accent-muted font-sans flex items-center gap-1.5">
              <NeedleThreadIcon className="w-3.5 h-3.5" />
              Bordando nuestro Patrimonio
            </span>
            <FormatTag label="TikTok · 1080×1920" tone="dark" />
          </div>
          <div className="relative space-y-4">
            <h5 className="font-serif text-xl sm:text-2xl text-canvas font-light leading-snug">
              4 Fases del Taller
            </h5>
            <ul className="space-y-3">
              {PASOS.map((paso, i) => (
                <li key={paso} className="flex items-start gap-2.5 text-[11px] font-sans text-canvas/85 leading-snug">
                  <span className="w-4 h-4 rounded-full bg-accent-muted/80 text-charcoal text-[9px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {paso}
                </li>
              ))}
            </ul>
          </div>
          <DotGrid className="relative" dot="bg-canvas/25" />
        </div>

        {/* 7. Facebook Post — Anuncio exposición itinerante (foto a sangre + overlay lateral) */}
        <div className="group relative mb-4 sm:mb-5 break-inside-avoid aspect-video overflow-hidden border border-border-subtle">
          <img src={guanacaguaImg} alt="Bordado del paisaje de Guañacagua" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/85 via-charcoal/35 to-transparent" />
          <div className="absolute top-4 inset-x-4 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.25em] text-canvas font-sans flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              Exposición Itinerante
            </span>
            <FormatTag label="Facebook Post · 1200×630" tone="dark" />
          </div>
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center gap-1 p-5 max-w-[70%]">
            <h5 className="font-serif text-lg sm:text-xl text-canvas font-light leading-snug">
              Paisajes Patrimoniales en Hilos
            </h5>
            <p className="text-[11px] text-canvas/80 font-sans">Fechas y comunas, próximamente.</p>
          </div>
        </div>

        {/* 8. IG Post 1:1 — Frase destacada (foto a sangre atenuada + cita) */}
        <div className="group relative mb-4 sm:mb-5 break-inside-avoid aspect-square overflow-hidden border border-border-subtle">
          <img src={colchaguaProceso1} alt="Detalle de bordado del Valle de Colchagua" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-charcoal/55" />
          <Quote className="absolute top-5 right-5 w-8 h-8 text-canvas/25" aria-hidden="true" />
          <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-center">
            <FormatTag label="IG Post · 1080×1080" tone="dark" />
            <p className="font-serif italic text-lg sm:text-xl text-canvas font-light leading-snug border-l-2 border-accent-muted pl-5 mt-6">
              "Cada puntada guarda la memoria de un paisaje."
            </p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-canvas/70 font-sans mt-4 pl-5">
              Needle Painting Patrimonial
            </span>
          </div>
        </div>

        {/* 9. IG Post 4:5 — Kit de materiales (miniatura esquina + checklist) */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-4/5 bg-panel-alt border border-border-subtle p-5 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden border-l border-b border-border-subtle">
            <img src={tallerRegistro2} alt="Hilos y bastidores del kit de materiales" className="w-full h-full object-cover" />
          </div>
          <div className="relative flex flex-col gap-2 pr-16">
            <span className="text-[8px] uppercase tracking-[0.25em] text-accent-muted font-sans flex items-center gap-1.5">
              <ListChecks className="w-3 h-3" />
              4 Elementos Esenciales
            </span>
            <FormatTag label="IG Post · 1080×1350" />
          </div>
          <ul className="relative space-y-1.5">
            {KIT_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs font-sans text-body">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-muted shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <span className="relative text-[10px] font-sans text-muted">Kit de Materiales del Taller</span>
        </div>

        {/* 10. Portada Facebook — banner de marca */}
        <div className="relative mb-4 sm:mb-5 break-inside-avoid aspect-3/1 overflow-hidden bg-linear-to-br from-charcoal via-charcoal to-[#333333] p-6 flex items-center justify-between">
          <div className="absolute -left-8 -bottom-10 w-32 h-32 rounded-full border border-accent-muted/30" aria-hidden="true" />
          <div className="absolute right-10 top-4">
            <DotGrid dot="bg-canvas/20" />
          </div>
          <div className="relative flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-canvas/10 border border-accent-muted/40 flex items-center justify-center shrink-0">
              <NeedleThreadIcon className="w-4 h-4 text-accent-muted" />
            </div>
            <div>
              <h5 className="font-serif text-xl sm:text-2xl text-canvas font-light leading-none">Bordando nuestro Patrimonio</h5>
              <p className="text-[9px] uppercase tracking-[0.25em] text-accent-muted font-sans mt-1.5">
                Needle Painting &amp; Mediación Patrimonial
              </p>
            </div>
          </div>
          <FormatTag label="Portada FB · 820×312" tone="dark" />
        </div>

      </div>
    </div>
  );
};
