import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { Button } from '~/components/common/Button';
import CommonTitle from '~/components/common/CommonTitle';
import NumberCounter from '~/components/common/RollingNumber';
import SectionHeader from '~/components/common/SectionHeader';

const GRID_IMAGES = [
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785435/portfolio/uqdkx0usfmuywbqzwvmi.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785435/portfolio/maz1js9tiew4hg1vfnxu.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785436/portfolio/pg2b6bgv7v5nglzcpy22.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739942321/portfolio/lbgjusumlnw3dr8lwkq8.png',
  '  https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785575/portfolio/ujdvltrjoa8m3pbzmemt.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785435/portfolio/rudfyny3ay8nihxf9cie.png',
  ' https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739785612/portfolio/xeziu9sxcuujixkbkxlh.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739786678/portfolio/p8vwk7xurzjg43th9f2q.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto/v1739786404/portfolio/amfqmuyugb0yqetbajzo.png',
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

export default function AboutMeProjectReveal() {
  const { scrollYProgress } = useScroll();

  const contentScale = useTransform(scrollYProgress, [0, 0.15], [1.69, 1]);
  const row1Y = useTransform(scrollYProgress, [0, 0.25], [90, -40]);
  const row2Y = useTransform(scrollYProgress, [0, 0.25], [-60, 80]);
  const row3Y = useTransform(scrollYProgress, [0, 0.25], [90, -40]);

  return (
    <motion.section
      className="mx-auto flex flex-col border-t-2 pt-14"
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
      <div className="flex flex-col gap-20">
        <motion.div
          className="common-padding grid grid-cols-2 gap-2 leading-normal"
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

        <div
          id="project-grid"
          className="relative h-[1086px] w-full overflow-hidden perspective-distant"
        >
          <motion.div
            className="grid h-full grid-cols-3 gap-4 will-change-transform transform-3d"
            style={{
              scale: contentScale,
            }}
          >
            {/* First Column */}
            <motion.div
              className="flex flex-col gap-4 will-change-transform transform-3d"
              style={{
                y: row1Y,
              }}
            >
              {GRID_IMAGES.slice(0, 3).map((imagePath, i) => (
                <motion.div
                  key={`grid-image-${imagePath}-1`}
                  className="relative w-full overflow-hidden rounded-md"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Center Column */}
            <motion.div
              className="flex flex-col gap-4 will-change-transform transform-3d"
              style={{
                y: row2Y,
              }}
            >
              {GRID_IMAGES.slice(3, 6).map((imagePath, i) => (
                <motion.div
                  key={`grid-image-${imagePath}-2`}
                  className="relative w-full overflow-hidden rounded-md"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Third Column */}
            <motion.div
              className="flex flex-col gap-4 will-change-transform transform-3d"
              style={{
                y: row3Y,
              }}
            >
              {GRID_IMAGES.slice(6, 9).map((imagePath, i) => (
                <motion.div
                  key={`grid-image-${imagePath}-3`}
                  className="relative w-full overflow-hidden rounded-md"
                >
                  <img
                    src={imagePath}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="common-padding grid grid-cols-2 gap-8 border-b-2 pb-14">
          <SectionHeader smallHeading="About Me" />
          <div className="flex flex-col gap-28">
            <CommonTitle variant="par-extra-large">
              I thrive on the challenge of transforming ideas into creating
              better software applications and visully stunning websites that
              grows business and growth.
            </CommonTitle>
            <div className="grid grid-cols-2 gap-20 leading-none">
              <NumberCounter endValue={10} label="Completed Projects" />
              <NumberCounter endValue={1} label="Years of Experience" />
            </div>
            {/* Button */}
            <Button href="/about">More About Me</Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
