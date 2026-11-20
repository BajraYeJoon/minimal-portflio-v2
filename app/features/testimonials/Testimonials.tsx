import { SectionHeading } from '~/components/ui/SectionHeading';
import { useSectionReveal } from '~/lib/motion/useSectionReveal';
import type { Testimonial } from '~/types';
import { TestimonialCard } from './TestimonialCard';

export function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const sectionRef = useSectionReveal({ stagger: 0.12, distance: 24 });

  if (testimonials.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="border-hairline border-t py-[var(--spacing-section)]"
      id="testimonials"
    >
      <div className="shell flex flex-col gap-12">
        <SectionHeading
          index="04"
          label="Testimonials"
          title="In their words."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} data-reveal>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
