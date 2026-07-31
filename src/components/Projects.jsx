import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Cpu, Server, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Jobetix – Full Stack Job Portal',
    category: 'Full Stack Web App',
    icon: Layers,
    description: 'A production-grade full-stack job portal supporting seamless user registration, job search, employer dashboard, and applicant tracking.',
    tech: ['React.js', 'FastAPI', 'PostgreSQL', 'JWT', 'Render'],
    live: 'https://job-portal-frontend-195k.onrender.com/',
    github: 'https://github.com/gangadharreddy065-create/Full-Stack-Job-Portal-Application',
    mockupType: 'jobetix',
    highlights: [
      'User Authentication & Security with JWT tokens',
      'Dedicated Employer Dashboard & Candidate Application Workflows',
      'FastAPI REST API connected to PostgreSQL for persistent data reliability',
      'Responsive React SPA deployed on Render with environment CORS management'
    ]
  },
  {
    id: 2,
    title: 'Intelligent Attendance Monitoring System',
    category: 'AI / Computer Vision',
    icon: Cpu,
    description: 'A computer-vision-based attendance tracking platform featuring facial landmarking and anti-proxy verification to automate attendance tracking.',
    tech: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'SQLite'],
    live: 'https://proxy-resistant-attendance-system.onrender.com/',
    github: 'https://github.com/bhavanisuresh/Proxy-resistant-attendances-ystem',
    mockupType: 'attendance',
    highlights: [
      'Facial Detection & 3D landmark verification via OpenCV & MediaPipe',
      'Anti-Proxy Verification logic preventing photo/spoof attendance logs',
      'Automated attendance management, audit logs, and record exports',
      'Production-style Gunicorn WSGI server with Flask backend & SQLite'
    ]
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Full Stack Next.js App',
    icon: Server,
    description: 'A high-performance student administration dashboard enabling complete CRUD operations, real-time analytics, and CSV/Excel exports.',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel'],
    live: 'https://student-management-system-eta-indol.vercel.app/',
    github: 'https://github.com/gangadharreddy-dev/student-management-system',
    mockupType: 'student',
    highlights: [
      'Next.js 16 App Router & React 19 architecture with server-side rendering',
      'Prisma ORM paired with Neon Serverless PostgreSQL & UUID-based routing',
      'Interactive data table with sorting, search filters, and one-click Excel/CSV export',
      'Glassmorphism dark/light UI, confirmation modals, and skeleton loading states'
    ]
  }
];

// Helper mock UI component for visual excellence
function ProjectMockup({ type }) {
  if (type === 'jobetix') {
    return (
      <div className="w-full h-44 rounded-xl bg-space-900 border border-white/10 p-3 overflow-hidden relative group">
        <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <div className="ml-2 text-[10px] text-slate-500 font-mono">jobetix.app/dashboard</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div className="h-10 rounded-lg bg-premium-purple/10 border border-premium-purple/20 p-2">
            <div className="text-[9px] text-slate-400">Total Jobs</div>
            <div className="text-xs font-bold text-white">1,420</div>
          </div>
          <div className="h-10 rounded-lg bg-premium-cyan/10 border border-premium-cyan/20 p-2">
            <div className="text-[9px] text-slate-400">Applications</div>
            <div className="text-xs font-bold text-white">8,930</div>
          </div>
          <div className="h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2">
            <div className="text-[9px] text-slate-400">Hired</div>
            <div className="text-xs font-bold text-white">340</div>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-6 rounded bg-white/5 border border-white/5 px-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-200">Senior Full Stack Engineer</span>
            <span className="text-[9px] text-premium-cyan bg-premium-cyan/10 px-1.5 py-0.5 rounded">Active</span>
          </div>
          <div className="h-6 rounded bg-white/5 border border-white/5 px-2 flex items-center justify-between">
            <span className="text-[10px] text-slate-200">AI / ML Researcher</span>
            <span className="text-[9px] text-premium-purple bg-premium-purple/10 px-1.5 py-0.5 rounded">Applied</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'attendance') {
    return (
      <div className="w-full h-44 rounded-xl bg-space-900 border border-white/10 p-3 overflow-hidden relative group">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-bold text-emerald-400">CV Camera Feed #1</span>
          </div>
          <span className="text-[9px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">MediaPipe Active</span>
        </div>
        <div className="relative h-24 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-premium-cyan/70 flex items-center justify-center animate-spin" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-premium-purple/20 border border-premium-purple/50 flex items-center justify-center text-xs">👤</div>
            <span className="text-[9px] text-emerald-400 font-semibold mt-1">Verified (99.4%)</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-44 rounded-xl bg-space-900 border border-white/10 p-3 overflow-hidden relative group">
      <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
        <div className="text-[10px] font-bold text-slate-200">Student Directory</div>
        <div className="text-[9px] bg-premium-purple/20 text-premium-purple px-2 py-0.5 rounded font-mono">Next.js 16 + Prisma</div>
      </div>
      <div className="space-y-1.5">
        <div className="grid grid-cols-4 gap-1 text-[9px] text-slate-400 font-bold px-2 py-1 bg-white/5 rounded">
          <span>Name</span>
          <span>Role</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>
        <div className="grid grid-cols-4 gap-1 text-[9px] text-slate-300 items-center px-2 py-1 bg-white/5 rounded border border-white/5">
          <span>G. Reddy</span>
          <span>AI & DS</span>
          <span className="text-emerald-400 font-semibold">Active</span>
          <span className="text-right text-premium-cyan">Export</span>
        </div>
        <div className="grid grid-cols-4 gap-1 text-[9px] text-slate-300 items-center px-2 py-1 bg-white/5 rounded border border-white/5">
          <span>A. Sharma</span>
          <span>Full Stack</span>
          <span className="text-emerald-400 font-semibold">Active</span>
          <span className="text-right text-premium-cyan">Export</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-premium-purple/10 blur-[120px] pointer-events-none" />

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
              Production Codebases
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const IconComp = project.icon;
            const isExpanded = expandedId === project.id;

            return (
              <motion.div
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-premium-purple">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-premium-purple/10 border border-premium-purple/20 text-premium-purple">
                      {project.category}
                    </span>
                  </div>

                  {/* UI Preview Card */}
                  <div className="mb-5">
                    <ProjectMockup type={project.mockupType} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Collapsible Key Highlights Accordion */}
                  <div className="border-t border-white/5 pt-3 mb-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full flex items-center justify-between text-xs font-extrabold tracking-wider uppercase text-slate-300 hover:text-white transition-colors py-1 focus:outline-none"
                    >
                      <span>Key Highlights & Security</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-premium-cyan" /> : <ChevronDown className="w-4 h-4 text-premium-cyan" />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-3"
                        >
                          <ul className="space-y-2 text-xs text-slate-300">
                            {project.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-premium-purple shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Tech Stack Badges & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Repo
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-premium-purple to-premium-indigo text-xs font-semibold text-white transition-all shadow-md shadow-premium-purple/15 hover:shadow-premium-purple/30"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


