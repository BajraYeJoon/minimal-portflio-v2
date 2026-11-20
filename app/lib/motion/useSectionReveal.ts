import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, prefersReducedMotion } from './gsap';

interface SectionRevealOptions {
  selector?: string;
  stagger?: number;
  distance?: number;
}

/**
 * Batched reveals: each element animates when it enters the viewport, once.
 * Content is only hidden at runtime, so the SSR page stays fully readable.
 *
 * Observation uses IntersectionObserver rather than `ScrollTrigger.batch`:
 * `once` batch triggers kill themselves while GSAP is still creating the rest
 * of the batch, which mutates `_triggers` mid-refresh and throws on long lists.
 */
export function useSectionReveal<T extends HTMLElement = HTMLElement>({
  selector = '[data-reveal]',
  stagger = 0.07,
  distance = 30,
}: SectionRevealOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const scope = ref.current;
      if (!scope || prefersReducedMotion()) return;

      const items = Array.from(
        scope.querySelectorAll<HTMLElement>(selector),
      ).filter((item) => !item.dataset.revealed);

      if (items.length === 0) return;

      gsap.set(items, { opacity: 0, y: distance });

      for (const item of items) item.dataset.revealed = 'pending';

      const observer = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement);

          if (entering.length === 0) return;

          for (const item of entering) {
            observer.unobserve(item);
            item.dataset.revealed = 'done';
          }

          gsap.to(entering, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'expo.out',
            stagger,
            overwrite: true,
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
      );

      for (const item of items) observer.observe(item);

      return () => observer.disconnect();
    },
    { scope: ref, dependencies: [selector, stagger, distance] },
  );

  return ref;
}
