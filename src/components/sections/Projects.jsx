import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects'; // Importing your project data
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-padding glassmorphism border-y border-nothing-gray-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-nothing text-nothing-white mb-4">PROJECTS</h2>
          <p className="text-xl text-nothing-gray-400">A selection of my work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="nothing-card rounded-lg p-6 flex flex-col h-full" // <-- 1. Added h-full
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-nothing text-nothing-white">{project.title}</h3>
                  <div className="flex items-center space-x-3 ml-4 flex-shrink-0"> {/* <-- 2. Added ml-4 */}
                    {/* This will only show the GitHub icon if the link is not '#' */}
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-nothing-gray-400 hover:text-nothing-white transition-colors" aria-label="GitHub Repository">
                        <Github size={35} />
                      </a>
                    )}
                    {/* This will only show the External Link icon if the link is not '#' */}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-nothing-gray-400 hover:text-nothing-white transition-colors" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-nothing-gray-400 mb-4 text-justify">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-nothing-gray-800 text-nothing-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;