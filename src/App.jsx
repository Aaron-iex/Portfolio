import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import { initSmoothScrolling } from './utils/smoothScroll'; // <-- ADD THIS IMPORT

function App() {
  const [loading, setLoading] = useState(true);

  // This useEffect handles the loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // ADD THIS NEW useEffect to activate smooth scrolling
  useEffect(() => {
    if (!loading) {
      initSmoothScrolling();
    }
  }, [loading]);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      )}
    </div>
  );
}

export default App;