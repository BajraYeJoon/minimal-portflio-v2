import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';
import { cn } from '~/lib/utils/cn';
import { Magnetic } from './Magnetic';

type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Internal route. */
  to?: string;
  /** External URL — rendered as an anchor. */
  href?: string;
  showArrow?: boolean;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

const baseClasses =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-mono text-micro uppercase tracking-[0.14em] transition-[background-color,border-color,color,transform] duration-300 active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  solid: 'bg-paper text-onyx hover:bg-fog',
  outline:
    'border border-hairline-strong text-paper hover:border-paper hover:bg-obsidian',
  ghost: 'text-stone hover:text-paper',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4',
  md: 'h-12 px-6',
};

export function Button({
  variant = 'solid',
  size = 'md',
  to,
  href,
  showArrow = false,
  magnetic = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  const content = (
    <>
      <span className="text-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="text-[0.95em] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        >
          ↗
        </span>
      )}
    </>
  );

  const element = to ? (
    <Link to={to} className={classes}>
      {content}
    </Link>
  ) : href ? (
    <a
      href={href}
      className={classes}
      {...(/^https?:\/\//.test(href)
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : {})}
    >
      {content}
    </a>
  ) : (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );

  if (!magnetic) return element;

  return <Magnetic className="inline-flex">{element}</Magnetic>;
}
