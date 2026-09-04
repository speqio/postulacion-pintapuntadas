import React from 'react';
import { Heart, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-canvas pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-light text-canvas tracking-tight block">
                pintapuntadas
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-accent-muted font-sans font-normal">
                Talleres de Bordado por Pamela Rojas Botto
              </span>
            </div>

            <p className="font-serif italic text-base text-border-dark leading-relaxed max-w-sm">
              "Talleres de bordado con técnica needle painting y mediación patrimonial en la Región de Valparaíso."
            </p>

            <p className="font-sans text-sm text-muted leading-relaxed max-w-sm font-normal">
              Proyecto cultural de Pamela Rojas Botto, dedicado a reinterpretar el patrimonio natural y arquitectónico del territorio en piezas textiles co-creadas junto a la comunidad.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-5 space-y-4 font-sans text-sm text-border-dark">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-muted font-normal block">
              Redes & Contacto
            </span>

            <a
              href="https://instagram.com/pintapuntadas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#262626] border border-[#333333] hover:border-accent-muted transition-colors text-sm text-canvas"
            >
              <Instagram className="w-4 h-4 text-accent-muted" />
              <span>@pintapuntadas en Instagram</span>
            </a>

            <div className="space-y-1.5 text-sm text-muted pt-2">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-muted" />
                contacto@pintapuntadas.cl
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-muted" />
                Limache, Región de Valparaíso, Chile
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between text-sm text-muted font-sans gap-2">
          <p>© 2026 Pintapuntadas. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con <Heart className="w-3 h-3 text-accent-muted fill-current" /> para el bordado patrimonial
          </p>
        </div>

      </div>
    </footer>
  );
};

