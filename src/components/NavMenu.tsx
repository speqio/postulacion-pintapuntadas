import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NeedleThreadIcon } from './NeedleThreadIcon';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'taller', label: 'El Taller' },
  { id: 'obra', label: 'Obra y Bordado' },
  { id: 'galeria', label: 'Galería' },
  { id: 'difusion', label: 'Difusión y Catálogo' },
  { id: 'nosotros', label: 'Sobre Nosotros' },
  { id: 'contacto', label: 'Contacto' },
];

interface NavMenuProps {
  onNavigate: (sectionId: string) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú de navegación"
        aria-expanded={open}
        className="flex items-center gap-2.5 p-2.5 -mr-2.5 text-charcoal hover:text-accent-muted transition-colors shrink-0"
      >
        <span className="hidden sm:block text-[11px] uppercase tracking-[0.25em] font-sans text-charcoal">
          Menú
        </span>
        <Menu className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 z-50 flex justify-end">
              <motion.div
                className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setOpen(false)}
              />

              <motion.div
                className="relative h-full w-full sm:max-w-md bg-canvas border-l border-border-subtle flex flex-col shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <div className="flex items-center justify-between px-6 sm:px-10 h-16 sm:h-20 border-b border-border-subtle shrink-0">
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-accent-muted font-sans">
                    <NeedleThreadIcon className="w-3.5 h-3.5 text-accent-muted" />
                    Explorar Secciones
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú"
                    className="p-2.5 -mr-2.5 text-charcoal hover:text-accent-muted transition-colors"
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-6 sm:px-10 py-6 sm:py-10">
                  <ul>
                    {NAV_ITEMS.map((item, i) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSelect(item.id)}
                          className="group w-full flex items-center gap-4 sm:gap-6 py-5 sm:py-6 text-left border-b border-border-subtle hover:border-charcoal transition-colors"
                        >
                          <span className="font-sans text-sm text-accent-muted tabular-nums shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="font-serif text-3xl sm:text-4xl font-light text-charcoal group-hover:italic group-hover:text-accent-muted transition-all">
                            {item.label}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="px-6 sm:px-10 py-6 border-t border-border-subtle text-sm text-muted font-sans shrink-0">
                  Pintapuntadas · Región de Valparaíso
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
