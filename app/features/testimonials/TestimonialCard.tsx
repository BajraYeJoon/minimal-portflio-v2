import { Text } from '~/components/ui/Text';
import { urlFor } from '~/lib/sanity/image';
import type { Testimonial } from '~/types';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, author, number } = testimonial;
  const avatar = urlFor(author.image)?.width(96).height(96).fit('crop').url();

  return (
    <figure className="border-hairline flex h-full flex-col justify-between gap-10 border-t pt-6">
      <div className="flex items-start gap-4">
        <span
          className="font-display text-ember text-heading leading-none"
          aria-hidden="true"
        >
          ”
        </span>
        <blockquote className="text-lead text-paper">{quote}</blockquote>
      </div>

      <figcaption className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-obsidian size-10 shrink-0 overflow-hidden rounded-full border border-hairline">
            {avatar ? (
              <img
                src={avatar}
                alt=""
                loading="lazy"
                width={96}
                height={96}
                className="size-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="font-mono text-micro text-stone flex size-full items-center justify-center uppercase"
              >
                {author.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <Text variant="small" className="text-paper">
              {author.name}
            </Text>
            <span className="font-mono text-micro text-stone uppercase">
              {author.position}, {author.company}
            </span>
          </div>
        </div>
        <span className="font-mono text-micro text-stone uppercase">
          {number}
        </span>
      </figcaption>
    </figure>
  );
}
