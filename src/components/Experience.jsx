import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'InAmigos Foundation',
    duration: 'May 2026 – Jun 2026',
    bullets: [
      'Completed a hands-on web development internship, contributing to real project tasks and earning a verified completion certificate.',
      'Authored responsive frontend layouts, structured semantic HTML components, and optimized assets to align with web accessibility standards.'
    ],
    highlight: true,
  },
  {
    role: 'AI Deployment & Automation Intern',
    company: 'EduSkills',
    duration: 'Jan 2026 – Mar 2026',
    bullets: [
      'Worked on AI deployment workflows and automation pipelines, applying core deployment concepts to practical use cases.',
      'Configured model endpoint APIs, automation scripts, and local containerizations for AI workflow testing.'
    ],
    highlight: false,
  },
  {
    role: 'Android Developer Virtual Intern',
    company: 'EduSkills',
    duration: 'Apr 2024 – Jun 2024',
    bullets: [
      'Learned mobile application development concepts including UI design and app lifecycle fundamentals.',
      'Built modular Android mobile layouts with activity state handling and local data persistence.'
    ],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/20">
      <div className="absolute top-[30%] right-[5%] w-[350px] h-[350px] rounded-full bg-premium-purple/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-premium-purple bg-premium-purple/10 border border-premium-purple/20 px-3 py-1 rounded-full">
              Industry Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Work & Internships
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 py-2 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-10">
              
              {/* Timeline Node */}
              <motion.div 
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  exp.highlight 
                    ? 'bg-space-950 border-premium-purple shadow-[0_0_15px_rgba(139,92,246,0.6)]' 
                    : 'bg-space-950 border-white/20'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              >
                <Briefcase className={`w-4 h-4 ${exp.highlight ? 'text-premium-purple' : 'text-slate-400'}`} />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all ${
                  exp.highlight 
                    ? 'border-premium-purple/40 bg-premium-purple/5 shadow-xl shadow-premium-purple/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-premium-cyan bg-premium-cyan/10 border border-premium-cyan/20 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                {/* Company Name */}
                <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-premium-purple" />
                  <span>{exp.company}</span>
                </h4>

                {/* Bullets */}
                <ul className="space-y-3 text-sm text-slate-300">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 items-start leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-premium-purple shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

