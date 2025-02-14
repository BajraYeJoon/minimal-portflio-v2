import { useState } from 'react';
import StickyHeader from '~/components/StickyHeader';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <StickyHeader>
      <DesktopNav />
      <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />
    </StickyHeader>
  );
}
