import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Text } from '~/components/ui/Text';
import { gsap, prefersReducedMotion, SplitText } from '~/lib/motion/gsap';

const STATEMENT =
  'I work between design and engineering — turning a rough brief into a component system, then shipping it with the load time, keyboard access and small transitions that make a product feel considered.';

interface StatementProps {
  showLink?: boolean;
}

/** Word-by-word scrub: the sentence lights up as it crosses the viewport. */
export function Statement({ showLink = true }: StatementProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const paragraph = paragraphRef.current;
      if (!paragraph || prefersReducedMotion()) return;

      let split: SplitText | undefined;
      let tween: gsap.core.Tween | undefined;
      let cancelled = false;

      const run = () => {
        if (cancelled) return;
        split = new SplitText(paragraph, { type: 'words' });
        tween = gsap.fromTo(
          split.words,
          { color: '#a8a6ab' },
          {
            color: '#161618',
            stagger: 0.12,
            ease: 'none',
            scrollTrigger: {
              trigger: paragraph,
              start: 'top 80%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          },
        );
      };

      if (document.fonts?.status === 'loaded') {
        run();
      } else {
        document.fonts.ready.then(run);
      }

      return () => {
        cancelled = true;
        tween?.kill();
        split?.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-paper text-onyx">
      <div className="shell flex flex-col gap-12 py-[var(--spacing-section)]">
        <div className="flex items-baseline gap-4">
          <Text variant="micro" className="text-ember">
            02
          </Text>
          <Text variant="micro" className="text-stone">
            Approach
          </Text>
        </div>

        <p
          ref={paragraphRef}
          className="max-w-5xl text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.22] font-medium tracking-[-0.02em]"
        >
          {STATEMENT}
        </p>

        <div className="border-hairline-strong flex flex-col gap-6 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-graphite max-w-sm">
            Frontend developer in Bhaktapur, Nepal. Open to full-time roles and
            freelance frontend work.
          </p>
          {showLink && (
            <Link
              to="/about"
              className="link-draw text-small text-onyx w-fit font-mono uppercase"
            >
              More about me ↗
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
