import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import { initSmoothScrolling } from './utils/smoothScroll'; // 1. Make sure this import is here

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // 2. This useEffect hook activates smooth scrolling once the page is loaded
  useEffect(() => {
    if (!loading) {
      initSmoothScrolling();
    }
  }, [loading]); // 3. It runs whenever the 'loading' state changes

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