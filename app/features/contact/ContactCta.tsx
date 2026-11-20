import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { site } from '~/content/site';
import { socialLinks } from '~/content/social';

export function ContactCta() {
  const primaryHref = site.email
    ? `mailto:${site.email}`
    : (socialLinks[1]?.href ?? socialLinks[0]?.href ?? '#');

  return (
    <section id="contact" className="bg-paper text-onyx">
      <div className="shell flex flex-col gap-12 py-[var(--spacing-section)]">
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-4">
            <Text variant="micro" className="text-ember">
              05
            </Text>
            <Text variant="micro" className="text-stone">
              Contact
            </Text>
          </div>
          <span className="font-mono text-micro text-stone uppercase">
            {site.timeZone}
          </span>
        </div>

        <h2 className="font-display text-mega uppercase">
          Let&apos;s build
          <br />
          something<span className="text-ember">.</span>
        </h2>

        <div className="border-hairline-strong flex flex-col gap-8 border-t pt-8 md:flex-row md:items-end md:justify-between">
          <p className="text-lead text-graphite max-w-md">
            {site.availability}. Tell me what you&apos;re building and I&apos;ll
            reply within a couple of days.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button href={primaryHref} showArrow>
              {site.email ? 'Email me' : 'Message on LinkedIn'}
            </Button>
            {site.resumeUrl && (
              <Button
                href={site.resumeUrl}
                variant="outline"
                className="text-onyx border-onyx/25 hover:border-onyx hover:bg-transparent"
              >
                Résumé
              </Button>
            )}
          </div>
        </div>

        <dl className="grid gap-6 sm:grid-cols-3">
          {[
            ['Based in', site.location],
            ['Open to', 'Full-time roles · Freelance'],
            ['Focus', site.focus],
          ].map(([term, detail]) => (
            <div key={term} className="flex flex-col gap-1">
              <dt className="font-mono text-micro text-stone uppercase">
                {term}
              </dt>
              <dd className="text-small text-onyx">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
