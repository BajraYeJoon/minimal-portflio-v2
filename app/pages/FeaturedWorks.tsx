import FeaturedWorkCard from '~/components/FeaturedWorkCard';
import SectionHeader from '~/components/common/SectionHeader';
import { featuredWorks } from '~/constant/data';

export default function FeaturedWorks() {
  return (
    <section
      className="border-surface common-padding flex flex-col gap-20 border-b-2 py-14"
      id="works"
    >
      <SectionHeader smallHeading="Portfolio" title="Featured Works" />

      {/* Featured Works Grid */}
      <div className="grid auto-rows-auto grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
        {featuredWorks?.map((work) => (
          <FeaturedWorkCard key={work?.title} work={work} />
        ))}
      </div>
    </section>
  );
}
