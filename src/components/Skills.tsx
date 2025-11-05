import { Code, Layers, Server, Shield, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Lenguajes',
    skills: ['Python', 'Java', 'PHP', 'JavaScript']
  },
  {
    icon: Layers,
    title: 'Frameworks',
    skills: ['React', 'Next.js']
  },
  {
    icon: Server,
    title: 'Infraestructura',
    skills: ['Windows', 'Linux', 'Redes', 'Troubleshooting']
  },
  {
    icon: Shield,
    title: 'Seguridad SAP',
    skills: ['Roles', 'SoD', 'GRC', 'Auditoría']
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    skills: ['GitHub', 'Jira', 'ServiceNow', 'Office 365']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
