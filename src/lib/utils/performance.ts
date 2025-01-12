export const measurePerformance = (component: string) => {
  const start = performance.now();
  return () => {
    const end = performance.now();
    const duration = end - start;
    if (duration > 16.67) { // More than 1 frame (60fps)
      console.warn(`${component} took ${duration}ms to render`);
    }
  };
}; 