import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { navigation } from '~/constant/data';
import { cn } from '~/utils/cn';
import { HamburgerMenu } from '../../../components/common/HamburgerMenu';
import AnimatedTypography from '../../../components/common/Typography';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: (i: number) => ({
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function MobileNav({ isOpen, onToggle }: Readonly<MobileNavProps>) {
  // Add useEffect to control body scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <div className="relative z-50 flex w-full items-center justify-between">
        <AnimatedTypography
          className="text-p-md uppercase"
          dividerDirection="center"
          component="h1"
          to="/"
        >
          Binaya Bajracharya
        </AnimatedTypography>
        <HamburgerMenu isOpen={isOpen} onToggle={onToggle} />
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={cn(
              'fixed inset-0 z-40 h-screen overflow-hidden',
              'flex flex-col items-center justify-center',
              'bg-backgroundColor',
            )}
          >
            <ul className="flex flex-col items-center gap-8">
              {navigation.map((item, i) => (
                <motion.li key={item?.name} custom={i} variants={itemVariants}>
                  <AnimatedTypography
                    className="text-p-md text-white uppercase"
                    dividerDirection="center"
                    component="h2"
                    to={item?.path}
                    onClick={onToggle}
                  >
                    {item?.name}
                  </AnimatedTypography>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
