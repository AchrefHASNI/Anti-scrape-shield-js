export function obfuscateContent(element: HTMLElement): void {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
    let node;
    while (node = walker.nextNode()) {
      const text = node.textContent;
      if (text && text.trim().length > 0) {
        const obfuscatedText = text.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
        const span = document.createElement('span');
        span.innerHTML = obfuscatedText;
        node.parentNode?.replaceChild(span, node);
      }
    }
  }