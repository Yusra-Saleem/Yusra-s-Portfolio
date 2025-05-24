import { useEffect, useState } from 'react';
import { useReducedMotion } from './use-motion';

export function useDynamicAnimations() {
  const [isClient, setIsClient] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const shouldAnimate = isClient && !shouldReduceMotion && !isMobile;

  return {
    shouldAnimate,
    animation: shouldAnimate ? {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0 },
      transition: { duration: 0.5 }
    } : {
      initial: { opacity: 1 },
      animate: { opacity: 1 }
    }
  };
}
