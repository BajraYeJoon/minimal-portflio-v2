import FeaturedWorkCard from '~/components/FeaturedWorkCard';
import SectionHeader from '~/components/common/SectionHeader';
import type { WorkProps } from '~/types/work';

export default function FeaturedWorks({ works, error }: Readonly<WorkProps>) {
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <section className="container mx-auto px-5 py-24">
      <SectionHeader smallHeading="Portfolio" title="Featured Works" />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <FeaturedWorkCard key={work?.title} work={work} />
        ))}
      </div>
    </section>
  );
}
