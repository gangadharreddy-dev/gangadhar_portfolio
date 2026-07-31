import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageSquare, ArrowDown, FolderGit2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Mouse Spotlight Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.12), transparent 80%)`
        }}
      />

      {/* Animated Gradient Background Orbs */}
      <div className="absolute top-[15%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-premium-purple/15 blur-[120px] mix-blend-screen animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-premium-cyan/15 blur-[120px] mix-blend-screen animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 left-[12%] w-16 h-16 rounded-2xl bg-gradient-to-tr from-premium-purple/20 to-premium-cyan/20 border border-white/10 backdrop-blur-md rotate-12"
          animate={{ y: [0, -20, 0], rotate: [12, 24, 12] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 left-[8%] w-12 h-12 rounded-full bg-gradient-to-br from-premium-pink/20 to-premium-indigo/20 border border-white/10 backdrop-blur-md"
          animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-36 right-[14%] w-20 h-20 rounded-3xl bg-gradient-to-bl from-premium-cyan/20 to-premium-purple/20 border border-white/10 backdrop-blur-md -rotate-12"
          animate={{ y: [0, -25, 0], rotate: [-12, -28, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text (Left 7 Cols) */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 mb-6 backdrop-blur-md shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-premium-purple animate-spin" style={{ animationDuration: '4s' }} />
              <span className="bg-gradient-to-r from-premium-purple via-slate-200 to-premium-cyan bg-clip-text text-transparent">
                Available for Internships & Full-Stack Projects
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan bg-clip-text text-transparent animate-gradient text-glow">
                Gangadhar Reddy
              </span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-6 tracking-wide flex flex-wrap justify-center lg:justify-start items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>Full Stack Developer</span>
              <span className="text-premium-purple font-extrabold">|</span>
              <span className="bg-gradient-to-r from-premium-cyan to-premium-indigo bg-clip-text text-transparent">AI Enthusiast</span>
            </motion.h2>

            {/* Short Introduction */}
            <motion.p 
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I build scalable web applications, intelligent software, and modern digital experiences using React, Python, FastAPI, and AI technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* View Projects */}
              <motion.a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-premium-purple to-premium-indigo text-white font-semibold text-sm shadow-xl shadow-premium-purple/20 hover:shadow-premium-purple/40 border border-premium-purple/30 transition-all focus:outline-none"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href="/Gangadhar_Reddy_Resume.pdf"
                download="Gangadhar_Reddy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all focus:outline-none shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              {/* Contact Me */}
              <motion.a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all focus:outline-none shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageSquare className="w-4 h-4" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              
              <a
                href="https://github.com/gangadharreddy065-create"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all shadow-md"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/gangadharreddy065"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="mailto:gangadharreddy065@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all shadow-md"
                title="Email Me"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image (Right 5 Cols) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative group cursor-pointer"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              {/* Outer Blue & Purple Glowing Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-premium-purple via-premium-indigo to-premium-cyan opacity-75 blur-xl group-hover:opacity-100 transition duration-700 animate-pulse-slow" />

              {/* Circular Avatar Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-88 lg:h-88 rounded-full p-2 bg-space-950/80 border-2 border-white/20 backdrop-blur-md overflow-hidden shadow-2xl group-hover:border-premium-purple/50 transition-colors duration-500">
                <img
                  src="/gangadhar_hero.jpg"
                  alt="Gangadhar Reddy"
                  className="w-full h-full object-cover object-top rounded-full filter brightness-100 contrast-105 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>


              {/* Floating Tech Badge 1 */}
              <motion.div 
                className="absolute -top-2 -right-2 px-3.5 py-1.5 rounded-xl bg-space-900/90 border border-white/15 backdrop-blur-xl text-xs font-semibold text-slate-100 flex items-center gap-1.5 shadow-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <span className="text-amber-400">⚡</span> Python & FastAPI
              </motion.div>

              {/* Floating Tech Badge 2 */}
              <motion.div 
                className="absolute -bottom-2 -left-2 px-3.5 py-1.5 rounded-xl bg-space-900/90 border border-white/15 backdrop-blur-xl text-xs font-semibold text-slate-100 flex items-center gap-1.5 shadow-2xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2, ease: 'easeInOut' }}
              >
                <span className="text-premium-cyan">⚛️</span> React.js & AI
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="mt-16 flex flex-col items-center justify-center text-slate-400 text-xs font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="flex flex-col items-center gap-2 hover:text-white transition-colors"
          >
            <span>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-4 h-4 text-premium-purple" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

