import AnimatedTypography from '../../../components/common/Typography';

export function DesktopNav() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center justify-between gap-4">
        <AnimatedTypography
          className="text-link uppercase"
          dividerDirection="rtl"
          component="h2"
          to="/"
        >
          Home
        </AnimatedTypography>
        <AnimatedTypography
          className="text-link uppercase"
          dividerDirection="rtl"
          component="h2"
          to="/"
        >
          About
        </AnimatedTypography>
      </div>

      <div className="z-10">
        <AnimatedTypography
          className="text-p-base uppercase"
          dividerDirection="center"
          component="h1"
          to="/"
        >
          Binaya Bajracharya
        </AnimatedTypography>
      </div>

      <div className="flex items-center justify-between gap-4">
        <AnimatedTypography
          className="text-link uppercase"
          dividerDirection="ltr"
          component="h2"
          to="/"
        >
          Work
        </AnimatedTypography>
        <AnimatedTypography
          className="text-link uppercase"
          dividerDirection="ltr"
          component="h2"
          to="/"
        >
          Contact
        </AnimatedTypography>
      </div>
    </div>
  );
}
