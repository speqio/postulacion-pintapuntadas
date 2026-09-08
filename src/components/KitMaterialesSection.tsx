import React from 'react';
import { Package, Scissors } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import kitMateriales1 from '../../imagenes/taller-registro-1.jfif';
import kitMateriales2 from '../../imagenes/taller-registro-2.jfif';

const INSUMOS = [
  'Bastidor de madera',
  'Tela de lino/algodón con boceto guiado',
  'Hilos de bordar en paleta seleccionada',
  'Agujas de bordado',
  'Tijeras',
];

export const KitMaterialesSection: React.FC = () => {
  return (
    <section id="kit" className="py-10 lg:py-14 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Package className="w-3.5 h-3.5" />
              Página 3
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Kit de Materiales e Insumos del Taller
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Prototipo de insumos que recibirá cada participante para dar sus primeras puntadas.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start bg-panel-alt border border-border-subtle p-6 sm:p-8">

            {/* Fotografías del kit */}
            <div className="lg:col-span-8 grid grid-cols-1 gap-4">
              <div className="aspect-4/3 overflow-hidden bg-panel border border-border-subtle group">
                <img
                  src={kitMateriales1}
                  alt="Mesa de trabajo con bastidores, hilos y materiales de bordado del taller"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="aspect-4/3 overflow-hidden bg-panel border border-border-subtle group">
                <img
                  src={kitMateriales2}
                  alt="Bastidores con bocetos guiados y cajas de hilos de bordado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Listado de insumos */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5" />
                Cada Participante Recibe
              </span>
              <ul className="divide-y divide-border-subtle border border-border-subtle bg-canvas">
                {INSUMOS.map((item) => (
                  <li key={item} className="px-4 py-3 text-sm font-sans text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
