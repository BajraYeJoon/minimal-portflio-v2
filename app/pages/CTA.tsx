import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import AnimatedTypography from '~/components/common/Typography';

export default function CTA() {
  return (
    <section
      id="contact"
      className="border-surface common-padding flex min-h-[60vh] flex-col items-center justify-center border-b-2 py-24 md:min-h-[70vh] md:py-32"
    >
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-14 md:gap-16">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          <CommonTitle variant="par-medium" className="text-center">
            HAVE A PROJECT IN MIND?
          </CommonTitle>
          <AnimatedTypography
            className="text-heading-4 md:text-cta text-center leading-[1.1] uppercase tracking-tight"
            component="h3"
            showDivider={false}
          >
            Let's Work Together
          </AnimatedTypography>
        </div>
        <Button showArrow={false} href="#contact">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
