import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { Link } from 'react-router';
import { cn } from '~/lib/utils';
import { ButtonArrow } from './ButtonArrow';
import AnimatedTypography from './Typography';

type ButtonVariant = 'default' | 'link';
type ButtonSize = 'default' | 'link';

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  href?: string;
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
    'group inline-flex items-center justify-center rounded-full transition-colors leading-none duration-300 motion-safe:duration-700 relative overflow-hidden disabled:pointer-events-none disabled:opacity-50 text-button-semi md:text-button-md';

  const variantClasses = {
    default: cn(
      'border border-surface bg-transparent hover:text-backgroundColor',
      'content-none before:absolute before:scale-0 hover:before:scale-100 before:bg-white',
      'before:size-[240px] before:rounded-full',
      'before:transition-transform before:duration-300 motion-safe:before:duration-800 before:origin-bottom before:ease-in-out',
      '',
    ),
    link: '',
  }[variant];

  const sizeClasses = {
    default: 'py-4 md:py-6 px-4 md:px-8 ',
    link: 'p-2',
  }[size];

  return cn(baseClasses, variantClasses, sizeClasses, className);
};

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({
    className = 'flex gap-3 w-fit relative items-center justify-center',
    variant = 'default',
    size = 'default',
    showArrow = true,
    children,
    href,
    ...props
  }) => {
    return (
      <Link
        to={'/'}
        className={getButtonClasses({
          variant,
          size,
          className,
        })}
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
      </Link>
    );
  },
);

Button.displayName = 'Button';

export { Button };
