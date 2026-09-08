import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, Heart } from 'lucide-react';
import { NeedleThreadIcon } from './NeedleThreadIcon';
import { ScrollReveal } from './ScrollReveal';
import atacamaBordado from '../../imagenes/atacama/atacama-transparente.png';
import quirillucaBordado from '../../imagenes/quirilluca/quirilluca-sinfondo.jpg';
import conguillioBordado from '../../imagenes/conguillio/conguillio-sinfondo.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 lg:pt-12 lg:pb-16 border-b border-border-subtle">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-y-8 gap-x-12 items-center">

          {/* Top Text Block: Eyebrow, Title & Quote */}
          <div className="space-y-8 text-left lg:col-start-1 lg:col-span-7 lg:row-start-1">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent-muted">
                <NeedleThreadIcon className="w-3.5 h-3.5 text-accent-muted" />
                <span>Región de Valparaíso • Proyecto de Pamela Rojas Botto</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] text-charcoal">
                  Un Paisaje Patrimonial <br />
                  <span className="italic font-light text-charcoal">
                    Bordado Puntada a Puntada.
                  </span>
                </h1>
                <p className="font-sans text-base sm:text-lg text-body max-w-md leading-snug">
                  Talleres de needle painting y mediación patrimonial en Limache: cada participante borda el paisaje de su comuna.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Showcase */}
          <div className="relative lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-2">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative aspect-square flex items-center justify-center p-10">
                <motion.img
                  src={atacamaBordado}
                  alt="Bordado circular a mano del paisaje de Atacama, técnica needle painting"
                  className="relative z-10 w-full h-full max-w-md object-contain drop-shadow-[0_25px_45px_rgba(26,26,26,0.18)]"
                  initial={{ y: 0, rotate: -3 }}
                  animate={{ y: [0, -16, 0], rotate: [-3, 2, -3] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Bordados flotantes decorativos */}
                <motion.img
                  src={quirillucaBordado}
                  alt="Bordado circular del paisaje de Quirilluca"
                  className="hidden sm:block absolute -top-2 -left-4 w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover shadow-lg ring-4 ring-white"
                  initial={{ y: 0, rotate: -6 }}
                  animate={{ y: [0, 12, 0], rotate: [-6, 0, -6] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.img
                  src={conguillioBordado}
                  alt="Bordado circular del paisaje de Conguillío"
                  className="hidden sm:block absolute -bottom-4 -right-2 w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg ring-4 ring-white"
                  initial={{ y: 0, rotate: 5 }}
                  animate={{ y: [0, -14, 0], rotate: [5, -3, 5] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Text Block: Badges */}
          <div className="space-y-8 text-left lg:col-start-1 lg:col-span-7 lg:row-start-2">
            {/* Quick Value Badges */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-charcoal">
                    <Compass className="w-4 h-4 text-accent-muted" />
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Mediación Patrimonial</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">Contexto territorial antes de cada bordado</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-charcoal">
                    <ShieldCheck className="w-4 h-4 text-accent-muted" />
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Needle Painting</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">Oficio poco representado en la oferta cultural regional</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-charcoal">
                    <Heart className="w-4 h-4 text-accent-muted" />
                    <span className="font-sans text-sm font-semibold uppercase tracking-wider text-charcoal">Co-creación Comunitaria</span>
                  </div>
                  <p className="text-sm text-muted font-sans leading-relaxed">Cada participante bordea el paisaje de su propia comuna</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
