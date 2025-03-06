import { motion } from 'framer-motion';
import { letterPullUpVariant } from '~/utils/animations';
import { cn } from '~/utils/cn';
import { Button } from './Button';
import AnimatedTypography from './Typography';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        className="text-center space-y-6 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          variants={letterPullUpVariant}
          initial="initial"
          animate="animate"
          className="text-7xl md:text-9xl font-bold text-primary mb-6"
        >
          404
        </motion.div>

        <AnimatedTypography
          component="h1"
          className={cn('mb-4', 'text-3xl md:text-4xl')}
        >
          You're Early!
        </AnimatedTypography>

        <AnimatedTypography
          component="p"
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          I'm still working on this page. Please check back soon or explore the
          parts of the site that are already finished.
        </AnimatedTypography>

        <div>
          <Button className="mt-6">Back to Home</Button>
        </div>
      </motion.div>
    </div>
  );
}
