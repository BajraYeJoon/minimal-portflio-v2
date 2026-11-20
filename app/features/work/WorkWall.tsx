import { MediaReveal } from '~/components/ui/MediaReveal';
import { SectionHeading } from '~/components/ui/SectionHeading';
import { Text } from '~/components/ui/Text';
import { useSectionReveal } from '~/lib/motion/useSectionReveal';
import { cn } from '~/lib/utils/cn';
import { hostOf } from '~/lib/utils/host';
import type { Work } from '~/types';

/**
 * Full project index on the home page: a sticky section label beside an
 * asymmetric gallery, with the first project running full width.
 */
export function WorkWall({ works }: { works: Work[] }) {
  const gridRef = useSectionReveal<HTMLDivElement>({ stagger: 0.06 });
  const [lead, ...rest] = works;

  return (
    <section className="shell py-[var(--spacing-section)]">
      <div
        id="work"
        className="grid scroll-mt-28 gap-14 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start lg:gap-16"
      >
        <div className="flex flex-col gap-8 lg:sticky lg:top-28">
          <SectionHeading
            index="01"
            label="Selected work"
            title="Built, launched, live."
          />

          <Text variant="small" className="text-stone max-w-[30ch]">
            Product surfaces and client sites, most of them still in daily use.
            Every card opens the live project.
          </Text>

          <div className="border-hairline flex items-baseline justify-between gap-4 border-t pt-3">
            <Text variant="micro" className="text-stone">
              {String(works.length).padStart(2, '0')} projects
            </Text>
            <Text variant="micro" className="text-stone">
              Open in new tab ↗
            </Text>
          </div>
        </div>

        {works.length === 0 ? (
          <div className="border-hairline border p-8">
            <Text variant="heading">Case studies are being updated.</Text>
            <Text variant="small" className="mt-2">
              New work is being written up. Reach out for a walkthrough in the
              meantime.
            </Text>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-10"
          >
            {lead && (
              <WorkCard
                work={lead}
                index={0}
                featured
                className="sm:col-span-2"
              />
            )}

            {rest.map((work, offset) => (
              <WorkCard
                key={work._id}
                work={work}
                index={offset + 1}
                className={cn(offset % 2 === 1 && 'sm:mt-16')}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function WorkCard({
  work,
  index,
  featured = false,
  className,
}: {
  work: Work;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <a
      href={work.link}
      target="_blank"
      rel="noreferrer noopener"
      data-cursor="view"
      data-reveal
      className={cn('group flex flex-col gap-4', className)}
    >
      <div className="relative">
        <MediaReveal
          src={work.image}
          alt={`${work.title} — interface preview`}
          wrapperClassName={cn(
            'w-full border border-hairline',
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]',
          )}
        />

        <span
          aria-hidden="true"
          className="bg-paper text-onyx pointer-events-none absolute right-3 bottom-3 flex translate-y-2 items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.14em] uppercase opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          Open
          <span className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="border-hairline flex items-baseline justify-between gap-4 border-t pt-3">
          <div className="flex items-baseline gap-3">
            <span className="text-stone shrink-0 font-mono text-micro tabular-nums">
              {number}
            </span>
            <h3
              className={cn(
                'font-display uppercase transition-transform duration-500 ease-out group-hover:translate-x-1',
                featured ? 'text-title' : 'text-heading',
              )}
            >
              {work.title}
            </h3>
          </div>
          <span
            aria-hidden="true"
            className="text-stone group-hover:text-ember shrink-0 text-lg transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </div>

        <div className="text-stone flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-micro uppercase">
          <span>{work.services.join(' · ')}</span>
          <span aria-hidden="true" className="text-graphite">
            /
          </span>
          <span>{hostOf(work.link)}</span>
        </div>
      </div>
    </a>
  );
}
