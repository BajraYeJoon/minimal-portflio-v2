import { cn } from '~/utils/cn';
import LetterPullUp from './LetterPullUp';

interface SectionHeaderProps {
  title?: string;
  smallHeading: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  title,
  smallHeading,
  className,
  titleClassName,
  subtitleClassName,
}: Readonly<SectionHeaderProps>) {
  return (
    <div className={cn('flex flex-col gap-3 uppercase', className)}>
      <h2
        className={cn(
          'text-link lg:text-small before:bg-surface items-center justify-center tracking-wide before:mr-2 before:inline-flex before:size-3 before:rounded-full',
          subtitleClassName,
        )}
      >
        {smallHeading}
      </h2>

      {title && (
        <LetterPullUp
          text={title}
          className={cn(
            'text-heading-4 lg:text-heading-2',
            'leading-tight tracking-tight',
            'max-w-full',
            titleClassName,
          )}
        />
      )}
    </div>
  );
}
