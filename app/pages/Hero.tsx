import { motion, useScroll, useTransform } from 'motion/react';
import {
  containerRevealVariants,
  textRevealVariants,
} from '~/utils/animations';
import CommonTitle from '../components/common/CommonTitle';

export function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 500]);

  const titles = ["I'm Binaya Bajra", 'Building Modern', 'Web Applications'];

  return (
    <section
      id="home"
      className="common-padding relative overflow-hidden pt-[40px] pb-14 lg:min-h-[70vh] lg:pt-[100px] lg:pb-[80px] 2xl:pt-[180px]"
    >
      <motion.div
        variants={containerRevealVariants}
        initial="hidden"
        animate="show"
        style={{ y: parallaxY }}
        className="flex w-full flex-col gap-2 *:leading-[3.5rem] *:uppercase *:will-change-auto lg:*:leading-[7rem] 2xl:*:leading-[9rem]"
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
