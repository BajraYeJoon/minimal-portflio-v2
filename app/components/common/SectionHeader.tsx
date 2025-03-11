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
    <div className={cn('flex flex-col gap-3 uppercase', className)}>
      <h3
        className={cn(
          'text-link lg:text-small before:bg-surface items-center justify-center tracking-wide before:mr-2 before:inline-flex before:size-3 before:rounded-full',
          subtitleClassName,
        )}
      >
        {smallHeading}
      </h3>

      {title && (
        <h2
          className={cn(
            'text-heading-4 lg:text-heading-2',
            'leading-tight tracking-tight',
            'max-w-full',
            titleClassName,
          )}
        >
          {title}
        </h2>
        // <LetterPullUp
        //   text={title}
        //   className={cn(
        //     'text-heading-4 lg:text-heading-2',
        //     'leading-tight tracking-tight',
        //     'max-w-full',
        //     titleClassName,
        //   )}
        // />
      )}
    </div>
  );
}
