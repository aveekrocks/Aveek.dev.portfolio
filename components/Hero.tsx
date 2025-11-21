import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 mix-blend-screen animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Available for hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{SITE_CONFIG.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-xl text-slate-400 mb-10"
        >
          {SITE_CONFIG.title}. {SITE_CONFIG.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-primary hover:bg-blue-600 rounded-lg transition-all flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="/Aveek-Sharma-CV.pdf"
            download="Aveek-Sharma-CV.pdf"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all flex items-center justify-center border border-slate-700"
          >
            Download CV <Download className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};