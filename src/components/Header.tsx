import React from 'react';
import { NavMenu } from './NavMenu';

interface HeaderProps {
  onLogoClick: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-canvas/95 backdrop-blur-md border-b border-border-subtle w-full max-w-full overflow-hidden">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={onLogoClick}
          className="cursor-pointer group flex flex-col items-start shrink min-w-0"
        >
          <span className="font-serif text-base sm:text-xl lg:text-2xl tracking-widest sm:tracking-[0.16em] text-charcoal font-light uppercase transition-colors truncate">
            Pintapuntadas
          </span>
          <span className="text-[9px] sm:text-[11px] tracking-[0.08em] sm:tracking-[0.18em] uppercase text-accent-muted font-sans -mt-0.5 font-normal truncate max-w-42.5 sm:max-w-none">
            Bordados por Pamela Rojas
          </span>
        </div>

        {/* Hamburger Navigation (all breakpoints) */}
        <NavMenu onNavigate={onNavigate} />
      </div>
    </header>
  );
};
