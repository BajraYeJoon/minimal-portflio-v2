import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { cn } from '~/lib/utils';
import { ButtonArrow } from './ButtonArrow';
import AnimatedTypography from './Typography';

type ButtonVariant = 'default' | 'link';
type ButtonSize = 'default' | 'link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
  children?: ReactNode;
}

const getButtonClasses = ({
  variant = 'default',
  size = 'default',
  className = '',
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center rounded-full transition-colors duration-700 relative overflow-hidden disabled:pointer-events-none disabled:opacity-50 text-button-semi md:text-button-md';

  const variantClasses = {
    default: cn(
      'border border-surface bg-transparent hover:text-backgroundColor',
      'content-none before:absolute before:scale-0 hover:before:scale-100 before:bg-white',
      'before:size-[200px] before:rounded-full',
      'before:transition-transform before:duration-800 before:origin-bottom before:ease-in-out',
      '',
    ),
    link: '',
  }[variant];

  const sizeClasses = {
    default: 'py-4 md:py-6 px-4 md:px-8 ',
    link: 'py-2 px-2',
  }[size];

  return cn(baseClasses, variantClasses, sizeClasses, className);
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = 'flex gap-3 relative items-center justify-center',
      variant = 'default',
      size = 'default',
      showArrow = true,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={getButtonClasses({
          variant,
          size,
          className,
        })}
        ref={ref}
        {...props}
      >
        <AnimatedTypography
          component="span"
          showDivider={variant === 'link'}
          animated={variant === 'default'}
        >
          {children}
        </AnimatedTypography>
        {showArrow && <ButtonArrow variant={variant} />}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
