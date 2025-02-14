import { motion, useScroll, useTransform } from 'motion/react';
import {
  containerRevealVariants,
  textRevealVariants,
} from '~/utils/animations';
import CommonTitle from '../components/common/CommonTitle';

export function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 500]);

  const titles = [
    "Hi, I'm Binaya Bajra",
    'Frontend interface',
    '& Web Developer',
  ];

  return (
    <section className="relative min-h-[70vh] overflow-hidden pt-[240px] pb-[80px] 2xl:pt-[180px]">
      <motion.div
        variants={containerRevealVariants}
        initial="hidden"
        animate="show"
        style={{ y: parallaxY }}
        className="flex w-full flex-col gap-2 *:uppercase *:will-change-auto lg:*:leading-[7rem] 2xl:*:leading-[9rem]"
      >
        {titles.map((title, index) => (
          <AnimatedTitle
            key={`title-${index + 1}`}
            text={title}
            variants={textRevealVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

interface AnimatedTitleProps {
  text: string;
  variants: typeof textRevealVariants;
}

const AnimatedTitle = ({ text, variants }: AnimatedTitleProps) => (
  <div className="overflow-hidden">
    <motion.div variants={variants}>
      <CommonTitle variant="mainHeading">{text}</CommonTitle>
    </motion.div>
  </div>
);
