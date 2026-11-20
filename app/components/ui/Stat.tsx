import NumberFlow from '@number-flow/react';
import { useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Text } from './Text';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
}

export function Stat({ value, suffix = '', label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) setDisplayValue(value);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <Text
        as="div"
        className="font-display flex items-baseline gap-1 text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.9] tracking-[-0.02em]"
      >
        <NumberFlow
          value={reduceMotion ? value : displayValue}
          format={{ notation: 'standard' }}
          transformTiming={{
            duration: 1200,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          willChange={!reduceMotion}
        />
        <span>{suffix}</span>
      </Text>
      <div className="bg-hairline h-px w-full" />
      <Text variant="micro">{label}</Text>
    </div>
  );
}
