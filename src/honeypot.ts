export function addHoneypot(element: HTMLElement): void {
    const honeypot = document.createElement('div');
    honeypot.style.display = 'none';
    honeypot.innerHTML = '<a href="/trap">Hidden Link</a>';
    element.appendChild(honeypot);
  }