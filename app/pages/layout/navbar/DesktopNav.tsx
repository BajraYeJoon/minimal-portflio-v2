import { navigation } from '~/constant/data';
import AnimatedTypography from '../../../components/common/Typography';

export function DesktopNav() {
  return (
    <div className="hidden w-full items-center justify-between lg:flex">
      <div className="flex items-center justify-between gap-4">
        {navigation.slice(0, 2).map((item) => (
          <AnimatedTypography
            key={item.name}
            className="uppercase"
            dividerDirection="rtl"
            component="h2"
            to={item.path}
          >
            {item.name}
          </AnimatedTypography>
        ))}
      </div>

      <div className="z-10">
        <AnimatedTypography
          className="lg:text-p-md uppercase"
          dividerDirection="center"
          component="h1"
          to="/#home"
        >
          Binaya Bajracharya
        </AnimatedTypography>
      </div>

      <div className="flex items-center justify-between gap-4">
        {navigation.slice(2).map((item) => (
          <AnimatedTypography
            key={item.name}
            className="uppercase"
            dividerDirection="ltr"
            component="h2"
            to={item.path}
          >
            {item.name}
          </AnimatedTypography>
        ))}
      </div>
    </div>
  );
}
