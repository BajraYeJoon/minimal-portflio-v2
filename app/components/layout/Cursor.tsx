import { useEffect, useRef, useState } from 'react';
import { gsap } from '~/lib/motion/gsap';

const LABELS: Record<string, string> = {
  view: 'View',
  open: 'Open',
  email: 'Email',
};

/**
 * Ember dot with a trailing ring. Only mounts its behaviour on fine pointers
 * without reduced motion; no React state runs on pointer movement.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef('');
  const visibleRef = useRef(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const query = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    if (!query.matches) return;

    document.documentElement.classList.add('cursor-none');
    gsap.set([dot, ring], { opacity: 0, xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

    const show = () => {
      if (visibleRef.current) return;
      visibleRef.current = true;
      gsap.to([dot, ring], { opacity: 1, duration: 0.25, overwrite: 'auto' });
    };

    const onMove = (event: PointerEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
      show();
    };

    const onOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.(
        '[data-cursor], a, button',
      );
      const key = target?.getAttribute('data-cursor') ?? '';
      const nextLabel = LABELS[key] ?? '';

      if (nextLabel === labelRef.current) return;
      labelRef.current = nextLabel;
      setLabel(nextLabel);

      gsap.to(ring, {
        scale: nextLabel ? 2.2 : 1,
        borderColor: nextLabel
          ? 'rgba(246,245,243,0)'
          : 'rgba(201,199,204,0.45)',
        backgroundColor: nextLabel ? '#f6f5f3' : 'rgba(246,245,243,0)',
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const onDown = () => {
      gsap.to(ring, {
        scale: labelRef.current ? 2 : 0.75,
        duration: 0.18,
      });
      gsap.to(dot, { scale: 1.9, duration: 0.18 });
    };

    const onUp = () => {
      gsap.to(ring, { scale: labelRef.current ? 2.2 : 1, duration: 0.3 });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    const onLeave = () => {
      visibleRef.current = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.2, overwrite: true });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);

    return () => {
      document.documentElement.classList.remove('cursor-none');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className="cursor-ring"
        data-active={label ? 'true' : 'false'}
      >
        {label}
      </div>
    </>
  );
}
