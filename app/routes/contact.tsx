import { motion } from 'motion/react';
import { generateMetadata } from '~/utils/generateMetadata';

export function meta() {
  return generateMetadata({
    title: 'Contact Me | Binaya Bajracharya',
    description: 'Get in touch.',
    path: '/contact',
  });
}

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, scale: 1, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.2, clipPath: 'circle(0% at 50% 50%)' }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="container mx-auto px-4 py-20"
    >
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">This is a simple Contact page.</p>
    </motion.div>
  );
}
