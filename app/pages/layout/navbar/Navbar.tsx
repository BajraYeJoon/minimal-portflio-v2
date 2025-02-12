import { useState } from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="py-4">
      <DesktopNav />
      <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />
    </nav>
  );
}
