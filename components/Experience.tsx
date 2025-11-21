import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Records</h2>
        </motion.div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-0">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-[42px] md:-left-[58px] flex items-center justify-center w-8 h-8 bg-slate-900 rounded-full border-2 border-primary text-primary ring-4 ring-dark">
                <Briefcase size={14} />
              </span>
              
              <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full border border-primary/20 w-fit mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg text-slate-300 font-medium mb-3">{exp.company}</div>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};