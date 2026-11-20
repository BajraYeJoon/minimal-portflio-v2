import { gsap } from 'gsap';
import type ScrollTriggerPlugin from 'gsap/ScrollTrigger';
import * as ScrollTriggerModule from 'gsap/ScrollTrigger';
import type SplitTextPlugin from 'gsap/SplitText';
import * as SplitTextModule from 'gsap/SplitText';

/**
 * Node resolves `gsap/*` to different builds depending on how the dependency is
 * installed: the ESM build exports the plugin by name and as `default`, while
 * the CJS UMD build keeps it on `module.exports`. A bare named import throws
 * "does not provide an export named ..." when the server bundle is externalized
 * and Node cannot detect that binding, which crashes the function before any
 * route renders. Resolve both module shapes instead.
 */
function resolvePlugin<T>(module: unknown, name: string): T {
  const mod = module as Record<string, unknown>;
  const fallback = (mod.default ?? {}) as Record<string, unknown>;

  return (mod[name] ?? fallback[name] ?? mod.default ?? mod) as T;
}

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
