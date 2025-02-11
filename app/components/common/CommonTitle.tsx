import { cn } from '~/utils/cn';

type TitleVariant =
  | 'mainHeading'
  | 'par-extra-large'
  | 'par-large'
  | 'par-medium'
  | 'par-base'
  | 'par-small'
  | 'service-heading';

type TitleAlignment = 'left' | 'center' | 'right';

interface CommonTitleProps {
  variant?: TitleVariant;
  children: React.ReactNode;
  className?: string;
  align?: TitleAlignment;
  id?: string;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const variantStyles: Record<TitleVariant, string> = {
  mainHeading: 'text-main-heading',
  'par-extra-large': 'text-p-base md:text-p-lg lg:text-p-xl',
  'par-large': 'text-p-sm md:text-p-base lg:text-p-lg',
  'par-medium': 'text-p-sm md:text-p-md lg:text-p-base',
  'par-base': 'text-p-sm md:text-p-base',
  'par-small': 'text-p-sm',

  'service-heading': 'text-heading-6 md:text-heading-5 lg:text-heading-4',
};

const alignmentStyles: Record<TitleAlignment, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const CommonTitle: React.FC<CommonTitleProps> = ({
  variant = 'par-base',
  children,
  className = '',
  align = 'left',
  id,
  as,
}) => {
  const Component = as ?? (variant === 'mainHeading' ? 'h2' : 'p');

  const baseStyles = cn(
    'tracking-normal',
    variantStyles[variant],
    alignmentStyles[align],
    className,
  );

  return (
    <Component
      id={id}
      aria-level={Number(Component.match(/h(\d)/)?.[1])}
      className={baseStyles}
    >
      {children}
    </Component>
  );
};

export default CommonTitle;
