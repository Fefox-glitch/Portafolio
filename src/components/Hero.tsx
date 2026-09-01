import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import type { Language } from '../App';

export const Hero = ({ language }: { language: Language }) => {
  const copy = language === 'es' ? {
    eyebrow: 'Ingeniero de software · Santiago, Chile', titleA: 'Construyo sistemas', titleB: 'que convierten complejidad', titleC: 'en productos claros.',
    intro: 'Desarrollador full-stack enfocado en IA aplicada, automatización y plataformas confiables. Combino producto, arquitectura y seguridad para llevar ideas desde el problema hasta una solución funcional.',
    work: 'Ver proyectos', contact: 'Conversemos', focus: 'Enfoque actual', status: 'Disponible para oportunidades', system: 'Sistemas con IA', platforms: 'Plataformas web', automation: 'Automatización',
    delivery: 'De arquitectura a producción', value: 'Seguridad y observabilidad desde el diseño', craft: 'Experiencias bilingües y accesibles', proof: 'Proyectos públicos', domains: 'Áreas de especialidad', location: 'Base en Chile · colaboración remota', communication: 'Comunicación profesional',
  } : {
    eyebrow: 'Software engineer · Santiago, Chile', titleA: 'I build systems', titleB: 'that turn complexity', titleC: 'into clear products.',
    intro: 'Full-stack developer focused on applied AI, automation, and reliable platforms. I combine product thinking, architecture, and security to take ideas from problem to working solution.',
    work: 'View projects', contact: "Let's talk", focus: 'Current focus', status: 'Open to opportunities', system: 'AI systems', platforms: 'Web platforms', automation: 'Automation',
    delivery: 'From architecture to production', value: 'Security and observability by design', craft: 'Bilingual, accessible experiences', proof: 'Public projects', domains: 'Areas of expertise', location: 'Based in Chile · remote collaboration', communication: 'Professional communication',
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
            <MapPin size={14} className="text-mint" /> {copy.eyebrow}
          </div>
          <h1 aria-label={`${copy.titleA} ${copy.titleB} ${copy.titleC}`} className="max-w-4xl font-display text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[.88] tracking-[-0.055em] text-white">
            {copy.titleA}<br /><span className="text-slate-500">{copy.titleB}</span><br /><span className="text-gradient">{copy.titleC}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{copy.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="button-primary">{copy.work}<ArrowDownRight size={18} /></a>
            <a href="#contact" className="button-secondary">{copy.contact}<ArrowUpRight size={18} /></a>
            <a href="https://github.com/Fefox-glitch" target="_blank" rel="noreferrer" className="social-button" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/fernando-troncoso-ortiz-91119111b/" target="_blank" rel="noreferrer" className="social-button" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-mint" />{copy.location}</p>
        </div>

        <aside className="system-card" aria-label={copy.focus}>
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-mint" /></div>
            <span className="font-mono text-[11px] uppercase tracking-[.18em] text-slate-500">portfolio.sys</span>
          </div>
          <div className="py-7">
            <div className="flex items-center gap-3 text-mint"><Sparkles size={18} /><span className="text-sm font-bold uppercase tracking-[.16em]">{copy.focus}</span></div>
            <div className="mt-6 space-y-3">
              {[copy.system, copy.platforms, copy.automation].map((item, index) => (
                <div key={item} className="focus-row"><span className="font-mono text-xs text-slate-600">0{index + 1}</span><span>{item}</span><span className="ml-auto text-mint">↗</span></div>
              ))}
            </div>
          </div>
          <div className="space-y-4 border-t border-white/10 pt-6 text-sm text-slate-400">
            {[copy.delivery, copy.value, copy.craft].map((item) => <div key={item} className="flex items-start gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" /><span>{item}</span></div>)}
          </div>
          <div className="mt-8 flex items-center justify-between rounded-xl border border-mint/20 bg-mint/[0.07] px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-mint"><span className="status-dot" />{copy.status}</span><span className="font-mono text-xs text-mint/60">2026</span>
          </div>
        </aside>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 border-y border-white/10 md:grid-cols-3">
        {[["03", copy.proof], ["03", copy.domains], ['ES / EN', copy.communication]].map(([value, label]) => (
          <div key={label} className="stat-block"><strong>{value}</strong><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
};
