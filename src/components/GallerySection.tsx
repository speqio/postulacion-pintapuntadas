import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/designsData';
import { GalleryItem } from '../types';
import { Maximize2, X, MapPin, Camera } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const GallerySection: React.FC = () => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-panel border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Camera className="w-3.5 h-3.5" />
              Exposición Fotográfica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Galería de Trabajos & Proceso
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              Explora de cerca la textura de los hilos, bastidores terminados y las jornadas creativas de nuestros talleres.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={(index % 3) * 0.12}>
              <div
                onClick={() => setActiveLightboxItem(item)}
                className="group relative cursor-pointer overflow-hidden bg-canvas border border-border-subtle hover:border-border-dark transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-panel">
                  <div className="absolute inset-3 border border-accent-muted opacity-20 z-10 pointer-events-none" />
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-canvas z-20">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent-muted font-sans">
                      {item.category}
                    </span>
                    <h3 className="font-serif italic text-lg font-light text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="pt-2 flex items-center justify-between text-xs text-canvas/80 font-sans">
                      <span>{item.technique || 'Pintapuntadas'}</span>
                      <Maximize2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-canvas border-t border-border-subtle flex-1 flex flex-col justify-between space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-accent-muted">
                    {item.category}
                  </span>
                  <h4 className="font-serif italic text-base text-charcoal font-light line-clamp-1">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-sm text-body font-sans leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  {item.location && (
                    <p className="text-sm text-muted font-sans flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-muted" />
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-canvas border border-border-subtle space-y-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] bg-charcoal flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain"
              />
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-3 bg-canvas">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted">
                  {activeLightboxItem.category}
                </span>
                {activeLightboxItem.location && (
                  <span className="text-sm font-sans text-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-muted" />
                    {activeLightboxItem.location}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl text-charcoal font-light">
                {activeLightboxItem.title}
              </h3>

              <p className="font-sans text-base text-body leading-relaxed font-normal">
                {activeLightboxItem.description}
              </p>

              {activeLightboxItem.technique && (
                <div className="pt-2 border-t border-border-subtle text-sm font-sans text-muted">
                  <strong className="text-charcoal font-medium">Técnica destacada:</strong> {activeLightboxItem.technique}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

