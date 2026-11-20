import * as gsapModule from 'gsap';
import type ScrollTriggerPlugin from 'gsap/ScrollTrigger';
import * as ScrollTriggerModule from 'gsap/ScrollTrigger';
import type SplitTextPlugin from 'gsap/SplitText';
import * as SplitTextModule from 'gsap/SplitText';

/**
 * GSAP ships UMD/CJS builds whose named exports Node's loader does not always
 * detect — Vercel's function runtime refused them and crashed the server bundle
 * on startup. Read each plugin off whichever module shape is present instead of
 * relying on a named import.
 */
function resolvePlugin<T>(module: unknown, name: string): T {
  const mod = module as Record<string, unknown>;
  const fallback = (mod.default ?? {}) as Record<string, unknown>;

  return (mod[name] ?? fallback[name] ?? mod.default ?? mod) as T;
}

const gsap = resolvePlugin<typeof gsapModule.gsap>(gsapModule, 'gsap');
const ScrollTrigger = resolvePlugin<typeof ScrollTriggerPlugin>(
  ScrollTriggerModule,
  'ScrollTrigger',
);
const SplitText = resolvePlugin<typeof SplitTextPlugin>(
  SplitTextModule,
  'SplitText',
);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  // Mobile browser chrome resizing should not re-measure pinned sections.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, SplitText };

/** Motion preference, safe to call during SSR and in effects. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
