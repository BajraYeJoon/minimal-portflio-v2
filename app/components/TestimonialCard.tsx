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
    <div
      className={cn(
        'bg-backgroundColor flex flex-col gap-16 py-2 sm:py-14',
        !isFirst &&
          'border-subtle hover:border-surface animated-transition-colors border-t-2',
      )}
    >
      <CommonTitle className="text-muted text-button-md">{number}</CommonTitle>
      <CommonTitle as="blockquote" variant="par-small" className="text-surface">
        <q>{quote}</q>
      </CommonTitle>

      <figure className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="size-[65px] overflow-hidden rounded-full">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={author?.name}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <figcaption className="flex flex-col">
          <div className="flex items-center gap-2">
            <CommonTitle
              variant="par-medium"
              className="text-surface text-nowrap"
            >
              {author?.name}
            </CommonTitle>
            <CommonTitle
              variant="par-extra-small"
              className="text-muted text-nowrap"
            >
              • {author?.position}
            </CommonTitle>
          </div>
          <CommonTitle
            variant="par-small"
            className="text-muted text-center sm:text-left"
          >
            {author?.company}
          </CommonTitle>
        </figcaption>
      </figure>
    </div>
  );
};
