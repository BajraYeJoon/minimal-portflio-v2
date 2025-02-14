export const containerRevealVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.34,
    },
  },
};

export const textRevealVariants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      stiffness: 250,
      damping: 40,
      type: 'spring',
      ease: 'easeOut',
    },
  },
};

export const sectionHeaderRevealVariant = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      stiffness: 250,
      damping: 80,
      type: 'spring',
      ease: 'easeIn',
    },
  },
};

export const letterPullUpVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 1.5,
      type: 'spring',
      stiffness: 190,
      damping: 89,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
