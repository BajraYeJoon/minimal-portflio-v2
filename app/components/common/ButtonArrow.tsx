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
    <div className={cn('relative size-3 overflow-hidden md:size-5', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700',
          'text-surface',
          'size-full group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:opacity-0',
        )}
        style={{ transform: `scale(1.2)` }}
        aria-labelledby="arrowIconTitle"
        role="img"
      >
        <title id="arrowIconTitle">Arrow Icon</title>
        <path
          fillRule="evenodd"
          d="M14 2.5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0 0 1h7.293L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V11a.5.5 0 0 0 1 0V2.5z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-labelledby="arrowIconTitle"
        role="img"
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-[2.5rem] translate-y-[2.5rem] opacity-0 transition-all duration-700',
          variant === 'default' ? 'text-backgroundColor' : 'text-surface',
          'size-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100',
        )}
        style={{ transform: `scale(1.2)` }}
      >
        <title id="arrowIconTitle">Arrow Icon</title>
        <path
          fillRule="evenodd"
          d="M14 2.5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0 0 1h7.293L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V11a.5.5 0 0 0 1 0V2.5z"
        />
      </svg>
    </div>
  );
};
