import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface StickyHeaderProps {
  children: React.ReactNode;
}

const StickyHeader = ({ children }: StickyHeaderProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsSticky(true);

        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsSticky(false);
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: '-100%',
          opacity: 0,
        }}
        animate={{
          y: '0%',
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          stiffness: 240,
          damping: 30,
          delay: 0.5,
          ease: 'easeIn',
        }}
        ref={headerRef}
        className={`fixed inset-x-0 py-4 mx-auto px-4 md:px-16 top-0 z-50 w-full 
          transition-transform duration-500 ease-out
          ${isSticky ? 'bg-backgroundColor ' : ''}
          ${isSticky && !isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      >
        {children}
      </motion.header>
      <div style={{ height: `${headerHeight}px` }} />
    </>
  );
};

export default StickyHeader;
