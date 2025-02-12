import FeaturedWorkCard from '~/components/FeaturedWorkCard';
import SectionHeader from '~/components/common/SectionHeader';
import { featuredWorks } from '~/constant/data';

export default function FeaturedWorks() {
  return (
    <section
      className="border-b-2 border-surface flex gap-20 flex-col py-14"
      id="works"
    >
      <SectionHeader smallHeading="Portfolio" title="Featured Works" />

      {/* Featured Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-x-5 gap-y-10">
        {featuredWorks?.map((work) => (
          <FeaturedWorkCard key={work?.title} work={work} />
        ))}
      </div>
    </section>
  );
}
