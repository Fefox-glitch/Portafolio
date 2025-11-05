import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Fernando Troncoso Ortiz
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Ingeniero en Informática | Desarrollador Full-Stack | Especialista en Seguridad SAP
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Santiago, Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:fernandotroncoso.ortiz@gmail.com" className="hover:text-blue-600 transition-colors">
                fernandotroncoso.ortiz@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+56977985623" className="hover:text-blue-600 transition-colors">
                +56 9 7798 5623
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://www.linkedin.com/in/fernando-troncoso-ortiz-91119111b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Fefox-glitch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfil Profesional</h2>
            <p className="text-gray-700 leading-relaxed">
              Ingeniero en Informática con experiencia en seguridad SAP, soporte TI, desarrollo web y automatización.
              Conocimiento en desarrollo full-stack con Python, Java y PHP, además de experiencia en aplicaciones con
              JavaScript, React y Next.js. Capacidad para optimizar procesos, automatizar tareas y mejorar la eficiencia
              operativa. Actualmente activo en proyectos freelance creando soluciones web y herramientas internas para pymes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
