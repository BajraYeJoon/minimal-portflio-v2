'use client';
import NumberFlow from '@number-flow/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import CommonTitle from './CommonTitle';

interface RollingNumberProps {
  endValue: number;
  label: string;
}

export default function NumberCounter({
  endValue,
  label,
}: Readonly<RollingNumberProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-200px',
    amount: 'some',
  });

  return (
    <div ref={ref} className="flex flex-col gap-5">
      <CommonTitle variant="mainHeading" className="flex items-center">
        <NumberFlow value={isInView ? endValue : 0} suffix="+" />
      </CommonTitle>
      <div className="h-px bg-surface w-full" />
      <CommonTitle variant="par-small">{label}</CommonTitle>
    </div>
  );
}

/* Original Implementation (Commented Out)
const NumberRoll = ({
  endValue,
  animate,
}: {
  endValue: number;
  animate: boolean;
}) => {
  const sequence = Array.from({ length: endValue + 1 }, (_, i) => i);
  const itemHeight = 64;
  const containerHeight = itemHeight * (endValue + 1);

  return (
    <motion.span
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      variants={{
        hidden: { y: 0 },
        visible: { y: -containerHeight + itemHeight },
      }}
      transition={{
        duration: 2,
        ease: easeInOut,
      }}
    >
      {sequence.map((num) => (
        <span key={num} className="h-fit flex items-center">
          {num}
        </span>
      ))}
    </motion.span>
  );
};
*/
