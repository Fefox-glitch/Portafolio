import { ArrowUpRight, Bot, FlaskConical, Github, Video } from 'lucide-react';
import type { Language } from '../App';

const projects = [
  {
    number: '01', name: 'Enterprise RAG Assistant', icon: Bot, tone: 'mint',
    repo: 'https://github.com/Fefox-glitch/Enterprise-RAG-Assistant',
    description: {
      es: 'Plataforma de inteligencia documental que transforma PDFs empresariales en respuestas verificables, con recuperación vectorial, citas y métricas de uso.',
      en: 'Document intelligence platform that turns enterprise PDFs into verifiable answers with vector retrieval, citations, and usage telemetry.',
    },
    outcome: { es: 'RAG con evidencia y límites de producción explícitos', en: 'Evidence-backed RAG with explicit production boundaries' },
    stack: ['Next.js', 'FastAPI', 'pgvector', 'OpenAI', 'Docker'],
  },
  {
    number: '02', name: 'VideoVault', icon: Video, tone: 'coral',
    repo: 'https://github.com/Fefox-glitch/VaultVideo-Portfolio',
    description: {
      es: 'Arquitectura distribuida para tareas multimedia de larga duración, con autenticación, cuotas, pagos, procesamiento asíncrono y entrega temporal de archivos.',
      en: 'Distributed architecture for long-running media jobs with authentication, quotas, payments, asynchronous processing, and temporary file delivery.',
    },
    outcome: { es: 'Aplicación web y worker multimedia desacoplados', en: 'Decoupled web application and media worker' },
    stack: ['Next.js', 'PostgreSQL', 'Redis', 'FFmpeg', 'Playwright'],
  },
  {
    number: '03', name: 'QuímicaPro', icon: FlaskConical, tone: 'violet',
    repo: 'https://github.com/Fefox-glitch/Qu-micaPro',
    description: {
      es: 'Aplicación educativa de escritorio con lecciones, evaluaciones, progreso y logros, respaldada por Supabase y una estrategia de releases automatizados.',
      en: 'Educational desktop application with lessons, quizzes, progress, and achievements, backed by Supabase and automated release workflows.',
    },
    outcome: { es: 'Experiencia educativa modular con CI y releases', en: 'Modular learning experience with CI and releases' },
    stack: ['Python', 'PyQt5', 'Supabase', 'PostgreSQL', 'GitHub Actions'],
  },
];

export const Projects = ({ language }: { language: Language }) => {
  const copy = language === 'es'
    ? { eyebrow: 'Trabajo seleccionado', title: 'Proyectos pensados como sistemas, no solo pantallas.', intro: 'Cada caso muestra decisiones de arquitectura, experiencia de usuario, seguridad y operación.', source: 'Explorar código', result: 'Resultado técnico' }
    : { eyebrow: 'Selected work', title: 'Projects designed as systems, not just screens.', intro: 'Each case demonstrates architecture, user experience, security, and operational decisions.', source: 'Explore source', result: 'Technical outcome' };

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div>
        <p>{copy.intro}</p>
      </div>

      <div className="mt-16 space-y-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.name} className="project-card">
              <div className={`project-visual visual-${project.tone}`}>
                <div className="project-window">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs text-white/50">CASE_{project.number}</span><ArrowUpRight size={18} className="text-white/50" /></div>
                  <div className="project-icon"><Icon size={42} /></div>
                  <div className="space-y-2"><span className="block h-1.5 w-2/3 rounded-full bg-white/20" /><span className="block h-1.5 w-1/2 rounded-full bg-white/10" /></div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-slate-500">/{project.number}</span><span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-widest text-slate-400">Case study</span></div>
                  <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">{project.name}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{project.description[language]}</p>
                  <div className="mt-7 border-l border-mint/40 pl-4"><span className="text-[11px] font-bold uppercase tracking-[.18em] text-mint">{copy.result}</span><p className="mt-1 text-sm text-slate-300">{project.outcome[language]}</p></div>
                  <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}</div>
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer" className="project-link"><Github size={18} />{copy.source}<ArrowUpRight size={17} className="ml-auto" /></a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
