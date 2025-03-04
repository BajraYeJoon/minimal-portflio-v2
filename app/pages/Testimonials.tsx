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
      className="border-surface common-padding grid gap-6 border-b-2 py-10 md:gap-10 md:py-20 lg:grid-cols-2 lg:gap-20"
      id="testimonials"
    >
      <div className="h-fit lg:sticky lg:top-[10vh]">
        <SectionHeader
          smallHeading="Testimonials"
          title="People I've Worked With"
        />
      </div>

      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          height: testimonials?.length
            ? `calc(${testimonials.length} * var(--testimonial-height))`
            : 'auto',
        }}
      >
        {testimonials?.map((testimonial, index) => (
          <div
            key={testimonial._id}
            className="bg-background sticky top-[10vh] right-0 left-0 w-full px-2 sm:px-4 md:px-8 lg:px-16"
            style={{
              zIndex: index + 1,
              height: 'var(--testimonial-height)',
              backgroundImage: 'var(--backgroundColor)',
            }}
          >
            <div className="flex h-full w-full items-center">
              <TestimonialCard {...testimonial} isFirst={index === 0} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
