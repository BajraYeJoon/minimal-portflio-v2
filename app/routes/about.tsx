import { PageHeader } from '~/components/ui/PageHeader';
import { Stat } from '~/components/ui/Stat';
import { Text } from '~/components/ui/Text';
import { defaultExperience } from '~/content/experience';
import { site, stats } from '~/content/site';
import { ProjectGrid } from '~/features/about/ProjectGrid';
import { Statement } from '~/features/about/Statement';
import { ContactCta } from '~/features/contact/ContactCta';
import { Services } from '~/features/services/Services';
import { useSectionReveal } from '~/lib/motion/useSectionReveal';
import { safeFetch } from '~/lib/sanity/client';
import {
  EXPERIENCE_QUERY,
  SERVICE_CATEGORIES_QUERY,
} from '~/lib/sanity/queries';
import { generateMetadata } from '~/lib/seo/metadata';
import type { Experience, ServiceCategory } from '~/types';

export async function loader() {
  const [categories, experience] = await Promise.all([
    safeFetch<ServiceCategory[]>(SERVICE_CATEGORIES_QUERY, []),
    safeFetch<Experience[]>(EXPERIENCE_QUERY, []),
  ]);

  return {
    categories,
    experience: experience.length > 0 ? experience : defaultExperience,
  };
}

export function meta() {
  return generateMetadata({
    title: 'About — Binaya Bajracharya',
    description:
      'Frontend developer in Bhaktapur, Nepal. React, TypeScript, design systems and accessibility, with 2+ years across product and agency teams.',
    path: '/about',
  });
}

export default function AboutPage({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  const revealRef = useSectionReveal();

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Interfaces that hold up"
        description={`I'm ${site.name}, a frontend developer working out of ${site.location}. Day to day I build with React and TypeScript, and put Sanity behind the content so the team can edit without a deploy.`}
      />

      <Statement showLink={false} />

      <section
        ref={revealRef}
        className="shell flex flex-col gap-12 py-[var(--spacing-section)]"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <div className="border-hairline flex items-baseline gap-4 border-t pt-4">
              <Text variant="micro" className="text-ember">
                01
              </Text>
              <Text variant="micro">Experience</Text>
            </div>

            <ul className="flex flex-col">
              {loaderData.experience.map((entry) => (
                <li
                  key={entry.company}
                  data-reveal
                  className="border-hairline flex flex-col gap-2 border-t py-5 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-heading text-paper font-medium">
                      {entry.company}
                    </span>
                    <span className="font-mono text-micro text-stone uppercase">
                      {entry.role}
                    </span>
                  </div>
                  <p className="text-small text-stone max-w-sm">
                    {entry.summary}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="border-hairline flex flex-col gap-3 border-t pt-4">
              {[
                ['Based in', site.location],
                ['Time zone', site.timeZone],
                ['Focus', site.focus],
                ['Status', 'Open to work'],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  data-reveal
                  className="flex items-baseline justify-between gap-6"
                >
                  <dt className="font-mono text-micro text-stone uppercase">
                    {term}
                  </dt>
                  <dd className="text-small text-right text-paper">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal className="flex flex-col gap-5">
            <Text variant="lead" className="text-paper">
              My work sits between design and engineering. I take an ambiguous
              brief and turn it into a component system, then ship it with
              attention to the details users notice without naming.
            </Text>
            <Text>
              At HamroPatro Inc I&apos;ve worked across the product surface —
              the calendar super app alongside the health, jyotish, cricket and
              football services. Before that, client interfaces and component
              systems at AITC International.
            </Text>
            <Text variant="small">
              Pages that load before the scroll starts, interfaces that work
              from a keyboard, transitions that explain a change instead of
              decorating it. Outside of product work I take on freelance
              projects: portfolios, marketing sites, and small product
              interfaces.
            </Text>
          </div>
        </div>

        <div className="border-hairline grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <ProjectGrid className="mt-6" />
      </section>

      <Services categories={loaderData.categories} />
      <ContactCta />
    </>
  );
}
