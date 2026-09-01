import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export type Language = 'es' | 'en';

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('portfolio-language');
    return saved === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-100 selection:bg-mint selection:text-ink">
      <a className="skip-link" href="#main-content">
        {language === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <Header language={language} onLanguageChange={setLanguage} />
      <main id="main-content">
        <Hero language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
