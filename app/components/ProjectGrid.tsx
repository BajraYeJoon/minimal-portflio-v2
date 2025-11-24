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
      className="relative h-[70vh] w-full overflow-hidden md:h-[80vh] xl:h-[90vh]"
    >
      <motion.div
        className="grid h-full grid-cols-3 gap-4"
        style={{ scale: contentScale }}
      >
        {/* First Column - Moves Up */}
        <motion.div
          className="flex flex-col gap-4 will-change-transform"
          style={{
            y: row1Y,
          }}
        >
          {images.slice(0, 3).map((imagePath) => (
            <div
              key={`grid-image-${imagePath}-1`}
              className="relative h-[280px] w-full overflow-hidden rounded-lg"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
              />
            </div>
          ))}
        </motion.div>

        {/* Center Column - Moves Down */}
        <motion.div
          className="flex flex-col gap-4 will-change-transform"
          style={{
            y: row2Y,
          }}
        >
          {images.slice(3, 6).map((imagePath) => (
            <div
              key={`grid-image-${imagePath}-2`}
              className="relative h-[280px] w-full overflow-hidden rounded-lg"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
              />
            </div>
          ))}
        </motion.div>

        {/* Third Column - Moves Up */}
        <motion.div
          className="flex flex-col gap-4 will-change-transform"
          style={{
            y: row3Y,
          }}
        >
          {images.slice(6, 9).map((imagePath) => (
            <div
              key={`grid-image-${imagePath}-3`}
              className="relative h-[280px] w-full overflow-hidden rounded-lg"
            >
              <img
                src={imagePath}
                alt={`Project Images ${imagePath.split('/').pop()}`}
                className="h-full w-full object-cover"
                aria-hidden="true"
                title={`Project Images ${imagePath.split('/').pop()}`}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
