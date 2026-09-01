import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Language } from '../App';

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labels = language === 'es'
    ? { projects: 'Proyectos', expertise: 'Especialidad', journey: 'Trayectoria', contact: 'Contacto' }
    : { projects: 'Projects', expertise: 'Expertise', journey: 'Journey', contact: 'Contact' };
  const navItems = [
    { id: 'projects', label: labels.projects },
    { id: 'skills', label: labels.expertise },
    { id: 'experience', label: labels.journey },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-ink/90 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <a href="#top" className="group flex items-center gap-3" aria-label={language === 'es' ? 'Ir al inicio' : 'Go home'}>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-mint/30 bg-mint/10 font-display text-sm font-bold text-mint transition group-hover:bg-mint group-hover:text-ink">FT</span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">Fernando Troncoso</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className="nav-link">{item.label}</a>)}
        </div>

        <div className="flex items-center gap-3">
          <div className="language-switch" role="group" aria-label={language === 'es' ? 'Seleccionar idioma' : 'Select language'}>
            {(['es', 'en'] as const).map((item) => (
              <button key={item} type="button" onClick={() => onLanguageChange(item)} className={language === item ? 'active' : ''} aria-pressed={language === item}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-mint sm:inline-flex">{labels.contact}</a>
          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white lg:hidden" aria-label={language === 'es' ? (isMenuOpen ? 'Cerrar menú' : 'Abrir menú') : (isMenuOpen ? 'Close menu' : 'Open menu')} aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold text-slate-200">{item.label}</a>)}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 text-lg font-semibold text-mint">{labels.contact} →</a>
          </div>
        </div>
      )}
    </header>
  );
};
