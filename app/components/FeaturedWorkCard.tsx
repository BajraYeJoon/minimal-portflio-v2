import type { SanityDocument } from '@sanity/client';
import { Link } from 'react-router';
import { cn } from '~/utils/cn';
import { Button } from './common/Button';
import AnimatedTypography from './common/Typography';

interface FeaturedWorkCardProps {
  work: SanityDocument;
  className?: string;
}

export default function FeaturedWorkCard({
  work,
  className,
}: Readonly<FeaturedWorkCardProps>) {
  const isLarge = work.size === 'large';

  return (
    <Link
      to={'/'}
      className={cn(
        'group flex flex-col gap-6',
        isLarge && 'md:col-span-2 md:row-span-2',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-md',
          isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]',
        )}
      >
        <img
          src={work.image}
          alt={work.title}
          className="animated-transition h-full w-full scale-105 object-cover group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="relative flex items-center justify-between overflow-hidden">
          <AnimatedTypography
            component="h4"
            className="text-p-sm md:text-project"
            projectPadding={false}
          >
            {work.title}
          </AnimatedTypography>
          <Button variant="link" size="link" className="hidden sm:block">
            View Project
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 gap-y-0.5">
          {work.services.map((service: string, index: number) => (
            <div
              key={service}
              className="group/service flex items-center gap-3"
            >
              <span className="text-button-semi md:text-service opacity-75 transition-opacity duration-700 group-hover:opacity-100">
                {service}
              </span>
              {index < work.services.length - 1 && (
                <div className="bg-surface size-1 rounded-full md:size-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
