import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I’m open to project collaboration and internship opportunities. For anything related to work or technical discussion, contact me directly by email or LinkedIn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl border border-slate-800 flex flex-col items-center text-center"
          >
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
               <Mail size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
             <p className="text-slate-400 mb-6">I usually respond within 24 hours.</p>
             <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:text-blue-400 font-medium text-lg transition-colors">
               {SITE_CONFIG.email}
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};