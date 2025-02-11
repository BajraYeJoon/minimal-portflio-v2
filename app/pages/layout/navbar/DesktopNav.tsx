import AnimatedTypography from '../../../components/common/Typography';

export function DesktopNav() {
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
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
          to="/about"
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
          to="/work"
        >
          Work
        </AnimatedTypography>
        <AnimatedTypography
          className="text-link uppercase"
          dividerDirection="ltr"
          component="h2"
          to="/contact"
        >
          Contact
        </AnimatedTypography>
      </div>
    </div>
  );
}
