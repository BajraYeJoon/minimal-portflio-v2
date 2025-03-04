import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import AnimatedTypography from '~/components/common/Typography';

export default function CTA() {
  return (
    <section className="border-surface common-padding flex h-fit flex-col items-center justify-center border-b-2 py-20 md:h-[65vh]">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <CommonTitle variant="par-medium">
            HAVE A PROJECT IN MIND ?
          </CommonTitle>
          <AnimatedTypography
            className="text-heading-5 md:text-cta text-center leading-[1.1] uppercase"
            component="h3"
            showDivider={false}
          >
            Let's Work Together
          </AnimatedTypography>
        </div>
        <Button showArrow={false}>Get In Touch</Button>
      </div>
    </section>
  );
}
