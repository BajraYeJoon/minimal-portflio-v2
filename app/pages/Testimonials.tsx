import { TestimonialCard } from '~/components/TestimonialCard';
import SectionHeader from '~/components/common/SectionHeader';
import { testimonials } from '~/constant/testimonials';

export default function Testimonials() {
  return (
    <section
      className="border-surface grid gap-20 border-b-2 py-20 md:grid-cols-2"
      id="testimonials"
    >
      <SectionHeader
        smallHeading="Testimonials"
        title="People I've Worked With"
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
