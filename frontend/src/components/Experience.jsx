import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, education, certifications, achievements } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-accent-blue">
                <Briefcase className="w-6 h-6" />
                Work Experience
              </h3>
              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="space-y-6"
              >
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -40 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }
                      }
                    }}
                    whileHover={{
                      x: 5,
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10 cursor-pointer border-l-2 border-transparent hover:border-accent-blue"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-primary">{exp.role}</h4>
                        <p className="text-accent-cyan font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-accent-green/10 text-accent-green rounded">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-secondary mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-secondary text-sm mb-3">{exp.description}</p>

                    <motion.div
                      initial="hidden"
                      animate={inView ? "show" : "hidden"}
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.08,
                            delayChildren: index * 0.15 + 0.3
                          }
                        }
                      }}
                      className="space-y-2"
                    >
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -15 },
                            show: { opacity: 1, x: 0 }
                          }}
                          className="flex items-start gap-2 text-sm text-secondary"
                        >
                          <span className="text-accent-cyan">→</span>
                          {achievement}
                        </motion.div>
                      ))}
                    </motion.div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-tertiary text-secondary rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-accent-violet">
                  <Award className="w-6 h-6" />
                  Education
                </h3>
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
                  className="space-y-4"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, x: 40 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                          }
                        }
                      }}
                      whileHover={{
                        x: -5,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-accent-violet/10 cursor-pointer border-l-2 border-transparent hover:border-accent-violet"
                    >
                      <h4 className="text-lg font-bold text-primary mb-1">{edu.degree}</h4>
                      <p className="text-accent-violet font-semibold mb-2">{edu.field}</p>
                      <p className="text-sm text-secondary mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-secondary">
                        <span>{edu.period}</span>
                        <span className="text-accent-green">{edu.grade}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent-cyan">Certifications</h3>
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <div key={i} className="glass rounded-lg p-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                      <span className="text-sm text-secondary">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-accent-green">Key Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, i) => (
                    <div key={i} className="glass rounded-lg p-3 flex items-start gap-2">
                      <span className="text-accent-green">★</span>
                      <span className="text-sm text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Experience;
