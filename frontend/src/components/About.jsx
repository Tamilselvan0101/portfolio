import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Award, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Target, label: 'Production AI Systems', value: '8+' },
    { icon: Zap, label: 'Healthcare Practices Served', value: '20+' },
    { icon: Award, label: 'Automation Rate', value: '70%' },
    { icon: TrendingUp, label: 'Team Members Managed', value: '13' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto"
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent-blue">
                  Engineering Intelligence at Scale
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  {about.summary}
                </p>
                <div className="space-y-4">
                  {about.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 flex-shrink-0" />
                      <p className="text-secondary text-sm">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8 border-l-4 border-accent-violet">
                <h3 className="text-xl font-bold mb-4 text-accent-violet">
                  My Philosophy
                </h3>
                <p className="text-secondary leading-relaxed italic">
                  "{about.philosophy}"
                </p>
              </div>

              {/* Stats Grid */}
              <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.4
                    }
                  }
                }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      show: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 12
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300, damping: 15 }
                    }}
                    className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/20 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                    </motion.div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.6 }}
            className="text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-secondary mb-6">
                I'm passionate about building AI systems that make a real difference.
                Whether it's automating healthcare workflows, creating intelligent communication platforms,
                or designing scalable architectures—I bring both technical depth and product thinking to every project.
              </p>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-shadow duration-300"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
