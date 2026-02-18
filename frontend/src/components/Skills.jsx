import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Network, Server, Layout, Boxes, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Brain, Network, Server, Layout, Boxes, BarChart3,
};

const gradients = [
  'from-accent-warm to-accent-rose',
  'from-accent-rose to-accent-purple',
  'from-accent-purple to-accent-teal',
  'from-accent-teal to-accent-warm',
  'from-accent-warm to-accent-purple',
  'from-accent-rose to-accent-teal',
];

const Skills = () => {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            A curated toolkit of technologies I use to build intelligent, production-grade systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map(([category, data], index) => {
            const Icon = iconMap[data.icon] || Brain;
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                className="group"
              >
                <div className="glass rounded-2xl p-6 h-full gradient-border depth-shadow hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5`}>
                      <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-warm" />
                      </div>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-primary">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {data.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.08 * index + 0.05 * skillIndex }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`} />
                        <span className="text-secondary text-sm group-hover/item:text-primary transition-colors duration-300">
                          {skill}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
