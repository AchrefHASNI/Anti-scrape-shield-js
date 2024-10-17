# Anti-Scrape Shield

Anti-Scrape Shield is a lightweight library designed to protect your web applications from scraping attempts. It works with React, Vue, Angular, Svelt,Next and Remix applications.

## Installation
```bash
npm install anti-scrape-shield
```
## Usage

```javascript
import AntiScrapeShield from 'anti-scrape-shield';

const shield = new AntiScrapeShield({
  obfuscate: true,
  honeypot: true,
  detect: true,
  rateLimit: {
    maxRequests: 100,
    perSeconds: 60
  }
});

// In a React component
useEffect(() => {
  shield.protect(document.getElementById('root'));
}, []);

// In a Vue component
mounted() {
  shield.protect(this.$el);
}

// In an Angular component
ngAfterViewInit() {
  shield.protect(this.elementRef.nativeElement);
}


// In a Svelte component
<script>
  import { onMount } from 'svelte';
  import AntiScrapeShield from 'anti-scrape-shield';

  let componentElement;

  onMount(() => {
    const shield = new AntiScrapeShield({
      obfuscate: true,
      honeypot: true,
      detect: true,
      rateLimit: {
        maxRequests: 100,
        perSeconds: 60
      }
    });
    shield.protect(componentElement);
  });
</script>

<div bind:this={componentElement}>
  Protected content
</div>


// In a Next.js component (Client-side only)
import { useEffect, useRef } from 'react';

function MyComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && componentRef.current) {
      const shield = new AntiScrapeShield({
        obfuscate: true,
        honeypot: true,
        detect: true,
        rateLimit: {
          maxRequests: 100,
          perSeconds: 60
        }
      });
      shield.protect(componentRef.current);
    }
  }, []);

  return <div ref={componentRef}>Protected content</div>;
}

// In a Remix component (Client-side only)
import { useEffect, useRef } from 'react';
import { ClientOnly } from 'remix-utils';

function MyComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    if (componentRef.current) {
      const shield = new AntiScrapeShield({
        obfuscate: true,
        honeypot: true,
        detect: true,
        rateLimit: {
          maxRequests: 100,
          perSeconds: 60
        }
      });
      shield.protect(componentRef.current);
    }
  }, []);

  return (
    <ClientOnly>
      {() => <div ref={componentRef}>Protected content</div>}
    </ClientOnly>
  );
}

```

## 💻 Built with

Technologies used in the project:

*   Typescript
## Features

* Content obfuscation
* Honeypot traps
* Suspicious behavior detection
* Rate limiting

## 💻 Technologies used in the project:
![Static Badge](https://img.shields.io/badge/Javascript-JS-yellow)

![Static Badge](https://img.shields.io/badge/Typescript-TS-blue)

## 🛡️ License: 
MIT
