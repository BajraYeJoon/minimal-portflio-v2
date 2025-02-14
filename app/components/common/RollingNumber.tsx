import { easeInOut } from 'motion';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
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
  const startValue = Math.max(0, endValue - 4);
  const mappingNumber = Array.from(
    { length: endValue - startValue + 1 },
    (_, i) => startValue + i,
  );
  const itemHeight = 63.5;

  return (
    <motion.span
      initial={{ y: 0 }}
      animate={
        animate ? { y: -(endValue - startValue) * itemHeight } : { y: 0 }
      }
      transition={{ duration: 3, ease: easeInOut }}
      className="inline-flex flex-col items-center"
    >
      {mappingNumber.map((num) => (
        <span key={num}>{num}</span>
      ))}
    </motion.span>
  );
};

export default function NumberCounter({ endValue, label }: RollingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="flex flex-col items-start justify-center gap-5">
      <CommonTitle
        variant="mainHeading"
        className="relative flex h-32 items-center justify-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_29.5%,black_80.5%,transparent_100%)]"
      >
        <NumberRoll endValue={endValue} animate={isInView} />+
      </CommonTitle>
      <div className="bg-surface h-px w-full" />
      <CommonTitle variant="par-small">{label}</CommonTitle>
    </div>
  );
}
