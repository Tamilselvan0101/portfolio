import { useEffect, lazy, Suspense } from 'react';
import { useThemeStore } from './store';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SystemDesign from './components/SystemDesign';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Scene3D = lazy(() => import('./components/Scene3D'));

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-primary text-primary transition-colors duration-300">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SystemDesign />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
