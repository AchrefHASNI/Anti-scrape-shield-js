export function rateLimiter(maxRequests: number, perSeconds: number): void {
    let requestCount = 0;
    const interval = perSeconds * 1000;
  
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      if (requestCount >= maxRequests) {
        console.warn('Rate limit exceeded!');
        return Promise.reject(new Error('Rate limit exceeded'));
      }
      requestCount++;
      return originalFetch.apply(this, args);
    };
  
    setInterval(() => {
      requestCount = 0;
    }, interval);
  }