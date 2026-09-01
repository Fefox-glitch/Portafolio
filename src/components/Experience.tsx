import type { Language } from '../App';

const experiences = [
  {
    period: { es: '2025 — ACTUAL', en: '2025 — NOW' },
    company: { es: 'Independiente', en: 'Independent' },
    role: { es: 'Desarrollador full-stack y consultor TI', en: 'Full-stack developer & IT consultant' },
    detail: { es: 'Diseño y desarrollo de productos web, automatizaciones y herramientas internas con foco en resultados medibles.', en: 'Design and development of web products, automation, and internal tools focused on measurable outcomes.' },
  },
  {
    period: { es: '2023 — 2024', en: '2023 — 2024' },
    company: 'Nicorp · PGA Group',
    role: { es: 'Analista de Seguridad SAP', en: 'SAP Security Analyst' },
    detail: { es: 'Administración de roles y accesos, controles SoD, SAP GRC y soporte a procesos de cumplimiento y auditoría.', en: 'Role and access administration, SoD controls, SAP GRC, and support for compliance and audit processes.' },
  },
  {
    period: { es: '2021 — 2023', en: '2021 — 2023' },
    company: 'Farmacias El Sol · Brosystem',
    role: { es: 'Desarrollo y soporte TI', en: 'Development & IT support' },
    detail: { es: 'Automatización de procesos, desarrollo interno, documentación y resolución de incidentes de infraestructura.', en: 'Process automation, internal development, documentation, and infrastructure incident resolution.' },
  },
];

export const Experience = ({ language }: { language: Language }) => {
  const copy = language === 'es'
    ? { eyebrow: 'Trayectoria', title: 'Experiencia técnica con contexto de negocio.', education: 'Formación', degree: 'Ingeniería en Informática', school: 'INACAP · 2015—2020' }
    : { eyebrow: 'Journey', title: 'Technical experience with business context.', education: 'Education', degree: 'Computer Engineering', school: 'INACAP · 2015—2020' };

  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-14 lg:grid-cols-[.6fr_1.4fr]">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title">{copy.title}</h2></div>
        <div>
          <div className="border-t border-white/15">
            {experiences.map((experience) => (
              <article key={experience.period.es} className="experience-row">
                <time>{experience.period[language]}</time>
                <div><p className="text-sm font-bold uppercase tracking-[.12em] text-mint">{typeof experience.company === 'string' ? experience.company : experience.company[language]}</p><h3>{experience.role[language]}</h3><p>{experience.detail[language]}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
            <span className="font-mono text-xs uppercase tracking-[.16em] text-slate-500">{copy.education}</span>
            <div className="sm:text-right"><strong className="block text-white">{copy.degree}</strong><span className="text-sm text-slate-500">{copy.school}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
