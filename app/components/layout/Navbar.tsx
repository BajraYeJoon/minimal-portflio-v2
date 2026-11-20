import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Button } from '~/components/ui/Button';
import { navigation } from '~/content/navigation';
import { site } from '~/content/site';
import { socialLinks } from '~/content/social';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';
import { cn } from '~/lib/utils/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;

      if (prefersReducedMotion()) {
        gsap.set(menu, { autoAlpha: isOpen ? 1 : 0 });
        return;
      }

      const items = menu.querySelectorAll('[data-menu-item]');
      const timeline = gsap.timeline();

      if (isOpen) {
        timeline
          .set(menu, { autoAlpha: 1 })
          .fromTo(
            items,
            { yPercent: 115 },
            { yPercent: 0, duration: 0.65, stagger: 0.06, ease: 'expo.out' },
          );
      } else {
        timeline
          .to(menu, { autoAlpha: 0, duration: 0.28, ease: 'power2.in' })
          .set(menu, { pointerEvents: 'none' });
      }

      return () => timeline.kill();
    },
    { dependencies: [isOpen], scope: menuRef },
  );

  return (
    <>
      <header
        className={cn(
          'pointer-events-none fixed inset-x-0 top-0 z-50 pt-4 transition-[background-color,border-color,padding] duration-500 md:pt-6',
          isScrolled
            ? 'bg-onyx border-hairline border-b pb-3'
            : 'border-b border-transparent pb-0',
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            'from-onyx via-onyx/60 absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b to-transparent transition-opacity duration-500',
            isScrolled ? 'opacity-0' : 'opacity-100',
          )}
        />

        <div className="shell flex items-center justify-between gap-4">
          <Link
            to="/"
            className="pointer-events-auto font-mono text-micro tracking-[0.14em] text-paper uppercase"
            aria-label={`${site.name} — home`}
          >
            <span className="text-roll">
              <span>Binaya.</span>
              <span aria-hidden="true">Binaya.</span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="bg-onyx/55 border-hairline pointer-events-auto hidden items-center gap-1 rounded-full border p-1 backdrop-blur-xl md:flex"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 font-mono text-micro uppercase transition-colors duration-300',
                    isActive ? 'text-paper' : 'text-stone hover:text-paper',
                  )
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-2">
                    {isActive && (
                      <span
                        className="bg-ember size-1.5 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-roll">
                      <span>{item.name}</span>
                      <span aria-hidden="true">{item.name}</span>
                    </span>
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="pointer-events-auto flex items-center gap-2">
            <Button
              to="/contact"
              size="sm"
              magnetic={false}
              className="hidden md:inline-flex"
            >
              Let&apos;s talk
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="site-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="border-hairline-strong text-paper hover:border-paper flex size-11 items-center justify-center rounded-full border transition-colors duration-300 md:hidden"
            >
              <span className="relative block h-2 w-4" aria-hidden="true">
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-transform duration-300',
                    isOpen ? 'top-1 rotate-45' : 'top-0',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-0 h-px w-full bg-current transition-transform duration-300',
                    isOpen ? 'top-1 -rotate-45' : 'top-2',
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="site-menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className="bg-onyx invisible fixed inset-0 z-40 flex flex-col justify-between px-[var(--spacing-gutter)] pt-28 pb-10 opacity-0"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navigation.map((item, index) => (
            <div key={item.path} className="overflow-hidden">
              <NavLink
                data-menu-item
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-baseline gap-4 py-2"
              >
                <span className="font-mono text-micro text-ember">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-display uppercase transition-transform duration-500 ease-out group-hover:translate-x-2">
                  {item.name}
                </span>
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="bg-ember size-2 rounded-full" aria-hidden="true" />
            <span className="font-mono text-micro uppercase">
              {site.availability}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-micro text-stone uppercase transition-colors hover:text-paper"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button
            href={`mailto:${site.email || socialLinks[1]?.href}`}
            showArrow
          >
            Get in touch
          </Button>
        </div>
      </div>
    </>
  );
}
