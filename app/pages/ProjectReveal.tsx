import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router';
import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import NumberCounter from '~/components/common/RollingNumber';
import SectionHeader from '~/components/common/SectionHeader';

const GRID_IMAGES = [
  '/public/assets/asset 0.jpeg',
  '/public/assets/asset 1.jpeg',
  '/public/assets/asset 2.jpeg',
  '/public/assets/asset 3.jpeg',
  '/public/assets/asset 4.jpeg',
  '/public/assets/asset 5.jpeg',
  '/public/assets/asset 6.jpeg',
  '/public/assets/asset 7.jpeg',
  '/public/assets/asset 8.jpeg',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.32,
      delayChildren: 1.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 100,
      damping: 40,
      ease: 'easeIn',
    },
  },
};

const imageGridVariants = {
  hidden: {
    opacity: 0,
    scale: 4,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: {
    y: 100,
    scale: 1.8,
    opacity: 0,
  },
  show: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function AboutMeProjectReveal() {
  const { scrollYProgress } = useScroll();

  const sideColumnsScale = useTransform(scrollYProgress, [0, 0.25], [4, 1]);
  const sideColumnsY = useTransform(scrollYProgress, [0, 0.25], [-35, 35]);

  const centerColumnScale = useTransform(scrollYProgress, [0, 0.25], [4, 1]);
  const centerColumnY = useTransform(scrollYProgress, [0, 0.25], [14, -14]);

  return (
    <motion.section
      className="border-surface flex flex-col border-t-2 border-b-2 py-14"
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeIn',
        delay: 0.9,
        stiffness: 700,
        damping: 50,
        when: 'beforeChildren',
      }}
      id="about"
    >
      {/* Left side - Info */}
      <div className="flex flex-col gap-20">
        <motion.div
          className="grid grid-cols-2 gap-2 leading-normal"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden">
            <motion.div variants={itemVariants}>
              <CommonTitle variant="par-medium">
                Based in Bhaktapur, Nepal
                <br />
                and Working at{' '}
                <Link to="/about" className="italic underline">
                  {' '}
                  AITC
                </Link>
              </CommonTitle>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div variants={itemVariants}>
              <CommonTitle variant="par-medium" align="right">
                Passionate Software Developer Crafting Visually Captivating UI
                and Websites with a Touch of Modernity
              </CommonTitle>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side - Image Grid */}
        <div className="relative grid h-[1086px] grid-cols-3 gap-4 overflow-hidden p-0 will-change-transform">
          {/* First Column */}
          <motion.div
            className="flex flex-col gap-4 overflow-hidden rounded-md"
            style={{ scale: sideColumnsScale, y: sideColumnsY }}
          >
            {GRID_IMAGES.slice(0, 3).map((imagePath, i) => (
              <div
                key={`grid-image-${imagePath}-1`}
                className="h-full overflow-hidden"
              >
                <motion.div
                  variants={imageGridVariants}
                  className="bg-subtle h-full w-full overflow-hidden"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            className="flex flex-col gap-4 overflow-hidden rounded-md"
            style={{ scale: centerColumnScale, y: centerColumnY }}
          >
            {GRID_IMAGES.slice(3, 6).map((imagePath, i) => (
              <div
                key={`grid-image-${imagePath}-2`}
                className="h-full overflow-hidden rounded-md"
              >
                <motion.div
                  variants={imageGridVariants}
                  className="bg-subtle h-full w-full"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Third Column */}
          <motion.div
            className="flex flex-col gap-4 overflow-hidden rounded-md"
            style={{ scale: sideColumnsScale, y: sideColumnsY }}
          >
            {GRID_IMAGES.slice(6, 9).map((imagePath, i) => (
              <div
                key={`grid-image-${imagePath}-3`}
                className="h-full overflow-hidden rounded-md"
              >
                <motion.div
                  variants={imageGridVariants}
                  className="bg-subtle h-full w-full"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          <SectionHeader smallHeading="About Me" />
          <div className="flex flex-col gap-28">
            <CommonTitle variant="par-extra-large">
              I thrive on the challenge of transforming ideas into creating
              better software applications and visully stunning websites that
              grows business and growth.
            </CommonTitle>
            <div className="grid grid-cols-2 gap-20 leading-none">
              <NumberCounter endValue={15} label="Completed Projects" />
              <NumberCounter endValue={4} label="Years of Experience" />
            </div>
            {/* Button */}
            <Button href="/about">More About Me</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
