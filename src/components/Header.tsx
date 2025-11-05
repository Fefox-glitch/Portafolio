import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4" role="navigation" aria-label="Principal">
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
            aria-label="Ir al inicio"
          >
            FT
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Experiencia
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul id="mobile-menu" className="md:hidden mt-4 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Experiencia
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contacto
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
