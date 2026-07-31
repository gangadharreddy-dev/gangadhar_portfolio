import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Cpu, BrainCircuit, Briefcase, Trophy, Layers } from 'lucide-react';

const stats = [
  { id: 1, name: 'Projects Completed', value: 4, suffix: '+', icon: Layers, color: 'text-premium-purple bg-premium-purple/10 border-premium-purple/20' },
  { id: 2, name: 'Internships', value: 3, suffix: '', icon: Briefcase, color: 'text-premium-cyan bg-premium-cyan/10 border-premium-cyan/20' },
  { id: 3, name: 'Hackathons', value: 3, suffix: '', icon: Trophy, color: 'text-premium-pink bg-premium-pink/10 border-premium-pink/20' },
  { id: 4, name: 'Certifications', value: 6, suffix: '+', icon: Award, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  { id: 5, name: 'Technologies Learned', value: 15, suffix: '+', icon: Cpu, color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const incrementTime = Math.max(duration / end, 30);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5 bg-space-950/40">
      <div className="absolute top-[20%] right-[5%] w-[350px] h-[350px] rounded-full bg-premium-purple/10 blur-[100px] pointer-events-none" />

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
              Background & Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-3">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan mx-auto mt-4 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Text (Left 7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Profile Summary Bar */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 glass-card">
              <img
                src="/gangadhar_hero.jpg"
                alt="Gangadhar Reddy Headshot"
                className="w-14 h-14 rounded-full object-cover object-top border border-premium-purple/40 shrink-0"
              />
              <div>
                <h4 className="font-bold text-white text-sm">Gangadhar Reddy</h4>
                <p className="text-xs text-slate-400">B.Tech CSE (AI & Data Science) • Takshashila University</p>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Passionate Full Stack Developer & AI Enthusiast
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-base">
              I am pursuing my <strong className="text-white">B.Tech in Computer Science Engineering (AI & Data Science)</strong> at <strong className="text-white">Takshashila University (2023–2027)</strong> with a CGPA of <strong className="text-premium-purple">8.02</strong>. I specialize in designing and engineering high-performance full-stack web applications and integrating modern AI technologies to solve real-world business problems.
            </p>

            
            <p className="text-slate-300 leading-relaxed text-base">
              With hands-on experience spanning end-to-end frontend development, RESTful microservices, computer vision systems, and relational databases, I bring production-ready software from concept to cloud deployment. I am comfortable working with modern agile development workflows, CI/CD pipelines, containerization, and cloud platforms like Render and Vercel.
            </p>

            {/* Core Focus Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-premium-purple/40 transition-all">
                <div className="p-3 rounded-xl bg-premium-purple/10 text-premium-purple shrink-0">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">AI Integration & CV</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Facial landmarking, anti-proxy verification, OpenCV, MediaPipe, and intelligent model deployment pipelines.
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-5 rounded-2xl border border-white/10 flex gap-4 items-start hover:border-premium-cyan/40 transition-all">
                <div className="p-3 rounded-xl bg-premium-cyan/10 text-premium-cyan shrink-0">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Full Stack Engineering</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    React.js, Next.js, FastAPI, Flask, PostgreSQL, Prisma, JWT authentication & role-based access controls.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Statistics Grid (Right 5 cols) */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  className="glass-card glass-card-hover p-5 sm:p-6 rounded-2xl flex items-center gap-5 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  <div className={`p-3.5 rounded-xl border shrink-0 ${stat.color}`}>
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white text-glow">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                      {stat.name}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

