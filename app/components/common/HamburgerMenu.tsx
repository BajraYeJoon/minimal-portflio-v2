import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

interface HamburgerMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function HamburgerMenu({
  isOpen,
  onToggle,
}: Readonly<HamburgerMenuProps>) {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
      onClick={onToggle}
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
    </button>
  );
}
