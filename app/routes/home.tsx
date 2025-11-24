import type { SanityDocument } from '@sanity/client';
import React from 'react';
import { Await } from 'react-router';
import CTA from '~/pages/CTA';
import FeaturedWorks from '~/pages/FeaturedWorks';
import { Hero } from '~/pages/Hero';
import AboutMeProjectReveal from '~/pages/ProjectReveal';
import Services from '~/pages/Services';
import Testimonials from '~/pages/Testimonials';
import { client } from '~/sanity/client';
import { FEATURED_WORKS_QUERY } from '~/sanity/queries/featured-works';
import { SERVICE_CATEGORIES_QUERY } from '~/sanity/queries/service-categories';
import { TESTIMONIALS_QUERY } from '~/sanity/queries/testimonials';
import { generateMetadata } from '~/utils/generateMetadata';
import type { Route } from './+types/home';

interface LoaderData {
  testimonials: SanityDocument[];
  works: SanityDocument[];
  serviceCategories: SanityDocument[];
  errors?: {
    testimonials?: string;
    works?: string;
    services?: string;
  };
}

export function loader() {
  const testimonials = client.fetch<SanityDocument[]>(TESTIMONIALS_QUERY);
  const works = client.fetch<SanityDocument[]>(FEATURED_WORKS_QUERY);
  const serviceCategories = client.fetch<SanityDocument[]>(
    SERVICE_CATEGORIES_QUERY,
  );

  return {
    testimonials,
    works,
    serviceCategories,
  };
}

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya - Frontend Developer | React | Next.js',
    description:
      'Expert frontend developer specializing in modern web applications, responsive design, and user experience.  Available for freelance projects.',

    path: '/',
  });
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { testimonials, works, serviceCategories } = loaderData;

  return (
    <>
      <Hero />
      <AboutMeProjectReveal />
      <React.Suspense fallback={<div>Loading works...</div>}>
        <Await resolve={works}>
          {(resolvedWorks) => <FeaturedWorks works={resolvedWorks} />}
        </Await>
      </React.Suspense>
      <React.Suspense fallback={<div>Loading services...</div>}>
        <Await resolve={serviceCategories}>
          {(resolvedServices) => (
            <Services serviceCategories={resolvedServices} />
          )}
        </Await>
      </React.Suspense>
      <React.Suspense fallback={<div>Loading testimonials...</div>}>
        <Await resolve={testimonials}>
          {(resolvedTestimonials) => (
            <Testimonials testimonials={resolvedTestimonials} />
          )}
        </Await>
      </React.Suspense>
      <CTA />
    </>
  );
}
