import React, { useState, useEffect, useRef } from 'react'; // 1. Import useRef
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // 2. New state to track visibility
  const lastScrollY = useRef(0); // 3. New ref to store the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep the existing logic for the blurred background
      setScrolled(currentScrollY > 50);

      // 4. New logic for auto-hiding
      // If user is scrolling down & past the header, hide it
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      }
      // If user is scrolling up, show it
      if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      }

      // Update the last scroll position for the next event
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      // 5. Animate the 'y' position based on our new isHidden state
      variants={{
        visible: { y: '0%' },
        hidden: { y: '-100%' }
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled && !isHidden // Only apply blur if scrolled and not hidden
          ? 'bg-nothing-black/80 backdrop-blur-lg border-b border-nothing-gray-800'
          : 'bg-transparent'
      }`}
    >
      {/* The rest of the header JSX remains the same */}
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-nothing text-nothing-white">
              {'</>'}
            </span>
            <span className="text-lg font-medium text-nothing-white hidden sm:block">
              Portfolio
            </span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-nothing-gray-300 hover:text-nothing-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-nothing-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-nothing-gray-300 hover:text-nothing-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;