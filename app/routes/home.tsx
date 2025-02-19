import type { SanityDocument } from '@sanity/client';
import CTA from '~/pages/CTA';
import FeaturedWorks from '~/pages/FeaturedWorks';
import { Hero } from '~/pages/Hero';
import AboutMeProjectReveal from '~/pages/ProjectReveal';
import Services from '~/pages/Services';
import Testimonials from '~/pages/Testimonials';
import { client } from '~/sanity/client';
import { FEATURED_WORKS_QUERY } from '~/sanity/queries/featured-works';
import { TESTIMONIALS_QUERY } from '~/sanity/queries/testimonials';
import { generateMetadata } from '~/utils/generateMetadata';
import type { Route } from './+types/home';

interface LoaderData {
  testimonials: SanityDocument[];
  works: SanityDocument[];
  errors?: {
    testimonials?: string;
    works?: string;
    services?: string;
  };
}

export async function loader(): Promise<LoaderData> {
  const data: LoaderData = {
    testimonials: [],
    works: [],
  };

  try {
    const [testimonialsResult, worksResult] = await Promise.allSettled([
      client.fetch<SanityDocument[]>(TESTIMONIALS_QUERY),
      client.fetch<SanityDocument[]>(FEATURED_WORKS_QUERY),
    ]);

    if (testimonialsResult.status === 'fulfilled') {
      data.testimonials = testimonialsResult.value;
    } else {
      data.errors!.testimonials = 'Failed to load testimonials';
      console.error('Testimonials error:', testimonialsResult.reason);
    }

    if (worksResult.status === 'fulfilled') {
      data.works = worksResult.value;
    } else {
      data.errors!.works = 'Failed to load works';
      console.error('Works error:', worksResult.reason);
    }

    return data;
  } catch (error) {
    console.error('Loader error:', error);
    throw new Response('Error loading data', { status: 500 });
  }
}

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya Enhanced portfolio website',
    description: 'Binaya Bajracharya Enhanced portfolio website',
    path: '/',
  });
}

export default function Home({ loaderData }: Readonly<Route.ComponentProps>) {
  const { testimonials, works } = loaderData as LoaderData;

  return (
    <>
      <Hero />
      <AboutMeProjectReveal />
      <FeaturedWorks works={works} />
      <Services />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  );
}
