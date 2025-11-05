import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Contacto
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-center text-gray-700 mb-8 text-lg">
              ¿Interesado en colaborar o necesitas más información? No dudes en contactarme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:fernandotroncoso.ortiz@gmail.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">fernandotroncoso.ortiz@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+56977985623"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="text-gray-900 font-medium">+56 9 7798 5623</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-gray-200">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Ubicación</p>
                  <p className="text-gray-900 font-medium">Santiago, Chile</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
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
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center text-gray-600">
        <p>&copy; 2025 Fernando Troncoso Ortiz. Todos los derechos reservados.</p>
      </footer>
    </section>
  );
};
