import { Marquee } from '~/components/ui/Marquee';
import { Statement } from '~/features/about/Statement';
import { ContactCta } from '~/features/contact/ContactCta';
import { Hero } from '~/features/hero/Hero';
import { Services } from '~/features/services/Services';
import { Testimonials } from '~/features/testimonials/Testimonials';
import { WorkWall } from '~/features/work/WorkWall';
import { safeFetch } from '~/lib/sanity/client';
import {
  ALL_WORKS_QUERY,
  SERVICE_CATEGORIES_QUERY,
  TESTIMONIALS_QUERY,
} from '~/lib/sanity/queries';
import { mergeWorks } from '~/lib/sanity/works';
import { generateMetadata } from '~/lib/seo/metadata';
import type { ServiceCategory, Testimonial, Work } from '~/types';

const TICKER = [
  'React',
  'TypeScript',
  'Design systems',
  'Accessibility',
  'Sanity',
  'Motion',
  'Performance',
];

export async function loader() {
  const [works, categories, testimonials] = await Promise.all([
    safeFetch<Work[]>(ALL_WORKS_QUERY, []),
    safeFetch<ServiceCategory[]>(SERVICE_CATEGORIES_QUERY, []),
    safeFetch<Testimonial[]>(TESTIMONIALS_QUERY, []),
  ]);

  return { works: mergeWorks(works), categories, testimonials };
}

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya — Frontend Developer in Kathmandu',
    description:
      'Frontend developer building fast, accessible React interfaces with TypeScript and Tailwind CSS. 2+ years across product and agency teams. Open to full-time roles and freelance work.',
    path: '/',
  });
}

export default function Home({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  const { works, categories, testimonials } = loaderData;

  return (
    <>
      <Hero work={works[0]} />
      <Marquee items={TICKER} />
      <WorkWall works={works} />
      <Statement />
      <Services categories={categories} />
      <Testimonials testimonials={testimonials} />
      <ContactCta />
    </>
  );
}
