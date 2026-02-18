import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitBranch, ArrowRight, Scale } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SystemDesign = () => {
  const { systemDesign } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const principleColors = [
    { border: 'border-accent-warm/20', bg: 'bg-accent-warm/5', dot: 'bg-accent-warm', text: 'text-accent-warm' },
    { border: 'border-accent-rose/20', bg: 'bg-accent-rose/5', dot: 'bg-accent-rose', text: 'text-accent-rose' },
    { border: 'border-accent-purple/20', bg: 'bg-accent-purple/5', dot: 'bg-accent-purple', text: 'text-accent-purple' },
    { border: 'border-accent-teal/20', bg: 'bg-accent-teal/5', dot: 'bg-accent-teal', text: 'text-accent-teal' },
    { border: 'border-accent-gold/20', bg: 'bg-accent-gold/5', dot: 'bg-accent-gold', text: 'text-accent-gold' },
  ];

  return (
    <section id="system-design" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            System Design
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-secondary text-lg max-w-3xl mx-auto">
            {systemDesign.introduction}
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {systemDesign.principles.map((principle, index) => {
            const colors = principleColors[index % principleColors.length];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card-3d"
              >
                <div className={`card-3d-inner glass rounded-2xl p-6 h-full depth-shadow hover:bg-white/5 transition-all duration-500 border-l-2 ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                      <GitBranch className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-primary">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className={`flex items-start gap-2 ${colors.bg} rounded-xl p-3`}>
                    <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
                    <p className={`text-xs ${colors.text}`}>{principle.example}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trade-offs */}
        {systemDesign.tradeoffs && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-display font-semibold text-center mb-8 flex items-center justify-center gap-3">
              <Scale className="w-6 h-6 text-accent-warm" />
              <span className="gradient-text-alt">{systemDesign.tradeoffs.title}</span>
            </h3>

            <div className="space-y-4">
              {systemDesign.tradeoffs.decisions.map((decision, index) => (
                <motion.div
                  key={decision.scenario}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                  className="glass rounded-2xl p-6 depth-shadow hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Scenario vs Choice */}
                    <div className="flex items-center gap-3 md:w-1/3">
                      <span className="text-xs font-mono text-accent-rose bg-accent-rose/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {decision.scenario}
                      </span>
                      <ArrowRight className="w-4 h-4 text-secondary hidden md:block" />
                      <span className="text-sm font-semibold text-accent-teal whitespace-nowrap">
                        {decision.choice}
                      </span>
                    </div>

                    {/* Reasoning */}
                    <div className="md:w-2/3">
                      <p className="text-secondary text-sm mb-1">{decision.reasoning}</p>
                      <p className="text-xs text-accent-warm/70 italic">⚖️ {decision.tradeoff}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SystemDesign;
