import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, prefersReducedMotion, ScrollTrigger } from '~/lib/motion/gsap';
import { cn } from '~/lib/utils/cn';

interface MarqueeProps {
  items: readonly string[];
  className?: string;
  /** Seconds for one full loop at rest. */
  duration?: number;
}

/**
 * Infinite band whose speed follows scroll velocity; it eases down on hover.
 * The rail is duplicated so the loop is seamless.
 */
export function Marquee({ items, className, duration = 42 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track || prefersReducedMotion()) return;

      track.style.animation = 'none';

      const loop = gsap.to(track, {
        xPercent: -50,
        duration,
        ease: 'none',
        repeat: -1,
      });

      // Direct timeScale assignment: creating a tween per scroll frame is a
      // measurable jank source during fast wheel input.
      const trigger = ScrollTrigger.create({
        trigger: track,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = Math.min(Math.abs(self.getVelocity()) / 1400, 2.2);
          loop.timeScale(1 + boost);
        },
      });

      const mask = track.parentElement;
      const pause = () => loop.timeScale(0.1);
      const resume = () => loop.timeScale(1);

      mask?.addEventListener('pointerenter', pause);
      mask?.addEventListener('pointerleave', resume);

      return () => {
        trigger.kill();
        loop.kill();
        mask?.removeEventListener('pointerenter', pause);
        mask?.removeEventListener('pointerleave', resume);
      };
    },
    { scope: trackRef },
  );

  return (
    <div
      className={cn('marquee-mask border-hairline border-y py-4', className)}
    >
      <div
        ref={trackRef}
        className="marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1 ? 'true' : undefined}
          >
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="font-display text-heading text-silver flex items-center uppercase"
              >
                <span className="px-7">{item}</span>
                <span className="bg-ember size-1.5 rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
