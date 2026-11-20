import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useMediaQuery } from '~/lib/hooks/useMediaQuery';
import { ScrollTrigger } from '~/lib/motion/gsap';

/**
 * Keeps ScrollTrigger in step, resets the page on navigation, and honours
 * `/#section` links. Lenis and native scrolling both respect the target's
 * `scroll-margin-top`, so the sticky header offset lives in CSS.
 *
 * Every navigation gets a fresh `key`, so tapping the same nav item twice
 * scrolls back to the section instead of doing nothing.
 */
function LenisBridge() {
  const lenis = useLenis(() => ScrollTrigger.update());
  const { pathname, hash, key } = useLocation();
  const lastPathname = useRef(pathname);
  const lastHashKey = useRef<string | null>(null);

  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;

    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [pathname, lenis]);

  useEffect(() => {
    if (!hash) return;

    const stamp = `${pathname}${hash}${key}`;
    if (lastHashKey.current === stamp) return;

    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    lastHashKey.current = stamp;

    const id = window.requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.1 });
      } else {
        target.scrollIntoView({ block: 'start' });
      }
    });

    return () => window.cancelAnimationFrame(id);
  }, [pathname, hash, key, lenis]);

  return null;
}

/**
 * Frame-based smoothing (lerp) — a time-based easing curve here is easy to get
 * wrong and can interpolate backwards, which reads as the page scrolling up.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const canSmooth = useMediaQuery(
    '(pointer: fine) and (prefers-reduced-motion: no-preference)',
  );

  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: canSmooth,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        syncTouch: false,
        autoRaf: true,
      }}
    >
      <LenisBridge />
      {children}
    </ReactLenis>
  );
}
