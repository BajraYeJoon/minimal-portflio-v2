import { SectionHeading } from '~/components/ui/SectionHeading';
import { capabilities } from '~/content/site';
import { useSectionReveal } from '~/lib/motion/useSectionReveal';
import type { ServiceCategory } from '~/types';

interface ServicesProps {
  categories: ServiceCategory[];
}

export function Services({ categories }: ServicesProps) {
  const sectionRef = useSectionReveal({ stagger: 0.08 });
  const groups =
    categories.length > 0
      ? categories.map((category) => ({
          title: category.title,
          items: category.services,
        }))
      : capabilities.map((group) => ({
          title: group.title,
          items: [...group.items],
        }));

  return (
    <section
      ref={sectionRef}
      className="shell py-[var(--spacing-section)]"
      id="capabilities"
    >
      <SectionHeading
        index="03"
        label="Capabilities"
        title="What I bring to a team."
        description="Product-minded frontend work: the interface, the system behind it, and the content that keeps it current."
      />

      <div className="mt-14 flex flex-col">
        {groups.map((group, index) => (
          <div
            key={group.title}
            data-reveal
            className="group border-hairline grid grid-cols-[2rem_1fr] gap-4 border-t py-8 md:grid-cols-[4rem_1fr_1fr] md:items-baseline md:gap-8"
          >
            <span className="font-mono text-micro text-stone group-hover:text-ember uppercase transition-colors duration-300">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-heading font-medium transition-transform duration-500 ease-out group-hover:translate-x-1">
              {group.title}
            </h3>
            <ul className="col-span-2 flex flex-wrap gap-x-3 gap-y-1 md:col-span-1 md:justify-end">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-micro text-stone uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
