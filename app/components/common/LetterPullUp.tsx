import { motion } from 'motion/react';
import { letterPullUpVariant } from '~/utils/animations';
import { cn } from '~/utils/cn';

interface WordPullUpProps {
  text?: string;
  className?: string;
}

export default function WordPullUp({
  text = '',
  className = '',
}: Readonly<WordPullUpProps>) {
  return (
    <h2
      className={cn(
        'flex flex-wrap items-baseline justify-start gap-x-[0.25em] overflow-hidden',
        className,
      )}
    >
      <motion.span
        variants={letterPullUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-100px' }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </h2>
  );
}
