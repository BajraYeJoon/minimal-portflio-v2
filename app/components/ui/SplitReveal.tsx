import { useGSAP } from '@gsap/react';
import { createElement, useRef } from 'react';
import { gsap, prefersReducedMotion, SplitText } from '~/lib/motion/gsap';
import { observeOnce } from '~/lib/motion/observeOnce';
import { cn } from '~/lib/utils/cn';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';

interface SplitRevealProps {
  as?: Tag;
  children: string;
  className?: string;
  delay?: number;
}

/**
 * Word-level stagger. Deliberately avoids line masks — display leading is too
 * tight for a mask box and would shave glyphs.
 */
export function SplitReveal({
  as = 'h2',
  children,
  className,
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element || prefersReducedMotion()) return;

      let split: SplitText | undefined;
      let stopObserving: (() => void) | undefined;
      let cancelled = false;

      const run = () => {
        if (cancelled) return;

        stopObserving = observeOnce(element, () => {
          split = new SplitText(element, { type: 'words' });
          gsap.from(split.words, {
            yPercent: 55,
            opacity: 0,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.022,
            delay,
          });
        });
      };

      if (document.fonts?.status === 'loaded') {
        run();
      } else {
        document.fonts.ready.then(run);
      }

      return () => {
        cancelled = true;
        stopObserving?.();
        split?.revert();
      };
    },
    { scope: ref },
  );

  return createElement(as, { ref, className: cn(className) }, children);
}
