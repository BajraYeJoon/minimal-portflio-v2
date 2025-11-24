import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useWindow } from '~/hooks/useWindow';

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const { isMobile } = useWindow();

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: isMobile ? 0.8 : 1,
        easing: isMobile ? (t: number) => t : (t: number) => 1 - (1 - t) ** 7, // Cubic easing for desktop
        smoothWheel: !isMobile,
        wheelMultiplier: isMobile ? 1 : 0.9,
        syncTouch: true,
        syncTouchLerp: isMobile ? 0.04 : 0.08,
        touchMultiplier: isMobile ? 1 : 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
