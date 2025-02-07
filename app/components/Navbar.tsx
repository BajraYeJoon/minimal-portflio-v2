import { Link } from 'react-router';
import HoverTranslateAnimation from './common/HoverTranslateAnimation';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          <HoverTranslateAnimation>Binaya Bajracharya</HoverTranslateAnimation>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
