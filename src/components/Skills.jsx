import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Layout, Server, Database, Cpu, Wrench } from 'lucide-react';

const categories = [
  { id: 'languages', name: 'Languages', icon: Terminal },
  { id: 'frontend', name: 'Frontend', icon: Layout },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'ai', name: 'AI / Computer Vision', icon: Cpu },
  { id: 'tools', name: 'Tools', icon: Wrench },
];

const skillsData = {
  languages: [
    { name: 'Python', level: '95%', tag: 'Core / Primary' },
    { name: 'JavaScript', level: '90%', tag: 'Core / Primary' },
    { name: 'SQL', level: '85%', tag: 'Databases' },
    { name: 'HTML5', level: '95%', tag: 'Markup' },
    { name: 'CSS3', level: '90%', tag: 'Styling' },
  ],
  frontend: [
    { name: 'React.js', level: '95%', tag: 'UI Library' },
    { name: 'Next.js', level: '85%', tag: 'Framework' },
    { name: 'Tailwind CSS', level: '95%', tag: 'Styling' },
    { name: 'Responsive Web Design', level: '95%', tag: 'Layout & UX' },
  ],
  backend: [
    { name: 'FastAPI', level: '90%', tag: 'Python Framework' },
    { name: 'Flask', level: '85%', tag: 'Microframework' },
    { name: 'REST APIs', level: '95%', tag: 'Architecture' },
    { name: 'JWT Authentication', level: '90%', tag: 'Security' },
    { name: 'Role-Based Access Control', level: '90%', tag: 'Security' },
  ],
  database: [
    { name: 'PostgreSQL', level: '90%', tag: 'Relational' },
    { name: 'MySQL', level: '80%', tag: 'Relational' },
    { name: 'SQLite', level: '90%', tag: 'Embedded' },
    { name: 'Prisma ORM', level: '85%', tag: 'TypeScript ORM' },
    { name: 'SQLAlchemy', level: '90%', tag: 'Python ORM' },
  ],
  ai: [
    { name: 'OpenCV', level: '85%', tag: 'Computer Vision' },
    { name: 'MediaPipe', level: '85%', tag: 'Face Landmarking' },
    { name: 'AI Integration', level: '90%', tag: 'Pipelines & APIs' },
  ],
  tools: [
    { name: 'Git', level: '90%', tag: 'Version Control' },
    { name: 'GitHub', level: '95%', tag: 'Collaboration' },
    { name: 'Postman', level: '90%', tag: 'API Testing' },
    { name: 'Render', level: '90%', tag: 'Cloud Deployment' },
    { name: 'Vercel', level: '95%', tag: 'Frontend Hosting' },
    { name: 'Gunicorn', level: '80%', tag: 'WSGI Server' },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  return (
    <section id="skills" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/20">
      <div className="absolute top-[25%] left-[5%] w-[300px] h-[300px] rounded-full bg-premium-cyan/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-premium-cyan bg-premium-cyan/10 border border-premium-cyan/20 px-3 py-1 rounded-full">
              Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none border shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-premium-purple/20 to-premium-indigo/20 border-premium-purple/40 text-white shadow-premium-purple/10'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-premium-purple' : 'text-slate-400'}`} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeTab].map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-white text-lg">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill progress bar */}
                    <div className="w-full bg-white/5 rounded-full h-2 mb-3 overflow-hidden border border-white/5">
                      <motion.div
                        className="bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: skill.level }}
                        transition={{ duration: 0.8, delay: idx * 0.05 + 0.1 }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs font-semibold text-slate-400 pt-2 border-t border-white/5">
                    <span>Proficiency</span>
                    <span className="text-premium-cyan font-bold">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

