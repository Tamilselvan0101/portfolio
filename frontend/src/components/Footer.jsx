import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-display font-bold gradient-text mb-2">
                {personal.name}
              </h3>
              <p className="text-gray-400 text-sm">
                AI/ML Engineer building intelligent systems at scale
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-secondary hover:text-accent-blue transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-primary font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary">
            <p>
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
