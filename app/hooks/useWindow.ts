import { useCallback, useEffect, useState } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
  aspectRatio: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

/**
 * A type-safe hook that provides window dimensions and responsive breakpoints
 * @returns {WindowDimensions} Object containing window dimensions and responsive breakpoints
 */
export const useWindow = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
    aspectRatio: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  // Memoized function to calculate dimensions
  const calculateDimensions = useCallback((): WindowDimensions => {
    // Handle SSR case where window is not defined
    if (typeof window === 'undefined') {
      return {
        width: 0,
        height: 0,
        aspectRatio: 0,
        isMobile: false,
        isTablet: false,
        isDesktop: false,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      aspectRatio: width / height,
      isMobile: width < MOBILE_BREAKPOINT,
      isTablet: width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT,
      isDesktop: width >= TABLET_BREAKPOINT,
    };
  }, []); // Remove dimensions dependency

  useEffect(() => {
    // Handle SSR case
    if (typeof window === 'undefined') {
      return;
    }

    // Initial dimensions
    setDimensions(calculateDimensions());

    let timeoutId: NodeJS.Timeout;
    const debouncedHandleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions(calculateDimensions());
      }, 200);
    };

    window.addEventListener('resize', debouncedHandleResize, { passive: true });

    // Cleanup
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [calculateDimensions]);

  return dimensions;
};

export const breakpoints = {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} as const;
