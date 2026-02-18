import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5">
      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C150,60 350,0 500,30 C650,60 850,0 1000,30 C1100,50 1200,30 1200,30 L1200,60 L0,60 Z"
            fill="var(--color-bg-secondary)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="bg-secondary/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold gradient-text mb-2">
                Tamil Selvan MP
              </h3>
              <p className="text-secondary text-sm">AI/ML Engineer • Building Intelligent Systems</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-accent-warm/10 hover:text-accent-warm hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-accent-teal/10 hover:text-accent-teal hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-accent-rose/10 hover:text-accent-rose hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-accent-warm/10 hover:text-accent-warm transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-secondary text-sm flex items-center justify-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-accent-rose fill-accent-rose" /> by Tamil Selvan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
