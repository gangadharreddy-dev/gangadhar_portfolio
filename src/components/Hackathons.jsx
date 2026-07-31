import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Clock, Sparkles } from 'lucide-react';

const hackathons = [
  {
    id: 1,
    title: 'Smart India Hackathon (SIH) 2025',
    organizer: 'Ministry of Education & Innovation Cell',
    type: 'National Level 36-Hour Hackathon',
    description: 'Selected as national competitor. Engineered a complete software solution prototype from design to deployment within a continuous, high-intensity 36-hour deadline.',
    tag: 'National Level',
    badgeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    icon: Flame,
  },
  {
    id: 2,
    title: 'National Level 24-Hour Hackathon',
    organizer: 'Sri Manakula Vinayagar Engineering College (SMVEC)',
    type: 'National Level 24-Hour Hackathon',
    description: 'Competed with engineering teams across India to present automated software architectures and real-time database management systems.',
    tag: '24-Hour Sprint',
    badgeColor: 'text-premium-cyan bg-premium-cyan/10 border-premium-cyan/20',
    icon: Clock,
  },
  {
    id: 3,
    title: 'XE Conclave 24-Hour Hackathon',
    organizer: 'Xebia Academic Network',
    type: 'XE Conclave 24-Hour Hackathon',
    description: 'Designed and built rapid API integration modules and responsive web interfaces targeting industry-grade problem statements.',
    tag: 'Hackathon Finalist',
    badgeColor: 'text-premium-purple bg-premium-purple/10 border-premium-purple/20',
    icon: Trophy,
  },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/20">
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-premium-pink/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-premium-pink bg-premium-pink/10 border border-premium-pink/20 px-3 py-1 rounded-full">
              High-Intensity Competitions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Hackathons & Sprints
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hackathons.map((h, idx) => {
            const IconComp = h.icon;
            return (
              <motion.div
                key={h.id}
                className="glass-card glass-card-hover p-7 rounded-3xl border border-white/10 relative flex flex-col justify-between overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Glow effect overlay on hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-premium-purple/0 via-premium-purple/20 to-premium-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-premium-pink group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${h.badgeColor}`}>
                      {h.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 leading-snug group-hover:text-premium-pink transition-colors">
                    {h.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-400 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-premium-purple" />
                    <span>{h.organizer}</span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {h.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Format</span>
                  <span className="text-slate-200 font-bold">{h.type}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
