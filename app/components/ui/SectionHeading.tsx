import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';
import { observeOnce } from '~/lib/motion/observeOnce';
import { cn } from '~/lib/utils/cn';
import { SplitReveal } from './SplitReveal';
import { Text } from './Text';

interface SectionHeadingProps {
  index: string;
  label: string;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rule = ref.current?.querySelector('[data-section-rule]');
      if (!rule || prefersReducedMotion()) return;

      gsap.set(rule, { scaleX: 0, transformOrigin: 'left center' });

      return observeOnce(rule, () => {
        gsap.to(rule, {
          scaleX: 1,
          duration: 1.1,
          ease: 'expo.inOut',
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn('flex flex-col gap-6', className)}>
      <div className="relative flex items-baseline gap-4 pt-4">
        <span
          data-section-rule
          aria-hidden="true"
          className="bg-hairline absolute inset-x-0 top-0 h-px origin-left"
        />
        <Text variant="micro" className="text-ember">
          {index}
        </Text>
        <Text variant="micro">{label}</Text>
      </div>

      {title && (
        <SplitReveal
          as="h2"
          className={cn(
            'font-display text-title max-w-4xl uppercase',
            titleClassName,
          )}
        >
          {title}
        </SplitReveal>
      )}

      {description && (
        <Text variant="lead" className="max-w-2xl">
          {description}
        </Text>
      )}
    </div>
  );
}
