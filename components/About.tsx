import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl"
        >
            <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform scale-x-50 origin-left"></span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Hello! I'm <span className="text-primary font-semibold">Aveek Sharma</span>, a passionate web developer, focused on creating impactful web applications that merge data visualization, AI, and modern UI/UX design.
              </p>
              <p>
                With experience in both frontend and backend technologies such as React, JavaScript, Python, and cloud solutions, I thrive on translating complex challenges into scalable products.
              </p>
              <p>
                Quick to learn new tools and eager to collaborate with diverse teams, I bring creative problem-solving, strong communication, and a dedication to continuous growth. Ready to contribute high-impact solutions and drive innovation in today's digital landscape.
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};