import { obfuscateContent } from './obfuscator';
import { addHoneypot } from './honeypot';
import { detectSuspiciousBehavior } from './detector';
import { rateLimiter } from './rateLimiter';

export interface AntiScrapeShieldOptions {
  obfuscate?: boolean;
  honeypot?: boolean;
  detect?: boolean;
  rateLimit?: {
    maxRequests: number;
    perSeconds: number;
  };
}

export class AntiScrapeShield {
  private options: AntiScrapeShieldOptions;

  constructor(options: AntiScrapeShieldOptions = {}) {
    this.options = options;
  }

  public protect(element: HTMLElement): void {
    if (this.options.obfuscate) {
      obfuscateContent(element);
    }

    if (this.options.honeypot) {
      addHoneypot(element);
    }

    if (this.options.detect) {
      detectSuspiciousBehavior();
    }

    if (this.options.rateLimit) {
      rateLimiter(this.options.rateLimit.maxRequests, this.options.rateLimit.perSeconds);
    }
  }
}

export default AntiScrapeShield;