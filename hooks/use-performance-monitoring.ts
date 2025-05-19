import { useEffect } from 'react';

export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log FCP
          if (entry.name === 'first-contentful-paint') {
            console.log(`FCP: ${entry.startTime}ms`);
          }
          // Log LCP
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
          // Log CLS
          if (
            entry.entryType === 'layout-shift' &&
            !(entry as { hadRecentInput?: boolean }).hadRecentInput
          ) {
            console.log(`CLS: ${(entry as { value?: number }).value}`);
          }
        });
      });

      // Observe performance metrics
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);
}
