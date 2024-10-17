import AntiScrapeShield from '../src/index';
import * as obfuscator from '../src/obfuscator';
import * as honeypot from '../src/honeypot';
import * as detector from '../src/detector';
import * as rateLimiterModule from '../src/rateLimiter';

describe('AntiScrapeShield', () => {
  let shield: AntiScrapeShield;
  let mockElement: HTMLElement;

  beforeEach(() => {
    shield = new AntiScrapeShield({
      obfuscate: true,
      honeypot: true,
      detect: true,
      rateLimit: {
        maxRequests: 100,
        perSeconds: 60,
      },
    });
    mockElement = document.createElement('div') as HTMLElement;
  });

  test('protect method calls all protection functions', () => {
    // Spy on the imported functions
    const obfuscateSpy = jest.spyOn(obfuscator, 'obfuscateContent');
    const honeypotSpy = jest.spyOn(honeypot, 'addHoneypot');
    const detectSpy = jest.spyOn(detector, 'detectSuspiciousBehavior');
    const rateLimitSpy = jest.spyOn(rateLimiterModule, 'rateLimiter');

    shield.protect(mockElement);

    expect(obfuscateSpy).toHaveBeenCalled();
    expect(honeypotSpy).toHaveBeenCalled();
    expect(detectSpy).toHaveBeenCalled();
    expect(rateLimitSpy).toHaveBeenCalled();
  });

  test('obfuscateContent is called when obfuscate option is true', () => {
    const obfuscateSpy = jest.spyOn(obfuscator, 'obfuscateContent');
    
    shield.protect(mockElement);
    expect(obfuscateSpy).toHaveBeenCalled();
  });

  test('addHoneypot is called when honeypot option is true', () => {
    const honeypotSpy = jest.spyOn(honeypot, 'addHoneypot');
    
    shield.protect(mockElement);
    expect(honeypotSpy).toHaveBeenCalled();
  });

  test('detectSuspiciousBehavior is called when detect option is true', () => {
    const detectSpy = jest.spyOn(detector, 'detectSuspiciousBehavior');
    
    shield.protect(mockElement);
    expect(detectSpy).toHaveBeenCalled();
  });

  test('rateLimiter is called when rateLimit option is set', () => {
    const rateLimitSpy = jest.spyOn(rateLimiterModule, 'rateLimiter');
    
    shield.protect(mockElement);
    expect(rateLimitSpy).toHaveBeenCalled();
  });
});
