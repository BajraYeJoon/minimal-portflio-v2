import type { SanityDocument } from '@sanity/client';
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
    <div
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
            className={'text-project'}
            projectPadding={false}
          >
            {work.title}
          </AnimatedTypography>
          <Button variant="link" size="link">
            View Project
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {work.services.map((service: string, index: number) => (
            <div
              key={service}
              className="group/service flex items-center gap-3"
            >
              <span className="text-service opacity-75 transition-opacity duration-700 group-hover:opacity-100">
                {service}
              </span>
              {index < work.services.length - 1 && (
                <div className="bg-surface size-2 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
