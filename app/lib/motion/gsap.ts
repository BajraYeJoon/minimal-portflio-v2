import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

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
