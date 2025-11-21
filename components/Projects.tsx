import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of projects that demonstrate my engineering capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};