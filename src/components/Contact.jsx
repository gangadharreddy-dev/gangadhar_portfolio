import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquareCheck, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#6366f1', '#06b6d4', '#0ea5e9', '#ec4899']
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-premium-purple/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-premium-purple bg-premium-purple/10 border border-premium-purple/20 px-3 py-1 rounded-full">
              Let's Connect
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details (Left 5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
              Interested in working together or hiring me?
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-sm mb-6">
              I am actively seeking Full Stack Developer, SDE, and AI/ML internship or full-time roles. Reach out directly or send a message using the form!
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 glass-card">
                <div className="p-3 rounded-xl bg-premium-purple/10 border border-premium-purple/20 text-premium-purple shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400">Email Address</h4>
                  <a href="mailto:gangadharreddy065@gmail.com" className="text-sm font-bold text-white hover:text-premium-purple transition-colors">
                    gangadharreddy065@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 glass-card">
                <div className="p-3 rounded-xl bg-premium-cyan/10 border border-premium-cyan/20 text-premium-cyan shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400">Call / WhatsApp</h4>
                  <a href="tel:+919603228769" className="text-sm font-bold text-white hover:text-premium-cyan transition-colors">
                    +91 9603228769
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-center p-4 rounded-2xl bg-white/5 border border-white/10 glass-card">
                <div className="p-3 rounded-xl bg-premium-pink/10 border border-premium-pink/20 text-premium-pink shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400">Location</h4>
                  <span className="text-sm font-bold text-white">
                    Kadapa, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Links & Resume */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/Gangadhar_Reddy_Resume.pdf"
                download="Gangadhar_Reddy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold backdrop-blur-md transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-premium-cyan" />
                Download Resume
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/gangadharreddy-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  title="GitHub"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/t-gangadhar-reddy-149904313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>


          {/* Contact Form (Right 7 cols) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
              {submitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                    <MessageSquareCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-2">Message Received!</h3>
                  <p className="text-slate-300 max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out, Gangadhar Reddy has received your inquiry and will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-300 uppercase mb-2 tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-premium-purple focus:ring-1 focus:ring-premium-purple transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase mb-2 tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-premium-purple focus:ring-1 focus:ring-premium-purple transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-slate-300 uppercase mb-2 tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-premium-purple focus:ring-1 focus:ring-premium-purple transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase mb-2 tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Hi Gangadhar, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-premium-purple focus:ring-1 focus:ring-premium-purple transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-premium-purple to-premium-indigo hover:from-premium-purple hover:to-premium-indigo text-white font-semibold text-sm shadow-xl shadow-premium-purple/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

