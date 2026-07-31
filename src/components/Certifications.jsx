import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookmarkCheck, Terminal, Compass, Layout, CheckCircle2 } from 'lucide-react';

const certifications = [
  { 
    id: 1, 
    name: 'IBM Data Analysis with Python', 
    issuer: 'IBM Professional Certification', 
    icon: Award, 
    badge: 'IBM Verified',
    color: 'text-premium-purple bg-premium-purple/10 border-premium-purple/20 shadow-premium-purple/10' 
  },
  { 
    id: 2, 
    name: 'IBM Python 101 for Data Science', 
    issuer: 'IBM Professional Certification', 
    icon: Award, 
    badge: 'IBM Verified',
    color: 'text-premium-cyan bg-premium-cyan/10 border-premium-cyan/20 shadow-premium-cyan/10' 
  },
  { 
    id: 3, 
    name: 'Data Analysis Using Python', 
    issuer: 'Cognitive Class IBM', 
    icon: BookmarkCheck, 
    badge: 'Verified Credential',
    color: 'text-premium-pink bg-premium-pink/10 border-premium-pink/20 shadow-premium-pink/10' 
  },
  { 
    id: 4, 
    name: 'Python Using AI Workshop', 
    issuer: 'Industry Skill Workshop', 
    icon: Terminal, 
    badge: 'AI Workshop',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 shadow-emerald-400/10' 
  },
  { 
    id: 5, 
    name: 'Stock Market Using AI Workshop', 
    issuer: 'FinTech AI Workshop', 
    icon: Compass, 
    badge: 'AI Application',
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-amber-400/10' 
  },
  { 
    id: 6, 
    name: 'No-Code Web App Development with Bubble.io', 
    issuer: 'Bubble Academy', 
    icon: Layout, 
    badge: 'No-Code Web Dev',
    color: 'text-sky-400 bg-sky-400/10 border-sky-400/20 shadow-sky-400/10' 
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/30">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-premium-cyan/10 blur-[100px] pointer-events-none" />
      
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
              Industry Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Certifications & Credentials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Certificate Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={cert.id}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.04 }}
              >
                {/* Glow Overlay */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-premium-purple/0 via-premium-cyan/15 to-premium-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className={`p-3.5 rounded-2xl border ${cert.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-2 leading-snug group-hover:text-premium-cyan transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-premium-purple" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium">Status</span>
                  <span className="font-bold text-emerald-400">Completed & Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

