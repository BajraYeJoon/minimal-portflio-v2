import type { HTMLAttributes, ReactNode } from 'react';
import { createElement } from 'react';
import { cn } from '~/lib/utils/cn';

type TextVariant =
  | 'mega'
  | 'display'
  | 'title'
  | 'heading'
  | 'lead'
  | 'body'
  | 'small'
  | 'micro';

type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'span'
  | 'div'
  | 'blockquote'
  | 'figcaption'
  | 'li'
  | 'time';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
  variant?: TextVariant;
  muted?: boolean;
  children?: ReactNode;
}

const variantClasses: Record<TextVariant, string> = {
  mega: 'font-display text-mega uppercase',
  display: 'font-display text-display uppercase',
  title: 'font-display text-title uppercase',
  heading: 'text-heading font-medium',
  lead: 'text-lead text-stone',
  body: 'text-body',
  small: 'text-small text-stone',
  micro: 'font-mono text-micro text-stone uppercase',
};

/** Single typographic primitive so the scale stays consistent. */
export function Text({
  as = 'p',
  variant = 'body',
  muted = false,
  className,
  children,
  ...rest
}: TextProps) {
  return createElement(
    as,
    {
      className: cn(variantClasses[variant], muted && 'text-stone', className),
      ...rest,
    },
    children,
  );
}
