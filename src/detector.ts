export function detectSuspiciousBehavior(): void {
    let requestCount = 0;
    const threshold = 100;
    const interval = 10000; // 10 seconds
  
    document.addEventListener('mousemove', () => {
      requestCount++;
    });
  
    document.addEventListener('click', () => {
      requestCount++;
    });
  
    setInterval(() => {
      if (requestCount > threshold) {
        console.warn('Suspicious behavior detected!');
        // Implement your blocking logic here
      }
      requestCount = 0;
    }, interval);
  }