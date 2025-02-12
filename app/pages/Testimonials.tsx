import { TestimonialCard } from '~/components/TestimonialCard';
import SectionHeader from '~/components/common/SectionHeader';
import { testimonials } from '~/constant/testimonials';

export default function Testimonials() {
  return (
    <section
      className="border-b-2 border-surface grid md:grid-cols-2 gap-20 py-20"
      id="testimonials"
    >
      <SectionHeader
        smallHeading="Testimonials"
        title="People I've worked with"
      />

      <div className="flex flex-col">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.number}
            {...testimonial}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
