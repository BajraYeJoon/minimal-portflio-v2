import type { SanityDocument } from '@sanity/client';
import { useRef } from 'react';
import { TestimonialCard } from '~/components/TestimonialCard';
import SectionHeader from '~/components/common/SectionHeader';

interface TestimonialsProps {
  testimonials: SanityDocument[];
}

export default function Testimonials({
  testimonials,
}: Readonly<TestimonialsProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="border-surface common-padding grid gap-20 border-b-2 py-20 md:grid-cols-2"
      id="testimonials"
    >
      <div className="sticky top-[10vh] h-fit">
        <SectionHeader
          smallHeading="Testimonials"
          title="People I've Worked With"
        />
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${testimonials?.length * 60}vh` }}
      >
        {testimonials?.map((testimonial, index) => (
          <div
            key={testimonial._id}
            className="sticky top-[10vh] right-0 left-0 z-40 px-4 md:px-16"
          >
            <TestimonialCard {...testimonial} isFirst={index === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
