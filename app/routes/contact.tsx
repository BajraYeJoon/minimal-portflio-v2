import { PageHeader } from '~/components/ui/PageHeader';
import { Text } from '~/components/ui/Text';
import { site } from '~/content/site';
import { socialLinks } from '~/content/social';
import { useSectionReveal } from '~/lib/motion/useSectionReveal';
import { generateMetadata } from '~/lib/seo/metadata';

export function meta() {
  return generateMetadata({
    title: 'Contact — Binaya Bajracharya',
    description:
      'Get in touch about frontend roles, freelance projects, or collaboration. Based in Kathmandu, Nepal (UTC+5:45).',
    path: '/contact',
  });
}

export default function ContactPage() {
  const revealRef = useSectionReveal();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello"
        description={`${site.availability}. Email is best — I read everything and reply to serious enquiries within a couple of days.`}
      />

      <section ref={revealRef} className="shell py-[var(--spacing-section)]">
        <div className="grid gap-14 md:grid-cols-[1.5fr_1fr] md:gap-20">
          <div className="flex flex-col gap-10">
            <div className="border-hairline flex items-baseline gap-4 border-t pt-4">
              <Text variant="micro" className="text-ember">
                01
              </Text>
              <Text variant="micro">Direct</Text>
            </div>

            {site.email ? (
              <a
                data-reveal
                data-cursor="email"
                href={`mailto:${site.email}`}
                className="display-fade link-draw text-title w-fit break-all"
              >
                {site.email}
              </a>
            ) : (
              <div data-reveal className="flex flex-col gap-4">
                <Text variant="lead" className="text-paper">
                  LinkedIn is the fastest route right now.
                </Text>
                <Text variant="small">
                  Set <code className="text-paper">VITE_CONTACT_EMAIL</code> to
                  put a mail link here.
                </Text>
              </div>
            )}

            <ul className="flex flex-col">
              {socialLinks.map((item) => (
                <li key={item.name} data-reveal>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group border-hairline flex items-center justify-between gap-4 border-t py-5"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon
                        aria-hidden="true"
                        className="text-stone size-4"
                      />
                      <span className="text-small text-paper">{item.name}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-stone group-hover:text-ember transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside
            data-reveal
            className="border-hairline flex h-fit flex-col gap-6 border-t pt-4"
          >
            <Text variant="micro">Details</Text>
            <dl className="flex flex-col gap-5">
              {[
                ['Location', site.location],
                ['Time zone', site.timeZone],
                ['Open to', 'Full-time roles · Freelance projects'],
                ['Focus', site.focus],
              ].map(([term, detail]) => (
                <div key={term} className="flex flex-col gap-1">
                  <dt className="font-mono text-micro text-stone uppercase">
                    {term}
                  </dt>
                  <dd className="text-small text-paper">{detail}</dd>
                </div>
              ))}
            </dl>
            <p className="text-small text-stone border-hairline border-t pt-4">
              Helpful context for a first message: the problem, the timeline,
              and the stack you&apos;re working with.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
