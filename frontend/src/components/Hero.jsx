import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import { useThemeStore } from '../store';

const Hero = () => {
  const { personal } = portfolioData;
  const { theme } = useThemeStore();
  const [typedText, setTypedText] = useState('');
  const fullText = personal.subtitle;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 font-mono text-sm md:text-base px-5 py-2.5 rounded-full border border-accent-warm/30 bg-accent-warm/5 text-accent-warm">
                <span className="inline-block w-2 h-2 bg-accent-teal rounded-full pulse-ring" />
                <Sparkles className="w-3.5 h-3.5" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gradient-text leading-tight"
            >
              {personal.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-primary"
            >
              {personal.tagline}
            </motion.h2>

            {/* Typed Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-14 mb-8"
            >
              <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-mono" style={{ color: theme === 'light' ? '#0096FF' : '#00FF41' }}>
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-accent-warm ml-1 animate-pulse" />
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-secondary mb-10"
            >
              <MapPin className="w-4 h-4 text-accent-rose" />
              <span>{personal.location}</span>
              {personal.openToRelocate && (
                <span className="ml-2 text-accent-teal flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse" />
                  Open to Relocate
                </span>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent-warm to-accent-rose text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-warm/40 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-rose to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="px-8 py-4 glass text-primary font-semibold rounded-xl hover:border-accent-warm/40 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 gradient-border"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              {[
                { href: personal.github, icon: Github, label: 'GitHub', color: 'hover:text-accent-warm' },
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn', color: 'hover:text-accent-teal' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email', color: 'hover:text-accent-rose' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 group hover:-translate-y-1 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Avatar with 3D-style effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 float-gentle">
              {/* Outer glow rings */}
              <div className="absolute inset-[-20px] rounded-full border border-accent-warm/10 animate-spin-slow" />
              <div className="absolute inset-[-40px] rounded-full border border-accent-rose/5" style={{ animation: 'spin 30s linear infinite reverse' }} />

              {/* Main glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/20 via-accent-rose/10 to-accent-purple/20 blur-3xl rounded-full" />

              {/* Avatar container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-warm/20 glow-warm transition-all duration-500 hover:border-accent-warm/50">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orbiting dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-8px]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-warm shadow-lg shadow-accent-warm/50" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-secondary hover:text-accent-warm transition-colors"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
