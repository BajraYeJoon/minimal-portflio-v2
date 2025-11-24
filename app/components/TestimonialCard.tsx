import type { SanityDocument } from '@sanity/client';
import { urlFor } from '~/sanity/imageBuilder';
import { cn } from '~/utils/cn';
import CommonTitle from './common/CommonTitle';

interface TestimonialCardProps extends SanityDocument {
  isFirst?: boolean;
}

export const TestimonialCard = ({
  number,
  quote,
  author,
  isFirst,
}: TestimonialCardProps) => {
  const imageUrl = author?.image
    ? urlFor(author.image)?.width(65)?.height(65)?.url()
    : '';

  return (
    <article
      className={cn(
        'bg-backgroundColor flex w-full flex-col gap-8 py-6 md:gap-12 md:py-10',
        !isFirst &&
          'border-subtle hover:border-surface animated-transition-colors border-t-2',
      )}
      aria-label={`Testimonial from ${author?.name}`}
    >
      <CommonTitle className="text-muted text-button-md md:text-button-lg">
        {number}
      </CommonTitle>

      <CommonTitle
        as="blockquote"
        variant="par-small"
        className="text-surface leading-relaxed"
      >
        <q cite={author?.company || undefined}>{quote}</q>
      </CommonTitle>

      <figure className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="size-[65px] flex-shrink-0 overflow-hidden rounded-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${author?.name} profile`}
              className="h-full w-full object-cover"
              loading="lazy"
              title={`${author?.name} profile`}
              width={65}
              height={65}
            />
          ) : (
            <div className="h-full w-full bg-gray-200" aria-hidden="true" />
          )}
        </div>

        <figcaption className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
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
    </article>
  );
};
