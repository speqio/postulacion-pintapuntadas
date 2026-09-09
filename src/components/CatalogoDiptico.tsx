import React from 'react';
import { Sprout, Landmark, Image as ImageIcon } from 'lucide-react';
import { NeedleThreadIcon } from './NeedleThreadIcon';
import mapeoImg from '../../imagenes/quirilluca/quirillucaproceso1.jpg';

const MODULOS = [
  {
    numero: '01',
    nombre: 'Módulo 01',
    titulo: 'Sensibilización',
    texto: 'Mapeo del paisaje y selección del motivo patrimonial.',
  },
  {
    numero: '02',
    nombre: 'Módulo 02',
    titulo: 'Transferencia',
    texto: 'Colorimetría, calco al lino y primeras puntadas finas.',
  },
  {
    numero: '03',
    nombre: 'Módulo 03',
    titulo: 'Técnica Needle',
    texto: 'Puntada corta/larga y fundición de matices en degradé.',
  },
  {
    numero: '04',
    nombre: 'Módulo 04',
    titulo: 'Detalles & Archivo',
    texto: 'Texturas finales, montaje en bastidor y ficha de registro.',
  },
];

const OBRAS = [1, 2, 3, 4, 5, 6];

/** Díptico del catálogo físico: reproduce en código las dos caras del catálogo impreso. */
export const CatalogoDiptico: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Cara A: Dispositivo de Mediación y Taller */}
      <div className="bg-canvas border border-border-subtle p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-accent-muted">
            Dispositivo de Mediación y Taller
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-light leading-snug">
            Taller de Bordado con Técnica Needle Painting y Mediación Patrimonial
          </h4>
          <p className="font-serif italic text-sm text-muted leading-relaxed">
            "Un ciclo de talleres donde aprender a bordar en pintura con aguja va de la mano de conocer, en profundidad, el propio territorio."
          </p>
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted">
            Tallerista · Pamela Rojas Botto
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 bg-panel-alt border border-border-subtle space-y-1.5">
            <p className="text-sm font-sans font-medium text-charcoal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-muted shrink-0" />
              Conocer antes de bordar
            </p>
            <p className="text-xs font-sans text-body leading-relaxed">
              Dictado por artesana formada en arteterapia y patrimonio. Cada participante explora el contexto etnográfico, social, ecosistémico y arquitectónico del paisaje elegido antes de hilar.
            </p>
          </div>
          <div className="p-4 bg-panel-alt border border-border-subtle space-y-1.5">
            <p className="text-sm font-sans font-medium text-charcoal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-muted shrink-0" />
              Aprender y dejar huella
            </p>
            <p className="text-xs font-sans text-body leading-relaxed">
              Transferencia técnica que culmina con cada participante portando su pieza, conocimiento sensible y el resguardo de las obras en un catálogo de difusión regional colectiva.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-panel-alt border border-border-subtle grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="sm:col-span-3 space-y-1.5">
            <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-accent-muted">
              Punto de Inflexión Didáctica
            </span>
            <h5 className="font-serif text-base text-charcoal font-light">Mapeo Patrimonial Textil</h5>
            <p className="text-xs font-sans text-body leading-relaxed">
              Selección fotográfica comunitaria dividida en dos matrices visuales de trabajo:
            </p>
            <p className="text-xs font-sans text-body flex items-start gap-1.5">
              <Sprout className="w-3.5 h-3.5 text-accent-muted shrink-0 mt-0.5" />
              Eje Bio-botánico: Campanillas, Chagual, Quillayes, Humedales.
            </p>
            <p className="text-xs font-sans text-body flex items-start gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-accent-muted shrink-0 mt-0.5" />
              Eje Arquitectónico: Adobe histórico, estaciones y molinos de agua.
            </p>
          </div>
          <div className="sm:col-span-2 relative aspect-4/3 sm:aspect-auto overflow-hidden bg-panel border border-border-subtle">
            <img src={mapeoImg} alt="Mapeo patrimonial: proceso de bordado sobre flora autóctona" className="w-full h-full object-cover" />
            <span className="absolute bottom-0 inset-x-0 px-2 py-1 bg-charcoal/80 text-[9px] font-sans uppercase tracking-[0.15em] text-canvas text-center">
              01 · Flora Autóctona
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted">
              Itinerario Curricular · 4 Sesiones Metodológicas
            </span>
            <span className="text-[10px] font-sans text-muted hidden sm:inline">
              Soporte: Lino Crudo &amp; Hilos DMC 1 Hebra
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {MODULOS.map((m) => (
              <div key={m.numero} className="p-3 bg-panel-alt border border-border-subtle space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans text-accent-muted">{m.nombre}</span>
                  <span className="text-[10px] font-serif text-muted">{m.numero}</span>
                </div>
                <p className="text-xs font-sans font-medium text-charcoal">{m.titulo}</p>
                <p className="text-[10px] font-sans text-body leading-relaxed">{m.texto}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] font-sans text-muted">
          <span>Curaduría: Área de Mediación Textil &amp; Arteterapia</span>
          <span>Edición 2026</span>
        </div>
      </div>

      {/* Cara B: Galería de Obras */}
      <div className="bg-canvas border border-border-subtle p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-border-subtle">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-accent-muted flex items-center gap-2">
            <NeedleThreadIcon className="w-3.5 h-3.5" />
            Galería de Obras
          </span>
          <span className="text-[10px] font-sans text-muted">· Taller Needle Painting 2024</span>
          <span className="ml-auto text-[10px] font-sans text-accent-muted flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-muted" />
            6 Obras Seleccionadas
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {OBRAS.map((n) => (
            <div key={n} className="border border-border-subtle overflow-hidden">
              <div className="relative aspect-4/3 bg-panel flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-border-dark" />
                <span className="absolute top-2 left-2 w-5 h-5 flex items-center justify-center bg-charcoal text-canvas text-[10px] font-sans">
                  {String(n).padStart(2, '0')}
                </span>
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-charcoal/70 text-canvas text-[8px] font-sans uppercase tracking-[0.1em]">
                  Foto por agregar
                </span>
              </div>
              <div className="p-2.5 space-y-1.5 bg-panel-alt">
                <span className="block w-1.5 h-1.5 rounded-full bg-accent-muted" />
                <span className="block h-2 w-3/4 bg-border-subtle" />
                <span className="block h-2 w-1/2 bg-border-subtle" />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] font-sans text-muted">
          <span>Curaduría: Área de Mediación Textil &amp; Arteterapia</span>
          <span>Edición 2026</span>
        </div>
      </div>

    </div>
  );
};
