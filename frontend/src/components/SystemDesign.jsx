import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Layers, Zap, Shield, GitBranch, Scale } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SystemDesign = () => {
  const { systemDesign } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const icons = [Layers, Zap, Shield, GitBranch, Scale];

  return (
    <section id="system-design" ref={ref} className="py-20 md:py-32">
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
              System Design Thinking
            </h2>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              {systemDesign.introduction}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto mt-4" />
          </motion.div>

          {/* Principles Grid */}
          <div className="space-y-6 mb-16">
            {systemDesign.principles.map((principle, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-secondary mb-3">
                        {principle.description}
                      </p>
                      <div className="glass rounded-lg p-3 border-l-4 border-accent-green">
                        <span className="text-xs text-accent-green font-semibold">EXAMPLE:</span>
                        <p className="text-sm text-secondary mt-1">{principle.example}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trade-offs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
              {systemDesign.tradeoffs.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {systemDesign.tradeoffs.decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="text-sm text-accent-cyan mb-2 font-mono">
                    {decision.scenario}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-3">
                    {decision.choice}
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-secondary uppercase">Reasoning</span>
                    <p className="text-sm text-secondary mt-1">{decision.reasoning}</p>
                  </div>
                  <div className="pt-3 border-t border-primary/10">
                    <span className="text-xs text-secondary uppercase">Trade-off</span>
                    <p className="text-sm text-secondary mt-1">{decision.tradeoff}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border-l-4 border-accent-violet">
              <p className="text-lg text-secondary italic">
                "Good architecture isn't about following patterns—it's about understanding trade-offs
                and making conscious decisions that align with business goals, team capabilities, and
                technical constraints."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
