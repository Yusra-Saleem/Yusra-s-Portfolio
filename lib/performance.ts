export const intersectionObserverConfig = {
  rootMargin: '50px',
  threshold: 0.1
};

export function optimizeElement(element: HTMLElement, enableAnimation: boolean = false) {
  if (!element) return;
  
  // Enable animations only for specific elements
  if (enableAnimation) {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
    element.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
  }
  
  // Add will-change only when needed
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (enableAnimation) {
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
          (entry.target as HTMLElement).style.opacity = '1';
        }
        (entry.target as HTMLElement).style.willChange = 'transform, opacity';
      } else {
        if (enableAnimation) {
          (entry.target as HTMLElement).style.transform = 'translateY(20px)';
          (entry.target as HTMLElement).style.opacity = '0';
        }
        (entry.target as HTMLElement).style.willChange = 'auto';
      }
    });
  }, intersectionObserverConfig);
  
  observer.observe(element);
  
  return () => observer.disconnect();
}
