import type { FeaturedWork } from '~/types/types';
import { cn } from '~/utils/cn';
import { Button } from './Button';
import AnimatedTypography from './Typography';

interface FeaturedWorkCardProps {
  work: FeaturedWork;
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
        'flex flex-col gap-6 group',
        isLarge && 'md:col-span-2 md:row-span-2',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden rounded-md ',
          isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]',
        )}
      >
        <img
          src={work?.image}
          alt={work?.title}
          className="object-cover w-full h-full animated-transition group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="relative flex items-center justify-between overflow-hidden ">
          <AnimatedTypography component="h4" className={'text-project '}>
            {work?.title}
          </AnimatedTypography>
          <Button variant="link" size="link">
            View Project
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {work?.services?.map((service, index) => (
            <div
              key={`${service?.toLowerCase()}-${index}`}
              className="flex items-center gap-3 group/service"
            >
              <span className="text-service opacity-75 transition-opacity duration-700 group-hover:opacity-100 ">
                {service}
              </span>
              {index < work?.services?.length - 1 && (
                <div className="size-2 rounded-full bg-surface" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
