import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Lightbulb, Target, Wrench, TrendingUp, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState } from 'react';

const Projects = () => {
  const { projects } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Production-grade AI systems solving real-world problems
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto mt-4" />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-lg shadow-accent-blue/30'
                  : 'glass text-secondary hover:text-primary'
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3
                }
              }
            }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const ProjectCard = ({ project, index, inView, onClick }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 40, scale: 0.95 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    }}
    whileHover={{
      y: -10,
      scale: 1.02,
      rotateX: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }}
    whileTap={{ scale: 0.98 }}
    className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-accent-blue/20"
    onClick={onClick}
    style={{ transformStyle: "preserve-3d" }}
  >
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-accent-cyan px-2 py-1 bg-accent-cyan/10 rounded">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-mono text-accent-green px-2 py-1 bg-accent-green/10 rounded">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-secondary">{project.tagline}</p>
      </div>
    </div>

    {/* Description */}
    <p className="text-secondary text-sm mb-4 line-clamp-3">
      {project.description}
    </p>

    {/* Impact Preview */}
    {
      project.impact && project.impact.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center gap-2 text-accent-green text-sm font-semibold mb-2">
            <TrendingUp className="w-4 h-4" />
            Impact
          </div>
          <ul className="space-y-1">
            {project.impact.slice(0, 2).map((item, i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                <span className="text-accent-green">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.slice(0, 6).map((tech, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 bg-tertiary text-secondary rounded"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 6 && (
        <span className="text-xs px-2 py-1 bg-tertiary text-secondary rounded">
          +{project.technologies.length - 6} more
        </span>
      )}
    </div>

    {/* View Details */}
    <div className="text-accent-blue text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
      View Details
      <ExternalLink className="w-4 h-4" />
    </div>
  </motion.div >
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
      >
        ✕
      </button>

      {/* Project Title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-accent-cyan px-2 py-1 bg-accent-cyan/10 rounded">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-mono text-accent-green px-2 py-1 bg-accent-green/10 rounded">
              Featured
            </span>
          )}
        </div>
        <h2 className="text-3xl font-bold gradient-text mb-2">{project.title}</h2>
        <p className="text-secondary">{project.tagline}</p>
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="glass rounded-lg p-4 border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-2 text-red-400">
            <Lightbulb className="w-5 h-5" />
            <h3 className="font-bold">Problem</h3>
          </div>
          <p className="text-sm text-secondary">{project.problem}</p>
        </div>
        <div className="glass rounded-lg p-4 border-l-4 border-green-500">
          <div className="flex items-center gap-2 mb-2 text-green-400">
            <Target className="w-5 h-5" />
            <h3 className="font-bold">Solution</h3>
          </div>
          <p className="text-sm text-gray-300">{project.solution}</p>
        </div>
      </div>

      {/* My Role */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2 text-accent-blue">
          <Wrench className="w-5 h-5" />
          <h3 className="font-bold">My Role</h3>
        </div>
        <p className="text-gray-300">{project.myRole}</p>
      </div>

      {/* Impact */}
      {project.impact && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-accent-green">
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-bold">Impact</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.impact.map((item, i) => (
              <div key={i} className="glass rounded-lg p-3 flex items-start gap-2">
                <span className="text-accent-green text-lg">•</span>
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Highlights */}
      {project.technicalHighlights && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-accent-violet">
            <Network className="w-5 h-5" />
            <h3 className="font-bold">Technical Highlights</h3>
          </div>
          <ul className="space-y-2">
            {project.technicalHighlights.map((highlight, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-accent-violet">→</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Architecture */}
      {project.architecture && (
        <div className="mb-6">
          <h3 className="font-bold mb-3 text-accent-cyan">Architecture Overview</h3>
          <div className="glass rounded-lg p-4">
            <div className="mb-3">
              <span className="text-sm text-secondary">Patterns:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.architecture.patterns.map((pattern, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-accent-cyan/10 text-accent-cyan rounded">
                    {pattern}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm text-secondary">Key Components:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.architecture.components.map((comp, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-tertiary text-secondary rounded">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Technologies */}
      <div>
        <h3 className="font-bold mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-sm px-3 py-1.5 glass text-secondary rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Projects;
