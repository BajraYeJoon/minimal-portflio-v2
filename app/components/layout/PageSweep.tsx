import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useLocation } from 'react-router';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';

/** A panel sweeps up over the new page, then away, on client navigation. */
export function PageSweep() {
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useGSAP(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const panel = panelRef.current;
      if (!panel || prefersReducedMotion()) return;

      const timeline = gsap.timeline();
      timeline
        .set(panel, { autoAlpha: 1, yPercent: 100 })
        .to(panel, { yPercent: 0, duration: 0.5, ease: 'expo.inOut' })
        .to(panel, {
          yPercent: -100,
          duration: 0.65,
          ease: 'expo.inOut',
          delay: 0.05,
        })
        .set(panel, { autoAlpha: 0 });

      return () => timeline.kill();
    },
    { dependencies: [pathname] },
  );

  return (
    <div
      ref={panelRef}
      aria-hidden="true"
      className="invisible pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-onyx opacity-0"
    >
      <span className="font-display text-display text-paper uppercase">
        Binaya<span className="text-ember">.</span>
      </span>
    </div>
  );
}
