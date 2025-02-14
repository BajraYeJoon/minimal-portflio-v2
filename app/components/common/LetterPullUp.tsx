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
  const words = text.split(' ');

  return (
    <h2
      className={cn(
        'flex flex-wrap items-baseline justify-start gap-x-[0.25em] overflow-hidden',
        className,
      )}
    >
      {words.map((word, index) => (
        <motion.div
          key={`word-${index + 1}`}
          variants={letterPullUpVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          custom={index}
          className="inline-block"
        >
          {word}
        </motion.div>
      ))}
    </h2>
  );
}
