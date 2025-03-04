import type { MotionValue } from 'motion/react';
import { motion } from 'motion/react';

interface ProjectGridProps {
  contentScale: MotionValue;
  row1Y: MotionValue;
  row2Y: MotionValue;
  row3Y: MotionValue;
  images: string[];
}

export default function ProjectGrid({
  contentScale,
  row1Y,
  row2Y,
  row3Y,
  images,
}: Readonly<ProjectGridProps>) {
  return (
    <div
      id="project-grid"
      className="relative h-[50vh] w-full overflow-hidden perspective-distant md:h-[600px] xl:h-[1024px]"
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
          {images.slice(0, 3).map((imagePath) => (
            <motion.div
              key={`grid-image-${imagePath}-1`}
              className="relative w-full overflow-hidden rounded-md"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
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
          {images.slice(3, 6).map((imagePath) => (
            <motion.div
              key={`grid-image-${imagePath}-2`}
              className="relative w-full overflow-hidden rounded-md"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
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
          {images.slice(6, 9).map((imagePath) => (
            <motion.div
              key={`grid-image-${imagePath}-3`}
              className="relative w-full overflow-hidden rounded-md"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
