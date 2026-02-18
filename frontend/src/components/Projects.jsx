import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, X, Star, Layers, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState, useRef, useEffect } from 'react';

const ProjectCard = ({ project, index, onClick, inView }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(project)}
        className="cursor-pointer h-full"
        style={{ perspective: '1000px' }}
      >
        <div
          className="glass rounded-2xl p-6 h-full gradient-border depth-shadow hover:bg-white/5 transition-all duration-300 group"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Featured Badge */}
          {project.featured && (
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-accent-warm fill-accent-warm" />
              <span className="text-xs font-semibold text-accent-warm uppercase tracking-wider">Featured</span>
            </div>
          )}

          {/* Category */}
          <div className="mb-3">
            <span className="text-xs font-mono text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-display font-bold mb-2 text-primary group-hover:text-accent-warm transition-colors duration-300">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-secondary text-sm mb-4 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-secondary">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Impact Preview */}
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-4 h-4 text-accent-warm flex-shrink-0" />
            <p className="text-xs text-secondary line-clamp-1">{project.impact[0]}</p>
          </div>

          {/* View More CTA */}
          <div className="flex items-center gap-2 text-accent-warm text-sm font-medium group-hover:gap-3 transition-all duration-300">
            <span>View Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative glass rounded-3xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all group"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-accent-teal bg-accent-teal/10 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h2 className="text-3xl font-display font-bold mt-3 mb-2 gradient-text">
            {project.title}
          </h2>
          <p className="text-lg text-secondary">{project.tagline}</p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h3 className="text-lg font-display font-semibold mb-3 text-accent-warm flex items-center gap-2">
            <Layers className="w-5 h-5" /> Overview
          </h3>
          <p className="text-secondary leading-relaxed">{project.description}</p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass rounded-xl p-5">
            <h4 className="font-display font-semibold mb-2 text-accent-rose">🎯 Problem</h4>
            <p className="text-secondary text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h4 className="font-display font-semibold mb-2 text-accent-teal">💡 Solution</h4>
            <p className="text-secondary text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-8">
          <h3 className="text-lg font-display font-semibold mb-4 text-accent-warm flex items-center gap-2">
            <Zap className="w-5 h-5" /> Impact
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.impact.map((item, i) => (
              <div key={i} className="flex items-start gap-3 glass rounded-xl p-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-warm to-accent-rose flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-white">{i + 1}</span>
                </div>
                <p className="text-secondary text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-8">
          <h3 className="text-lg font-display font-semibold mb-4 text-accent-warm">⚡ Technical Highlights</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.technicalHighlights.map((highlight, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-purple flex-shrink-0" />
                <span className="text-secondary text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-8">
            <h3 className="text-lg font-display font-semibold mb-4 text-accent-warm">🏗️ Architecture</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4">
                <h4 className="text-sm font-semibold text-accent-teal mb-3">Patterns</h4>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.patterns.map((p) => (
                    <span key={p} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent-teal/10 text-accent-teal">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <h4 className="text-sm font-semibold text-accent-purple mb-3">Components</h4>
                <ul className="space-y-1.5">
                  {project.architecture.components.map((c) => (
                    <li key={c} className="text-xs text-secondary flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent-purple" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-lg font-display font-semibold mb-3 text-accent-warm">🛠️ Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono px-3 py-1.5 rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm font-medium hover:bg-white/10 hover:text-accent-warm transition-all"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-warm to-accent-rose text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-accent-warm/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Production-grade AI systems built to solve real-world business problems at scale.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
              inView={inView}
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-display font-semibold text-center mb-8 text-secondary"
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                  onClick={setSelectedProject}
                  inView={inView}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
