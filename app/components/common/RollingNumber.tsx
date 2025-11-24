import NumberFlow from '@number-flow/react';
import { useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useWindow } from '~/hooks/useWindow';
import CommonTitle from './CommonTitle';

interface RollingNumberProps {
  endValue: number;
  label: string;
}

export default function NumberCounter({ endValue, label }: RollingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useWindow();
  const [displayValue, setDisplayValue] = useState(0);

  const viewportMargin = isMobile ? '-100px' : isTablet ? '-150px' : '-200px';
  const isInView = useInView(ref, { once: true, margin: viewportMargin });

  useEffect(() => {
    if (isInView) {
      setDisplayValue(endValue);
    }
  }, [isInView, endValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-start justify-center gap-2 md:gap-3 lg:gap-5"
    >
      <CommonTitle
        variant="mainHeading"
        className="relative flex h-14 items-center justify-center md:h-32"
      >
        <NumberFlow
          value={displayValue}
          format={{ notation: 'standard' }}
          trend={1} // Always spin upward like a slot machine
          transformTiming={{
            duration: 2500,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          spinTiming={{
            duration: 3000,
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
          willChange
        />
        +
      </CommonTitle>
      <div className="bg-surface h-px w-full" />
      <CommonTitle variant="par-small" className="leading-5">
        {label}
      </CommonTitle>
    </div>
  );
}
