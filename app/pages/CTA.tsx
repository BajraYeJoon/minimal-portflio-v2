import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import AnimatedTypography from '~/components/common/Typography';

export default function CTA() {
  return (
    <section className="border-surface flex h-[65vh] flex-col items-center justify-center border-b-2 py-20">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <CommonTitle variant="par-medium">
            HAVE A PROJECT IN MIND ?
          </CommonTitle>
          <AnimatedTypography
            className="text-cta leading-none uppercase"
            showDivider={false}
          >
            Lets Work Together
          </AnimatedTypography>
        </div>
        <Button showArrow={false}>Get In Touch</Button>
      </div>
    </section>
  );
}
