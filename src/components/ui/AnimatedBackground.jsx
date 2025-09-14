import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // This creates a "grab" effect on hover
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: { // This creates the constellation effect
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1, // Increased speed
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100, // Increased number of stars
      },
      opacity: {
        value: {min: 0.1, max: 0.5}, // Stars will have random opacity
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.5 }, // Stars will have random sizes
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default AnimatedBackground;