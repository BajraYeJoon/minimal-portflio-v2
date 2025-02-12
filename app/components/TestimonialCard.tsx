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
        'flex flex-col gap-16 py-14',
        !isFirst && 'border-t border-subtle',
      )}
    >
      <CommonTitle className="text-muted text-button-md">{number}</CommonTitle>

      <CommonTitle variant="par-small" className="text-surface">
        {quote}
      </CommonTitle>

      <div className="flex items-center gap-4">
        <div className="size-[65px] rounded-full overflow-hidden">
          <img
            src={author?.image}
            alt={author?.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
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
        </div>
      </div>
    </div>
  );
};
