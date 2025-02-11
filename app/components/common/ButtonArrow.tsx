import { BsArrowUpRight } from 'react-icons/bs';
import { cn } from '~/lib/utils';

interface ButtonArrowProps {
  className?: string;
  variant?: 'default' | 'link';
}

export const ButtonArrow = ({
  className,
  variant = 'default',
}: ButtonArrowProps) => {
  return (
    <div className={cn('relative size-5 overflow-hidden', className)}>
      <BsArrowUpRight
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700',
          'text-surface',
          'group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0 size-full',
        )}
        strokeWidth={1.2}
      />
      <BsArrowUpRight
        className={cn(
          'absolute left-1/2 top-1/2 -translate-x-[2.5rem] translate-y-[2.5rem] opacity-0 transition-all duration-700',
          variant === 'default' ? 'text-backgroundColor' : 'text-surface',
          'group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100 size-full',
        )}
        strokeWidth={1.2}
      />
    </div>
  );
};
