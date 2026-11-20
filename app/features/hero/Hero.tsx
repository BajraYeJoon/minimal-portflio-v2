import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { site, stats } from '~/content/site';
import { gsap, prefersReducedMotion } from '~/lib/motion/gsap';
import { hostOf } from '~/lib/utils/host';
import type { Work } from '~/types';

const LINES = ['Binaya', 'Bajracharya'];

export function Hero({ work }: { work?: Work }) {
  const sectionRef = useRef<HTMLElement>(null);
  const host = work ? hostOf(work.link) : '';

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const timeline = gsap.timeline({ delay: 0.7 });

      timeline
        .from(
          '[data-hero-line]',
          { yPercent: 118, duration: 1.15, ease: 'expo.out', stagger: 0.1 },
          0.1,
        )
        .from(
          '[data-hero-rule]',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.9,
            ease: 'expo.inOut',
          },
          0.25,
        )
        .from(
          '[data-hero-meta]',
          {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            stagger: 0.07,
          },
          0.4,
        )
        .fromTo(
          '[data-hero-frame]',
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.15, ease: 'expo.out' },
          0.5,
        );

      gsap.to('[data-hero-name]', {
        yPercent: -10,
        opacity: 0.28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to('[data-hero-frame]', {
        y: -44,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      return () => timeline.kill();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-28 pb-8 md:pt-32"
    >
      <div className="shell relative">
        <div
          data-hero-rule
          className="border-hairline flex flex-wrap items-center justify-between gap-4 border-b pb-4"
        >
          <div data-hero-meta className="flex items-center gap-3">
            <span className="bg-ember size-2 rounded-full" aria-hidden="true" />
            <Text variant="micro" className="text-paper">
              Available for work
            </Text>
          </div>
          <Text data-hero-meta variant="micro">
            {site.location}
          </Text>
          <Text data-hero-meta variant="micro" className="hidden sm:block">
            {site.timeZone}
          </Text>
        </div>
      </div>

      <div className="shell relative flex flex-1 flex-col justify-center py-10">
        <div data-hero-name>
          <h1 className="m-0">
            <span className="sr-only">
              {site.name}, {site.role}
            </span>
            <span aria-hidden="true" className="flex flex-col">
              {LINES.map((line) => (
                <span key={line} className="hero-mask">
                  <span data-hero-line className="display-fade block text-mega">
                    {line}
                  </span>
                </span>
              ))}
            </span>
          </h1>
        </div>

        <div
          className={`mt-10 grid gap-10 lg:items-end ${
            work?.image ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''
          }`}
        >
          <div data-hero-meta className="flex flex-col gap-8">
            <Text variant="lead" className="max-w-md">
              {site.role} building fast, accessible React interfaces — 2+ years
              across product and agency teams, taking on freelance work.
            </Text>

            <div className="flex flex-wrap items-center gap-3">
              <Button to="/#work" showArrow>
                Selected work
              </Button>
              <Button to="/contact" variant="outline">
                Get in touch
              </Button>
            </div>

            <dl className="border-hairline grid max-w-md grid-cols-3 gap-6 border-t pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[0.9] tracking-[-0.02em]">
                    {stat.value}
                    {stat.suffix}
                  </dd>
                  <dd className="text-micro text-stone font-mono uppercase">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {work?.image && (
            <a
              href={work.link}
              target="_blank"
              rel="noreferrer noopener"
              data-cursor="view"
              data-hero-frame
              className="group border-hairline bg-obsidian hidden w-full max-w-[26rem] justify-self-end overflow-hidden border lg:block"
            >
              <div className="border-hairline flex items-center justify-between gap-3 border-b px-3 py-2">
                <span className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="bg-graphite size-1.5 rounded-full" />
                  <span className="bg-graphite size-1.5 rounded-full" />
                  <span className="bg-graphite size-1.5 rounded-full" />
                </span>
                <span className="font-mono text-[0.6875rem] text-stone truncate">
                  {host}
                </span>
                <span className="font-mono text-[0.625rem] text-stone flex shrink-0 items-center gap-1.5 uppercase">
                  <span
                    className="bg-ember size-1 rounded-full"
                    aria-hidden="true"
                  />
                  Live
                </span>
              </div>

              <img
                src={work.image}
                alt={`${work.title} — interface preview`}
                width={1400}
                height={875}
                loading="eager"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              <div className="border-hairline flex items-center justify-between gap-3 border-t px-3 py-2">
                <span className="font-mono text-[0.6875rem] text-paper truncate uppercase">
                  {work.title}
                </span>
                <span className="font-mono text-[0.625rem] text-stone shrink-0 uppercase">
                  {work.services.slice(0, 2).join(' / ')}
                </span>
              </div>
            </a>
          )}
        </div>
      </div>

      <div className="shell relative">
        <div
          data-hero-meta
          className="border-hairline flex items-center justify-between gap-4 border-t pt-4"
        >
          <span className="scroll-cue font-mono text-micro text-stone uppercase">
            Scroll
          </span>
          <span className="font-mono text-micro text-stone hidden uppercase sm:block">
            {site.focus}
          </span>
        </div>
      </div>
    </section>
  );
}
