import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Network, Server, Layout, Boxes, BarChart3 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Brain, Network, Server, Layout, Boxes, BarChart3
};

const Skills = () => {
  const { skills } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Technical Expertise
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building production-grade AI systems
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto mt-4"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(skills).map(([category, data], categoryIndex) => {
              const Icon = iconMap[data.icon];

              return (
                <motion.div
                  key={category}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:shadow-xl hover:shadow-accent-blue/10 cursor-pointer"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <motion.div
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: categoryIndex * 0.1 + 0.2
                        }
                      }
                    }}
                    className="space-y-2"
                  >
                    {data.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={{
                          hidden: { opacity: 0, x: -15 },
                          show: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex items-center gap-2 text-secondary hover:text-accent-cyan transition-colors group/item cursor-pointer"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-accent-cyan rounded-full"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Skill Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 glass rounded-2xl p-8 border-l-4 border-accent-green"
          >
            <h3 className="text-2xl font-bold mb-4 text-accent-green">
              Full-Stack AI Engineering
            </h3>
            <p className="text-secondary leading-relaxed">
              My unique strength lies in bridging AI/ML capabilities with production engineering.
              I don't just build models—I architect complete systems that integrate LLMs, RAG pipelines,
              and AI agents into scalable, user-facing applications with React frontends and Node.js backends,
              all while maintaining security, performance, and reliability at scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
