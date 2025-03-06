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
      className="flex h-8 w-8 cursor-pointer flex-col items-center justify-center lg:hidden"
      onClick={onToggle}
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="img"
          aria-label="Close icon"
          focusable="false"
        >
          <title>Close Icon</title>
          <desc>
            An 'X' shaped cross icon, commonly used for closing modals or
            alerts.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.364 5.636a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95A1 1 0 1 1 7.05 5.636l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="img"
          aria-label="Menu icon"
          focusable="false"
        >
          <title>Menu Icon</title>
          <desc>
            A three-line hamburger menu icon, commonly used for navigation
            menus.
          </desc>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm1 4a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2H5z"
          />
        </svg>
      )}
    </button>
  );
}
