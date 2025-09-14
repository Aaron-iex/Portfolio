import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from '../ui/AnimatedBackground';

const Layout = ({ children }) => {
  return (
    <div> {/* Added a simple outer wrapper */}
      <AnimatedBackground />

      {/* This new div wraps your content and lifts it to a higher layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;