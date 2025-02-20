import type { SanityDocument } from '@sanity/client';
import FeaturedWorkCard from '~/components/FeaturedWorkCard';
import SectionHeader from '~/components/common/SectionHeader';

interface FeaturedWorkProps {
  works: SanityDocument[];
}
export default function FeaturedWorks({ works }: FeaturedWorkProps) {
  return (
    <section className="border-surface common-padding flex flex-col gap-20 border-b-2 py-20">
      <SectionHeader smallHeading="Portfolio" title="Featured Works" />

      {/* Featured Works Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
        {works?.map((work: SanityDocument) => (
          <FeaturedWorkCard key={work?.title} work={work} />
        ))}
      </div>
    </section>
  );
}
