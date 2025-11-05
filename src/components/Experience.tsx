import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Freelance',
    role: 'Desarrollador Web & Consultor TI',
    period: '2025 - Presente',
    responsibilities: [
      'Desarrollo de aplicaciones web con React, Next.js, JavaScript y CSS',
      'Automatización de procesos empresariales (+30% eficiencia)',
      'Asesoría en seguridad TI y buenas prácticas SAP',
      'Gestión de ciclo completo de proyectos tecnológicos'
    ]
  },
  {
    title: 'Analista de Seguridad SAP',
    role: 'Nicorp Ltda.',
    period: 'Ene 2024 - Mar 2024',
    responsibilities: [
      'Gestión de roles y perfiles SAP ECC & S4HANA',
      'Reducción de riesgos SoD en 30%',
      'Automatización de procesos de autorización (-25% tiempo)'
    ]
  },
  {
    title: 'Analista de Seguridad SAP',
    role: 'PGA Group',
    period: 'Oct 2023 - Ene 2024',
    responsibilities: [
      'Administración de accesos críticos con SAP GRC BRM',
      'Reportes de cumplimiento normativo y soporte a auditorías'
    ]
  },
  {
    title: 'Developer & Soporte TI',
    role: 'Farmacias El Sol Ltda.',
    period: 'Ago 2022 - Jul 2023',
    responsibilities: [
      'Desarrollo interno con HTML, CSS, JavaScript, React',
      'Automatización contable (40% menos errores)',
      'Documentación técnica y capacitación a usuarios'
    ]
  },
  {
    title: 'Soporte TI',
    role: 'Brosystem',
    period: 'Ene 2021 - Mar 2021',
    responsibilities: [
      '+500 tickets mensuales con 95% satisfacción',
      'Soporte a infraestructura y estaciones de trabajo'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Experiencia Profesional
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Briefcase size={20} className="text-blue-600" />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-700 mt-1">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Educación</h3>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <p className="text-lg font-semibold text-gray-900">Ingeniería en Informática</p>
                <p className="text-gray-700">Universidad Tecnológica de Chile INACAP</p>
                <p className="text-gray-600 text-sm mt-1">2015 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
