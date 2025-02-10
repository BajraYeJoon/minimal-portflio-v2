import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerMenu({
  isOpen,
  onClick,
}: Readonly<HamburgerMenuProps>) {
  return (
    <button
      className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer"
      onClick={onClick}
      type="button"
      aria-label="Toggle menu"
    >
      {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
    </button>
  );
}
