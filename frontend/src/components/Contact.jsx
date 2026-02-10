import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useState } from 'react';
import { useContactStore } from '../store';
import axios from 'axios';

import { API_URL } from '../config';

const Contact = () => {
  const { personal } = portfolioData;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isSubmitting, submitStatus, setSubmitting, setSubmitStatus, resetStatus } = useContactStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    resetStatus();

    try {
      await axios.post(`${API_URL}/contact`, formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
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
              Let's Build Something Amazing
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-violet mx-auto mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-8 text-primary">Get In Touch</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Email</p>
                      <a href={`mailto:${personal.email}`} className="text-primary hover:text-accent-blue transition-colors">
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-violet to-accent-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Phone</p>
                      <a href={`tel:${personal.phone}`} className="text-primary hover:text-accent-blue transition-colors">
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary mb-1">Location</p>
                      <p className="text-primary">{personal.location}</p>
                      {personal.openToRelocate && (
                        <p className="text-sm text-accent-green mt-1">Open to Relocate</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-primary/10">
                  <p className="text-sm text-secondary mb-4">Connect with me</p>
                  <div className="flex gap-4">
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all group"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      // className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all duration-300"
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/40 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:border-white/10 dark:focus:ring-accent-blue/50"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      // className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all duration-300"
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/40 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:border-white/10 dark:focus:ring-accent-blue/50"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-secondary mb-2">Subject</label>
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      // className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all duration-300"
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/40 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:border-white/10 dark:focus:ring-accent-blue/50"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      // className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 transition-all duration-300 resize-none"
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/40 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:border-white/10 dark:focus:ring-accent-blue/50"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-blue/50 transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <motion.div
                          animate={{ x: isSubmitting ? [0, 5, 0] : 0 }}
                          transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.5 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-accent-green/10 border border-accent-green rounded-lg text-accent-green text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
