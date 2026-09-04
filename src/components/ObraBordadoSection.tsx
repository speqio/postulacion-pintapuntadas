import React, { useState } from 'react';
import { Layers, Clock, Gem, Images, X, ZoomIn } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { DESIGNS_DATA } from '../data/designsData';

const hexToHsl = (hex: string): [number, number, number] => {
  const value = hex.replace('#', '');
  const r = parseInt(value.substring(0, 2), 16) / 255;
  const g = parseInt(value.substring(2, 4), 16) / 255;
  const b = parseInt(value.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r: h = ((g - b) / d) % 6; break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4; break;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s * 100, l * 100];
};

const hslToHex = (h: number, s: number, l: number): string => {
  const sat = s / 100;
  const light = l / 100;
  const c = (1 - Math.abs(2 * light - 1)) * sat;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = light - c / 2;
  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

const generateTonalScale = (hex: string, steps: number = 5): string[] => {
  const [h, s, l] = hexToHsl(hex);
  const lightest = Math.min(l + 32, 92);
  const darkest = Math.max(l - 30, 12);
  const scale: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const lightness = lightest + (darkest - lightest) * t;
    scale.push(hslToHex(h, s, lightness));
  }
  return scale;
};

import quirillucaFoto from '../../imagenes/quirilluca/quirilluca-sinfondo.jpg';
import atacamaFoto from '../../imagenes/atacama/atacama-sinfondo.jpg';
import conguillioFoto from '../../imagenes/conguillio/conguillio-sinfondo.jpg';
import quirillucaProceso1 from '../../imagenes/quirilluca/QP1.jfif';
import quirillucaProceso2 from '../../imagenes/quirilluca/QP2.jfif';
import quirillucaProceso3 from '../../imagenes/quirilluca/QP3.jfif';
import atacamaProceso1 from '../../imagenes/atacama/AP1.jfif';
import atacamaProceso2 from '../../imagenes/atacama/AP2.jfif';
import atacamaProceso3 from '../../imagenes/atacama/AP3.jfif';
import conguillioProceso1 from '../../imagenes/conguillio/cp1.jfif';
import conguillioProceso2 from '../../imagenes/conguillio/cp2.jfif';
import conguillioProceso3 from '../../imagenes/conguillio/cp3.jfif';

const PIEZAS = [
  {
    id: 'quirilluca-acantilados',
    foto: quirillucaFoto,
    cita: 'Quise bordar Quirilluca para mostrar sus colores, su importancia ecológica y lo que está en juego antes de que cambie para siempre.',
    procesoFotos: [quirillucaProceso1, quirillucaProceso2, quirillucaProceso3],
  },
  {
    id: 'atacama-desierto-florido',
    foto: atacamaFoto,
    cita: 'El desierto en flor entre montañas me envolvió en su silencio colorido. Bordar esta contradicción vital fue capturar el pulso oculto del paisaje seco.',
    procesoFotos: [atacamaProceso1, atacamaProceso2, atacamaProceso3],
  },
  {
    id: 'conguillio-araucarias',
    foto: conguillioFoto,
    cita: null,
    procesoFotos: [conguillioProceso1, conguillioProceso2, conguillioProceso3],
  },
] as const;

