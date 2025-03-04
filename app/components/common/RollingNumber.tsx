import { easeInOut } from 'motion';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useWindow } from '~/hooks/useWindow';
import CommonTitle from './CommonTitle';

interface RollingNumberProps {
  endValue: number;
  label: string;
}

const NumberRoll = ({
  endValue,
  animate,
}: {
  endValue: number;
  animate: boolean;
}) => {
  const { isMobile, isTablet, isDesktop } = useWindow();
  const startValue = Math.max(0, endValue - 4);
  const mappingNumber = Array.from(
    { length: endValue - startValue + 1 },
    (_, i) => startValue + i,
  );

  const getItemHeight = () => {
    if (isMobile) return 31.5;
    if (isTablet) return 45;
    return 63.5;
  };

  const itemHeight = getItemHeight();

  return (
    <motion.span
      initial={{ y: 0 }}
      animate={
        animate ? { y: -(endValue - startValue) * itemHeight } : { y: 0 }
      }
      transition={{ duration: 3, ease: easeInOut }}
      className="max-sm:text-heading-4 inline-flex flex-col items-center"
    >
      {mappingNumber.map((num) => (
        <span key={num}>{num}</span>
      ))}
    </motion.span>
  );
};

export default function NumberCounter({ endValue, label }: RollingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useWindow();

  const viewportMargin = isMobile ? '-100px' : isTablet ? '-150px' : '-200px';
  const isInView = useInView(ref, { once: true, margin: viewportMargin });

  return (
    <div
      ref={ref}
      className="flex flex-col items-start justify-center gap-2 md:gap-3 lg:gap-5"
    >
      <CommonTitle
        variant="mainHeading"
        className="relative flex h-14 items-center justify-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_29.5%,black_80.5%,transparent_100%)] md:h-32"
      >
        <NumberRoll endValue={endValue} animate={isInView} />+
      </CommonTitle>
      <div className="bg-surface h-px w-full" />
      <CommonTitle variant="par-small" className="leading-5">
        {label}
      </CommonTitle>
    </div>
  );
}
