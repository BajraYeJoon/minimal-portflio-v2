import { cn } from '~/utils/cn';

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
    <div className={cn('flex flex-col uppercase  gap-3 ', className)}>
      <h2
        className={cn(
          'text-link lg:text-small before:inline-flex items-center justify-center tracking-wide  before:size-3 before:bg-surface before:rounded-full before:mr-2',
          subtitleClassName,
        )}
      >
        {smallHeading}
      </h2>
      {title && (
        <h2
          className={cn(
            'text-heading-4 lg:text-heading-2',
            'leading-tight tracking-normal',
            titleClassName,
          )}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
