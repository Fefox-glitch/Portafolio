import { Blocks, BrainCircuit, ShieldCheck } from 'lucide-react';
import type { Language } from '../App';

const capabilities = [
  {
    icon: BrainCircuit,
    title: { es: 'IA aplicada', en: 'Applied AI' },
    text: { es: 'RAG, embeddings, recuperación vectorial, agentes con herramientas, citas y controles de contexto.', en: 'RAG, embeddings, vector retrieval, tool-using agents, citations, and context guardrails.' },
    skills: ['OpenAI', 'LangChain', 'pgvector', 'Python'],
  },
  {
    icon: Blocks,
    title: { es: 'Ingeniería full-stack', en: 'Full-stack engineering' },
    text: { es: 'Productos web tipados, APIs documentadas, persistencia, flujos asíncronos y experiencias responsivas.', en: 'Typed web products, documented APIs, persistence, asynchronous workflows, and responsive experiences.' },
    skills: ['TypeScript', 'React', 'Next.js', 'FastAPI'],
  },
  {
    icon: ShieldCheck,
    title: { es: 'Seguridad y operación', en: 'Security & operations' },
    text: { es: 'Experiencia SAP, separación de responsabilidades, secretos seguros, observabilidad, pruebas y CI/CD.', en: 'SAP experience, separation of duties, safe secrets, observability, testing, and CI/CD.' },
    skills: ['SAP GRC', 'Docker', 'GitHub Actions', 'PostgreSQL'],
  },
];

export const Skills = ({ language }: { language: Language }) => {
  const copy = language === 'es'
    ? { eyebrow: 'Cómo aporto', title: 'Cruzo producto, código y operación.', intro: 'Mi perfil combina desarrollo de software con experiencia real en procesos, soporte y seguridad empresarial.' }
    : { eyebrow: 'How I contribute', title: 'I connect product, code, and operations.', intro: 'My background combines software development with real-world experience in enterprise processes, support, and security.' };

  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.025]">
      <div className="section-shell">
        <div className="section-heading">
          <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div><p>{copy.intro}</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title.es} className="capability-card">
                <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/10 text-mint"><Icon size={24} /></span><span className="font-mono text-xs text-slate-600">0{index + 1}</span></div>
                <h3>{item.title[language]}</h3>
                <p>{item.text[language]}</p>
                <div className="mt-8 flex flex-wrap gap-2">{item.skills.map((skill) => <span key={skill} className="tech-pill">{skill}</span>)}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
