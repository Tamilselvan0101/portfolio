import { useEffect } from 'react';
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

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply theme class to document
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
      <Navigation />
      <main>
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
