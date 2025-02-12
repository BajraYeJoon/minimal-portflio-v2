import { motion, useScroll, useTransform } from 'motion/react';
import CommonTitle from '../components/common/CommonTitle';

export function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 500]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.34,
      },
    },
  };

  const itemVariants = {
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

  const titles = [
    "Hi, I'm Binaya Bajra",
    'Frontend Website',
    'Frontend Developer',
  ];

  return (
    <section className="relative min-h-[70vh] pt-[240px] 2xl:pt-[180px] pb-[80px] overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ y: parallaxY }}
        className="flex w-full flex-col gap-2 *:will-change-auto *:uppercase lg:*:leading-[7rem] 2xl:*:leading-[9rem]"
      >
        {titles.map((title, index) => (
          <AnimatedTitle
            key={`title-${index + 1}`}
            text={title}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

interface AnimatedTitleProps {
  text: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  variants: any;
}

const AnimatedTitle = ({ text, variants }: AnimatedTitleProps) => (
  <div className="overflow-hidden">
    <motion.div variants={variants}>
      <CommonTitle variant="mainHeading">{text}</CommonTitle>
    </motion.div>
  </div>
);
