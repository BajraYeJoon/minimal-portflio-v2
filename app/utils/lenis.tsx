import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';

export default function LenisProvider({
  children,
}: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => 1 - (1 - t) ** 3,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        syncTouch: true,
        syncTouchLerp: 0.08,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
