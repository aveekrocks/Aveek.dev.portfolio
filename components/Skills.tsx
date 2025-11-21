import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
              className="glass-panel p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-200">{skill.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{skill.category}</p>
              
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};