import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding glassmorphism border-y border-nothing-gray-800">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-nothing text-nothing-white mb-6">ABOUT ME</h2>
          <p className="text-lg md:text-xl text-nothing-gray-400 max-w-3xl mx-auto leading-relaxed">
            As a third-year Electronics and Communication Engineering student, I am deeply passionate about the intersection of hardware and software. I thrive on solving real-world problems by designing and building embedded systems from the ground up, and I am always eager to apply my skills to challenging projects in the world of IoT and embedded AI.
          </p>
          {/* You can add a button to download your resume here later */}
          <motion.a
            href="/resume.pdf" // TODO: Add your resume path
            target="_blank"
            className="btn-outline inline-block mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;