import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Sparkles, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlightIcons = [Code2, Sparkles, Target, Zap];

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
            {about.summary}
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {about.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index % highlightIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-3d"
              >
                <div className="card-3d-inner glass rounded-2xl p-6 h-full gradient-border depth-shadow hover:bg-white/5 transition-all duration-500 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-warm/20 to-accent-rose/20 flex items-center justify-center group-hover:from-accent-warm/30 group-hover:to-accent-rose/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent-warm" />
                    </div>
                    <p className="text-secondary group-hover:text-primary transition-colors duration-300 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden depth-shadow">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-warm via-accent-rose to-accent-purple" />

            <div className="flex items-start gap-4">
              <div className="hidden md:block flex-shrink-0 text-5xl">💡</div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-3 text-accent-warm">My Philosophy</h3>
                <p className="text-secondary leading-relaxed text-lg italic">
                  &ldquo;{about.philosophy}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
