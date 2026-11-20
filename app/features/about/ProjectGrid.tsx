import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';
import { cn } from '~/lib/utils/cn';

const GRID_IMAGES = [
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785435/portfolio/uqdkx0usfmuywbqzwvmi.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785435/portfolio/maz1js9tiew4hg1vfnxu.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785436/portfolio/pg2b6bgv7v5nglzcpy22.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739942321/portfolio/lbgjusumlnw3dr8lwkq8.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785575/portfolio/ujdvltrjoa8m3pbzmemt.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785435/portfolio/rudfyny3ay8nihxf9cie.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739785612/portfolio/xeziu9sxcuujixkbkxlh.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739786678/portfolio/p8vwk7xurzjg43th9f2q.png',
  'https://res.cloudinary.com/dw55twddi/image/upload/q_auto,f_auto,w_640/v1739786404/portfolio/amfqmuyugb0yqetbajzo.png',
];

interface ProjectGridProps {
  className?: string;
}

/** Decorative snapshot wall; columns drift at different speeds on scroll. */
export function ProjectGrid({ className }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!gridRef.current || prefersReducedMotion()) return;

      const columns = gsap.utils.toArray<HTMLElement>(
        '[data-grid-column]',
        gridRef.current,
      );

      columns.forEach((column, index) => {
        const drift = index === 1 ? 46 : index === 2 ? 26 : 14;
        gsap.fromTo(
          column,
          { y: drift },
          {
            y: -drift,
            ease: 'none',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
    },
    { scope: gridRef },
  );

  return (
    <div
      ref={gridRef}
      className={cn('hidden h-[30rem] overflow-hidden md:block', className)}
      aria-hidden="true"
    >
      <div className="grid h-full grid-cols-3 gap-3">
        {[0, 1, 2].map((column) => (
          <div
            key={`column-${column}`}
            data-grid-column
            className={cn(
              'flex flex-col gap-3',
              column === 1 ? 'mt-12' : '-mt-8',
            )}
          >
            {GRID_IMAGES.slice(column * 3, column * 3 + 3).map((image) => (
              <img
                key={image}
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className="border-hairline w-full border object-cover"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
