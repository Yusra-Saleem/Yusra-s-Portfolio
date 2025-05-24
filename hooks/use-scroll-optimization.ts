import { useEffect, useCallback } from 'react';

export function useScrollOptimization() {
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const optimizeScroll = useCallback(() => {
    let ticking = false;
    const sections = document.querySelectorAll('section');

    const onScroll = debounce(() => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
              section.style.willChange = 'transform, opacity';
            } else {
              section.style.willChange = 'auto';
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, 100);

    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const cleanup = optimizeScroll();
    return cleanup;
  }, [optimizeScroll]);
}