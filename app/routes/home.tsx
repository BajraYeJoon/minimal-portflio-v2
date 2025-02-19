import type { SanityDocument } from '@sanity/client';
import CTA from '~/pages/CTA';
import FeaturedWorks from '~/pages/FeaturedWorks';
import { Hero } from '~/pages/Hero';
import AboutMeProjectReveal from '~/pages/ProjectReveal';
import Services from '~/pages/Services';
import Testimonials from '~/pages/Testimonials';
import { client } from '~/sanity/client';
import { generateMetadata } from '~/utils/generateMetadata';
import type { Route } from './+types/home';

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(number asc) {
  _id,
  number,
  quote,
  author {
    name,
    position,
    company,
    image
  }
}`;

export async function loader() {
  const testimonials = await client.fetch<SanityDocument[]>(TESTIMONIALS_QUERY);
  console.log('Server-side testimonials:', testimonials);
  return { testimonials };
}

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya Enhanced portfolio website',
    description: 'Binaya Bajracharya Enhanced portfolio website',
    path: '/',
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { testimonials } = loaderData;

  return (
    <>
      <Hero />
      <AboutMeProjectReveal />
      <FeaturedWorks />
      <Services />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  );
}
