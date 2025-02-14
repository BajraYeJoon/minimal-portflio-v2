import type { TestimonialProps } from '~/types/testimonial';
import { cn } from '~/utils/cn';
import CommonTitle from './common/CommonTitle';

export const TestimonialCard = ({
  number,
  quote,
  author,
  isFirst,
}: TestimonialProps) => {
  return (
    <div
      className={cn(
        'bg-backgroundColor flex flex-col gap-16 py-14',
        !isFirst &&
          'border-subtle hover:border-surface animated-transition-colors border-t-2',
      )}
    >
      <CommonTitle className="text-muted text-button-md">{number}</CommonTitle>

      <CommonTitle as="blockquote" variant="par-small" className="text-surface">
        {quote}
      </CommonTitle>

      <figure className="flex items-center gap-4">
        <div className="size-[65px] overflow-hidden rounded-full">
          <img
            src={author?.image}
            alt={author?.name}
            className="h-full w-full object-cover"
          />
        </div>

        <figcaption className="flex flex-col">
          <div className="flex items-center gap-2">
            <CommonTitle variant="par-medium" className="text-surface">
              {author?.name}
            </CommonTitle>
            <CommonTitle variant="par-extra-small" className="text-muted">
              • {author?.position}
            </CommonTitle>
          </div>
          <CommonTitle variant="par-small" className="text-muted">
            {author?.company}
          </CommonTitle>
        </figcaption>
      </figure>
    </div>
  );
};
