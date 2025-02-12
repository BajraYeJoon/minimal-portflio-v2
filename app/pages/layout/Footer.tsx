import { Link } from 'react-router';
import CommonTitle from '~/components/common/CommonTitle';
import AnimatedTypography from '~/components/common/Typography';
import { navigation, socialLinks } from '~/constant/data';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Footer() {
  return (
    <>
      <div className="flex border-b-2 border-surface items-center py-12 justify-between gap-8">
        {/* Logo */}
        <Link to="/">
          <CommonTitle className="uppercase">John Carter</CommonTitle>
        </Link>

        <ul className="flex items-center gap-8">
          {navigation.map((item, i) => (
            <li key={item?.name}>
              <AnimatedTypography
                className="text-p-md uppercase text-white"
                dividerDirection="center"
                component="h2"
                to={item?.path}
              >
                {item?.name}
              </AnimatedTypography>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <ul className="flex items-center gap-6">
          {socialLinks.map((item, i) => (
            <li key={item?.name}>
              <AnimatedTypography
                className="text-p-md uppercase text-white"
                dividerDirection="center"
                component="h2"
                to={item?.link}
                showDivider={false}
              >
                {item?.icon && <item.icon size={32} />}
              </AnimatedTypography>
            </li>
          ))}
        </ul>
      </div>

      <span className="mx-auto py-12">
        {`Copyright ${new Date().getFullYear()}. All rights reserved.`} | Made
        with &hearts; by Myself
      </span>
    </>
  );
}
