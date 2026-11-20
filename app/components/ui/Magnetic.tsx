import { useGSAP } from '@gsap/react';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import { gsap } from '~/lib/motion/gsap';
import { cn } from '~/lib/utils/cn';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Maximum travel in pixels. */
  strength?: number;
}

/** Pulls its child toward the pointer, never more than `strength` px. */
export function Magnetic({
  children,
  className,
  strength = 10,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (
        !element ||
        !window.matchMedia('(pointer: fine)').matches ||
        !window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      ) {
        return;
      }

      const xTo = gsap.quickTo(element, 'x', {
        duration: 0.45,
        ease: 'power3',
      });
      const yTo = gsap.quickTo(element, 'y', {
        duration: 0.45,
        ease: 'power3',
      });

      const onMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        xTo(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2);
        yTo(((event.clientY - rect.top) / rect.height - 0.5) * strength * 2);
      };

      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      element.addEventListener('pointermove', onMove);
      element.addEventListener('pointerleave', onLeave);

      return () => {
        element.removeEventListener('pointermove', onMove);
        element.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: ref },
  );

  return (
    <span ref={ref} className={cn('inline-flex', className)}>
      {children}
    </span>
  );
}
