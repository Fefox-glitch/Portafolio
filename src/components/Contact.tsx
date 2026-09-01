import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import type { Language } from '../App';

export const Contact = ({ language }: { language: Language }) => {
  const copy = language === 'es'
    ? { eyebrow: 'Contacto', title: '¿Tienes un problema interesante por resolver?', intro: 'Conversemos sobre ingeniería de software, IA aplicada, automatización o una oportunidad donde pueda aportar.', email: 'Escríbeme', rights: 'Diseñado y desarrollado por Fernando Troncoso.' }
    : { eyebrow: 'Contact', title: 'Have an interesting problem to solve?', intro: "Let's talk about software engineering, applied AI, automation, or an opportunity where I can contribute.", email: 'Email me', rights: 'Designed and developed by Fernando Troncoso.' };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#0b1714]">
      <div className="contact-orb" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow">{copy.eyebrow}</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div><h2 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-[-.045em] text-white md:text-7xl">{copy.title}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{copy.intro}</p></div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a href="mailto:fernandotroncoso.ortiz@gmail.com" className="button-primary w-full justify-between sm:w-auto"><Mail size={18} />{copy.email}<ArrowUpRight size={18} /></a>
            <a href="https://www.linkedin.com/in/fernando-troncoso-ortiz-91119111b/" target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={18} />LinkedIn<ArrowUpRight size={16} /></a>
            <a href="https://github.com/Fefox-glitch" target="_blank" rel="noreferrer" className="contact-link"><Github size={18} />GitHub<ArrowUpRight size={16} /></a>
          </div>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[.14em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fernando Troncoso Ortiz</p><p>{copy.rights}</p>
        </footer>
      </div>
    </section>
  );
};
