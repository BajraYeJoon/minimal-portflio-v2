import { createElement, forwardRef } from 'react';
import { Link } from 'react-router';
import { cn } from '~/utils/cn';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface AnimatedTypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  component?: TypographyElement;
  dividerDirection?: 'ltr' | 'rtl' | 'center';
  to?: string; // For React Router links
}

const AnimatedTypography = forwardRef<HTMLElement, AnimatedTypographyProps>(
  (
    {
      component = 'p',
      className = '',
      children,
      dividerDirection = 'ltr',
      to,
      ...rest
    },
    ref,
  ) => {
    const content = (
      <div className="relative overflow-hidden tracking-wider">
        {createElement(
          component,
          {
            ref,
            className: cn(
              'inline-block translate-y-0 scale-100  group-hover:scale-75 animated-transition',
              'group-hover:-translate-y-full',
            ),
            ...rest,
          },
          children,
        )}
        {createElement(
          component,
          {
            className: cn(
              'inline-block absolute left-0 top-full  w-full',
              'animated-transition group-hover:-translate-y-full  scale-75 group-hover:scale-100',
            ),
            ...rest,
          },
          children,
        )}
      </div>
    );

    const wrappedContent = (
      <>
        {content}
        <div className="relative h-[2px] w-full mt-1">
          <div
            className={cn(
              'absolute inset-0 bg-current  transform scale-x-0',
              'animated-transition group-hover:scale-x-100',
              dividerDirection === 'rtl' && 'origin-right',
              dividerDirection === 'ltr' && 'origin-left',
              dividerDirection === 'center' && 'origin-center',
            )}
          />
        </div>
      </>
    );

    if (to) {
      return (
        <Link to={to} className={cn('group', className)}>
          {wrappedContent}
        </Link>
      );
    }

    return <div className={cn('group', className)}>{wrappedContent}</div>;
  },
);

AnimatedTypography.displayName = 'AnimatedTypography';

export default AnimatedTypography;
