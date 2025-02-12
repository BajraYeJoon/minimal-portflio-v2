import CTA from '~/pages/CTA';
import FeaturedWorks from '~/pages/FeaturedWorks';
import { Hero } from '~/pages/Hero';
import AboutMeProjectReveal from '~/pages/ProjectReveal';
import Services from '~/pages/Services';
import Testimonials from '~/pages/Testimonials';
import { generateMetadata } from '~/utils/generateMetadata';

export function meta() {
  return generateMetadata({
    title: 'Binaya Bajracharya Enhanced portfolio website',
    description: 'Binaya Bajracharya Enhanced portfolio website',
    path: '/',
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeProjectReveal />
      <FeaturedWorks />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
