import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useContactStore } from '../store';
import { useState } from 'react';
import axios from 'axios';

const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

const Contact = () => {
  const { personal } = portfolioData;
  const { isSubmitting, submitStatus, setSubmitting, setSubmitStatus, resetStatus } = useContactStore();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    resetStatus();

    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
      setTimeout(() => resetStatus(), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 depth-shadow">
              <h3 className="text-xl font-display font-semibold mb-6 text-accent-warm">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 group hover:text-accent-warm transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-warm/10 flex items-center justify-center group-hover:bg-accent-warm/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent-warm" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Email</p>
                    <p className="text-sm text-primary">{personal.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 group hover:text-accent-teal transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-teal/10 flex items-center justify-center group-hover:bg-accent-teal/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Phone</p>
                    <p className="text-sm text-primary">{personal.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-rose/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-rose" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary mb-0.5">Location</p>
                    <p className="text-sm text-primary">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 depth-shadow">
              <h3 className="text-lg font-display font-semibold mb-4 text-primary">Connect</h3>
              <div className="flex gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-accent-warm/10 hover:text-accent-warm hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-accent-teal/10 hover:text-accent-teal hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-accent-rose/10 hover:text-accent-rose hover:-translate-y-1 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 depth-shadow">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent-warm/50 focus:bg-accent-warm/5 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent-warm/50 focus:bg-accent-warm/5 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent-warm/50 focus:bg-accent-warm/5 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-primary placeholder-gray-500 focus:outline-none focus:border-accent-warm/50 focus:bg-accent-warm/5 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent-warm to-accent-rose text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent-warm/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-rose to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 p-4 rounded-xl bg-accent-teal/10 text-accent-teal"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 p-4 rounded-xl bg-accent-rose/10 text-accent-rose"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Something went wrong. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
