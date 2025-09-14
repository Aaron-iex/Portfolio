import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills'; // We are importing your skills data

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-nothing text-nothing-white mb-4">SKILLS</h2>
          <p className="text-lg text-nothing-gray-400">My technical skills and technologies I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="nothing-card rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-nothing text-nothing-white mb-4">{skillCategory.category}</h3>
              <ul className="space-y-2">
                {skillCategory.items.map((item) => (
                  <li key={item} className="text-nothing-gray-300">
                    <span className="text-nothing-accent mr-2">-&gt;</span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;