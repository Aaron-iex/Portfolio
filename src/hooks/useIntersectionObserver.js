import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasIntersected, options]);

  return [elementRef, hasIntersected];
};