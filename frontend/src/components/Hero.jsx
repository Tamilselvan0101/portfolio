import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="neural-bg" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-accent-cyan font-mono text-sm md:text-base bg-accent-cyan/10 px-4 py-2 rounded-full border border-accent-cyan/20">
                <span className="inline-block w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 gradient-text"
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

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personal.subtitle}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-10"
            >
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
              {personal.openToRelocate && (
                <span className="ml-2 text-accent-green">• Open to Relocate</span>
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
                className="group relative px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="px-8 py-4 glass text-primary font-semibold rounded-lg hover:bg-accent-blue/10 hover:border-accent-blue transition-all duration-300 flex items-center gap-2 glow-effect"
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
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-violet opacity-20 blur-3xl rounded-full" />
              <div className="relative w-full h-full rounded-full border-2 border-accent-blue/30 overflow-hidden glass hover:border-accent-blue/60 transition-colors duration-500">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px]"
              >
                <svg className="w-full h-full text-accent-cyan/30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="0.4 0.9" strokeLinecap="round" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-accent-blue transition-colors"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