export const ObraBordadoSection: React.FC = () => {
  const [activeProceso, setActiveProceso] = useState<readonly string[] | null>(null);
  const [zoomedFoto, setZoomedFoto] = useState<string | null>(null);

  return (
    <section id="obra" className="py-16 lg:py-24 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Gem className="w-3.5 h-3.5" />
              Página 2
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Prototipo Artístico y Muestras de Bordado
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Tres piezas del archivo de la artista que documentan cómo un paisaje se traduce, puntada a puntada, en textil.
            </p>
          </div>
        </ScrollReveal>

        {/* Piezas */}
        <div className="space-y-10">
          {PIEZAS.map((pieza, index) => {
            const design = DESIGNS_DATA.find((d) => d.id === pieza.id);
            if (!design) return null;

            return (
              <ScrollReveal key={pieza.id} direction="up" delay={index * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start bg-panel-alt border border-border-subtle p-6 sm:p-8">

                  {/* Foto de la obra */}
                  <div className="lg:col-span-5">
                    <button
                      type="button"
                      onClick={() => setZoomedFoto(pieza.foto)}
                      className="group relative aspect-square w-full overflow-hidden bg-panel cursor-zoom-in"
                    >
                      <div className="absolute inset-2 border border-accent-muted opacity-25 z-10 pointer-events-none" />
                      <img
                        src={pieza.foto}
                        alt={`Obra terminada: ${design.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-300 flex items-center justify-center z-10">
                        <ZoomIn className="w-6 h-6 text-canvas opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </button>
                  </div>

                  {/* Detalle técnico */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-accent-muted">
                        {design.location}
                      </span>
                      <h3 className="font-serif text-2xl text-charcoal font-light">
                        {design.title}
                      </h3>
                    </div>

                    {pieza.cita ? (
                      <p className="font-serif italic text-xl sm:text-2xl text-charcoal leading-snug border-l-2 border-accent-muted pl-5">
                        "{pieza.cita}"
                      </p>
                    ) : (
                      <p className="font-sans text-base text-body leading-relaxed">
                        {design.description}
                      </p>
                    )}

                    {/* Chip de tiempo */}
                    <div className="flex flex-wrap items-center gap-2 text-sm font-sans">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-canvas border border-border-subtle text-body">
                        <Clock className="w-3 h-3 text-accent-muted" />
                        {design.timeHours} horas de bordado
                      </span>
                      {pieza.procesoFotos && (
                        <button
                          onClick={() => setActiveProceso(pieza.procesoFotos)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-charcoal text-canvas hover:bg-[#333333] transition-colors uppercase tracking-[0.15em] text-xs"
                        >
                          <Images className="w-3 h-3 text-accent-muted" />
                          Ver Proceso
                        </button>
                      )}
                    </div>

                    {/* Puntos usados */}
                    <div className="space-y-1.5 pt-2 border-t border-border-subtle">
                      <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Puntos y Técnicas Aplicadas
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {design.stitchesUsed.map((stitch) => (
                          <span key={stitch} className="px-2.5 py-1 bg-canvas text-charcoal text-sm font-sans border border-border-subtle">
                            {stitch}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Paleta de hilos */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted">
                        Paleta de Hilos
                      </span>
                      <div className="grid grid-cols-3 gap-3">
                        {design.threadPalette.map((color) => {
                          const scale = generateTonalScale(color.hex);
                          return (
                            <div key={color.code} className="space-y-1.5">
                              <div className="flex flex-col overflow-hidden border border-border-subtle">
                                {scale.map((tone, i) => (
                                  <div
                                    key={`${color.code}-${i}`}
                                    className="h-6 sm:h-7 w-full"
                                    style={{ backgroundColor: tone }}
                                  />
                                ))}
                              </div>
                              <span
                                className="block text-center text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.12em] text-charcoal"
                              >
                                {color.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      {/* Galería de Proceso */}
      {activeProceso && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProceso(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-canvas border border-border-subtle p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted">
                Galería de Proceso
              </span>
              <button
                onClick={() => setActiveProceso(null)}
                className="p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {activeProceso.map((foto, i) => (
                <button
                  key={foto}
                  type="button"
                  onClick={() => setZoomedFoto(foto)}
                  className="group relative aspect-square overflow-hidden bg-panel border border-border-subtle cursor-zoom-in"
                >
                  <img
                    src={foto}
                    alt={`Foto de proceso ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-canvas opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Zoom de Foto de Proceso */}
      {zoomedFoto && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-charcoal/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedFoto(null)}
        >
          <img
            src={zoomedFoto}
            alt="Foto de proceso ampliada"
            className="max-h-[90vh] max-w-full w-auto object-contain"
          />
          <button
            onClick={() => setZoomedFoto(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};
