import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'QuimicaPro',
    description: 'Plataforma Educacional de Química',
    stack: ['Python (99.6%)', 'PL/pgSQL (0.4%)'],
    features: [
      'Aplicación educativa con módulos interactivos',
      'Base de datos integrada',
      'Integración continua'
    ],
    github: 'https://github.com/Fefox-glitch/Qu-micaPro'
  },
  {
    name: 'Farma-El-Sol',
    description: 'Sistema Interno de Gestión',
    stack: ['TypeScript', 'PHP', 'CSS', 'HTML', 'JavaScript'],
    features: [
      'Gestión interna de farmacia',
      'Reportes automatizados',
      'Automatización de procesos'
    ],
    github: 'https://github.com/Fefox-glitch/Farma-El-Sol'
  },
  {
    name: 'Algorix',
    description: 'Plataforma Educacional',
    stack: ['Java', 'PHP', 'JavaScript', 'CSS', 'PL/pgSQL'],
    features: [
      'Plataforma para gestión de estudiantes',
      'Gestión de contenidos educativos',
      'Sistema de administración integral'
    ],
    github: 'https://github.com/Fefox-glitch/algorix-plataforma-educacional'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Proyectos Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Stack Tecnológico:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
