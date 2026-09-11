import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Sprout, MapPinned, Map, Palette, Layers, Sparkles, BookOpen, HandHeart, Archive, Camera } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import tallerDesarrollo1 from '../../imagenes/taller-desarrollo-1.jpg';
import tallerDesarrollo2 from '../../imagenes/taller-desarrollo-2.jpg';

const SESIONES = [
  {
    numero: 1,
    icono: Map,
    titulo: 'Encuentro, Sensibilización y Cartografía Territorial',
    frase: 'Elegimos juntos la técnica y el paisaje patrimonial que vas a bordar.',
  },
  {
    numero: 2,
    icono: Palette,
    titulo: 'Transferencia, Colorimetría y Primeras Puntadas',
    frase: 'Conoces el territorio, trazas el diseño y das las primeras puntadas.',
  },
  {
    numero: 3,
    icono: Layers,
    titulo: 'Profundización Técnica y Resolución de Complejidades',
    frase: 'Sumas nuevas puntadas y afinas la técnica según tu propio avance.',
  },
  {
    numero: 4,
    icono: Sparkles,
    titulo: 'Detalles, Texturas y Realce de la Obra',
    frase: 'Añades texturas y matices finales que dan vida a tu pieza.',
  },
];

export const TallerMediacionSection: React.FC = () => {
  return (
    <section id="taller" className="py-10 lg:py-14 bg-panel border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-14">

        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <MapPinned className="w-3.5 h-3.5" />
              Dispositivo de Mediación y Taller
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Bordando nuestro Patrimonio <br />
              para el Registro y Memoria a través de Artesanía Textil
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Un ciclo de talleres donde aprender a bordar en pintura con aguja va de la mano de conocer, en profundidad, el propio territorio.
            </p>
          </div>
        </ScrollReveal>

        {/* Resumen de la propuesta */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <article className="p-6 sm:p-8 bg-canvas border border-border-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal text-canvas flex items-center justify-center shrink-0">
                    <BookOpen className="w-4.5 h-4.5 text-accent-muted" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal font-light">Conocer antes de bordar</h3>
                </div>
                <p className="font-sans text-base text-body leading-relaxed">
                  El taller es dictado por una artesana con formación en <strong className="text-charcoal font-medium">arteterapia y patrimonio material e inmaterial</strong>, con más de tres años de trabajo en needle painting. Antes de comenzar, cada participante recibe contexto etnográfico, social, ecosistémico y arquitectónico sobre el paisaje elegido.
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed border-l-2 border-accent-muted pl-4">
                  La técnica se convierte así en una experiencia de <strong className="text-charcoal font-medium">mediación patrimonial situada</strong>.
                </p>
              </article>

              <article className="p-6 sm:p-8 bg-canvas border border-border-subtle space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal text-canvas flex items-center justify-center shrink-0">
                    <HandHeart className="w-4.5 h-4.5 text-accent-muted" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal font-light">Aprender y dejar huella</h3>
                </div>
                <p className="font-sans text-base text-body leading-relaxed">
                  La propuesta amplía la oferta artístico-cultural de la región y entrega una experiencia completa: cada participante se lleva su pieza, el conocimiento técnico adquirido y la posibilidad de continuar en un espacio de acompañamiento.
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed border-l-2 border-accent-muted pl-4">
                  El proceso y las más de 25 piezas quedan documentados en un catálogo de difusión y registro.
                </p>
              </article>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-border-subtle divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
              <div className="flex items-center gap-3 px-4 py-4 sm:py-5">
                <HandHeart className="w-5 h-5 text-accent-muted shrink-0" />
                <div>
                  <strong className="block font-serif text-lg text-charcoal font-light">25+ piezas</strong>
                  <span className="text-xs font-sans uppercase tracking-wider text-muted">Cuerpo de obra</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-4 sm:py-5">
                <MapPinned className="w-5 h-5 text-accent-muted shrink-0" />
                <div>
                  <strong className="block font-serif text-lg text-charcoal font-light">Patrimonio local</strong>
                  <span className="text-xs font-sans uppercase tracking-wider text-muted">Paisaje y territorio</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-4 sm:py-5">
                <Archive className="w-5 h-5 text-accent-muted shrink-0" />
                <div>
                  <strong className="block font-serif text-lg text-charcoal font-light">Catálogo final</strong>
                  <span className="text-xs font-sans uppercase tracking-wider text-muted">Difusión y registro</span>
                </div>
              </div>
            </div>

            {/* Fotografías de los talleres en desarrollo */}
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent-muted flex items-center gap-2">
                <Camera className="w-3.5 h-3.5" />
                Talleres en Desarrollo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-4/3 overflow-hidden bg-panel border border-border-subtle group">
                  <img
                    src={tallerDesarrollo1}
                    alt="Participantes bordando en el taller de Bordando nuestro Patrimonio"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="aspect-4/3 overflow-hidden bg-panel border border-border-subtle group">
                  <img
                    src={tallerDesarrollo2}
                    alt="Grupo de bordadoras trabajando en sus piezas durante el taller"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Ejercicio de apertura */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-canvas border border-border-subtle flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-10 h-10 shrink-0 rounded-full bg-charcoal text-canvas flex items-center justify-center">
              <Sprout className="w-4.5 h-4.5 text-accent-muted" />
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent-muted">
                Ejercicio de Apertura
              </span>
              <h3 className="font-serif text-xl text-charcoal font-light">
                Mapeo Patrimonial Textil
              </h3>
              <p className="text-base text-body font-sans leading-relaxed">
                Cada participante selecciona una imagen de patrimonio natural (flora autóctona, ecosistemas locales) o de arquitectura patrimonial de su comuna, como punto de partida para su pieza bordada.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Línea de tiempo de 4 sesiones */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="space-y-10">
            <h3 className="text-center font-serif text-xl text-charcoal font-light">
              Estructura en 4 Sesiones de Pintura con Aguja
            </h3>
            <SesionesTimeline />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

const SesionesTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const progressHeight = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '100%']), {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
  });

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-2">
      {/* Línea base */}
      <div
        className="absolute top-0 bottom-0 left-4 sm:left-5 lg:left-1/2 w-px bg-border-subtle lg:-translate-x-1/2"
        aria-hidden="true"
      />
      {/* Hilo de progreso, se llena con el scroll */}
      <motion.div
        className="absolute top-0 left-4 sm:left-5 lg:left-1/2 w-px bg-accent-muted lg:-translate-x-1/2 origin-top"
        style={{ height: progressHeight }}
        aria-hidden="true"
      />

      <ol className="space-y-14 lg:space-y-20">
        {SESIONES.map((s, i) => {
          const alignRight = i % 2 === 0;
          return (
            <motion.li
              key={s.numero}
              className="relative pl-12 sm:pl-14 lg:pl-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.215, 0.61, 0.355, 1] }}
            >
              {/* Nodo sobre la línea */}
              <div className="absolute left-4 sm:left-5 lg:left-1/2 top-0 -translate-x-1/2 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-charcoal text-canvas flex items-center justify-center ring-4 ring-panel z-10 shrink-0">
                <s.icono className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-accent-muted" />
              </div>

              {/* Tarjeta: en mobile/tablet siempre a la derecha del nodo; en desktop alterna lados */}
              <div
                className={`lg:w-[calc(50%-2.5rem)] ${
                  alignRight ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'
                }`}
              >
                <div className="p-5 sm:p-6 lg:p-7 bg-canvas border border-border-subtle space-y-2 lg:space-y-3">
                  <span className="text-xs lg:text-sm font-sans uppercase tracking-[0.25em] text-accent-muted">
                    Sesión {s.numero}
                  </span>
                  <h4 className="font-serif italic text-base sm:text-lg lg:text-xl text-charcoal font-light leading-snug">
                    {s.titulo}
                  </h4>
                  <p className="text-sm lg:text-base text-muted font-sans leading-relaxed">
                    {s.frase}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};
