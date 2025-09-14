import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from '../animations/TypeWriter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 border border-nothing-gray-800 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-24 h-24 border border-nothing-gray-700 rounded-lg rotate-45"
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-nothing-gray-400 font-nothing text-xl md:text-base mb-4 tracking-wider"
        >
          HELLO, I'M
        </motion.div>
        
        {/* Replace AARON with your full name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-nothing-white mb-6 font-nothing"
        >
          AARON NISSI
          <br />
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-nothing-gray-300 mb-8 h-8"
        >
          <TypeWriter
            words={['ECE Student', 'Firmware Developer', 'Drone enthusiasts', 'AI/ML on the Edge', 'Software Developer', 'Event-Management']}
            className="font-nothing"
          />
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="text-nothing-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A passionate Electronics and Communication Engineering student specializing in building intelligent firmware and hardware solutions on microcontrollers along with AI and Software development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {/* Add your real links here! */}
          <motion.a href="https://github.com/Aaron-iex" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} className="text-nothing-gray-400 hover:text-nothing-white transition-colors"><Github size={30} /></motion.a>
          <motion.a href="https://in.linkedin.com/in/aaron-nissi-94793b271" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, y: -2 }} className="text-nothing-gray-400 hover:text-nothing-white transition-colors"><Linkedin size={30} /></motion.a>
          <motion.a href="mailto:mylabathulaaaronnissi@gmail.com" whileHover={{ scale: 1.2, y: -2 }} className="text-nothing-gray-400 hover:text-nothing-white transition-colors"><Mail size={30} /></motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} className="text-nothing-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;