import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from '~/lib/motion/gsap';

/** One ember hairline that fills as the page is read. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        bar.style.transform = `scaleX(${self.progress})`;
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px"
    >
      <div ref={barRef} className="bg-ember h-full origin-left scale-x-0" />
    </div>
  );
}
