import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';
import { observeOnce } from '~/lib/motion/observeOnce';
import { cn } from '~/lib/utils/cn';

interface MediaRevealProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  width?: number;
  height?: number;
  /** Skip the lazy attribute for above-the-fold art. */
  eager?: boolean;
}

/**
 * Image settles from 1.12 while fading up.
 *
 * Deliberately avoids `clip-path`: a stuck clip leaves the frame permanently
 * empty in some browsers. Opacity + transform always resolve to a visible
 * image, and a scroll check backs up the observer so nothing can stay hidden.
 */
export function MediaReveal({
  src,
  alt,
  className,
  wrapperClassName,
  width = 1400,
  height = 900,
  eager = false,
}: MediaRevealProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const frame = frameRef.current;
      const image = imageRef.current;
      if (!frame || !image || prefersReducedMotion()) return;

      let revealed = false;
      let stopObserving: (() => void) | undefined;

      const reveal = () => {
        if (revealed) return;
        revealed = true;
        stopObserving?.();
        window.removeEventListener('scroll', checkPosition);

        gsap.fromTo(
          image,
          { opacity: 0, scale: 1.12, yPercent: 4 },
          {
            opacity: 1,
            scale: 1,
            yPercent: 0,
            duration: 1.1,
            ease: 'expo.out',
            overwrite: true,
            clearProps: 'transform',
          },
        );
      };

      const checkPosition = () => {
        if (frame.getBoundingClientRect().top < window.innerHeight * 0.94) {
          reveal();
        }
      };

      gsap.set(image, { opacity: 0, scale: 1.12, yPercent: 4 });

      if (frame.getBoundingClientRect().top < window.innerHeight * 0.94) {
        reveal();
      } else {
        stopObserving = observeOnce(frame, reveal);
        window.addEventListener('scroll', checkPosition, { passive: true });
      }

      return () => {
        stopObserving?.();
        window.removeEventListener('scroll', checkPosition);
      };
    },
    { scope: frameRef },
  );

  return (
    <div
      ref={frameRef}
      className={cn('bg-obsidian overflow-hidden', wrapperClassName)}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]',
          className,
        )}
      />
    </div>
  );
}
