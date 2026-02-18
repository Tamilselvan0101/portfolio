import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, education, certifications, achievements } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
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
          <div className="section-divider mb-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-display font-semibold mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-accent-warm" />
              <span className="text-primary">Work Experience</span>
            </motion.h3>

            <div className="relative ml-6 md:ml-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-warm via-accent-rose to-accent-purple" />

              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-accent-warm shadow-lg shadow-accent-warm/50 z-10" />
                    <div className="absolute left-[-9px] top-[-2px] w-5 h-5 rounded-full bg-accent-warm/20 animate-ping" style={{ animationDuration: '3s' }} />

                    <div className="glass rounded-2xl p-6 depth-shadow hover:bg-white/5 transition-all duration-500 group gradient-border">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="text-xl font-display font-bold text-primary group-hover:text-accent-warm transition-colors">
                            {exp.role}
                          </h4>
                          <p className="text-accent-warm font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1.5 text-secondary text-sm">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1.5 text-secondary text-xs mt-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <span className="inline-block text-xs font-mono text-accent-teal bg-accent-teal/10 px-2.5 py-1 rounded-full mb-3">
                        {exp.type}
                      </span>

                      <p className="text-secondary text-sm mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.15 * index + 0.05 * i }}
                            className="flex items-start gap-2.5 text-sm text-secondary"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-rose mt-1.5 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent-purple/10 text-accent-purple"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-display font-semibold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-accent-purple" />
              <span className="text-primary">Education</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
                  className="card-3d"
                >
                  <div className="card-3d-inner glass rounded-2xl p-6 h-full depth-shadow hover:bg-white/5 transition-all duration-500">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-display font-bold text-primary">{edu.degree}</h4>
                        <p className="text-accent-purple font-medium text-sm">{edu.field}</p>
                      </div>
                      <span className="text-accent-warm font-display font-bold text-lg">{edu.grade}</span>
                    </div>
                    <p className="text-secondary text-sm mb-1">{edu.institution}</p>
                    <p className="text-secondary text-xs mb-4 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h) => (
                        <span key={h} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-accent-teal/10 text-accent-teal">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass rounded-2xl p-6 depth-shadow"
            >
              <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2 text-accent-warm">
                📜 Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent-warm flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass rounded-2xl p-6 depth-shadow"
            >
              <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2 text-accent-rose">
                <Award className="w-5 h-5" /> Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent-rose mt-1.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
