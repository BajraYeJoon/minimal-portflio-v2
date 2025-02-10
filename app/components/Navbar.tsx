import { useState } from 'react';
import { cn } from '~/utils/cn';
import { HamburgerMenu } from './common/HamburgerMenu';
import AnimatedTypography from './common/Typography';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="nav-wrapper relative py-4">
      <div className="nav-container  w-full flex items-center justify-between">
        {/* Desktop Navigation */}
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

        {/* Hamburger Menu Button */}
        <div className="z-50 lg:hidden flex items-center w-full justify-between">
          <AnimatedTypography
            className="text-p-base uppercase"
            dividerDirection="center"
            component="h1"
            to="/"
          >
            Binaya Bajracharya
          </AnimatedTypography>
          <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            'absolute inset-0 w-full h-screen bg-backgroundColor bg-opacity-95 transition-transform duration-300 ease-in-out lg:hidden',
            'flex flex-col items-center justify-center gap-8',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <AnimatedTypography
            className="text-p-md uppercase"
            dividerDirection="center"
            component="h2"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </AnimatedTypography>
          <AnimatedTypography
            className="text-p-md uppercase"
            dividerDirection="center"
            component="h2"
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </AnimatedTypography>
          <AnimatedTypography
            className="text-p-md uppercase"
            dividerDirection="center"
            component="h2"
            to="/work"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </AnimatedTypography>
          <AnimatedTypography
            className="text-p-md uppercase"
            dividerDirection="center"
            component="h2"
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </AnimatedTypography>
        </div>
      </div>
    </nav>
  );
}
