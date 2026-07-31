import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech, Computer Science Engineering (AI & Data Science)',
    institution: 'Takshashila University',
    duration: '2023 – 2027',
    grade: 'CGPA: 8.02',
    details: 'Specializing in Artificial Intelligence, Machine Learning, Data Structures, Full-Stack Architecture, and Database Management Systems.',
    highlight: true,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2021 – 2023',
    grade: 'Score: 70.4%',
    details: 'Mathematics, Physics, and Chemistry (MPC) with a strong analytical foundation in calculus, algebra, and physics problem-solving.',
    highlight: false,
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'ZP High School',
    duration: '2021',
    grade: 'GPA: 8.7',
    details: 'Secondary school education focusing on core science, mathematics, and computer fundamentals.',
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/40">
      <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-premium-indigo/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-premium-indigo bg-premium-indigo/10 border border-premium-indigo/20 px-3 py-1 rounded-full">
              Academic Qualifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Education Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 py-2 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 sm:pl-10">
              
              {/* Timeline Node */}
              <motion.div 
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  edu.highlight 
                    ? 'bg-space-950 border-premium-purple shadow-[0_0_15px_rgba(139,92,246,0.6)]' 
                    : 'bg-space-950 border-white/20'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              >
                <GraduationCap className={`w-4 h-4 ${edu.highlight ? 'text-premium-purple' : 'text-slate-400'}`} />
              </motion.div>

              {/* Education Card */}
              <motion.div
                className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all ${
                  edu.highlight 
                    ? 'border-premium-purple/40 bg-premium-purple/5 shadow-xl shadow-premium-purple/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-premium-cyan bg-premium-cyan/10 border border-premium-cyan/20 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    {edu.grade}
                  </span>
                </div>

                {/* Degree Name */}
                <h3 className="text-xl font-bold text-white mb-1 leading-snug">
                  {edu.degree}
                </h3>
                
                {/* Institution */}
                <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <School className="w-4 h-4 text-premium-purple" />
                  <span>{edu.institution}</span>
                </h4>
                
                {/* Details */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

